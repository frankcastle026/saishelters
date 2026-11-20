"use client";
import {useEffect,useRef,useState} from "react";import {animate,useInView} from "motion/react";
export default function Counter({to,suffix="",label}:{to:number;suffix?:string;label:string}){
 const ref=useRef<HTMLDivElement>(null),inView=useInView(ref,{once:true,margin:"-10% 0px"}),[n,setN]=useState(0);
 useEffect(()=>{if(!inView)return;if(matchMedia("(prefers-reduced-motion: reduce)").matches){setN(to);return}
  const c=animate(0,to,{duration:2.2,ease:[.16,1,.3,1],onUpdate:v=>setN(Math.round(v))});return()=>c.stop()},[inView,to]);
 return(<div ref={ref} className="border-t border-charcoal/30 pt-5"><p className="hd text-5xl md:text-6xl tabular-nums" aria-label={`${to}${suffix}`}><span aria-hidden>{n}{suffix}</span></p><p className="mt-2 text-sm text-graphite">{label}</p></div>)}
