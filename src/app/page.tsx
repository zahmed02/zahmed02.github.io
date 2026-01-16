"use client";

import { useState, useEffect, useMemo } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaExpand,
  FaTimes,
} from "react-icons/fa";
import { SiCodesignal, SiSololearn, SiHackerrank } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

export default function Page() {
  const [activeSection, setActiveSection] = useState("about");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(
    () => [
      { id: "about", label: "About", icon: <FaGraduationCap /> },
      { id: "education", label: "Education", icon: <FaGraduationCap /> },
      { id: "experience", label: "Experience", icon: <FaBriefcase /> },
      { id: "skills", label: "Skills", icon: <FaCode /> },
      {
        id: "certifications",
        label: "Certifications",
        icon: <FaCertificate />,
      },
      { id: "contact", label: "Contact", icon: <FaEnvelope /> },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll
      const sections = navItems.map((item) => item.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-animated-gradient text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-indigo-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Fixed Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg shadow-purple-900/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-center items-center space-x-1 md:space-x-4 flex-wrap">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? "bg-purple-900/60 text-purple-300 border border-purple-700/50"
                    : "text-gray-300 hover:bg-gray-900/50 hover:text-white border border-transparent"
                }`}
              >
                <span className="hidden md:inline">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <section className="mb-20 grid md:grid-cols-2 gap-8 items-center">
          {/* Image Card */}
          <div className="dark-card rounded-2xl p-6 border border-gray-800 shadow-xl">
            <div className="relative group cursor-pointer" onClick={openModal}>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-purple-700/50 shadow-lg shadow-purple-900/30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 z-10"></div>
                <Image
                  src="/procom-event.jpg"
                  alt="Zubair Ahmed - Professional Photo"
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-2xl">
                  <div className="text-center p-4">
                    <FaExpand className="text-4xl text-white mx-auto mb-2" />
                    <p className="text-white font-semibold">Click to View</p>
                  </div>
                </div>
              </div>

              {/* Name Display - Only here */}
              <div className="mt-6 text-center">
                <h1 className="text-4xl font-bold text-gradient">
                  Zubair Ahmed
                </h1>
                <div className="mt-2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="dark-card rounded-2xl p-8 border border-gray-800 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Software Developer
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              CS undergrad proficient in database management, system-level
              applications, game engines, automation tools, &amp; simulators.
              Skilled in high &amp; low-level programming. Focused on building
              efficient, scalable low-level solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <a
                href="https://linkedin.com/in/zubair-ahmed-448041344"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-purple-900/50 hover:bg-purple-800/70 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-purple-700/30"
              >
                <FaLinkedin className="text-xl" /> LinkedIn
              </a>
              <a
                href="https://github.com/zahmed02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-900/50 hover:bg-gray-800/70 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-700/30"
              >
                <FaGithub className="text-xl" /> GitHub
              </a>
              <a
                href="/resume.pdf"
                className="flex items-center justify-center gap-2 bg-blue-900/50 hover:bg-blue-800/70 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-blue-700/30"
              >
                <FaDownload className="text-xl" /> Resume
              </a>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800/50">
              <div className="flex flex-wrap items-center justify-center gap-4 text-gray-300 text-sm">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-purple-400" /> Karachi,
                  Pakistan
                </span>
                <span className="flex items-center gap-2">
                  <FaEnvelope className="text-purple-400" />{" "}
                  zahmad2812@gmail.com
                </span>
                <span className="flex items-center gap-2">
                  <FaPhone className="text-purple-400" /> +92-320-3060747
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <div className="dark-card rounded-2xl p-8 border border-gray-800 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-purple-400" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">
                  Background
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing BS in Computer Science at FAST-NUCES
                  Karachi. Passionate about systems programming, database
                  management, and building efficient software solutions.
                  Experienced in both high-level and low-level programming with
                  a focus on performance optimization.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-900/70 rounded-lg hover:bg-gray-800/70 transition-colors">
                    <FaPhone className="text-purple-400" />
                    <span>+92-320-3060747</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-900/70 rounded-lg hover:bg-gray-800/70 transition-colors">
                    <FaEnvelope className="text-purple-400" />
                    <span>zahmad2812@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-900/70 rounded-lg hover:bg-gray-800/70 transition-colors">
                    <FaMapMarkerAlt className="text-purple-400" />
                    <span>Karachi, Sindh 75290</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20">
          <div className="dark-card rounded-2xl p-8 border border-gray-800 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-purple-400" />
              Education
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Bachelor of Science in Computer Science",
                  institution: "FAST-NUCES, Karachi",
                  period: "Sep 2023 – Jun 2027",
                  color: "border-l-purple-500",
                },
                {
                  title: "IGCSE A Levels (Mathematics & CS)",
                  institution: "Cedar College, Karachi",
                  period: "Oct 2022 – Jun 2023",
                  color: "border-l-blue-500",
                },
                {
                  title: "IGCSE O Levels (General Studies)",
                  institution:
                    "Montessori Complex Cambridge School (MCCS), Karachi",
                  period: "May 2019 – Jun 2020 | Score: 2A*, 5A",
                  color: "border-l-indigo-500",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className={`bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 ${edu.color}`}
                >
                  <h3 className="text-xl font-semibold text-white">
                    {edu.title}
                  </h3>
                  <p className="text-purple-300 mt-2">{edu.institution}</p>
                  <p className="text-gray-400 mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <div className="dark-card rounded-2xl p-8 border border-gray-800 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaBriefcase className="text-purple-400" />
              Experience
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Web Development Intern",
                  company: "HUM Network Ltd",
                  period: "June 2025 – July 2025",
                  points: [
                    "Built responsive full-stack websites with interactive UIs, CRUD functionality",
                    "Implemented relational database schemas and session-based authentication",
                    "Designed RESTful APIs for data exchange across various systems",
                  ],
                },
                {
                  title: "Undergraduate Teaching Assistant",
                  company: "FAST-NUCES",
                  period: "Feb 2025 – May 2025",
                  points: [
                    "Assisted in teaching MT-1008 Multivariate Calculus",
                    "Assisted in teaching SS-1013 Ideology & Constitution of Pakistan",
                  ],
                },
                {
                  title: "Assessment Management & Technical Operations",
                  company: "PROCOM & Developer's Day",
                  period: "Feb 2025 – Apr 2025",
                  points: [
                    "Designed competitive programming problems and MCQs",
                    "Managed technical logistics and server setup",
                    "Performed live troubleshooting during events",
                  ],
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-purple-300">{exp.company}</p>
                    </div>
                    <span className="bg-purple-900/50 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <div className="dark-card rounded-2xl p-8 border border-gray-800 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaCode className="text-purple-400" />
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Languages",
                  skills: [
                    "C/C++",
                    "C#",
                    "Python",
                    "Java",
                    "JavaScript/TypeScript",
                    "Go",
                    "R",
                    "Assembly(x86)",
                    "Bash/Shell",
                  ],
                },
                {
                  title: "Databases",
                  skills: ["SQL", "MongoDB", "PostgreSQL", "MySQL", "NoSQL"],
                },
                {
                  title: "Web Technologies",
                  skills: [
                    "HTML",
                    "CSS",
                    "TailwindCSS",
                    "React",
                    "Next.js",
                    "PHP",
                    "jQuery",
                  ],
                },
                {
                  title: "Data Science & ML",
                  skills: [
                    "Pandas",
                    "NumPy",
                    "Scikit-Learn",
                    "R",
                    "dplyr",
                    "ggplot2",
                    "tidyr",
                  ],
                },
                {
                  title: "Infrastructure & Tools",
                  skills: [
                    "Ubuntu-Linux",
                    "Git",
                    "LaTeX",
                    "Irvine32",
                    "System Design",
                  ],
                },
                {
                  title: "Core Concepts",
                  skills: [
                    "OOP",
                    "Functional Programming",
                    "Data Structures",
                    "Algorithms",
                    "LLMs",
                    "AI/ML",
                    "Cybersecurity",
                  ],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-300 group-hover:text-purple-400 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-800/70 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-20">
          <div className="dark-card rounded-2xl p-8 border border-gray-800 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaCertificate className="text-purple-400" />
              Certifications & Learning Platforms
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "CodeSignal",
                  url: "https://codesignal.com/learn/course-paths",
                  icon: <SiCodesignal />,
                },
                {
                  name: "SoloLearn",
                  url: "https://www.sololearn.com/en/profile/27122128",
                  icon: <SiSololearn />,
                },
                {
                  name: "Google Skillshop",
                  url: "https://skillshop.docebosaas.com/learn",
                  icon: <TbWorld />,
                },
                {
                  name: "LIFE Global",
                  url: "https://www.life-global.org/",
                  icon: <TbWorld />,
                },
                {
                  name: "HackerRank",
                  url: "https://www.hackerrank.com/dashboard",
                  icon: <SiHackerrank />,
                },
                {
                  name: "Cisco NetAcad",
                  url: "https://www.netacad.com/",
                  icon: <TbWorld />,
                },
              ].map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 hover:border-purple-500 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl text-purple-400 group-hover:scale-110 transition-transform">
                      {platform.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {platform.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {platform.name === "Google Skillshop"
                      ? "Google's official certification platform"
                      : platform.name === "SoloLearn"
                      ? "Interactive coding tutorials and certifications"
                      : platform.name === "CodeSignal"
                      ? "Programming courses and certification paths"
                      : platform.name === "LIFE Global"
                      ? "Leadership and professional development"
                      : platform.name === "HackerRank"
                      ? "Coding challenges and skill assessments"
                      : "Networking and IT certifications"}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="dark-card rounded-2xl p-8 border border-gray-800 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaEnvelope className="text-purple-400" />
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  type: "Email",
                  value: "zahmad2812@gmail.com",
                  icon: <FaEnvelope />,
                  href: "mailto:zahmad2812@gmail.com",
                },
                {
                  type: "LinkedIn",
                  value: "Connect professionally",
                  icon: <FaLinkedin />,
                  href: "https://linkedin.com/in/zubair-ahmed-448041344",
                },
                {
                  type: "GitHub",
                  value: "View my projects",
                  icon: <FaGithub />,
                  href: "https://github.com/zahmed02",
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.type !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-800/70 transition-all duration-300 group hover:scale-105 border border-gray-800/50 hover:border-purple-500/50"
                >
                  <div className="text-5xl text-purple-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {contact.type}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {contact.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Additional Contact Info */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
                <h4 className="text-lg font-semibold mb-4 text-purple-300">
                  Quick Contact
                </h4>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    Feel free to reach out for collaborations or just a friendly
                    hello!
                  </p>
                  <p className="text-gray-400 text-sm">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
                <h4 className="text-lg font-semibold mb-4 text-purple-300">
                  Availability
                </h4>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    🟢 Open to internship opportunities
                  </p>
                  <p className="text-gray-300">
                    🟢 Available for freelance projects
                  </p>
                  <p className="text-gray-300">
                    🟢 Accepting mentorship requests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800/50 text-center text-gray-400">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            <p className="text-lg">
              © {new Date().getFullYear()} Zubair Ahmed. All rights reserved.
            </p>
            <p className="text-gray-500">
              Built with Next.js & Tailwind CSS | Deployed on GitHub Pages
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://github.com/zahmed02/zahmed02.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                Source Code
              </a>
              <a
                href="/resume.pdf"
                className="hover:text-purple-300 transition-colors"
              >
                Download Resume
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-purple-300 transition-colors"
              >
                Back to Top
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* Image Modal - Smaller view */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-lg w-full bg-gray-900/90 rounded-2xl border border-purple-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Profile Image
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="relative w-full h-64 rounded-lg overflow-hidden border border-gray-800">
                <Image
                  src="/procom-event.jpg"
                  alt="Zubair Ahmed - Professional Photo"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center mt-4">
                <p className="text-lg font-semibold text-white">Zubair Ahmed</p>
                <p className="text-sm text-gray-400">Software Developer</p>
                <div className="mt-2">
                  <button
                    onClick={closeModal}
                    className="mt-4 px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
