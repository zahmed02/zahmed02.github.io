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
  FaTimes,
  FaExpand,
} from "react-icons/fa";
import { SiCodesignal, SiSololearn, SiHackerrank } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

export default function Page() {
  const [activeSection, setActiveSection] = useState("about");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

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
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const sections = [
    { id: "about", label: "About", icon: <FaGraduationCap /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "certifications", label: "Certifications", icon: <FaCertificate /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-blue-800 to-purple-800 animate-gradient-shift-reverse opacity-50"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/20 animate-float"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Fixed Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollPosition > 100
            ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-blue-900/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zubair Ahmed
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-blue-800/80 to-cyan-800/80 text-white shadow-lg shadow-blue-500/20"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <span className="text-sm">{section.icon}</span>
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800/50"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "w-6 rotate-45 translate-y-1.5" : "w-6"
                  }`}
                ></div>
                <div
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "w-6"
                  }`}
                ></div>
                <div
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "w-6 -rotate-45 -translate-y-1.5" : "w-6"
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 space-y-2 bg-gray-900/95 backdrop-blur-lg">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-blue-800 to-cyan-800 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <span>{section.icon}</span>
                <span className="font-medium">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Hero Section */}
          <section className="mb-16 flex flex-col md:flex-row items-center gap-8 animate-fade-in">
            <div className="relative group">
              <div
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/30 cursor-pointer group-hover:shadow-cyan-500/50 group-hover:scale-105 transition-all duration-300"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-800/20 z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <Image
                  src="/procom-event.jpg"
                  alt="Zubair Ahmed - Professional Photo"
                  fill
                  className="object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 12rem, 14rem"
                />

                {/* View Image Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-20 rounded-full">
                  <div className="text-center p-4">
                    <FaExpand className="text-3xl text-white mx-auto mb-2" />
                    <p className="text-white font-medium">View Image</p>
                  </div>
                </div>
              </div>

              {/* Name under image */}
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zubair Ahmed
                </h2>
                <p className="text-gray-300 text-sm mt-1">
                  Systems Software Engineer
                </p>
              </div>
            </div>

            <div className="flex-1 animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Building Efficient &
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Scalable Solutions
                </span>
              </h2>
              <p className="text-gray-300 mb-6">
                CS undergrad proficient in database management, system-level
                applications, game engines, automation tools, &amp; simulators.
                Skilled in high &amp; low-level programming. Focused on building
                efficient, scalable low-level solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/zubair-ahmed-448041344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/zahmed02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-gray-500/30"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="mailto:zahmad2812@gmail.com"
                  className="flex items-center gap-2 bg-cyan-700 hover:bg-cyan-600 px-4 py-2 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <FaEnvelope /> Contact
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mb-16 scroll-mt-20 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-cyan-400" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                  Background
                </h3>
                <p className="text-gray-300">
                  Currently pursuing BS in Computer Science at FAST-NUCES
                  Karachi. Passionate about systems programming, database
                  management, and building efficient software solutions.
                  Experienced in both high-level and low-level programming with
                  a focus on performance optimization.
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                  Contact Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 group">
                    <FaPhone className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-white transition-colors">
                      +92-320-3060747
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <FaEnvelope className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-white transition-colors">
                      zahmad2812@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <FaMapMarkerAlt className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-white transition-colors">
                      Karachi, Sindh 75290
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-16 scroll-mt-20">
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
                  bg: "bg-cyan-900/20",
                },
                {
                  title: "IGCSE A Levels (Mathematics & CS)",
                  institution: "Cedar College, Karachi",
                  period: "Oct 2022 – Jun 2023",
                  color: "border-blue-500",
                  bg: "bg-blue-900/20",
                },
                {
                  title: "IGCSE O Levels (General Studies)",
                  institution:
                    "Montessori Complex Cambridge School (MCCS), Karachi",
                  period: "May 2019 – Jun 2020 | Score: 2A*, 5A",
                  color: "border-purple-500",
                  bg: "bg-purple-900/20",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border-l-4 ${edu.color} hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ${edu.bg}`}
                >
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                  <p className="text-cyan-300">{edu.institution}</p>
                  <p className="text-gray-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaBriefcase className="text-cyan-400" />
              Experience
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Web Development Intern",
                  company: "HUM Network Ltd",
                  period: "June 2025 – July 2025",
                  color: "bg-cyan-900",
                  textColor: "text-cyan-300",
                  items: [
                    "Built responsive full-stack websites with interactive UIs, CRUD functionality",
                    "Implemented relational database schemas and session-based authentication",
                    "Designed RESTful APIs for data exchange across various systems",
                  ],
                },
                {
                  title: "Undergraduate Teaching Assistant",
                  company: "FAST-NUCES",
                  period: "Feb 2025 – May 2025",
                  color: "bg-blue-900",
                  textColor: "text-blue-300",
                  items: [
                    "Assisted in teaching MT-1008 Multivariate Calculus",
                    "Assisted in teaching SS-1013 Ideology & Constitution of Pakistan",
                  ],
                },
                {
                  title: "Assessment Management & Technical Operations",
                  company: "PROCOM & Developer's Day",
                  period: "Feb 2025 – Apr 2025",
                  color: "bg-purple-900",
                  textColor: "text-purple-300",
                  items: [
                    "Designed competitive programming problems and MCQs",
                    "Managed technical logistics and server setup",
                    "Performed live troubleshooting during events",
                  ],
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:scale-[1.01] hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-gray-700"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-cyan-300">{exp.company}</p>
                    </div>
                    <span
                      className={`${exp.color} ${exp.textColor} px-3 py-1 rounded-full text-sm mt-2 md:mt-0 inline-block w-fit`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    {exp.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaCode className="text-cyan-400" />
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
                  color: "bg-gray-700",
                },
                {
                  title: "Databases",
                  skills: ["SQL", "MongoDB", "PostgreSQL", "MySQL", "NoSQL"],
                  color: "bg-blue-900/50",
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
                  color: "bg-purple-900/50",
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
                  color: "bg-green-900/50",
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
                  color: "bg-yellow-900/50",
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
                  color: "bg-red-900/50",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5"
                >
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`${category.color} px-3 py-1 rounded-full text-sm hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default`}
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
          <section id="certifications" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaCertificate className="text-cyan-400" />
              Certifications & Learning Platforms
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  href: "https://codesignal.com/learn/course-paths",
                  icon: <SiCodesignal className="text-4xl text-orange-500" />,
                  title: "CodeSignal",
                  desc: "Programming courses and certification paths",
                  color: "hover:border-orange-500",
                },
                {
                  href: "https://www.sololearn.com/en/profile/27122128",
                  icon: <SiSololearn className="text-4xl text-blue-500" />,
                  title: "SoloLearn",
                  desc: "Interactive coding tutorials and certifications",
                  color: "hover:border-blue-500",
                },
                {
                  href: "https://skillshop.docebosaas.com/learn",
                  icon: <TbWorld className="text-4xl text-green-500" />,
                  title: "Google Skillshop",
                  desc: "Google's official certification platform",
                  color: "hover:border-green-500",
                },
                {
                  href: "https://www.life-global.org/",
                  icon: <TbWorld className="text-4xl text-purple-500" />,
                  title: "LIFE Global",
                  desc: "Leadership and professional development",
                  color: "hover:border-purple-500",
                },
                {
                  href: "https://www.hackerrank.com/dashboard",
                  icon: <SiHackerrank className="text-4xl text-emerald-500" />,
                  title: "HackerRank",
                  desc: "Coding challenges and skill assessments",
                  color: "hover:border-emerald-500",
                },
                {
                  href: "https://www.netacad.com/",
                  icon: <TbWorld className="text-4xl text-red-500" />,
                  title: "Cisco NetAcad",
                  desc: "Networking and IT certifications",
                  color: "hover:border-red-500",
                },
              ].map((platform, index) => (
                <a
                  key={index}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 ${platform.color} transition-all hover:scale-[1.03] hover:shadow-xl group`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                      {platform.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {platform.desc}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  href: "mailto:zahmad2812@gmail.com",
                  icon: <FaEnvelope className="text-4xl text-cyan-400" />,
                  title: "Email",
                  detail: "zahmad2812@gmail.com",
                  color:
                    "from-cyan-800/30 to-blue-800/30 hover:from-cyan-800/50 hover:to-blue-800/50",
                },
                {
                  href: "https://linkedin.com/in/zubair-ahmed-448041344",
                  icon: <FaLinkedin className="text-4xl text-blue-400" />,
                  title: "LinkedIn",
                  detail: "Connect professionally",
                  color:
                    "from-blue-800/30 to-sky-800/30 hover:from-blue-800/50 hover:to-sky-800/50",
                },
                {
                  href: "https://github.com/zahmed02",
                  icon: <FaGithub className="text-4xl text-white" />,
                  title: "GitHub",
                  detail: "View my projects",
                  color:
                    "from-gray-800/30 to-slate-800/30 hover:from-gray-800/50 hover:to-slate-800/50",
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r ${contact.color} rounded-xl p-6 text-center transition-all hover:scale-105 hover:shadow-xl`}
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-gray-300">{contact.detail}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="text-lg font-medium mb-2">
              © {new Date().getFullYear()} Zubair Ahmed. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with Next.js & Tailwind CSS | Deployed on GitHub Pages
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              <a
                href="https://github.com/zahmed02/zahmed02.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:underline"
              >
                Source Code
              </a>
              <a
                href="/resume.pdf"
                className="text-gray-400 hover:text-white transition-colors hover:underline"
              >
                Download Resume
              </a>
            </div>
          </footer>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes className="text-3xl" />
            </button>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/procom-event.jpg"
                alt="Zubair Ahmed - Full Size"
                width={3119}
                height={4160}
                className="object-contain max-h-[80vh] w-auto mx-auto"
              />
            </div>
            <p className="text-center text-gray-300 mt-4">
              Zubair Ahmed - Professional Photo
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
