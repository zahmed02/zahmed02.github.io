"use client";

import { useState, useEffect } from "react";
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
  FaExpand,
  FaTimes,
  FaArrowUp,
  FaBars,
  FaHome,
} from "react-icons/fa";
import { SiCodesignal, SiSololearn, SiHackerrank } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = [
        "about",
        "education",
        "experience",
        "skills",
        "certifications",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "about", label: "About", icon: <FaGraduationCap /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "certifications", label: "Certifications", icon: <FaCertificate /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const backgroundColors = [
    "from-gray-900 via-blue-900 to-gray-900",
    "from-gray-900 via-indigo-900 to-purple-900",
    "from-gray-900 via-blue-900 to-violet-900",
    "from-gray-900 via-slate-900 to-blue-900",
  ];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundColors.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${backgroundColors[bgIndex]} text-white p-4 md:p-8 transition-all duration-5000 ease-in-out`}
    >
      {/* Enhanced Background Glow Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 animate-pulse-glow"></div>
        <div className="absolute top-20 left-1/4 w-60 h-60 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      </div>

      {/* Interactive Navigation Bar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-4xl">
        <div className="bg-gradient-to-r from-black/90 via-blue-900/90 to-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-full shadow-2xl shadow-blue-900/30">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-cyan-300 hover:text-white transition-colors"
            >
              <FaBars size={24} />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-cyan-700 to-blue-700 text-white shadow-lg shadow-cyan-500/30"
                      : "text-gray-300 hover:text-white hover:bg-blue-800/30"
                  }`}
                >
                  <span className="text-sm">{section.icon}</span>
                  <span className="text-sm font-medium">{section.label}</span>
                </button>
              ))}
            </div>

            {/* Logo/Home */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-800 to-blue-800 hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              <FaHome className="text-white" />
              <span className="hidden md:inline text-white font-medium">
                Home
              </span>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden px-6 pb-4 space-y-2 animate-slideDown">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-cyan-700 to-blue-700 text-white"
                      : "text-gray-300 hover:text-white hover:bg-blue-800/30"
                  }`}
                >
                  <span>{section.icon}</span>
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto pt-24">
        {/* Hero Section with Interactive Image */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Interactive Image Container */}
            <div className="relative group">
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400/80 shadow-2xl shadow-cyan-500/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-cyan-500/50 group-hover:border-cyan-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-800/20 z-10"></div>
                <Image
                  src="/procom-event.jpg"
                  alt="Zubair Ahmed - Professional Photo"
                  fill
                  className="object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 14rem, 16rem"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 rounded-full">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                  >
                    <FaExpand className="text-white" />
                    <span className="text-white font-semibold">View Image</span>
                  </button>
                </div>
              </div>

              {/* Name Display - Only Once */}
              <div className="mt-6 text-center">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Zubair Ahmed
                </h1>
                <p className="text-gray-400 mt-2">
                  Systems Software Engineer & Full-Stack Developer
                </p>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Building
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                  Efficient Systems
                </span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                CS undergrad specializing in high-performance systems, database
                architecture, and full-stack development. Passionate about
                creating scalable solutions with modern technologies and
                efficient algorithms.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/zubair-ahmed-448041344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20"
                >
                  <FaLinkedin className="text-xl" /> Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/zahmed02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/10"
                >
                  <FaGithub className="text-xl" /> View Projects
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 image-modal">
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <div className="relative z-50 max-w-4xl max-h-[90vh] animate-float">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-cyan-300 transition-colors"
              >
                <FaTimes size={32} />
              </button>
              <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30">
                <Image
                  src="/procom-event.jpg"
                  alt="Zubair Ahmed - Full View"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover-card">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-cyan-400" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
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

              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/80 transition-colors">
                    <FaPhone className="text-cyan-400" />
                    <span>+92-320-3060747</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/80 transition-colors">
                    <FaEnvelope className="text-cyan-400" />
                    <span>zahmad2812@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/80 transition-colors">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    <span>Karachi, Sindh 75290</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-cyan-400" />
            Education
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Bachelor of Science in Computer Science",
                institution: "FAST-NUCES, Karachi",
                period: "Sep 2023 – Jun 2027",
                color: "border-cyan-500",
              },
              {
                title: "IGCSE A Levels (Mathematics & CS)",
                institution: "Cedar College, Karachi",
                period: "Oct 2022 – Jun 2023",
                color: "border-blue-500",
              },
              {
                title: "IGCSE O Levels (General Studies)",
                institution:
                  "Montessori Complex Cambridge School (MCCS), Karachi",
                period: "May 2019 – Jun 2020 | Score: 2A*, 5A",
                color: "border-purple-500",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className={`bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border-l-4 ${edu.color} hover-card transform transition-all duration-300 hover:translate-x-2`}
              >
                <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
                <p className="text-cyan-300 mb-1">{edu.institution}</p>
                <p className="text-gray-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaBriefcase className="text-cyan-400" />
            Experience
          </h2>
          <div className="space-y-6">
            {[
              {
                role: "Web Development Intern",
                company: "HUM Network Ltd",
                period: "June 2025 – July 2025",
                color: "bg-cyan-900/30",
                points: [
                  "Built responsive full-stack websites with interactive UIs, CRUD functionality",
                  "Implemented relational database schemas and session-based authentication",
                  "Designed RESTful APIs for data exchange across various systems",
                ],
              },
              {
                role: "Undergraduate Teaching Assistant",
                company: "FAST-NUCES",
                period: "Feb 2025 – May 2025",
                color: "bg-blue-900/30",
                points: [
                  "Assisted in teaching MT-1008 Multivariate Calculus",
                  "Assisted in teaching SS-1013 Ideology & Constitution of Pakistan",
                ],
              },
              {
                role: "Assessment Management & Technical Operations",
                company: "PROCOM & Developer's Day",
                period: "Feb 2025 – Apr 2025",
                color: "bg-purple-900/30",
                points: [
                  "Designed competitive programming problems and MCQs",
                  "Managed technical logistics and server setup",
                  "Performed live troubleshooting during events",
                ],
              },
            ].map((exp, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 ${exp.color} hover-card`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-cyan-300">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm bg-gray-800/50 text-white">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaCode className="text-cyan-400" />
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Languages",
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
                color: "bg-gray-800/50",
              },
              {
                category: "Databases",
                skills: ["SQL", "MongoDB", "PostgreSQL", "MySQL", "NoSQL"],
                color: "bg-blue-900/30",
              },
              {
                category: "Web Technologies",
                skills: [
                  "HTML",
                  "CSS",
                  "TailwindCSS",
                  "React",
                  "Next.js",
                  "PHP",
                  "jQuery",
                ],
                color: "bg-purple-900/30",
              },
              {
                category: "Data Science & ML",
                skills: [
                  "Pandas",
                  "NumPy",
                  "Scikit-Learn",
                  "R",
                  "dplyr",
                  "ggplot2",
                  "tidyr",
                ],
                color: "bg-green-900/30",
              },
              {
                category: "Infrastructure & Tools",
                skills: [
                  "Ubuntu-Linux",
                  "Git",
                  "LaTeX",
                  "Irvine32",
                  "System Design",
                ],
                color: "bg-yellow-900/30",
              },
              {
                category: "Core Concepts",
                skills: [
                  "OOP",
                  "Functional Programming",
                  "Data Structures",
                  "Algorithms",
                  "LLMs",
                  "AI/ML",
                  "Cybersecurity",
                ],
                color: "bg-red-900/30",
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover-card ${category.color}`}
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm bg-gray-900/70 hover:bg-gray-800/80 transition-colors cursor-default"
                      title={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaCertificate className="text-cyan-400" />
            Certifications & Learning Platforms
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "CodeSignal",
                icon: <SiCodesignal className="text-4xl text-orange-500" />,
                url: "https://codesignal.com/learn/course-paths",
                desc: "Programming courses and certification paths",
              },
              {
                name: "SoloLearn",
                icon: <SiSololearn className="text-4xl text-blue-500" />,
                url: "https://www.sololearn.com/en/profile/27122128",
                desc: "Interactive coding tutorials and certifications",
              },
              {
                name: "Google Skillshop",
                icon: <TbWorld className="text-4xl text-green-500" />,
                url: "https://skillshop.docebosaas.com/learn",
                desc: "Google's official certification platform",
              },
              {
                name: "LIFE Global",
                icon: <TbWorld className="text-4xl text-purple-500" />,
                url: "https://www.life-global.org/",
                desc: "Leadership and professional development",
              },
              {
                name: "HackerRank",
                icon: <SiHackerrank className="text-4xl text-emerald-500" />,
                url: "https://www.hackerrank.com/dashboard",
                desc: "Coding challenges and skill assessments",
              },
              {
                name: "Cisco NetAcad",
                icon: <TbWorld className="text-4xl text-red-500" />,
                url: "https://www.netacad.com/",
                desc: "Networking and IT certifications",
              },
            ].map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover-card hover:border-cyan-500 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition-colors">
                    {platform.name}
                  </h3>
                </div>
                <p className="text-gray-300">{platform.desc}</p>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"></div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:zahmad2812@gmail.com"
              className="group backdrop-blur-sm rounded-xl p-6 text-center border border-cyan-700/30 hover-card hover:border-cyan-500 bg-gradient-to-br from-cyan-900/20 to-blue-900/20"
            >
              <FaEnvelope className="text-4xl mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">zahmad2812@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/zubair-ahmed-448041344"
              target="_blank"
              rel="noopener noreferrer"
              className="group backdrop-blur-sm rounded-xl p-6 text-center border border-blue-700/30 hover-card hover:border-blue-500 bg-gradient-to-br from-blue-900/20 to-sky-900/20"
            >
              <FaLinkedin className="text-4xl mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Connect professionally</p>
            </a>

            <a
              href="https://github.com/zahmed02"
              target="_blank"
              rel="noopener noreferrer"
              className="group backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/50 hover-card hover:border-gray-500 bg-gradient-to-br from-gray-900/20 to-slate-900/20"
            >
              <FaGithub className="text-4xl mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">View my projects</p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400">
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-4 text-white">
              Stay Connected
            </h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/zubair-ahmed-448041344"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/zahmed02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:zahmad2812@gmail.com"
                className="text-gray-400 hover:text-cyan-300 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          <p>© {new Date().getFullYear()} Zubair Ahmed. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-500">
            Built with Next.js & Tailwind CSS | Deployed on GitHub Pages
          </p>
        </footer>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-cyan-700 to-blue-700 rounded-full shadow-lg shadow-cyan-500/30 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
        >
          <FaArrowUp className="text-white" size={20} />
        </button>
      )}
    </div>
  );
}
