"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Award, BookOpen, BriefcaseBusiness, Code2,
  ExternalLink, GraduationCap, HeartHandshake, Mail,
  MapPin, Menu, Phone, School, Share2, Terminal, Trophy, Users, X
} from "lucide-react";
import { getSupabase } from "../lib/supabase-browser";

const profileImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-02-18%20Event%20PROCOM-dylV9Y2yzk6qyhQM8C0AjaASoyW6kE.jpeg";

const backgroundImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dynamic-motion-blur-stockcake-OiVKyJP3UzNorIS3d9Ol374R5k2kDF.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dynamic-motion-blur-stockcake%20%281%29-ivWPtr741o2DYI9cIMwrBhJ4cswUFA.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images.jfif-cFzfvfo388CXASsVyg5wSrHrIsJbTS.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-dynamic-swirl-of-black-and-white-fluid-captures-motion-and-contrast-in-an-artistic-arrangement-on-a-bright-background-photo-JzAZU6tgXbsHjVdySjSe3Dm84m2CIR.jpg",
];

const experience = [
  ["Jul 2026 to Aug 2026", "Artificial Intelligence Intern", "Patel Hospital", "Created a pneumonia detection model using CNN and ViT with Grad CAM and RAG based clinical querying. Built a LangGraph agent for patient triage, bed and equipment allocation, discharge prediction and a multilingual Groq LLM assistant."],
  ["Jan 2026 to Mar 2026", "Software Developer", "SHAHFAY", "Contributed across the full software development lifecycle, from system design and database architecture through deployment, testing and quality assurance."],
  ["Jun 2025 to Jul 2025", "Full Stack Development Intern", "HUM Network Ltd", "Built responsive full stack websites with interactive interfaces, CRUD functionality, relational schemas, session based access control and RESTful APIs."],
  ["Feb 2025 to Present", "Undergraduate Teaching Assistant", "FAST NUCES", "Teaching, mentoring and grading for MT 1008 Multivariate Calculus and SS 1013 Ideology and Constitution of Pakistan."],
];

const volunteering = [
  ["Oct 2025 to Feb 2026", "Co Head, Computer Science Competitions", "PROCOM", "Competition delivery, problem design, technical logistics and live operations."],
  ["Apr 2025", "Assessment Management, Computer Science and General Competitions", "Developers Day, ACM NUCES", "Assessment and general management for a science and technology event."],
  ["Mar 2025", "Outreach Volunteer and Public Engagement", "Alkhidmat Karachi", "Public engagement and outreach support."],
  ["Mar 2025", "Community Service Volunteer, Class Visit Coordinator", "Dar ul Sukun", "Community service and class visit coordination."],
  ["Jun 2023 to Jul 2023", "Youth Support Volunteer", "Dar ul Sukun", "Child welfare and program coordination."],
];

const projects = [
  ["AL2002", "Contextual Multi Arm Recommendation System", "May 2026", "Python, AI and ML, Reinforcement Learning, Scikit Learn, Flask", "Built an AI driven shopping decision engine with A star search and contextual bandits. LinUCB recommendations and a Random Forest model achieved 0.9967 ROC AUC and 0.951 recall."],
  ["CS3009", "Backend Performance Optimization", "Apr 2026", "C sharp, ASP.NET Core 8, Oracle 21c XE, Next.js", "Demonstrated indexing, query optimization, optimistic concurrency and asynchronous execution. Integrated Oracle with Entity Framework Core, a five layer architecture, API testing and unit testing."],
  ["CS4031", "Graphics DSL Compiler Targeting x86 Assembly", "Apr 2026", "Rust, Lexer, Recursive Descent Parser, x86 Assembly, MASM", "Built an end to end compiler with lexing, parsing, semantic analysis, symbol tables, three address code, constant folding and machine code generation for executable console graphics."],
  ["CS3001", "Microservices Network Manager", "Dec 2025", "Python, FastAPI, WebSockets, REST APIs, gRPC", "Built a FastAPI gateway with round robin load balancing, health monitoring and subprocess lifecycle management. Added WebSocket ChatOps, role based access and failure recovery."],
];

