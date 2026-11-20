"use client";
import {motion} from "motion/react";
export default function HeroIn({children,className,delay=0}:{children:React.ReactNode;className?:string;delay?:number}){
 return <motion.div className={className} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.9,delay,ease:[.2,.7,.2,1]}}>{children}</motion.div>}
