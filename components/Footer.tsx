import Link from "next/link";import {site} from "@/lib/site";import {menu} from "@/lib/data";
export default function Footer(){return(<footer className="bg-charcoal text-ivory">
 <div className="wrap py-20 grid gap-14 md:grid-cols-12">
  <div className="md:col-span-5"><p className="text-4xl font-semibold tracking-tight">Sai Shelters<span className="font-light">.</span></p><p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-taupe">Building Trust, Creating Spaces. Foundation built on trust and excellence.</p></div>
  {menu.map(([t,l])=><div key={t} className="md:col-span-2 text-sm"><p className="eyebrow text-taupe mb-4">{t}</p><ul className="space-y-2 font-light">{l.map(([a,h])=><li key={a}><Link className="hover:text-taupe" href={h}>{a}</Link></li>)}</ul></div>)}
 </div>
 <div className="wrap border-t border-graphite py-6 flex flex-wrap justify-between gap-3 text-xs text-taupe"><span>© {new Date().getFullYear()} Sai Shelters. All rights reserved.</span><span className="flex gap-5"><span>Privacy</span><span>Terms</span></span></div>
</footer>)}
