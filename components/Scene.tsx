// Procedurally drawn architectural studies (no external images, so nothing can break).
// Swap for <Image/> photography when the firm supplies it.
import {images} from "@/lib/images";
const r=(s:number)=>{let x=Math.sin(s*9301+49297)*233280;return x-Math.floor(x)};
const skies=["#C9CFD1","#D6D0C4","#BFC6C4","#DCD6CB","#B9C0C2","#E3DED3"];
const walls=["#CFC7B8","#BDB3A1","#D9D5CC","#C4BBA9","#B9AD9A","#D2CCBF"];
export default function Scene({seed,label,className=""}:{seed:number;label:string;className?:string}){
 const src=images[seed];
 if(src)return <img src={src} alt={label} loading="lazy" className={`${className} object-cover`}/>;
 const a=(n:number)=>r(seed*7+n);
 const sky=skies[seed%6],wall=walls[(seed*3)%6],dark="#20211F";
 const ground=380+a(1)*40, bx=170+a(2)*90, bw=330+a(3)*150, bh=190+a(4)*90;
 const sl=40+a(5)*50, win=bx+bw*(.45+a(6)*.3), tree=a(7)>.35, water=a(8)>.4;
 const tx=bx+bw+40+a(9)*40;
 return(<svg role="img" aria-label={label} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className={className}>
  <rect width="800" height="600" fill={sky}/>
  <rect y={ground} width="800" height={600-ground} fill={water?"#8E968F":"#BDB4A3"}/>
  {water&&<><rect y={ground+30} width="800" height="150" fill="#6F786F" opacity=".55"/><rect x={bx} y={ground+6} width={bw} height="110" fill={wall} opacity=".35"/></>}
  <rect x={bx} y={ground-bh} width={bw} height={bh} fill={wall}/>
  <polygon points={`${bx+bw},${ground-bh} ${bx+bw+sl},${ground-bh+18} ${bx+bw+sl},${ground} ${bx+bw},${ground}`} fill="#000" opacity=".16"/>
  <rect x={bx-sl} y={ground-bh-18} width={bw+sl*1.6} height="18" fill={wall}/>
  <rect x={bx-sl} y={ground-bh} width={bw+sl*1.6} height="26" fill="#000" opacity=".2"/>
  <rect x={win} y={ground-bh+50} width="22" height={bh-60} fill={dark}/>
  <rect x={bx+30} y={ground-bh*.55} width={bw*.28} height={bh*.55} fill={dark} opacity=".85"/>
  {[...Array(7)].map((_,i)=><rect key={i} x={bx} y={ground-bh+30+i*(bh/7)} width={bw} height="1" fill="#000" opacity=".07"/>)}
  {tree&&<g><rect x={tx-3} y={ground-90} width="6" height="90" fill="#4a4036"/>{[0,1,2,3,4].map(i=><ellipse key={i} cx={tx+(a(10+i)-.5)*70} cy={ground-120+(a(15+i)-.5)*60} rx={34+a(20+i)*22} ry={22+a(25+i)*12} fill="#667060" opacity=".9"/>)}</g>}
 </svg>);
}