const skillGroups = [
  ["Languages", "JavaScript and TypeScript, C and C++, C sharp, Python, Java, Bash and Shell, Assembly x86, Rust"],
  ["Frameworks", "Next.js, React.js, TailwindCSS, ASP.NET Core, FastAPI, Node.js, Express.js"],
  ["Data and AI", "MongoDB, PostgreSQL, MySQL, Pandas, NumPy, Scikit Learn, LangChain, LangGraph, PyTorch"],
  ["Engineering", "RESTful APIs, Full Stack and MERN, Object Oriented Programming, Algorithm Design, Testing, Linux, Git, Docker, AWS"],
];

const awards = [
  ["Star Performer Award", "PROCOM 25, Management and Leadership"],
  ["Star Performer Award", "Developers Day 25, Assessment and General Management"],
  ["Achievement Award", "Integration Bee 2023, Mathematics Competition"],
  ["Dedication Award", "Scratch Programming 2023, Computer Science Competition"],
  ["Merit Certificate", "Exploring Shadow Phenomena, 2016"],
];

function MotionBackdrop() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive((value) => (value + 1) % backgroundImages.length), 10000); return () => window.clearInterval(timer); }, []);
  return <div className="motion-backdrop" aria-hidden="true"><AnimatePresence mode="sync"><motion.div key={active} className="backdrop-image" style={{ backgroundImage: `url(${backgroundImages[active]})` }} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 0.16, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3.2, ease: "easeInOut" }} /></AnimatePresence><div className="backdrop-wash" /></div>;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Label({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) { return <div className="label"><Icon size={15} /><span>{children}</span></div>; }

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visits, setVisits] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 26 });
  useEffect(() => { const record = async () => { try { const supabase = getSupabase(); if (!supabase) return; const { data } = await supabase.rpc("increment_site_visits"); if (typeof data === "number") setVisits(data); } catch { setVisits(null); } }; record(); }, []);
  const close = () => setMenuOpen(false);
  return <main>
    <MotionBackdrop /><motion.div className="progress" style={{ scaleX: progress }} />
    <header className="header"><a className="brand" href="#home" onClick={close}><span>ZA</span><strong>Zubair Ahmed</strong></a><nav className={menuOpen ? "open" : ""}>{["About", "Experience", "Projects", "Education", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>)}</nav><a className="header-contact" href="mailto:zahmad2812@gmail.com"><Mail size={15} /> Contact</a><button className="menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></header>

    <section id="home" className="hero shell"><div className="hero-content"><Reveal><p className="kicker"><span className="pulse" /> Computer Science and Applied AI</p></Reveal><Reveal><h1>Engineering ideas<br /><i>into useful systems.</i></h1></Reveal><Reveal><p className="lede">Computer Science student at FAST NUCES with experience in software development, systems engineering and applied AI. Passionate about building scalable applications and exploring emerging technologies.</p></Reveal><Reveal className="hero-actions"><a className="primary" href="#projects">View selected work <ArrowDown size={16} /></a><a className="underlined" href="/ZA_Resume.pdf" target="_blank" rel="noreferrer">Resume <ExternalLink size={15} /></a></Reveal></div><div className="identity-card"><div className="portrait-frame"><img src={profileImage} alt="Zubair Ahmed at PROCOM 25" /><span className="portrait-mark">ZA</span></div><div><strong>Karachi, Sindh</strong><span>Available for meaningful work</span></div></div></section>

    <section id="about" className="block about"><div className="shell"><Label icon={Users}>Profile</Label><div className="two-col"><div><h2>Curious by nature.<br /><i>Precise by practice.</i></h2></div><div className="profile-copy"><p>Computer Science student with experience in software development, systems engineering and applied AI. Passionate about building scalable applications and exploring emerging technologies, seeking roles that blend engineering with research.</p><div className="facts"><span><MapPin size={16} /> Karachi, Sindh</span><span><GraduationCap size={16} /> FAST NUCES, 2023 to 2027</span><span><Terminal size={16} /> Software and AI</span><span><Users size={16} /> Teaching and mentoring</span></div></div></div></div></section>

    <section id="experience" className="block experience"><div className="shell"><Label icon={BriefcaseBusiness}>Professional experience</Label><div className="section-head"><h2>Selected roles</h2><p>Professional work listed in my resume.</p></div><div className="rows">{experience.map(([period, role, company, detail]) => <Reveal className="role" key={role}><time>{period}</time><div><h3>{role}</h3><strong>{company}</strong><p>{detail}</p></div></Reveal>)}</div></div></section>

    <section id="volunteering" className="block volunteering"><div className="shell"><Label icon={HeartHandshake}>Volunteering and leadership</Label><div className="section-head"><h2>Service and community</h2><p>Leadership and public engagement from my resume.</p></div><div className="volunteer-list">{volunteering.map(([period, role, company, detail], index) => <Reveal className="volunteer" key={`${role}${index}`}><span className="number">0{index + 1}</span><div><time>{period}</time><h3>{role}</h3><strong>{company}</strong><p>{detail}</p></div></Reveal>)}</div></div></section>

    <section id="projects" className="block projects"><div className="shell"><Label icon={Code2}>Selected projects</Label><div className="section-head"><h2>Four systems, fully considered</h2><p>Projects taken directly from my resume.</p></div><div className="project-list">{projects.map(([code, title, date, stack, body], index) => <Reveal className="project" key={code}><div className="project-code"><span>{code}</span><time>{date}</time></div><div className="project-main"><span className="project-icon"><Code2 size={18} /></span><h3>{title}</h3><p className="stack">{stack}</p><p>{body}</p><a href="#contact">Discuss this project <ArrowUpRight size={15} /></a></div><span className="project-index">0{index + 1}</span></Reveal>)}</div></div></section>

    <section id="skills" className="block skills"><div className="shell"><Label icon={Terminal}>Technical toolkit</Label><div className="two-col"><h2>Tools for the<br /><i>whole system.</i></h2><div className="skill-list">{skillGroups.map(([name, list]) => <div className="skill" key={name}><strong>{name}</strong><p>{list}</p></div>)}</div></div></div></section>

    <section id="education" className="block education"><div className="shell"><Label icon={GraduationCap}>Education and recognition</Label><div className="education-layout"><div><h2>Education</h2><article className="education-item"><School size={19} /><div><h3>Bachelor of Science in Computer Science</h3><p>National University of Computer and Emerging Sciences, Karachi</p><time>Aug 2023 to Jun 2027</time></div></article><article className="education-item"><BookOpen size={19} /><div><h3>IGCSE and A Levels, Pre Engineering and Computer Science</h3><p>Cedar College, Karachi</p><time>Oct 2022 to Jun 2023</time></div></article></div><div><h2>Honors and awards <Trophy size={25} /></h2><div className="award-list">{awards.map(([title, detail]) => <div className="award" key={title + detail}><Award size={16} /><span><strong>{title}</strong><small>{detail}</small></span></div>)}</div></div></div></div></section>

    <footer id="contact" className="footer"><div className="shell"><Label icon={Mail}>Contact</Label><div className="footer-top"><h2>Let us solve<br /><i>something useful.</i></h2><a className="email" href="mailto:zahmad2812@gmail.com">zahmad2812@gmail.com <ArrowUpRight size={20} /></a></div><div className="footer-bottom"><div><strong>Zubair Ahmed</strong><span>Computer Science student, software development, systems engineering and applied AI</span></div><div className="socials"><a href="https://github.com/zahmed02" aria-label="GitHub"><Code2 /></a><a href="https://linkedin.com/in/zubair-ahmed-448041344" aria-label="LinkedIn"><Share2 /></a><a href="tel:+923203060747" aria-label="Phone"><Phone /></a></div><small>{visits ? `${visits} visits` : "Karachi, Pakistan"}</small></div></div></footer>
  </main>;
}
