"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getSupabase } from "../lib/supabase-browser";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Code2,
  Download,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  School,
  Terminal,
  Trophy,
  Users,
  X,
  Briefcase,
  Heart,
} from "lucide-react";

const navItems = ["About", "Experience", "Projects", "Education", "Contact"];

const projects = [
  {
    number: "01",
    title: "Contextual Multi-Arm Recommendation System",
    description:
      "AI-driven shopping decision engine integrating A* search and contextual bandits for adaptive personalization.",
    tags: ["Python", "AI/ML", "Reinforcement Learning", "Flask"],
    link: "#",
  },
  {
    number: "02",
    title: "Backend Performance Optimization",
    description:
      "Demonstrated indexing, query optimization, and async patterns with 80-90% speedup using ASP.NET Core and Oracle.",
    tags: ["C#", "ASP.NET Core", "Oracle", "Architecture"],
    link: "#",
  },
  {
    number: "03",
    title: "Graphics DSL Compiler Targeting x86 Assembly",
    description:
      "End-to-end compiler with lexing, parsing, semantic analysis, and machine-code generation for executable graphics.",
    tags: ["Rust", "Compiler Design", "x86 Assembly", "MASM"],
    link: "#",
  },
  {
    number: "04",
    title: "Microservices Network Manager",
    description:
      "FastAPI gateway with round-robin load balancing, health monitoring, and real-time WebSocket ChatOps.",
    tags: ["Python", "FastAPI", "WebSockets", "Architecture"],
    link: "#",
  },
];

const experience = [
  {
    period: "Jul 2026 to Aug 2026",
    role: "Artificial Intelligence Intern",
    company: "Patel Hospital",
    detail:
      "Created pneumonia detection model using CNN and ViT with Grad-CAM. Built LangGraph agent for patient triage and bed allocation. Developed multilingual LLM assistant for symptom assessment.",
  },
  {
    period: "Jan 2026 to Mar 2026",
    role: "Software Developer",
    company: "SHAHFAY",
    detail:
      "Contributed to full SDLC from system design and database architecture to deployment and quality assurance.",
  },
  {
    period: "Jun 2025 to Jul 2025",
    role: "Full-Stack Development Intern",
    company: "HUM Network Ltd",
    detail:
      "Built responsive full-stack websites with interactive UIs, CRUD functionality, relational database schemas, and RESTful APIs.",
  },
  {
    period: "Feb 2025 to Present",
    role: "Undergraduate Teaching Assistant",
    company: "FAST-NUCES",
    detail:
      "Teaching and mentoring for Multivariate Calculus and Ideology & Constitution of Pakistan.",
  },
];

const volunteering = [
  {
    period: "Oct 2025 to Feb 2026",
    role: "Co-Head, Computer Science Competitions",
    company: "PROCOM",
    detail:
      "Led competition delivery, problem design, technical logistics, and live operations for a major university technology event.",
  },
  {
    period: "Apr 2025",
    role: "Assessment Management",
    company: "Developers Day (ACM NUCES)",
    detail:
      "Managed assessments and general competitions with focus on technical operations.",
  },
  {
    period: "Mar 2025",
    role: "Outreach Volunteer",
    company: "Alkhidmat Karachi",
    detail: "Supported public engagement and outreach activities.",
  },
  {
    period: "Jun 2023 to Jul 2023",
    role: "Community Service Volunteer",
    company: "Dar ul Sukun",
    detail:
      "Coordinated class visits and supported child welfare programs through direct community service.",
  },
];

const skills = [
  "JavaScript/TypeScript",
  "Python",
  "C/C++",
  "Java",
  "Next.js",
  "React.js",
  "ASP.NET Core",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Docker",
  "Git",
  "AWS",
  "AI/ML",
];

const awards = [
  {
    title: "Star Performer Award",
    event: "PROCOM 25",
    category: "Management & Leadership",
    icon: Trophy,
  },
  {
    title: "Star Performer Award",
    event: "Developers Day 25",
    category: "Assessment & General Management",
    icon: Award,
  },
  {
    title: "Achievement Award",
    event: "Integration Bee 2023",
    category: "Mathematics Competition",
    icon: Trophy,
  },
];

function WaterFlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.fillStyle = "#08090b";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(245, 245, 240, 0.08)";
      ctx.lineWidth = 1.5;

      const waveCount = 5;
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const phase = (time * 0.0004 + i * 0.4) * Math.PI;
        const amplitude = 35 + i * 8;
        const frequency = 0.006 + i * 0.001;

        let firstPoint = true;
        for (let x = -50; x < width + 50; x += 8) {
          const y =
            height * 0.4 +
            i * 45 +
            Math.sin(x * frequency + phase) * amplitude +
            Math.sin(x * frequency * 0.5 + phase * 0.7) * (amplitude * 0.4);

          if (firstPoint) {
            ctx.moveTo(x, y);
            firstPoint = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      time++;
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visits, setVisits] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const counted = sessionStorage.getItem("za-visit-counted");
    const loadVisits = async () => {
      const supabase = getSupabase();
      if (!supabase) return;

      if (!counted) {
        const { data } = await supabase.rpc("increment_site_visit", {
          stat_id: "portfolio",
        });
        if (typeof data === "number") setVisits(data);
        sessionStorage.setItem("za-visit-counted", "true");
      } else {
        const { data } = await supabase
          .from("site_stats")
          .select("visits")
          .eq("id", "portfolio")
          .maybeSingle();
        if (typeof data?.visits === "number") setVisits(data.visits);
      }
    };
    loadVisits().catch(() => setVisits(null));
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <main className="relative bg-ink text-paper overflow-hidden">
      <WaterFlowBackground />

      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-lime via-lime to-transparent z-50"
        style={{ width: progress }}
      />

      <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#about"
            className="text-sm font-bold tracking-widest uppercase flex items-center gap-2"
          >
            <span className="text-lime">ZA</span>
            <span className="text-muted">Zubair Ahmed</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-xs uppercase tracking-wide text-muted hover:text-paper transition-colors"
              >
                {item}
              </button>
            ))}
            <a
              href="/ZA_Resume.pdf"
              download="Zubair Ahmed Resume.pdf"
              className="flex items-center gap-2 text-xs uppercase tracking-wide px-3 py-2 rounded-lg border border-line hover:bg-white/5 transition-colors"
            >
              Resume <Download size={13} />
            </a>
          </nav>

          <button
            className="md:hidden text-paper"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-line bg-ink/95 backdrop-blur-lg p-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-sm uppercase tracking-wide text-muted hover:text-paper transition-colors text-left"
              >
                {item}
              </button>
            ))}
            <a
              href="/ZA_Resume.pdf"
              download="Zubair Ahmed Resume.pdf"
              className="flex items-center gap-2 text-sm uppercase tracking-wide px-3 py-2 rounded-lg border border-line hover:bg-white/5 transition-colors"
            >
              Resume <Download size={14} />
            </a>
          </div>
        )}
      </header>

      <section id="about" className="relative pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-lime font-semibold mb-4">
                Available for meaningful work
              </p>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight">
                Software systems and{" "}
                <span className="text-lime italic">applied AI</span>.
              </h1>
            </div>
            <p className="text-base text-muted leading-relaxed max-w-lg">
              Computer Science undergraduate at FAST-NUCES focused on building
              scalable applications, exploring AI, and systems that make sense to
              the people who use them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ y: -3 }}
                onClick={() => scrollTo("projects")}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-lime text-ink font-semibold text-sm uppercase tracking-wide hover:shadow-lg hover:shadow-lime/30 transition-all"
              >
                Explore Work <ArrowUpRight size={16} />
              </motion.button>
              <a
                href="mailto:zahmad2812@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-line text-paper hover:bg-white/5 transition-colors font-semibold text-sm uppercase tracking-wide"
              >
                Get in Touch <Mail size={16} />
              </a>
            </div>
            <div className="flex flex-col gap-2 pt-4 text-xs text-muted uppercase tracking-wide">
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Karachi, Pakistan
              </span>
              <span className="flex items-center gap-2">
                <Terminal size={14} /> CS at FAST-NUCES
              </span>
            </div>
          </Reveal>

          <Reveal className="relative h-96 rounded-2xl overflow-hidden border border-line">
            <Image
              src="/procom-event.jpg"
              alt="Zubair Ahmed"
              fill
              className="object-cover filter grayscale contrast-110"
              priority
            />
          </Reveal>
        </div>
      </section>

      <section id="experience" className="relative py-24 px-6 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <p className="text-xs uppercase tracking-widest text-lime font-semibold mb-3">
                Professional Journey
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Experience</h2>
              <p className="text-muted max-w-2xl">
                Shipping software taught me to value ownership, clear communication,
                and outcomes that last beyond launch.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            {experience.map((item, idx) => (
              <Reveal key={idx} className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <p className="text-xs uppercase tracking-widest text-lime font-semibold">
                    {item.period}
                  </p>
                </div>
                <div className="md:col-span-3 space-y-2 pb-8 border-b border-line/50">
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-sm text-lime font-medium">{item.company}</p>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="volunteering" className="relative py-24 px-6 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <p className="text-xs uppercase tracking-widest text-lime font-semibold mb-3">
                Community & Leadership
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Volunteer Work</h2>
              <p className="text-muted max-w-2xl">
                Leadership and community work shaped how I collaborate, organize, and
                help teams move with confidence.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            {volunteering.map((item, idx) => (
              <Reveal key={idx} className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <p className="text-xs uppercase tracking-widest text-lime font-semibold">
                    {item.period}
                  </p>
                </div>
                <div className="md:col-span-3 space-y-2 pb-8 border-b border-line/50">
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-sm text-lime font-medium">{item.company}</p>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-24 px-6 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <p className="text-xs uppercase tracking-widest text-lime font-semibold mb-3">
                Selected Work
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Projects</h2>
              <p className="text-muted max-w-2xl">
                Four projects that demonstrate problem-solving, technical depth, and
                the ability to ship real solutions.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <Reveal
                key={idx}
                className="group relative p-6 rounded-2xl border border-line hover:border-lime/50 transition-all duration-300 hover:bg-white/5"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-xs uppercase tracking-widest text-lime font-bold">
                    {project.number}
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-2 py-1 rounded-lg bg-white/5 text-paper border border-line/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="relative py-24 px-6 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <p className="text-xs uppercase tracking-widest text-lime font-semibold mb-3">
                Background
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Education</h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal className="p-8 rounded-2xl border border-lime/30 bg-lime/5">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={24} className="text-lime" />
                <span className="text-xs uppercase tracking-widest text-lime font-bold">
                  Aug 2023 to Jun 2027
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                BS Computer Science
              </h3>
              <p className="text-lime font-medium mb-3">
                National University of Computer and Emerging Sciences (FAST-NUCES)
              </p>
              <p className="text-sm text-muted">
                Electives: Agentic AI, Computer Architecture, Operations Research,
                Software Project Management
              </p>
            </Reveal>

            <Reveal className="p-8 rounded-2xl border border-line hover:border-lime/30 transition-all hover:bg-white/5">
              <div className="flex items-center gap-3 mb-4">
                <School size={22} className="text-paper" />
                <span className="text-xs uppercase tracking-widest text-lime font-bold">
                  Oct 2022 to Jun 2023
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">A Levels</h3>
              <p className="text-lime font-medium mb-3">Cedar College, Karachi</p>
              <p className="text-sm text-muted">
                Computer Science, Mathematics, Physics, Chemistry
              </p>
            </Reveal>

            <Reveal className="p-8 rounded-2xl border border-line hover:border-lime/30 transition-all hover:bg-white/5">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={22} className="text-paper" />
                <span className="text-xs uppercase tracking-widest text-lime font-bold">
                  2019 to 2022
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">O Levels</h3>
              <p className="text-lime font-medium mb-3">
                Montessori Complex Cambridge School, Karachi
              </p>
              <p className="text-sm text-muted">
                Mathematics, Additional Mathematics, Computer Science, Physics,
                Chemistry, English Language, Islamiat, Urdu, Pakistan Studies
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-24 px-6 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest text-lime font-semibold mb-3">
                Technical Toolkit
              </p>
              <h2 className="text-4xl md:text-5xl font-serif">Skills</h2>
            </div>
          </Reveal>

          <Reveal className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full border border-lime/30 text-paper text-sm font-medium hover:bg-lime/10 hover:border-lime/60 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative py-24 px-6 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest text-lime font-semibold mb-3">
                Recognition
              </p>
              <h2 className="text-4xl md:text-5xl font-serif">Awards</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, idx) => {
              const Icon = award.icon;
              return (
                <Reveal
                  key={idx}
                  className="p-6 rounded-2xl border border-line hover:border-lime/30 hover:bg-white/5 transition-all"
                >
                  <Icon size={24} className="text-lime mb-4" />
                  <h3 className="font-semibold mb-1">{award.title}</h3>
                  <p className="text-xs text-lime font-medium mb-2">
                    {award.event}
                  </p>
                  <p className="text-sm text-muted">{award.category}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24 px-6 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-lime font-semibold mb-4">
                Get in touch
              </p>
              <h2 className="text-4xl md:text-5xl font-serif">
                Let us make something <span className="text-lime italic">useful</span>.
              </h2>
            </div>
            <a
              href="mailto:zahmad2812@gmail.com"
              className="inline-flex items-center gap-2 text-2xl md:text-3xl font-serif hover:text-lime transition-colors group"
            >
              zahmad2812@gmail.com
              <ArrowUpRight
                size={24}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="relative py-12 px-6 border-t border-line">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted">
          <div>
            <span className="text-lime font-bold">ZA</span> Software developer
            building at the intersection of systems, AI, and people.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/zahmed02"
              target="_blank"
              rel="noreferrer"
              className="hover:text-paper transition-colors flex items-center gap-1"
            >
              <GitBranch size={14} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/zubair-ahmed-448041344"
              target="_blank"
              rel="noreferrer"
              className="hover:text-paper transition-colors flex items-center gap-1"
            >
              <ArrowUpRight size={14} /> LinkedIn
            </a>
            <a
              href="mailto:zahmad2812@gmail.com"
              className="hover:text-paper transition-colors flex items-center gap-1"
            >
              <Mail size={14} /> Email
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span>Copyright {new Date().getFullYear()}</span>
            <span className="flex items-center gap-1 text-lime">
              <Users size={13} />{" "}
              {visits === null
                ? "Visitors counted privately"
                : `${visits.toLocaleString()} visits`}
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
