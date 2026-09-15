"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getSupabase } from "../lib/supabase-browser";
import {
  ArrowUpRight, Award, BookOpen, BriefcaseBusiness, Code2, Download, ExternalLink,
  GitBranch, GraduationCap, Mail, MapPin, Menu, School, Sparkles, Terminal, Trophy,
  Users, X
} from "lucide-react";

const navItems = ["About", "Projects", "Experience", "Education", "Contact"];

const projects = [
  { number: "01", title: "AI powered research workspace", description: "An intelligent workspace for organizing research, extracting useful context, and turning scattered information into focused decisions.", tags: ["Python", "Agentic AI", "Automation"], tone: "violet" },
  { number: "02", title: "Database management system", description: "A practical database system built around clear data models, reliable queries, and the fundamentals that make software dependable.", tags: ["C++", "SQL", "Systems"], tone: "lime" },
  { number: "03", title: "CPU scheduling simulator", description: "An interactive simulator that makes operating system scheduling concepts tangible through clear visual feedback and comparative results.", tags: ["C++", "Algorithms", "Visualization"], tone: "blue" },
  { number: "04", title: "Full stack web platform", description: "A responsive web application with authentication, CRUD workflows, REST APIs, and a relational data layer built for real users.", tags: ["JavaScript", "REST APIs", "PostgreSQL"], tone: "orange" },
];

const experience = [
  { period: "2025 to 2026", role: "Web Development Intern", company: "HUM Network Ltd", detail: "Built responsive full stack interfaces, CRUD workflows, relational schemas, session authentication, and REST APIs." },
  { period: "2025", role: "Undergraduate Teaching Assistant", company: "FAST NUCES", detail: "Supported teaching and student learning across Multivariate Calculus and Ideology and Constitution of Pakistan." },
];

const volunteering = [
  { period: "Oct 2025 to Feb 2026", role: "Co Head, Computer Science Competitions", company: "PROCOM", detail: "Led competition delivery, problem design, technical logistics, and live operations for a major university technology event." },
  { period: "Apr 2025", role: "Assessment Management", company: "Developers Day, ACM NUCES", detail: "Managed assessments and general competitions while keeping technical operations calm and dependable." },
  { period: "Mar 2025", role: "Outreach Volunteer", company: "Alkhidmat Karachi", detail: "Supported public engagement and outreach activities with a focus on community participation." },
  { period: "2023", role: "Community Service Volunteer", company: "Dar ul Sukun", detail: "Coordinated class visits and supported child welfare programs through direct community service." },
];

const skills = ["C and C++", "Python", "Java", "JavaScript", "SQL and Databases", "REST APIs", "Git and GitHub", "Systems Programming", "Automation", "Agentic AI"];

