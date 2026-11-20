import type {Metadata} from "next";import {services} from "@/lib/data";
export const metadata:Metadata={title:"Expertise",description:"Services offered by the studio (configurable examples)."};
export default function Page(){return(<section className="pt-36 pb-28"><div className="wrap"><h1 className="display text-[clamp(3.5rem,9vw,9rem)]">Expertise</h1>
<div className="mt-16 border-t border-stone">{services.map(s=><article key={s[0]} id={s[2].split("#")[1]} className="scroll-mt-24 grid gap-4 border-b border-stone py-12 md:grid-cols-12"><h2 className="display text-4xl md:col-span-5">{s[0]}</h2><p className="md:col-span-6 leading-[1.8] text-graphite">{s[1]} Detailed scope and related case studies to be confirmed by the firm.</p></article>)}</div></div></section>)}
