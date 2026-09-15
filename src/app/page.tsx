"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  GitBranch,
  GraduationCap,
  HeartHandshake,
  Share2,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Quote,
  School,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { getSupabase } from "../lib/supabase-browser";

const projects = [
  { code: "AL2002", title: "Contextual Multi Arm Recommendation System", date: "May 2026", stack: "Python, AI ML, Reinforcement Learning, Scikit Learn, Flask", body: "AI driven shopping decision engine using A star search and contextual bandits for adaptive personalization. LinUCB recommendations and a Random Forest model achieved 0.9967 ROC AUC and 0.951 recall." },
  { code: "CS3009", title: "Backend Performance Optimization", date: "Apr 2026", stack: "C sharp, ASP.NET Core 8, Oracle 21c XE, Next.js", body: "Backend engineering study covering indexing, query optimization, optimistic concurrency, asynchronous execution, five layer architecture, design patterns, API testing and unit testing." },
  { code: "CS4031", title: "Graphics DSL Compiler Targeting x86 Assembly", date: "Apr 2026", stack: "Rust, Lexer, Recursive Descent Parser, x86 Assembly, MASM", body: "End to end compiler with lexing, parsing, semantic analysis, symbol tables, three address code, constant folding and machine code generation for executable console graphics." },
  { code: "CS3001", title: "Microservices Network Manager", date: "Dec 2025", stack: "Python, FastAPI, WebSockets, REST APIs, gRPC", body: "FastAPI gateway with round robin load balancing, health monitoring and subprocess lifecycle management. Added WebSocket ChatOps, role based access and failure recovery." },
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

const skillGroups = [
  ["Languages", "JavaScript and TypeScript, C and C++, C sharp, Python, Java, Bash, Assembly x86, Rust"],
  ["Frameworks", "Next.js, React.js, TailwindCSS, ASP.NET Core, FastAPI, Node.js, Express.js"],
  ["Data and AI", "MongoDB, PostgreSQL, MySQL, Pandas, NumPy, Scikit Learn, LangChain, LangGraph, PyTorch"],
  ["Engineering", "RESTful APIs, Full Stack and MERN, Object Oriented Programming, Algorithm Design, Testing, Linux, Git, Docker, AWS"],
];

function WaterBackground() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const context = element.getContext("2d");
    if (!context) return;
    let frame = 0;
    let time = 0;
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 2);
      element.width = window.innerWidth * ratio;
      element.height = window.innerHeight * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const move = (event: PointerEvent) => {
      pointer.current = { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight };
    };
    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.fillStyle = "#050505";
      context.fillRect(0, 0, width, height);
      const center = height * (0.52 + (pointer.current.y - 0.5) * 0.08);
      for (let band = 0; band < 34; band += 1) {
        context.beginPath();
        const offset = band * 6;
        for (let x = -30; x <= width + 30; x += 10) {
          const wave = Math.sin(x * 0.006 + time * 0.009 + band * 0.27) * (28 + band * 0.4) + Math.sin(x * 0.014 - time * 0.005) * 12;
          const ripple = Math.cos((x - width * pointer.current.x) * 0.004) * (pointer.current.y - 0.5) * 28;
          const y = center + offset + wave + ripple;
          if (x === -30) context.moveTo(x, y); else context.lineTo(x, y);
        }
        context.strokeStyle = `rgba(${band % 3 === 0 ? 255 : 160}, ${band % 3 === 0 ? 255 : 160}, ${band % 3 === 0 ? 255 : 160}, ${0.025 + band * 0.002})`;
        context.lineWidth = band % 5 === 0 ? 2 : 1;
        context.stroke();
      }
      time += 1;
      frame = requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move);
    draw();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move); };
  }, []);

  return <canvas ref={canvas} aria-hidden="true" className="water-canvas" />;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55 }} className={className}>{children}</motion.div>;
}