function MotionField() {
  const [point, setPoint] = useState({ x: 50, y: 40 });
  return (
    <div className="motion-field" aria-hidden="true" onPointerMove={(event) => setPoint({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 })}>
      <div className="field-grid" />
      <div className="ink-ribbon ribbon-one" style={{ transform: `translate(${(point.x - 50) * 0.12}px, ${(point.y - 50) * 0.12}px) rotate(-8deg)` }} />
      <div className="ink-ribbon ribbon-two" style={{ transform: `translate(${(point.x - 50) * -0.08}px, ${(point.y - 50) * -0.08}px) rotate(9deg)` }} />
      <div className="ink-orb" style={{ left: `${point.x}%`, top: `${point.y}%` }} />
    </div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const counted = sessionStorage.getItem("za-visit-counted");
    const loadVisits = async () => {
      const supabase = getSupabase();
      if (!supabase) return;
      if (!counted) {
        const { data } = await supabase.rpc("increment_site_visit", { stat_id: "portfolio" });
        if (typeof data === "number") setVisits(data);
        sessionStorage.setItem("za-visit-counted", "true");
      } else {
        const { data } = await supabase.from("site_stats").select("visits").eq("id", "portfolio").maybeSingle();
        if (typeof data?.visits === "number") setVisits(data.visits);
      }
    };
    loadVisits().catch(() => setVisits(null));
  }, []);

  const scrollTo = (id: string) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <main className="site-shell">
      <MotionField />
      <header className="site-header glass-panel">
        <a className="wordmark" href="#about" aria-label="Zubair Ahmed home"><span>ZA</span><b>creative systems</b></a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => <button key={item} onClick={() => scrollTo(item)}>{item}</button>)}
          <a href="/ZA_Resume.pdf" download="Zubair Ahmed Resume.pdf" className="nav-resume">Resume <Download size={14} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="about" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for meaningful work</p>
          <h1>Ideas into<br /><em>useful systems.</em></h1>
          <p className="hero-intro">I am Zubair Ahmed, a Computer Science undergraduate and software developer focused on systems, applied AI, and the details that make technology feel effortless.</p>
          <div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo("projects")}>Explore projects <ArrowUpRight size={17} /></button><a className="button button-quiet" href="mailto:zahmad2812@gmail.com">Let us talk <Mail size={16} /></a></div>
          <div className="hero-meta"><span><MapPin size={15} /> Karachi, Pakistan</span><span><Terminal size={15} /> CS at FAST NUCES</span></div>
        </div>
        <div className="hero-visual"><div className="portrait-frame"><Image src="/procom-event.jpg" alt="Zubair Ahmed at a technology event" fill priority sizes="(max-width: 768px) 88vw, 430px" /></div><div className="visual-caption"><span>01 / 04</span><span>Software, AI, systems</span></div></div>
      </section>

      <div className="ticker" aria-label="Focus areas"><div className="ticker-track"><span>Software development</span><span>Applied artificial intelligence</span><span>Technical leadership</span><span>Systems thinking</span><span>Software development</span><span>Applied artificial intelligence</span></div></div>

      <section id="projects" className="section-wrap content-section"><div className="section-heading"><p className="eyebrow">Selected projects</p><h2>Built with curiosity<br />and purpose.</h2><p className="section-lede">Four projects that represent how I think: start with the problem, understand the system, then make the experience clear.</p></div><div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.number}><div className="project-number">{project.number}</div><div className="project-art"><Code2 size={32} /></div><div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ExternalLink className="card-arrow" size={18} /></article>)}</div></section>

      <section id="experience" className="section-wrap split-section"><div className="section-heading sticky-heading"><p className="eyebrow">Professional experience</p><h2>Learn by<br /><em>doing.</em></h2><p className="section-lede">Shipping software taught me to value ownership, clear communication, and outcomes that last beyond the launch.</p></div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.role}><span className="timeline-period">{item.period}</span><div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.detail}</p></div></article>)}</div></section>

      <section id="volunteering" className="section-wrap split-section volunteer-section"><div className="section-heading sticky-heading"><p className="eyebrow">Volunteer work</p><h2>People make<br /><em>the work.</em></h2><p className="section-lede">Leadership and community work shaped how I collaborate, organize, and help a team move with confidence.</p></div><div className="timeline">{volunteering.map((item) => <article className="timeline-item" key={item.role}><span className="timeline-period">{item.period}</span><div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.detail}</p></div></article>)}</div></section>

      <section id="education" className="section-wrap content-section"><div className="section-heading"><p className="eyebrow">Education and foundations</p><h2>Curiosity,<br /><em>structured.</em></h2></div><div className="education-grid"><article className="education-card featured"><GraduationCap size={24} /><p className="card-kicker">2023 to 2027</p><h3>BS Computer Science</h3><p>FAST NUCES, Karachi</p><span>Current undergraduate</span></article><article className="education-card"><School size={22} /><p className="card-kicker">2022 to 2023</p><h3>A Levels</h3><p>Cedar College, Karachi</p><span>Computer Science, Mathematics, Physics, Chemistry</span></article><article className="education-card"><BookOpen size={22} /><p className="card-kicker">2019 to 2020</p><h3>O Levels</h3><p>Montessori Complex Cambridge School</p><span>Two A star grades and five A grades</span></article></div></section>

      <section id="skills" className="section-wrap skills-section"><div className="skills-intro"><p className="eyebrow">Toolkit</p><h2>Enough tools<br />to make ideas real.</h2></div><div className="skills-content"><p>I enjoy moving between abstraction levels, from architecture and databases to the interface a person actually touches.</p><div className="skill-cloud">{skills.map((skill) => <span key={skill}><Code2 size={14} />{skill}</span>)}</div></div></section>

      <section className="section-wrap recognition"><div><p className="eyebrow">Recognition</p><h2>Earned in<br /><em>the room.</em></h2></div><div className="awards"><div><Trophy /><p><strong>Star Performer Award</strong><br />PROCOM 25, Management and Leadership</p></div><div><Award /><p><strong>Star Performer Award</strong><br />Developers Day 25, Assessment and General Management</p></div><div><Sparkles /><p><strong>Achievement Award</strong><br />Integration Bee 2023, Mathematics Competition</p></div></div></section>

      <section id="contact" className="contact-section"><div className="section-wrap contact-inner"><div><p className="eyebrow">Have a good problem?</p><h2>Let us make<br /><em>something useful.</em></h2></div><a className="contact-email" href="mailto:zahmad2812@gmail.com">zahmad2812@gmail.com <ArrowUpRight /></a></div></section>

      <footer className="footer section-wrap"><div className="footer-brand"><span>ZA</span><p>Software developer building at the intersection of systems, AI, and people.</p></div><div className="footer-links"><a href="https://github.com/zahmed02" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a><a href="https://linkedin.com/in/zubair-ahmed-448041344" target="_blank" rel="noreferrer"><ArrowUpRight size={17} /> LinkedIn</a><a href="mailto:zahmad2812@gmail.com"><Mail size={17} /> Email</a></div><div className="footer-bottom"><span>Copyright {new Date().getFullYear()} Zubair Ahmed</span><span className="visitor-count"><Users size={14} /> {visits === null ? "Visitors counted privately" : `${visits.toLocaleString()} visits`}</span><span>Designed and built with care</span></div></footer>
    </main>
  );
}
