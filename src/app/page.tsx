"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getSupabase } from "../lib/supabase-browser";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Code2,
  Download,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  School,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
} from "lucide-react";

const navItems = ["About", "Work", "Education", "Skills", "Contact"];

const experience = [
  { period: "2025 — 2026", role: "Co-Head, Computer Science Competitions", company: "PROCOM", detail: "Led competition delivery, problem design, technical logistics, and live operations for a major university technology event." },
  { period: "2025", role: "Web Development Intern", company: "HUM Network Ltd", detail: "Built responsive full-stack interfaces, CRUD workflows, relational schemas, session authentication, and REST APIs." },
  { period: "2025", role: "Assessment & Technical Operations", company: "Developers' Day — ACM NUCES", detail: "Managed assessments, competition logistics, server setup, and technical troubleshooting under live event pressure." },
  { period: "2025", role: "Undergraduate Teaching Assistant", company: "FAST-NUCES", detail: "Supported teaching and student learning across Multivariate Calculus and Ideology & Constitution of Pakistan." },
];

const projects = [
  { number: "01", title: "Systems-minded software", description: "Building practical tools across database management, automation, simulators, and interactive applications — with performance and reliability in mind.", tags: ["C++", "Python", "SQL"] },
  { number: "02", title: "Applied AI exploration", description: "Exploring agentic artificial intelligence, intelligent workflows, and the engineering patterns that turn models into useful products.", tags: ["Agentic AI", "APIs", "Research"] },
  { number: "03", title: "Technical leadership", description: "Designing the systems behind competitions and events: clear assessments, dependable infrastructure, and calm execution when it matters.", tags: ["Leadership", "Operations", "Problem Solving"] },
];

const skills = ["C / C++", "Python", "Java", "JavaScript", "SQL & Databases", "REST APIs", "Git & GitHub", "Systems Programming", "Automation", "Agentic AI"];

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
        return;
      }
      const { data } = await supabase.from("site_stats").select("visits").eq("id", "portfolio").maybeSingle();
      if (typeof data?.visits === "number") setVisits(data.visits);
    };
    loadVisits().catch(() => setVisits(null));
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#about" aria-label="Zubair Ahmed home"><span>ZA</span> / portfolio</a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => <button key={item} onClick={() => scrollTo(item)}>{item}</button>)}
          <a href="/ZA_Resume.pdf" download="Zubair_Ahmed_Resume.pdf" className="nav-resume">Resume <Download size={14} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="about" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for meaningful work</p>
          <h1>Building useful<br /><em>systems</em> with intent.</h1>
          <p className="hero-intro">I&apos;m Zubair Ahmed — a Computer Science undergraduate and software developer focused on systems, applied AI, and the details that make technology work.</p>
          <div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo("work")}>View selected work <ArrowUpRight size={17} /></button><a className="button button-quiet" href="mailto:zahmad2812@gmail.com">Let&apos;s talk <Mail size={16} /></a></div>
          <div className="hero-meta"><span><MapPin size={15} /> Karachi, Pakistan</span><span><Terminal size={15} /> CS @ FAST-NUCES</span></div>
        </div>
        <div className="hero-portrait-wrap"><div className="portrait-frame"><Image src="/procom-event.jpg" alt="Zubair Ahmed at a technology event" fill priority sizes="(max-width: 768px) 88vw, 390px" /></div><div className="portrait-note"><span>01 / 04</span><span>Software · AI · Systems</span></div></div>
      </section>

      <section className="ticker" aria-label="Focus areas"><div className="ticker-track"><span>Software development</span><span>Applied artificial intelligence</span><span>Technical leadership</span><span>Systems thinking</span><span>Software development</span><span>Applied artificial intelligence</span></div></section>

      <section id="work" className="section-wrap content-section"><div className="section-heading"><p className="eyebrow">Selected focus</p><h2>Work that compounds.</h2><p className="section-lede">A few threads running through my work — from writing code to creating the conditions for other people to do their best work.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ArrowUpRight className="card-arrow" size={20} /></article>)}</div></section>

      <section className="section-wrap split-section" id="experience"><div className="section-heading sticky-heading"><p className="eyebrow">Experience</p><h2>Learn by doing.</h2><p className="section-lede">Whether shipping software or running a competition, I care about ownership, clarity, and outcomes.</p></div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.role}><span className="timeline-period">{item.period}</span><div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.detail}</p></div></article>)}</div></section>

      <section id="education" className="section-wrap content-section"><div className="section-heading"><p className="eyebrow">Education & foundations</p><h2>Curiosity, structured.</h2></div><div className="education-grid"><article className="education-card featured"><GraduationCap size={24} /><p className="card-kicker">2023 — 2027</p><h3>BS Computer Science</h3><p>FAST-NUCES, Karachi</p><span>Current undergraduate</span></article><article className="education-card"><School size={22} /><p className="card-kicker">2022 — 2023</p><h3>A Levels</h3><p>Cedar College, Karachi</p><span>Computer Science · Mathematics · Physics · Chemistry</span></article><article className="education-card"><BookOpen size={22} /><p className="card-kicker">2019 — 2020</p><h3>O Levels</h3><p>Montessori Complex Cambridge School</p><span>2 A* and 5 A grades</span></article></div></section>

      <section id="skills" className="section-wrap skills-section"><div className="skills-intro"><p className="eyebrow">Toolkit</p><h2>Enough tools<br />to make ideas real.</h2></div><div className="skills-content"><p>I enjoy moving between abstraction levels — from architecture and databases to the interface a person actually touches.</p><div className="skill-cloud">{skills.map((skill) => <span key={skill}><Code2 size={14} />{skill}</span>)}</div></div></section>

      <section className="section-wrap recognition"><div><p className="eyebrow">Recognition</p><h2>Earned in the room.</h2></div><div className="awards"><div><Trophy /><p><strong>Star Performer Award</strong><br />PROCOM 25 · Management & Leadership</p></div><div><Award /><p><strong>Star Performer Award</strong><br />Developer&apos;s Day 25 · Assessment & General Management</p></div><div><Sparkles /><p><strong>Achievement Award</strong><br />Integration Bee 2023 · Mathematics Competition</p></div></div></section>

      <section id="contact" className="contact-section"><div className="section-wrap contact-inner"><div><p className="eyebrow">Have a good problem?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2></div><a className="contact-email" href="mailto:zahmad2812@gmail.com">zahmad2812@gmail.com <ArrowUpRight /></a></div></section>

      <footer className="footer section-wrap"><div className="footer-brand"><span>ZA</span><p>Software developer building at the intersection of systems, AI, and people.</p></div><div className="footer-links"><a href="https://github.com/zahmed02" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a><a href="https://linkedin.com/in/zubair-ahmed-448041344" target="_blank" rel="noreferrer"><ArrowUpRight size={17} /> LinkedIn</a><a href="mailto:zahmad2812@gmail.com"><Mail size={17} /> Email</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Zubair Ahmed</span><span className="visitor-count"><Users size={14} /> {visits === null ? "Visitors counted privately" : `${visits.toLocaleString()} visits`}</span><span>Designed & built with care</span></div></footer>
    </main>
  );
}
