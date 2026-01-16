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
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import { SiCodesignal, SiSololearn, SiHackerrank } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

export default function Page() {
  const [activeSection, setActiveSection] = useState("about");
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Colors for pulsing background
  const backgroundColors = [
    "from-gray-900 via-blue-900 to-gray-900",
    "from-gray-900 via-purple-900 to-indigo-900",
    "from-gray-900 via-cyan-900 to-blue-900",
    "from-gray-900 via-violet-900 to-purple-900",
    "from-gray-900 via-slate-900 to-blue-900",
  ];

  const colorGradients = [
    { start: "#111827", middle: "#1e3a8a", end: "#111827" },
    { start: "#111827", middle: "#581c87", end: "#312e81" },
    { start: "#111827", middle: "#164e63", end: "#1e3a8a" },
    { start: "#111827", middle: "#4c1d95", end: "#581c87" },
    { start: "#111827", middle: "#0f172a", end: "#1e3a8a" },
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "education",
        "experience",
        "skills",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background color animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % backgroundColors.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
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
    }
  };

  // Create mailto link with pre-filled content
  const createEmailLink = () => {
    const subject = encodeURIComponent("Contact from Portfolio - Zubair Ahmed");
    const body = encodeURIComponent(
      `Dear Zubair,\n\nI came across your portfolio and wanted to connect regarding...\n\nBest regards,\n[Your Name]`
    );
    return `mailto:zahmad2812@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 shadow-lg shadow-blue-900/50 border-b border-blue-700/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Zubair Ahmed
            </div>

            <div className="flex space-x-1 md:space-x-2">
              {[
                "about",
                "education",
                "experience",
                "skills",
                "certifications",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 text-sm md:text-base font-medium rounded-lg transition-all duration-300 ${
                    activeSection === section
                      ? "bg-blue-800 text-white shadow-lg shadow-blue-500/50"
                      : "text-gray-300 hover:bg-blue-800/50 hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen text-white p-4 md:p-8 pt-24">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute inset-0 bg-gradient-to-br transition-all duration-5000 ${backgroundColors[currentColorIndex]}`}
            style={{
              background: `linear-gradient(135deg, ${colorGradients[currentColorIndex].start} 0%, ${colorGradients[currentColorIndex].middle} 50%, ${colorGradients[currentColorIndex].end} 100%)`,
              animation: "pulse 10s ease-in-out infinite",
            }}
          />

          {/* Enhanced Blob Effects */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

          {/* Additional floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
            {/* Image with hover effect */}
            <div
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500 hover:shadow-xl cursor-pointer group transition-all duration-300 hover:scale-105"
              onClick={() => setImageModalOpen(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-800/20 z-10"></div>
              <Image
                src="/procom-event.jpg"
                alt="Zubair Ahmed - Professional Photo"
                fill
                className="object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 12rem, 14rem"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-20">
                <div className="text-center">
                  <FaExternalLinkAlt className="text-4xl text-cyan-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">
                    Click to view full image
                  </p>
                  <p className="text-gray-300 text-sm mt-1">(Opens in modal)</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Systems Software Engineer &
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                  Full-Stack Developer
                </span>
              </h1>
              <p className="text-gray-300 mb-6">
                CS undergrad proficient in database management, system-level
                applications, game engines, automation tools, & simulators.
                Skilled in high & low-level programming. Focused on building
                efficient, scalable low-level solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/zubair-ahmed-448041344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/zahmed02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gray-500/50"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={createEmailLink()}
                  className="flex items-center gap-2 bg-cyan-700 hover:bg-cyan-600 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
                >
                  <FaEnvelope /> Email Me
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-cyan-400 animate-pulse" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-cyan-500/20">
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

              <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-blue-500/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                  Contact Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
                    <FaPhone className="text-cyan-400" />
                    <span>+92-320-3060747</span>
                  </div>
                  <a
                    href={createEmailLink()}
                    className="flex items-center gap-3 hover:text-cyan-300 transition-colors group"
                  >
                    <FaEnvelope className="text-cyan-400 group-hover:animate-bounce" />
                    <span className="group-hover:underline">
                      zahmad2812@gmail.com
                    </span>
                  </a>
                  <div className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    <span>Karachi, Sindh 75290</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-16 scroll-mt-24">
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
                  borderColor: "border-cyan-500",
                  bgColor: "hover:bg-cyan-900/20",
                },
                {
                  title: "IGCSE A Levels (Mathematics & CS)",
                  institution: "Cedar College, Karachi",
                  period: "Oct 2022 – Jun 2023",
                  borderColor: "border-blue-500",
                  bgColor: "hover:bg-blue-900/20",
                },
                {
                  title: "IGCSE O Levels (General Studies)",
                  institution:
                    "Montessori Complex Cambridge School (MCCS), Karachi",
                  period: "May 2019 – Jun 2020 | Score: 2A*, 5A",
                  borderColor: "border-purple-500",
                  bgColor: "hover:bg-purple-900/20",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border-l-4 ${edu.borderColor} transition-all duration-300 hover:scale-[1.01] ${edu.bgColor} shadow-lg hover:shadow-xl`}
                >
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                  <p className="text-cyan-300">{edu.institution}</p>
                  <p className="text-gray-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-16 scroll-mt-24">
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
                  color: "cyan",
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
                  color: "blue",
                  points: [
                    "Assisted in teaching MT-1008 Multivariate Calculus",
                    "Assisted in teaching SS-1013 Ideology & Constitution of Pakistan",
                  ],
                },
                {
                  title: "Assessment Management & Technical Operations",
                  company: "PROCOM & Developer's Day",
                  period: "Feb 2025 – Apr 2025",
                  color: "purple",
                  points: [
                    "Designed competitive programming problems and MCQs",
                    "Managed technical logistics and server setup",
                    "Performed live troubleshooting during events",
                  ],
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:scale-[1.01] shadow-lg hover:shadow-xl border border-gray-700/50 hover:border-cyan-500/50"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-cyan-300">{exp.company}</p>
                    </div>
                    <span
                      className={`bg-${exp.color}-900 text-${exp.color}-300 px-3 py-1 rounded-full text-sm mt-2 md:mt-0`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    {exp.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 group hover:text-white transition-colors"
                      >
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16 scroll-mt-24">
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
                  color: "gray",
                },
                {
                  title: "Databases",
                  skills: ["SQL", "MongoDB", "PostgreSQL", "MySQL", "NoSQL"],
                  color: "blue",
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
                  color: "purple",
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
                  color: "green",
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
                  color: "yellow",
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
                  color: "red",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`bg-${category.color}-900/50 hover:bg-${category.color}-700 px-3 py-1 rounded-full text-sm cursor-default transition-all duration-300 hover:scale-105`}
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
          <section id="certifications" className="mb-16 scroll-mt-24">
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
                  color: "orange",
                },
                {
                  href: "https://www.sololearn.com/en/profile/27122128",
                  icon: <SiSololearn className="text-4xl text-blue-500" />,
                  title: "SoloLearn",
                  desc: "Interactive coding tutorials and certifications",
                  color: "blue",
                },
                {
                  href: "https://skillshop.docebosaas.com/learn",
                  icon: <TbWorld className="text-4xl text-green-500" />,
                  title: "Google Skillshop",
                  desc: "Google's official certification platform",
                  color: "green",
                },
                {
                  href: "https://www.life-global.org/",
                  icon: <TbWorld className="text-4xl text-purple-500" />,
                  title: "LIFE Global",
                  desc: "Leadership and professional development",
                  color: "purple",
                },
                {
                  href: "https://www.hackerrank.com/dashboard",
                  icon: <SiHackerrank className="text-4xl text-emerald-500" />,
                  title: "HackerRank",
                  desc: "Coding challenges and skill assessments",
                  color: "emerald",
                },
                {
                  href: "https://www.netacad.com/",
                  icon: <TbWorld className="text-4xl text-red-500" />,
                  title: "Cisco NetAcad",
                  desc: "Networking and IT certifications",
                  color: "red",
                },
              ].map((platform, index) => (
                <a
                  key={index}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition-colors">
                      {platform.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {platform.desc}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href={createEmailLink()}
                className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 rounded-xl p-6 text-center hover:from-cyan-800/50 hover:to-blue-800/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50 border border-cyan-700/30 hover:border-cyan-500/70"
              >
                <FaEnvelope className="text-4xl mx-auto mb-4 text-cyan-400 animate-pulse" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">zahmad2812@gmail.com</p>
                <p className="text-sm text-cyan-300 mt-2">
                  Click to compose email
                </p>
              </a>

              <a
                href="https://linkedin.com/in/zubair-ahmed-448041344"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-800/30 to-sky-800/30 rounded-xl p-6 text-center hover:from-blue-800/50 hover:to-sky-800/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 border border-blue-700/30 hover:border-blue-500/70"
              >
                <FaLinkedin className="text-4xl mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-300">Connect professionally</p>
              </a>

              <a
                href="https://github.com/zahmed02"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-800/30 to-slate-800/30 rounded-xl p-6 text-center hover:from-gray-800/50 hover:to-slate-800/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gray-500/50 border border-gray-700/30 hover:border-gray-500/70"
              >
                <FaGithub className="text-4xl mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-300">View my projects</p>
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-700/50 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Zubair Ahmed. All rights reserved.
            </p>
            <p className="mt-2">
              Built with Next.js & Tailwind CSS | Deployed on GitHub Pages
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="https://github.com/zahmed02/zahmed02.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors hover:underline"
              >
                Source Code
              </a>
              <a
                href="/resume.pdf"
                className="hover:text-white transition-colors hover:underline"
              >
                Download Resume
              </a>
            </div>
          </footer>
        </div>
      </div>

      {/* Image Modal */}
      {imageModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setImageModalOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setImageModalOpen(false)}
            >
              <FaTimes className="text-3xl" />
            </button>
            <div className="relative w-full h-[80vh] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/procom-event.jpg"
                alt="Zubair Ahmed - Full Size"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <p className="text-white text-center mt-4">
              Click outside to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
