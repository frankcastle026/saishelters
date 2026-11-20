"use client";
import {useState} from "react";import {AnimatePresence,motion} from "motion/react";import Scene from "./Scene";import {projects,type Project} from "@/lib/data";
const labels=["Exterior","Entrance","Detail","Interior"];
function Card({p}:{p:Project}){
 const [i,setI]=useState(0);
 return(<section id={p.slug} className="min-h-screen scroll-mt-20 flex items-center border-t border-stone py-16"><div className="wrap w-full">
  <h2 className="display text-5xl md:text-7xl">{p.name}</h2>
  <div className="mt-8 grid gap-10 lg:grid-cols-12">
   <div className="lg:col-span-8"><div className="relative aspect-[16/10] overflow-hidden bg-stone"><AnimatePresence mode="wait"><motion.div key={i} className="absolute inset-0" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.35}}><Scene seed={p.scenes[i]} label={`${p.name}, ${labels[i]}`} className="h-full w-full"/></motion.div></AnimatePresence></div>
    <div className="mt-3 grid grid-cols-4 gap-3" role="tablist" aria-label={`${p.name} images`}>{p.scenes.map((s,k)=><button key={k} role="tab" aria-selected={i===k} aria-label={`${labels[k]} view`} onClick={()=>setI(k)} className={`aspect-[3/2] overflow-hidden transition-opacity ${i===k?"ring-2 ring-charcoal ring-offset-2 ring-offset-ivory":"opacity-60 hover:opacity-100"}`}><Scene seed={s} label="" className="h-full w-full"/></button>)}</div></div>
   <div className="lg:col-span-4 flex flex-col"><div className="flex justify-between border-b border-stone pb-3 text-xs text-graphite"><span>{p.location}</span><span>{p.category}, {p.year}</span></div>
    <p className="mt-6 text-lg leading-relaxed">{p.desc}</p><p className="mt-4 text-sm leading-[1.8] text-graphite">{p.long}</p>

    <p className="mt-auto pt-8 text-xs text-graphite">Image {i+1} of {p.scenes.length}: {labels[i]}</p></div>
  </div></div></section>)}
export default function ProjectCards(){
  return <>{projects.map(p => <Card key={p.slug} p={p}/>)}</>;
}
