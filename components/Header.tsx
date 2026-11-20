"use client";
import Link from "next/link";import {useEffect,useState} from "react";import {usePathname} from "next/navigation";
import {X} from "lucide-react";import {AnimatePresence,motion} from "motion/react";
const nav=[["Projects","/projects"],["Expertise","/expertise"],["Contact","/contact"]];
import {menu} from "@/lib/data";
export default function Header(){
 const [open,setOpen]=useState(false),[solid,setSolid]=useState(false),p=usePathname();
 const light=p==="/"&&!solid;
 useEffect(()=>{const f=()=>setSolid(scrollY>40);f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
 useEffect(()=>setOpen(false),[p]);
 useEffect(()=>{document.body.style.overflow=open?"hidden":"";const k=(e:KeyboardEvent)=>e.key==="Escape"&&setOpen(false);addEventListener("keydown",k);return()=>removeEventListener("keydown",k)},[open]);
 return(<><header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid?"bg-ivory/95 backdrop-blur border-b border-stone":"border-b border-transparent"} ${light?"text-white":""}`}>
  <div className="wrap flex h-20 items-center justify-between">
   <Link href="/" className="text-[26px] font-semibold tracking-tight" aria-label="Sai Shelters home">Sai Shelters<span className="font-light">.</span></Link>
   <nav aria-label="Primary" className="flex items-center gap-6 md:gap-10 text-[14px]">
    {nav.map(([l,h])=><Link key={h} href={h} className={`hidden md:inline ${light?"hover:text-white/70":"hover:text-olive"} transition-colors ${p===h?"font-semibold":""}`}>{l}</Link>)}
    <button onClick={()=>setOpen(true)} aria-expanded={open} aria-haspopup="dialog" className={`border px-5 py-2 text-[14px] font-medium transition-colors ${light?"border-white hover:bg-white hover:text-charcoal":"border-charcoal hover:bg-charcoal hover:text-ivory"}`}>About</button>
   </nav></div></header>
  <AnimatePresence>{open&&<motion.div role="dialog" aria-modal="true" aria-label="Site menu" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.3}} className="fixed inset-0 z-[60] overflow-y-auto bg-ivory">
   <div className="wrap flex h-20 items-center justify-between"><span className="text-[26px] font-semibold tracking-tight">Sai Shelters<span className="font-light">.</span></span><button onClick={()=>setOpen(false)} aria-label="Close menu" className="p-2"><X/></button></div>
   <div className="wrap grid gap-12 py-12 md:grid-cols-12"><p className="md:col-span-4 hd text-3xl max-w-xs">Building <em>Trust</em>, creating spaces.</p>
    <div className="md:col-span-8 grid gap-10 sm:grid-cols-3">{menu.map(([t,l])=><div key={t}><p className="eyebrow text-graphite">{t}</p><ul className="mt-5 space-y-3">{l.map(([a,h])=><li key={a}><Link href={h} onClick={()=>setOpen(false)} className="text-lg font-light hover:text-olive transition-colors">{a}</Link></li>)}</ul></div>)}</div></div></motion.div>}</AnimatePresence></>)}
