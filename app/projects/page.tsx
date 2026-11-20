// import Link from "next/link";
import {projects} from "@/lib/data";
import type {Metadata} from "next";import ProjectCards from "@/components/ProjectCards";
import {directory} from "@/lib/data";
export const metadata:Metadata={title:"Projects",description:"Selected demo projects across residential, commercial, hospitality and mixed-use architecture."};
const groups = Array.from(new Set(projects.map(p => p.category)));
export default function Page(){return(<><section className="pt-36 pb-12"><div className="wrap"><h1 className="display text-[clamp(3.5rem,9vw,9rem)]">Selected projects</h1></div></section><ProjectCards/>
<section className="border-t border-stone bg-white py-20">
  <div className="wrap grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
    {directory.map(d => (
      <div key={d.category}>
        <p className="eyebrow text-graphite">{d.category}</p>
        <ul className="mt-5 space-y-3">
          {d.items.map(name => (
            <li key={name} className="text-lg font-light">{name}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section></>)}