function SectionLabel({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return <div className="section-label"><Icon size={15} strokeWidth={1.5} /><span>{children}</span></div>;
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visits, setVisits] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const recordVisit = async () => {
      try {
        const supabase = getSupabase();
        if (!supabase) return;
        const { data } = await supabase.rpc("increment_site_visits");
        if (typeof data === "number") setVisits(data);
      } catch { setVisits(null); }
    };
    recordVisit();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <WaterBackground />
      <header className="site-header">
        <a href="#top" className="brand" onClick={closeMenu}><span>ZA</span><strong>Zubair Ahmed</strong></a>
        <nav className={menuOpen ? "nav-open" : ""}>{["About", "Experience", "Projects", "Education", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}</nav>
        <a className="header-link" href="mailto:zahmad2812@gmail.com"><Mail size={16} /> Contact</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="hero page-section">
        <div className="hero-copy">
          <Reveal><div className="eyebrow"><Sparkles size={15} /> Computer Science and Applied AI</div></Reveal>
          <Reveal><h1>Building intelligent<br /><em>systems with purpose.</em></h1></Reveal>
          <Reveal><p className="hero-intro">Computer Science student at FAST NUCES with experience across software development, systems engineering and applied AI. I build practical tools that make complex work clearer, faster and more useful.</p></Reveal>
          <Reveal className="hero-actions"><a className="button button-light" href="#projects">Explore my work <ArrowDown size={16} /></a><a className="text-link" href="/ZA_Resume.pdf" target="_blank" rel="noreferrer">View resume <ExternalLink size={15} /></a></Reveal>
        </div>
        <div className="hero-index"><span>Portfolio</span><strong>2026</strong><small>Karachi, Pakistan</small></div>
      </section>

      <section id="about" className="section paper-section page-section"><div className="section-wrap about-grid"><div><SectionLabel icon={Quote}>Profile</SectionLabel><h2>Curious by nature.<br /><em>Precise by practice.</em></h2></div><div className="about-text"><p>Computer Science student with experience in software development, systems engineering, and applied AI. Passionate about building scalable applications and exploring emerging technologies, with a focus on engineering and research.</p><div className="fact-grid"><div><MapPin size={17} /><span>Karachi, Sindh</span></div><div><GraduationCap size={17} /><span>FAST NUCES, 2023 to 2027</span></div><div><Terminal size={17} /><span>Software and AI</span></div><div><Users size={17} /><span>Teaching and mentoring</span></div></div></div></div></section>

      <section id="experience" className="section page-section"><div className="section-wrap"><SectionLabel icon={BriefcaseBusiness}>Professional experience</SectionLabel><div className="section-heading"><h2>Work that compounds.</h2><p>Selected roles from my professional journey.</p></div><div className="timeline">{experience.map(([period, role, company, detail]) => <Reveal className="timeline-item" key={role}><div className="timeline-date">{period}</div><div className="timeline-dot" /><div className="timeline-content"><h3>{role}</h3><strong>{company}</strong><p>{detail}</p></div></Reveal>)}</div></div></section>

      <section id="volunteering" className="section light-section page-section"><div className="section-wrap"><SectionLabel icon={HeartHandshake}>Volunteering and leadership</SectionLabel><div className="section-heading"><h2>Technology is a team sport.</h2><p>Community work, event operations and service.</p></div><div className="volunteer-grid">{volunteering.map(([period, role, company, detail], index) => <Reveal className="volunteer-card" key={`${role}${index}`}><span className="card-number">0{index + 1}</span><small>{period}</small><h3>{role}</h3><strong>{company}</strong><p>{detail}</p></Reveal>)}</div></div></section>

      <section id="projects" className="section project-section page-section"><div className="section-wrap"><SectionLabel icon={Code2}>Selected projects</SectionLabel><div className="section-heading"><h2>Ideas, made executable.</h2><p>Four systems from my resume, presented with the decisions behind them.</p></div><div className="project-grid">{projects.map((project, index) => <Reveal className="project-card" key={project.code}><div className="project-top"><span>{project.code}</span><span>{project.date}</span></div><div className="project-icon"><Network size={20} /></div><h3>{project.title}</h3><p className="project-stack">{project.stack}</p><p>{project.body}</p><a href="#contact" aria-label={`Ask about ${project.title}`}>Discuss project <ArrowUpRight size={16} /></a></Reveal>)}</div></div></section>

      <section id="skills" className="section paper-section page-section"><div className="section-wrap"><SectionLabel icon={Terminal}>Technical toolkit</SectionLabel><div className="skills-layout"><h2>Tools for the<br /><em>whole system.</em></h2><div className="skills-list">{skillGroups.map(([name, list]) => <div className="skill-row" key={name}><strong>{name}</strong><p>{list}</p></div>)}</div></div></div></section>

      <section id="education" className="section education-section page-section"><div className="section-wrap"><SectionLabel icon={GraduationCap}>Education and recognition</SectionLabel><div className="education-grid"><div><h2>Learning never<br /><em>ships finished.</em></h2><div className="education-card"><School size={21} /><div><h3>Bachelor of Science in Computer Science</h3><p>National University of Computer and Emerging Sciences, Karachi</p><small>Aug 2023 to Jun 2027</small></div></div><div className="education-card"><BookOpen size={21} /><div><h3>IGCSE and A Levels, Pre Engineering and Computer Science</h3><p>Cedar College, Karachi</p><small>Oct 2022 to Jun 2023</small></div></div></div><div className="awards"><h3><Trophy size={19} /> Honors and awards</h3>{[["Star Performer Award", "PROCOM 25, Management and Leadership"], ["Star Performer Award", "Developers Day 25, Assessment and General Management"], ["Achievement Award", "Integration Bee 2023, Mathematics Competition"], ["Dedication Award", "Scratch Programming 2023, Computer Science Competition"]].map(([title, detail]) => <div className="award-row" key={title + detail}><Award size={17} /><div><strong>{title}</strong><span>{detail}</span></div></div>)}</div></div></div></section>

      <footer id="contact" className="footer page-section"><div className="section-wrap"><SectionLabel icon={Mail}>Start a conversation</SectionLabel><div className="footer-main"><h2>Have a thoughtful<br /><em>problem to solve?</em></h2><a className="mail-link" href="mailto:zahmad2812@gmail.com">zahmad2812@gmail.com <ArrowUpRight /></a></div><div className="footer-bottom"><div><strong>Zubair Ahmed</strong><span>Computer Science student, software development, systems engineering, applied AI</span></div><div className="socials"><a href="https://github.com/zahmed02" aria-label="GitHub"><GitBranch /></a><a href="https://linkedin.com/in/zubair-ahmed-448041344" aria-label="LinkedIn"><Share2 /></a><a href="tel:+923203060747" aria-label="Phone"><Phone /></a></div><small>{visits ? `${visits} visits` : "Available for meaningful work"}</small></div></div></footer>
    </main>
  );
}
