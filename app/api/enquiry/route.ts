import {NextResponse} from "next/server";import nodemailer from "nodemailer";import {site} from "@/lib/site";
export const runtime="nodejs";
const esc=(s:string)=>s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c] as string));
const hits=new Map<string,number[]>(); // simple per-IP limit; use Upstash/Redis if you deploy on many serverless instances
const clean=(v:unknown,max=2000)=>typeof v==="string"?v.replace(/[\r\n]+/g," ").trim().slice(0,max):"";
export async function POST(req:Request){
 let b:Record<string,unknown>;try{b=await req.json()}catch{return NextResponse.json({error:"Invalid request."},{status:400})}
 if(b.website)return NextResponse.json({ok:true}); // honeypot: bots fill this hidden field
 const ip=(req.headers.get("x-forwarded-for")||"local").split(",")[0],now=Date.now(),recent=(hits.get(ip)||[]).filter(t=>now-t<3600e3);
 if(recent.length>=5)return NextResponse.json({error:"Too many enquiries. Please try again later."},{status:429});
 const d={name:clean(b.name,120),email:clean(b.email,200),phone:clean(b.phone,30),type:clean(b.type,60),location:clean(b.location,160)};
 const message=typeof b.message==="string"?b.message.trim().slice(0,5000):"";
 const errors:Record<string,string>={};
 if(!d.name)errors.name="Enter your name.";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email))errors.email="Enter a valid email address.";
 if(!d.type)errors.type="Choose a project type.";if(!d.location)errors.location="Enter the project location.";if(d.phone.replace(/\D/g,"").length<10||!/^[+\d\s()-]+$/.test(d.phone))errors.phone="Enter a valid phone number.";
 if(!message)errors.message="Describe your project.";if(b.consent!==true)errors.consent="Please agree to continue.";
 if(Object.keys(errors).length)return NextResponse.json({error:"Please fix the highlighted fields.",errors},{status:400});
 const {SMTP_HOST,SMTP_PORT,SMTP_USER,SMTP_PASS,MAIL_TO,MAIL_FROM}=process.env;
 if(!SMTP_HOST||!SMTP_USER||!SMTP_PASS)return NextResponse.json({error:"Email is not configured on the server yet. Please contact the studio directly."},{status:503});
 const to=MAIL_TO||site.email;
 const port=Number(SMTP_PORT||587);
 const t=nodemailer.createTransport({host:SMTP_HOST,port,secure:port===465,auth:{user:SMTP_USER,pass:SMTP_PASS}});
 const rows:[string,string][]=[["Name",d.name],["Email",d.email],["Phone",d.phone],["Project type",d.type],["Location",d.location]];
 try{
  await t.sendMail({from:MAIL_FROM||SMTP_USER,to,replyTo:{name:d.name,address:d.email},subject:`New project enquiry: ${d.type}, ${d.location} (${d.name})`,
   text:rows.map(([k,v])=>`${k}: ${v}`).join("\n")+`\n\nProject description:\n${message}`,
   html:`<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">${rows.map(([k,v])=>`<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join("")}</table><p style="font-family:Arial,sans-serif;font-size:14px"><b>Project description</b><br>${esc(message).replace(/\n/g,"<br>")}</p>`});
 }catch(e){console.error("Enquiry mail failed:",e);return NextResponse.json({error:"We could not send your enquiry. Please try again or email the studio directly."},{status:502})}
 hits.set(ip,[...recent,now]);
 return NextResponse.json({ok:true});
}
