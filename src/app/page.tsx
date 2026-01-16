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
  FaChevronDown,
  FaBars,
  FaTimes as FaClose,
} from "react-icons/fa";
import { SiCodesignal, SiSololearn, SiHackerrank } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = [
        "about",
        "education",
        "experience",
        "skills",
        "certifications",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Email function
  const sendEmail = () => {
    const subject = encodeURIComponent("Opportunity Inquiry");
    const body = encodeURIComponent(
      "Hello Zubair,\n\nI came across your portfolio and wanted to connect regarding..."
    );
    window.open(
      `mailto:zahmad2812@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Navigation items
  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/30 via-blue-800/20 to-purple-800/30 animate-gradient-yx"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Additional animated elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-1000"></div>
      </div>

      {/* Fixed Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-gray-900/95 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Zubair Ahmed
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-lg"
                      : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-2xl text-white"
            >
              {isMobileMenuOpen ? <FaClose /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl mb-4">
              <div className="py-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-700 to-cyan-600 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scroll Indicator */}
      <div className="fixed top-20 right-4 z-40 hidden md:flex flex-col items-center space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeSection === item.id
                ? "bg-cyan-400 scale-125 ring-2 ring-cyan-400/50"
                : "bg-gray-600 hover:bg-gray-400"
            }`}
            title={item.label}
          />
        ))}
      </div>

      {/* Back to Top Button */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-blue-700 to-cyan-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        >
          <FaChevronDown className="rotate-180" />
        </button>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="relative group">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 group-hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-800/20 z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
              <Image
                src="/procom-event.jpg"
                alt="Zubair Ahmed - Professional Photo"
                fill
                className="object-cover rounded-full"
                priority
                sizes="(max-width: 768px) 12rem, 14rem"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex flex-col items-center justify-center text-white transform group-hover:scale-100 scale-90 transition-transform duration-300"
                >
                  <FaExpand className="text-3xl mb-2" />
                  <span className="text-sm font-medium">Click to View</span>
                </button>
              </div>
            </div>

            {/* Watermark Text */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
              Hover & Click to View
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Systems Software Engineer &
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                Full-Stack Developer
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
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/zahmed02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaGithub /> GitHub
              </a>
              <button
                onClick={sendEmail}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-600 hover:to-blue-600 px-4 py-2 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaEnvelope /> Email Me
              </button>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh]">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-cyan-400 transition-colors"
              >
                <FaTimes />
              </button>
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/procom-event.jpg"
                  alt="Zubair Ahmed - Professional Photo (Full Size)"
                  width={3119}
                  height={4160}
                  className="object-contain max-h-[80vh] rounded-lg"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-sm px-4 py-2 rounded-full">
                Press ESC or click outside to close
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-cyan-400 animate-pulse" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Background
              </h3>
              <p className="text-gray-300">
                Currently pursuing BS in Computer Science at FAST-NUCES Karachi.
                Passionate about systems programming, database management, and
                building efficient software solutions. Experienced in both
                high-level and low-level programming with a focus on performance
                optimization.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
                  <FaPhone className="text-cyan-400" />
                  <span>+92-320-3060747</span>
                </div>
                <button
                  onClick={sendEmail}
                  className="flex items-center gap-3 hover:text-cyan-300 transition-colors w-full text-left"
                >
                  <FaEnvelope className="text-cyan-400" />
                  <span>zahmad2812@gmail.com</span>
                </button>
                <div className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span>Karachi, Sindh 75290</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-cyan-400 animate-bounce" />
            Education
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Bachelor of Science in Computer Science",
                institution: "FAST-NUCES, Karachi",
                period: "Sep 2023 – Jun 2027",
                color: "from-cyan-500 to-blue-600",
                hover: "hover:shadow-cyan-500/30",
              },
              {
                title: "IGCSE A Levels (Mathematics & CS)",
                institution: "Cedar College, Karachi",
                period: "Oct 2022 – Jun 2023",
                color: "from-blue-500 to-indigo-600",
                hover: "hover:shadow-blue-500/30",
              },
              {
                title: "IGCSE O Levels (General Studies)",
                institution:
                  "Montessori Complex Cambridge School (MCCS), Karachi",
                period: "May 2019 – Jun 2020 | Score: 2A*, 5A",
                color: "from-purple-500 to-violet-600",
                hover: "hover:shadow-purple-500/30",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${edu.color} rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl ${edu.hover}`}
              >
                <h3 className="text-xl font-semibold text-white">
                  {edu.title}
                </h3>
                <p className="text-cyan-100">{edu.institution}</p>
                <p className="text-gray-200">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaBriefcase className="text-cyan-400 animate-pulse" />
            Experience
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Web Development Intern",
                company: "HUM Network Ltd",
                period: "June 2025 – July 2025",
                color: "bg-cyan-900/50",
                border: "hover:border-cyan-500",
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
                color: "bg-blue-900/50",
                border: "hover:border-blue-500",
                items: [
                  "Assisted in teaching MT-1008 Multivariate Calculus",
                  "Assisted in teaching SS-1013 Ideology & Constitution of Pakistan",
                ],
              },
              {
                title: "Assessment Management & Technical Operations",
                company: "PROCOM & Developer's Day",
                period: "Feb 2025 – Apr 2025",
                color: "bg-purple-900/50",
                border: "hover:border-purple-500",
                items: [
                  "Designed competitive programming problems and MCQs",
                  "Managed technical logistics and server setup",
                  "Performed live troubleshooting during events",
                ],
              },
            ].map((exp, index) => (
              <div
                key={index}
                className={`${exp.color} backdrop-blur-sm rounded-xl p-6 border border-gray-700 ${exp.border} transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-cyan-300">{exp.company}</p>
                  </div>
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {item}
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
            <FaCode className="text-cyan-400 animate-spin-slow" />
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
                color: "from-gray-700 to-gray-800",
              },
              {
                title: "Databases",
                skills: ["SQL", "MongoDB", "PostgreSQL", "MySQL", "NoSQL"],
                color: "from-blue-800 to-blue-900",
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
                color: "from-purple-800 to-purple-900",
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
                color: "from-green-800 to-green-900",
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
                color: "from-yellow-800 to-yellow-900",
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
                color: "from-red-800 to-red-900",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gradient-to-r from-gray-800 to-gray-700 px-3 py-1 rounded-full text-sm hover:scale-110 hover:shadow-lg transition-all duration-200 cursor-default"
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
            <FaCertificate className="text-cyan-400 animate-bounce" />
            Certifications & Learning Platforms
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "CodeSignal",
                icon: <SiCodesignal className="text-4xl text-orange-500" />,
                href: "https://codesignal.com/learn/course-paths",
                description: "Programming courses and certification paths",
                color: "hover:border-orange-500",
              },
              {
                name: "SoloLearn",
                icon: <SiSololearn className="text-4xl text-blue-500" />,
                href: "https://www.sololearn.com/en/profile/27122128",
                description: "Interactive coding tutorials and certifications",
                color: "hover:border-blue-500",
              },
              {
                name: "Google Skillshop",
                icon: <TbWorld className="text-4xl text-green-500" />,
                href: "https://skillshop.docebosaas.com/learn",
                description: "Google's official certification platform",
                color: "hover:border-green-500",
              },
              {
                name: "LIFE Global",
                icon: <TbWorld className="text-4xl text-purple-500" />,
                href: "https://www.life-global.org/",
                description: "Leadership and professional development",
                color: "hover:border-purple-500",
              },
              {
                name: "HackerRank",
                icon: <SiHackerrank className="text-4xl text-emerald-500" />,
                href: "https://www.hackerrank.com/dashboard",
                description: "Coding challenges and skill assessments",
                color: "hover:border-emerald-500",
              },
              {
                name: "Cisco NetAcad",
                icon: <TbWorld className="text-4xl text-red-500" />,
                href: "https://www.netacad.com/",
                description: "Networking and IT certifications",
                color: "hover:border-red-500",
              },
            ].map((platform, index) => (
              <a
                key={index}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 ${platform.color} transition-all duration-300 hover:scale-[1.03] hover:shadow-xl`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {platform.icon}
                  <h3 className="text-xl font-semibold">{platform.name}</h3>
                </div>
                <p className="text-gray-300">{platform.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={sendEmail}
              className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 rounded-xl p-6 text-center hover:from-cyan-800/50 hover:to-blue-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-cyan-500"
            >
              <FaEnvelope className="text-4xl mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">Send me a message</p>
            </button>

            <a
              href="https://linkedin.com/in/zubair-ahmed-448041344"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-800/30 to-sky-800/30 rounded-xl p-6 text-center hover:from-blue-800/50 hover:to-sky-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-blue-500"
            >
              <FaLinkedin className="text-4xl mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Connect professionally</p>
            </a>

            <a
              href="https://github.com/zahmed02"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800/30 to-slate-800/30 rounded-xl p-6 text-center hover:from-gray-800/50 hover:to-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-gray-500"
            >
              <FaGithub className="text-4xl mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">View my projects</p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Zubair Ahmed. All rights reserved.</p>
          <p className="mt-2">
            Built with Next.js & Tailwind CSS | Deployed on GitHub Pages
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://github.com/zahmed02/zahmed02.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all"
            >
              Source Code
            </a>
            <button
              onClick={sendEmail}
              className="hover:text-white hover:underline transition-all"
            >
              Download Resume
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
