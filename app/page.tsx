'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const services = [
  { n:'01', title:'Pier & Beam', sub:'HOUSE LEVELING', image:'https://startexfoundationrepair.com/wp-content/uploads/2024/03/Pier-Beam-House-Leveling-Service.png' },
  { n:'02', title:'Housing Raising', sub:'STRUCTURAL SOLUTIONS', image:'https://startexfoundationrepair.com/wp-content/uploads/2024/04/Housing-Raising.png' },
  { n:'03', title:'Slab & Concrete', sub:'FOUNDATION REPAIR', image:'https://startexfoundationrepair.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-29-at-12.19.53-AM.jpeg' },
  { n:'04', title:'Root Barrier', sub:'SOIL PROTECTION', image:'https://startexfoundationrepair.com/wp-content/uploads/2024/04/Building-A-Better-Life-Starts-With-A-Solid-Foundation.png' },
]
const areas = ['Sugar Land','Fort Bend County','Cinco Ranch','Rosenberg','Katy','Missouri City','Pearland']

export default function Home(){
 const hero=useRef(null)
 const {scrollYProgress}=useScroll({target:hero,offset:['start start','end start']})
 const imageY=useTransform(scrollYProgress,[0,1],[0,180])
 const imageScale=useTransform(scrollYProgress,[0,1],[1.02,1.16])
 return <main>
  <section ref={hero} className="hero">
   <motion.div className="heroImage" style={{y:imageY,scale:imageScale}}/>
   <div className="heroNoise"/><div className="heroVignette"/>
   <nav><a className="brand" href="#top"><span>STAR</span> TECHN<small>FOUNDATION REPAIR</small></a><div className="navLinks"><a href="#services">Services</a><a href="#story">Our approach</a><a href="#areas">Houston</a></div><a className="navButton" href="tel:18324895484"><span>832.489.5484</span><b>↗</b></a></nav>
   <div id="top" className="heroContent">
    <div className="heroKicker"><span>HOUSTON · TEXAS</span><i/> <span>EST. 2009</span></div>
    <h1>THE<br/><em>GROUND</em><br/>WORKS.</h1>
    <p>Foundation repair, leveling and structural solutions for the homes of Houston — with experience that starts below the surface.</p>
    <div className="heroActions"><a className="magnetic" href="tel:18324895484">REQUEST A FREE QUOTE <span>↗</span></a><a className="scrollLink" href="#services">SCROLL TO EXPLORE <b>↓</b></a></div>
   </div>
   <div className="heroBottom"><span>01 / 06</span><span>FAMILY OWNED · ENGINEER-CERTIFIED WORK</span><span>HOUSTON, TX</span></div>
  </section>

  <section className="marquee"><div>FOUNDATION · LEVELING · STRUCTURE · DRAINAGE · CONCRETE · </div><div>FOUNDATION · LEVELING · STRUCTURE · DRAINAGE · CONCRETE · </div></section>

  <section id="story" className="story">
   <div className="sectionNumber">01 <span>THE SIGNAL</span></div>
   <div className="storyGrid"><h2>YOUR HOME<br/><em>LEAVES CLUES.</em></h2><div className="storyCopy"><p className="large">A crack is a signal. A sticking door is a signal. An uneven floor is a signal.</p><p>Star Techn evaluates the condition of your property and provides targeted foundation and structural solutions for Houston-area homes.</p><a href="tel:18324895484" className="textLink">TALK TO A FOUNDATION SPECIALIST <span>↗</span></a></div></div>
   <div className="signals"><div><b>01</b><span>WALL CRACKS</span></div><div><b>02</b><span>UNEVEN FLOORS</span></div><div><b>03</b><span>STICKING DOORS</span></div><div><b>04</b><span>WINDOW GAPS</span></div></div>
  </section>

  <section id="services" className="services">
   <div className="servicesTop"><div><div className="sectionNumber light">02 <span>THE WORK</span></div><h2>BUILT<br/><em>BELOW.</em></h2></div><p>Specialized services for the structures that matter most — your home, your foundation, your peace of mind.</p></div>
   <div className="serviceGrid">{services.map((s,i)=><motion.a href="tel:18324895484" className="serviceCard" key={s.n} whileHover="hover"><div className="serviceImage"><motion.img src={s.image} alt={s.title} variants={{hover:{scale:1.08}}} transition={{duration:.7}}/></div><div className="serviceOverlay"/><div className="serviceInfo"><span>{s.n} / {s.sub}</span><h3>{s.title}</h3><b>↗</b></div></motion.a>)}</div>
   <div className="serviceFoot"><span>ENGINEER-CERTIFIED WORK</span><span>LICENSED & INSURED</span><span>ESPAÑOL / ENGLISH</span></div>
  </section>

  <section className="manifesto"><div className="manifestoImage"/><div className="manifestoShade"/><div className="manifestoText"><span>03 / THE STANDARD</span><h2>DON'T<br/><em>PATCH</em><br/>THE SYMPTOM.</h2><p>Find the movement. Understand the structure. Build the right solution.</p></div></section>

  <section className="process">
   <div className="sectionNumber">04 <span>THE PATH</span></div><div className="processHead"><h2>FROM<br/><em>CONCERN</em><br/>TO CLEAR.</h2><p>A straightforward path from the first conversation to the work your property actually needs.</p></div>
   <div className="steps">{[['01','CONSULT','Start with the concern.'],['02','INSPECT','Understand the property and conditions.'],['03','PLAN','Define the appropriate scope of work.'],['04','REPAIR','Complete the assigned solution.']].map(s=><div className="step" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div><b>↗</b></div>)}</div>
  </section>

  <section id="areas" className="areas"><div className="sectionNumber">05 <span>THE MAP</span></div><div className="areasMain"><div><h2>HOUSTON<br/><em>& BEYOND.</em></h2><p>Serving Houston and surrounding communities including:</p></div><div className="areaList">{areas.map((a,i)=><span key={a}><small>0{i+1}</small>{a}<b>↗</b></span>)}</div></div></section>

  <section className="finalCta"><div className="sectionNumber dark">06 <span>THE FIRST STEP</span></div><h2>PUT YOUR<br/><em>HOME</em> ON<br/>SOLID GROUND.</h2><p>Talk with Star Techn about your foundation project.</p><a className="darkButton" href="tel:18324895484">CALL 832.489.5484 <span>↗</span></a></section>

  <footer><div className="footerBrand"><div className="brand"><span>STAR</span> TECHN<small>FOUNDATION REPAIR</small></div><p>Foundation repair and structural solutions for Houston, Texas and surrounding communities.</p></div><div className="footerLinks"><a href="#services">Services</a><a href="#story">Approach</a><a href="#areas">Service area</a><a href="https://startexfoundationrepair.com/">Official website ↗</a></div><div className="footerContact"><span>HOUSTON, TX 77085</span><a href="tel:18324895484">832.489.5484</a><a href="mailto:Startexfoundationrepair@gmail.com">Startexfoundationrepair@gmail.com</a></div><small className="copyright">© {new Date().getFullYear()} STAR TECHN FOUNDATION REPAIR · ALL RIGHTS RESERVED</small></footer>
 </main>
}
