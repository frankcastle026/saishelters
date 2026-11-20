import Link from "next/link";import Scene from "@/components/Scene";import HeroIn from "@/components/HeroIn";import Counter from "@/components/Counter";
// DEMO CONTENT: replace figures, awards and milestones with verified firm data.
const stats:[number,string,string][]=[[15,"+","Years"],[5,"L+","Sq. Ft."],[15,"+","Projects"],[22,"%","Better Pricing"]];
const eco=[
{t:"Apartments",s:"Buildings shaped for people.",d:"Thoughtfully designed apartments that bring together modern architecture, functional spaces and comfortable living.",tags:[],cta:"Explore",href:"/projects",seed:1},
{t:"Villas",s:"Spaces built for sophisticated living.",d:"Thoughtfully crafted villas that combine contemporary architecture, spacious living and refined comfort.",tags:[],cta:"Explore",href:"/projects",seed:9},
{t:"Interiors",s:"Refine details & purposeful aesthetics.",d:"Thoughtfully designed interiors that blend aesthetics, functionality and comfort to create inviting spaces.",tags:[],cta:"Explore",href:"/projects",seed:20},
{t:"Commercials",s:"Intelligent planning & lasting value.",d:"Where purposeful design meets functionality to shape inspiring business environments.",tags:[],cta:"Explore",href:"/projects",seed:27},
{t:"Industrial",s:"Built to last.",d:"Engineered for efficiency. Designed for performance. Built to last.",tags:[],cta:"Explore",href:"/projects",seed:21},
{t:"Farm land & plotting",s:"Shaping land. Creating opportunities. Cultivating value.",d:"Thoughtfully planned plots and farmland that bring future possibilities to life.",tags:[],cta:"Explore",href:"/projects",seed:22}];
const std=[["Context","Every building begins with its site, climate and neighbours.",26],["Sustainability","Energy-efficient design and responsible materials, designed to endure.",6],["Community","Spaces shaped to encourage connection and a sense of belonging.",23],["Quality","Careful design, enduring materials and attention to detail.",24],["Transparency","Clear processes, open communication and no surprises at any stage.",25]] as const;
const story=[["2011 — The Beginning","Sai Shelters takes its first step with a vision to deliver quality construction and build lasting relationships founded on trust."],["Building Our Foundation","With every project, we strengthen our experience, refine our execution and establish a reputation for dependable construction."],["Expanding Horizons","Our work evolves across apartments, villas, interiors and commercial developments, embracing new opportunities and broader possibilities."],["Today — Building the Future","From residential and commercial spaces to industrial developments and plotted layouts, Sai Shelters continues to shape spaces with purpose, precision and commitment."]];
const awards=["Award title","Recognition","Certification","Industry honour","Design award"];
const H=({e,t,children}:{e:string;t:React.ReactNode;children?:React.ReactNode})=><div><p className="eyebrow text-graphite">{e}</p><h2 className="hd mt-4 text-[clamp(2.4rem,5.5vw,5rem)]">{t}</h2>{children&&<p className="mt-4 max-w-md font-light text-graphite">{children}</p>}</div>;
export default function Home(){return(<>
<section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden">
 <div className="absolute inset-0 -z-20"><Scene seed={30} label="Landmark building at dusk" className="h-full w-full"/></div>
 <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/55 via-charcoal/40 to-charcoal/65" aria-hidden="true"/>
 <div className="wrap pt-20 text-center text-white">
  <HeroIn><h1 className="hd text-[clamp(3rem,9vw,8.5rem)]">Building Trust<br/><em>Creating Spaces</em></h1>
  <p className="mt-6 text-lg font-light text-white/90 md:text-xl">Foundation built on Trust and Excellence.</p></HeroIn></div>
 <a href="#intent" aria-label="Scroll to content" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-2xl animate-bounce">↓</a>
</section>

<section id="intent" className="py-28 scroll-mt-20"><div className="wrap grid gap-12 lg:grid-cols-12">
 <div className="lg:col-span-5"><H e="Beyond the build ," t={<> <em>Intent</em></>}/></div>
 <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg font-light leading-[1.7]">
  <p className="text-2xl font-normal leading-snug">We shape more than buildings. We shape the lives within them.</p>
  <p>At Sai Shelters, each space belongs to a bigger picture: somewhere thoughtfully designed for how people live, work and connect.</p>
  <p>From how a plan flows, to how daylight enters a room, to how materials weather with time, every detail is a deliberate choice.</p>
  <p></p>
  <p></p>
  </div></div>
 <div className="wrap mt-20"><div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-6">{stats.map(([n,s,l])=><Counter key={l} to={n} suffix={s} label={l}/>)}</div></div></section>

<section className="py-28 bg-white"><div className="wrap">
 <H e="Beyond projects" t={<>The <em>Ecosystem</em></>}></H>
 <div className="mt-20 space-y-28">{eco.map((x,i)=><article key={x.t} className="grid items-center gap-10 lg:grid-cols-12">
  <div className={`lg:col-span-7 aspect-[16/10] overflow-hidden ${i%2?"lg:order-2":""}`}><Scene seed={x.seed} label={`${x.t} study`} className="h-full w-full"/></div>
  <div className={`lg:col-span-5 ${i%2?"lg:order-1 lg:pr-10":"lg:pl-6"}`}><h3 className="hd text-5xl"><em>{x.t}</em></h3><p className="mt-3 text-xl font-normal">{x.s}</p><p className="mt-4 font-light leading-relaxed text-graphite">{x.d}</p>
   <ul className="mt-6 flex flex-wrap gap-2">{x.tags.map(t=><li key={t} className="border border-stone px-3 py-1.5 text-xs font-medium">{t}</li>)}</ul>
   <Link href={x.href} className="link mt-8 inline-block">{x.cta}</Link></div></article>)}</div></div></section>

<section className="py-28 overflow-hidden"><div className="wrap"></div>
 <div className="mt-14"><div className="marquee gap-6 pl-6" style={{animationDuration:"70s"}}>{[...std,...std].map(([t,d,s],i)=><article key={i} className="w-[300px] shrink-0 md:w-[380px]" aria-hidden={i>=std.length}><div className="aspect-[4/5] overflow-hidden"><Scene seed={s} label="" className="h-full w-full"/></div><h3 className="hd mt-4 text-2xl"><em>{t}</em></h3><p className="mt-1 text-sm font-light text-graphite">{d}</p></article>)}</div></div></section>

<section className="py-28 bg-white"><div className="wrap"><H e="Our story" t={<>Foundation of <em>Trust</em></>}>A journey of commitment, growth and spaces built to last.</H>
 <ol className="mt-16 border-l border-charcoal/30">{story.map(([a,b])=><li key={a} className="relative pb-14 pl-8 md:pl-12 last:pb-0"><span className="absolute -left-[5px] top-3 h-2.5 w-2.5 rounded-full bg-olive"/><p className="hd text-3xl md:text-4xl"><em>{a}</em></p><p className="mt-2 max-w-lg font-light text-graphite">{b}</p></li>)}</ol>
 </div></section>

</>)}
