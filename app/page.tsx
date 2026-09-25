"use client";
import {useEffect,useRef,useState} from "react";
const talent="https://drub-creator-vault.vercel.app/creators",join="https://drub-creator-vault.vercel.app/join";
const slides=[
 {k:"01",type:"EXPERIENTIAL / BEAUTYWORLD",title:"MAKE THEM\nSTOP.",sub:"Launches, activations and brand moments designed for the camera — and the crowd.",tone:"lime",cta:"Explore our work",href:"#"},
 {k:"02",type:"CREATOR CAMPAIGNS / UGC",title:"DON'T MAKE\nAN AD.",sub:"Make something people actually want to watch. Creator-led content built for feeds.",tone:"violet",cta:"Build a campaign",href:"mailto:reachus@drubme.com"},
 {k:"03",type:"DRUB TALENT NETWORK / LIVE",title:"FIND THE\nRIGHT FACE.",sub:"Creators. Models. Hostesses. Discover and shortlist UAE talent from our live network.",tone:"cyan",cta:"Access Talent Network",href:talent},
 {k:"04",type:"PRODUCTION / CGI / FILM",title:"MAKE THE\nIMPOSSIBLE.",sub:"Photography, film and CGI that turn products into worlds.",tone:"chrome",cta:"Start a production",href:"mailto:reachus@drubme.com"},
 {k:"05",type:"EXPERIENTIAL / RETAIL",title:"TURN SPACE\nINTO MEDIA.",sub:"Physical experiences engineered to create attention, participation and content.",tone:"amber",cta:"Create an experience",href:"mailto:reachus@drubme.com"},
 {k:"06",type:"JOIN THE NETWORK",title:"YOUR NEXT\nBRIEF?",sub:"If you create, model or host — put your profile in front of upcoming Drub opportunities.",tone:"rose",cta:"Join Drub Talent",href:join}
];
export default function Home(){const [active,setActive]=useState(0),[menu,setMenu]=useState(false);const feed=useRef<HTMLDivElement>(null);
useEffect(()=>{const root=feed.current;if(!root)return;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setActive(Number((e.target as HTMLElement).dataset.i||0))}),{root,threshold:.6});root.querySelectorAll(".reel").forEach(x=>io.observe(x));return()=>io.disconnect()},[]);
return <main className="reelsApp">
<header><a className="logo" href="#">DRUB<span>•</span></a><div className="topMeta">DUBAI / UAE <i>● LIVE</i></div><button onClick={()=>setMenu(!menu)}>{menu?"CLOSE":"MENU"}</button></header>
{menu&&<div className="menu"><a href="#" onClick={()=>setMenu(false)}>FEED</a><a href={talent}>TALENT NETWORK</a><a href={join}>JOIN NETWORK</a><a href="mailto:reachus@drubme.com">START A PROJECT</a><small>reachus@drubme.com<br/>+971 58 523 4100<br/>Sharjah · UAE</small></div>}
<div className="feed" ref={feed}>{slides.map((s,i)=><section className={"reel "+s.tone} data-i={i} key={s.k}>
<div className="visual"><div className="mesh"/><div className="object"><span>{s.k}</span></div><div className="scan"/></div>
<div className="reelCopy"><p className="category">{s.type}</p><h1>{s.title.split("\n").map((x,j)=><span key={x}>{x}{j===0&&<br/>}</span>)}</h1><p className="desc">{s.sub}</p><a className="cta" href={s.href}>{s.cta} <b>↗</b></a></div>
<div className="rail"><button aria-label="Like">✦</button><span>DRUB</span><button aria-label="Share">↗</button><span>{String(i+1).padStart(2,"0")}</span></div>
<div className="bottom"><span>DRUB MEDIA</span><span>SWIPE / SCROLL ↓</span><span>EXPERIENTIAL · CREATORS · PRODUCTION</span></div>
</section>)}</div>
<div className="progress">{slides.map((_,i)=><span key={i} className={i===active?"on":""}/>)}</div>
<div className="count"><b>{String(active+1).padStart(2,"0")}</b> / {String(slides.length).padStart(2,"0")}</div>
</main>}