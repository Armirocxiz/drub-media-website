"use client";
import {useEffect,useRef,useState} from "react";
const talent="https://drub-creator-vault.vercel.app/creators",join="https://drub-creator-vault.vercel.app/join";
type Slide={k:string;type:string;title:string;sub:string;cta:string;href:string;media?:string;fit?:string;talent?:boolean;tone?:string};
const slides:Slide[]=[
 {k:"01",type:"DRUB / SHOWREEL",title:"WE MAKE\nPEOPLE STOP.",sub:"Experiential. Creators. Production.",media:"/media/drub-brand.mp4",fit:"portrait",cta:"Enter Drub",href:"#"},
 {k:"02",type:"BEAUTY / EXPERIENTIAL",title:"PUT THE\nBRAND IN IT.",sub:"Live brand moments designed to become content.",media:"/media/beauty.mp4",cta:"Create an experience",href:"mailto:reachus@drubme.com"},
 {k:"03",type:"EVENT / BEAUTYWORLD",title:"BE WHERE\nIT HAPPENS.",sub:"On-ground energy captured for the feed.",media:"/media/damas-rose.mp4",fit:"portrait",cta:"Start a project",href:"mailto:reachus@drubme.com"},
 {k:"04",type:"AI / PRODUCT FILM",title:"BUILD A\nNEW WORLD.",sub:"Creative technology turns products into stories without physical limits.",media:"/media/aged-infusion.mp4",cta:"Create with us",href:"mailto:reachus@drubme.com"},
 {k:"05",type:"3D / CGI / PRODUCT",title:"MAKE IT\nUNREAL.",sub:"Product films, 3D and CGI built to hold attention.",media:"/media/euphoria.mp4",cta:"Start a production",href:"mailto:reachus@drubme.com"},
 {k:"06",type:"EVENTS / PRODUCTION",title:"MAKE THE\nROOM FEEL IT.",sub:"Atmosphere, people and moments — captured with intent.",media:"/media/dinner.mp4",cta:"Talk to Drub",href:"mailto:reachus@drubme.com"},{k:"07",type:"DRUB TALENT NETWORK / LIVE",title:"FIND THE\nRIGHT FACE.",sub:"Creators. Models. Hostesses. Discover and shortlist UAE talent.",talent:true,cta:"Access Talent Network",href:talent}
];
export default function Home(){const [active,setActive]=useState(0),[menu,setMenu]=useState(false);const feed=useRef<HTMLDivElement>(null);
useEffect(()=>{const root=feed.current;if(!root)return;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setActive(Number((e.target as HTMLElement).dataset.i||0))}),{root,threshold:.6});root.querySelectorAll(".reel").forEach(x=>io.observe(x));return()=>io.disconnect()},[]);
return <main className="reelsApp">
<header><a className="logo" href="#">DRUB<span>•</span></a><div className="topMeta">DUBAI / UAE <i>● LIVE</i></div><button onClick={()=>setMenu(!menu)}>{menu?"CLOSE":"MENU"}</button></header>
{menu&&<div className="menu"><a href="#" onClick={()=>setMenu(false)}>FEED</a><a href={talent}>TALENT NETWORK</a><a href={join}>JOIN NETWORK</a><a href="mailto:reachus@drubme.com">START A PROJECT</a><small>reachus@drubme.com<br/>+971 58 523 4100<br/>Sharjah · UAE</small></div>}
<div className="feed" ref={feed}>{slides.map((s,i)=><section className={"reel "+(s.tone||"mediaReel")} data-i={i} key={s.k}>
<div className={"visual "+(s.talent?"talentVisual":"")}>{s.media?<video className={"reelVideo "+(s.fit==="portrait"?"portrait":"")} src={s.media} autoPlay muted loop playsInline preload={i<2?"auto":"metadata"}/>:<><div className="mesh"/><div className="object"><span>{s.k}</span></div><div className="scan"/></>}<div className="shade"/></div>
<div className="reelCopy"><p className="category">{s.type}</p><h1>{s.title.split("\n").map((x,j)=><span key={x}>{x}{j===0&&<br/>}</span>)}</h1><p className="desc">{s.sub}</p><a className="cta" href={s.href}>{s.cta} <b>↗</b></a></div>
<div className="rail"><button aria-label="Like">✦</button><span>DRUB</span><button aria-label="Share">↗</button><span>{String(i+1).padStart(2,"0")}</span></div>
<div className="bottom"><span>DRUB MEDIA</span><span>SWIPE / SCROLL ↓</span><span>EXPERIENTIAL · CREATORS · PRODUCTION</span></div>
</section>)}</div>
<div className="progress">{slides.map((_,i)=><span key={i} className={i===active?"on":""}/>)}</div>
<div className="count"><b>{String(active+1).padStart(2,"0")}</b> / {String(slides.length).padStart(2,"0")}</div>
</main>}