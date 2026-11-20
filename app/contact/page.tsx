import type {Metadata} from "next";import {site} from "@/lib/site";import Form from "@/components/EnquiryForm";
export const metadata:Metadata={title:"Contact",description:"Contact Sai Shelters or send a project enquiry."};
export default function Page(){return(<section className="pt-36 pb-28"><div className="wrap grid gap-16 lg:grid-cols-12"><div className="lg:col-span-5"><h1 className="hd text-[clamp(3.5rem,8vw,8rem)]">Start a <em>project.</em></h1>
<p className="mt-6 max-w-sm font-light text-graphite">Tell us about your site and brief. We will reply by email or phone.</p>
<address className="mt-10 not-italic space-y-6 text-sm font-light">
 <div><p className="eyebrow text-graphite">Email</p><a className="link mt-2 inline-block text-charcoal" href={`mailto:${site.email}`}>{site.email}</a></div>
 <div><p className="eyebrow text-graphite">Phone / WhatsApp</p><ul className="mt-2 space-y-2">{site.phones.map(p=><li key={p.wa}><a className="link text-charcoal" href={`https://wa.me/${p.wa}?text=${encodeURIComponent("Hello "+site.name+", I would like to enquire about a project.")}`} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp with ${p.display}`}>{p.display}</a><span className="ml-3 text-xs text-graphite">WhatsApp</span></li>)}</ul></div>
 {site.address.length>0&&<div><p className="eyebrow text-graphite">Address</p><p className="mt-2">{site.address.map(l=><span key={l} className="block">{l}</span>)}</p></div>}
 {site.hours&&<div><p className="eyebrow text-graphite">Hours</p><p className="mt-2">{site.hours}</p></div>}
</address></div><div className="lg:col-span-7"><Form/></div></div></section>)}
