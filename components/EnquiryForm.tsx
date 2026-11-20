"use client";
import {useState} from "react";import {site} from "@/lib/site";
const types=["Residential","Commercial","Hospitality","Interiors","Mixed-use","Other"];
const f="w-full border-b border-charcoal/40 bg-transparent py-3 text-[15px] focus:border-olive focus:outline-none";
type D=Record<string,string>;
function validate(d:D){const x:D={};
 if(!d.name?.trim())x.name="Enter your name.";
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email||""))x.email="Enter a valid email address.";
 if((d.phone||"").replace(/\D/g,"").length<10||!/^[+\d\s()-]+$/.test(d.phone||""))x.phone="Enter a valid phone number.";
 if(!d.type)x.type="Choose a project type.";if(!d.location?.trim())x.location="Enter the project location.";
 if(!d.message?.trim())x.message="Describe your project.";if(!d.consent)x.consent="Please agree to continue.";return x}
// Opens Gmail's compose window with our address already in "To" (customer presses Send in Gmail)
const gmailUrl=(d:D)=>"https://mail.google.com/mail/?view=cm&fs=1&to="+encodeURIComponent(site.email)+"&su="+encodeURIComponent(`Project enquiry: ${d.type}, ${d.location}`)+"&body="+encodeURIComponent(`Name: ${d.name}\nPhone: ${d.phone}\nProject type: ${d.type}\nLocation: ${d.location}\n\n${d.message}`);
export default function EnquiryForm(){
 const [err,setErr]=useState<D>({}),[done,setDone]=useState(false),[busy,setBusy]=useState(false),[fail,setFail]=useState("");
 const read=(fm:HTMLFormElement)=>Object.fromEntries(new FormData(fm)) as D;
 function check(fm:HTMLFormElement){const d=read(fm),x=validate(d);setErr(x);setFail("");if(Object.keys(x).length){fm.querySelector<HTMLElement>("[aria-invalid=true]")?.focus();return null}return d}
 async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();const d=check(e.currentTarget);if(!d)return;setBusy(true);
  try{const r=await fetch("/api/enquiry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...d,consent:true})});const j=await r.json().catch(()=>({}));
   if(r.ok&&j.ok)setDone(true);else{if(j.errors)setErr(j.errors);setFail(j.error||"Something went wrong. Please try again.")}}
  catch{setFail("Network error. Please check your connection and try again.")}finally{setBusy(false)}}
 function viaGmail(e:React.MouseEvent<HTMLButtonElement>){
  const fm=e.currentTarget.form!;
  const d=check(fm);
  if(d){
    window.open(gmailUrl(d),"_blank","noopener");
    fm.reset();      // clears all inputs, the dropdown and the checkbox
    setErr({});
    setFail("");
  }
}
 const E=({k}:{k:string})=>err[k]?<p id={k+"-e"} role="alert" className="mt-1 text-xs text-red-800">{err[k]}</p>:null;
 const a=(k:string)=>({"aria-invalid":!!err[k],"aria-describedby":err[k]?k+"-e":undefined});
 if(done)return <div role="status" className="border border-olive p-8"><p className="hd text-4xl">Enquiry <em>sent</em> successfully.</p><p className="mt-3 text-sm font-light text-graphite">Thank you. We have received your enquiry and will contact you on the email or phone number you provided.</p></div>;
 return(<form onSubmit={submit} noValidate className="grid gap-7 md:grid-cols-2"><div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
  <div><label htmlFor="name" className="text-xs">Name *</label><input id="name" name="name" autoComplete="name" className={f} {...a("name")}/><E k="name"/></div>
  <div><label htmlFor="email" className="text-xs">Email *</label><input id="email" name="email" type="email" autoComplete="email" className={f} {...a("email")}/><E k="email"/></div>
  <div><label htmlFor="phone" className="text-xs">Phone *</label><input id="phone" name="phone" type="tel" autoComplete="tel" className={f} {...a("phone")}/><E k="phone"/></div>
  <div><label htmlFor="type" className="text-xs">Project type *</label><select id="type" name="type" defaultValue="" className={f} {...a("type")}><option value="" disabled>Select</option>{types.map(t=><option key={t}>{t}</option>)}</select><E k="type"/></div>
  <div className="md:col-span-2"><label htmlFor="location" className="text-xs">Project location *</label><input id="location" name="location" className={f} {...a("location")}/><E k="location"/></div>
  <div className="md:col-span-2"><label htmlFor="message" className="text-xs">Project description *</label><textarea id="message" name="message" rows={5} className={f} {...a("message")}/><E k="message"/></div>
  <div className="md:col-span-2"><label className="flex gap-3 text-sm"><input type="checkbox" name="consent" className="mt-1 accent-[#48564A]"/>I agree to be contacted about this enquiry. *</label><E k="consent"/></div>
  <div className="md:col-span-2">{fail&&<p role="alert" className="mb-4 border border-red-800 p-3 text-sm text-red-900">{fail}</p>}
   <div className="flex flex-wrap items-center gap-4"><button disabled={busy} className="bg-charcoal px-8 py-4 text-[13px] font-semibold text-ivory hover:bg-olive transition-colors disabled:opacity-60">{busy?"Sending…":"Send enquiry"}</button>
   <button type="button" onClick={viaGmail} className="link">Or write it in Gmail</button></div></div></form>)}
