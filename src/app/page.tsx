"use client";

import { useState, useEffect, useRef } from "react";
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
  FaArrowUp,
  FaExpand,
} from "react-icons/fa";
import { SiCodesignal, SiSololearn, SiHackerrank } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

export default function Page() {
  const [activeSection, setActiveSection] = useState("about");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [backgroundHue, setBackgroundHue] = useState(220); // Starting with blue
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 300);

      // Update active section based on scroll position
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
        const element = sectionRefs.current[section];
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

    // Animate background color
    const backgroundInterval = setInterval(() => {
      setBackgroundHue((prevHue) => (prevHue + 0.5) % 360);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(backgroundInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "about", label: "About", icon: <FaGraduationCap /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "certifications", label: "Certifications", icon: <FaCertificate /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      <div
        className="min-h-screen text-white p-4 md:p-8 transition-all duration-1000"
        style={{
          background: `linear-gradient(135deg, 
            hsl(${backgroundHue}, 80%, 5%) 0%,
            hsl(${(backgroundHue + 60) % 360}, 70%, 8%) 50%,
            hsl(${(backgroundHue + 120) % 360}, 60%, 10%) 100%)`,
        }}
      >
        {/* Interactive Background Particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Interactive Navigation Bar */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black/90 via-blue-900/90 to-black/90 backdrop-blur-lg border-b border-blue-800/50 shadow-2xl shadow-blue-900/20">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <span className="text-lg font-bold">ZA</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zubair Ahmed
                </span>
              </div>

              <div className="hidden md:flex space-x-1 bg-black/50 rounded-full p-1 border border-blue-800/50">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                        : "text-gray-300 hover:text-white hover:bg-blue-900/50"
                    }`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/zubair-ahmed-448041344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-800/50 hover:bg-blue-700 rounded-lg transition-all hover:scale-110"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-blue-300" />
                </a>
                <a
                  href="https://github.com/zahmed02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 hover:bg-gray-700 rounded-lg transition-all hover:scale-110"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </nav>
          </div>
        </header>

        <div className="relative z-10 max-w-6xl mx-auto pt-20">
          {/* Hero Section */}
          <section className="mb-20 pt-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Profile Image with Interactive Features */}
              <div className="relative group">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-blue-800/30 z-10"></div>
                  <Image
                    src="/procom-event.jpg"
                    alt="Zubair Ahmed - Professional Photo"
                    fill
                    className="object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                    priority
                    sizes="(max-width: 768px) 16rem, 20rem"
                  />
                  {/* View Full Image Button */}
                  <button
                    onClick={openModal}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  >
                    <div className="flex flex-col items-center">
                      <FaExpand className="text-4xl text-white mb-2" />
                      <span className="text-white font-medium bg-black/50 px-3 py-1 rounded-lg">
                        View Full Image
                      </span>
                    </div>
                  </button>
                </div>

                {/* Interactive Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-ping group-hover:animate-none group-hover:border-cyan-400/40"></div>
                <div className="absolute inset-4 rounded-full border-2 border-blue-500/20 animate-ping animation-delay-1000 group-hover:animate-none group-hover:border-blue-500/40"></div>
              </div>

              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Zubair Ahmed
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gray-300">Systems Software</span>
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Engineer & Full-Stack Developer
                  </span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  CS undergrad proficient in database management, system-level
                  applications, game engines, automation tools, &amp;
                  simulators. Skilled in high &amp; low-level programming.
                  Focused on building efficient, scalable low-level solutions.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://linkedin.com/in/zubair-ahmed-448041344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
                  >
                    <FaLinkedin className="text-xl" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/zahmed02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <FaGithub className="text-xl" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="mailto:zahmad2812@gmail.com"
                    className="group flex items-center gap-3 bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-600 hover:to-blue-600 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
                  >
                    <FaEnvelope className="text-xl" />
                    <span className="font-medium">Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            ref={(el) => (sectionRefs.current.about = el)}
            className="mb-20 scroll-mt-24"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50">
                <FaGraduationCap className="text-3xl text-cyan-400" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
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

              <div className="group bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-colors">
                    <FaPhone className="text-cyan-400" />
                    <span>+92-320-3060747</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-colors">
                    <FaEnvelope className="text-cyan-400" />
                    <span>zahmad2812@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-colors">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    <span>Karachi, Sindh 75290</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section
            id="education"
            ref={(el) => (sectionRefs.current.education = el)}
            className="mb-20 scroll-mt-24"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                <FaGraduationCap className="text-3xl text-purple-400" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-transparent">
                Education
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Bachelor of Science in Computer Science",
                  institution: "FAST-NUCES, Karachi",
                  period: "Sep 2023 – Jun 2027",
                  color: "from-cyan-500 to-blue-600",
                },
                {
                  title: "IGCSE A Levels (Mathematics & CS)",
                  institution: "Cedar College, Karachi",
                  period: "Oct 2022 – Jun 2023",
                  color: "from-blue-500 to-purple-600",
                },
                {
                  title: "IGCSE O Levels (General Studies)",
                  institution:
                    "Montessori Complex Cambridge School (MCCS), Karachi",
                  period: "May 2019 – Jun 2020 | Score: 2A*, 5A",
                  color: "from-purple-500 to-pink-600",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-900/20"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {edu.title}
                      </h3>
                      <p className="text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span
                      className={`bg-gradient-to-r ${edu.color} text-white px-4 py-2 rounded-full text-sm font-medium`}
                    >
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            ref={(el) => (sectionRefs.current.experience = el)}
            className="mb-20 scroll-mt-24"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50">
                <FaBriefcase className="text-3xl text-cyan-400" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Experience
              </h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Web Development Intern",
                  company: "HUM Network Ltd",
                  period: "June 2025 – July 2025",
                  color: "bg-cyan-900",
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
                  items: [
                    "Designed competitive programming problems and MCQs",
                    "Managed technical logistics and server setup",
                    "Performed live troubleshooting during events",
                  ],
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-900/20"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className={`${exp.color} text-cyan-300 px-4 py-2 rounded-full text-sm font-medium`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3 ml-4">
                    {exp.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-cyan-500 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section - Remains similar but with hover effects */}
          <section
            id="skills"
            ref={(el) => (sectionRefs.current.skills = el)}
            className="mb-20 scroll-mt-24"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-900/50 to-green-900/50">
                <FaCode className="text-3xl text-green-400" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
                Technical Skills
              </h2>
            </div>

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
                  color: "hover:border-gray-400",
                },
                {
                  title: "Databases",
                  skills: ["SQL", "MongoDB", "PostgreSQL", "MySQL", "NoSQL"],
                  color: "hover:border-blue-400",
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
                  color: "hover:border-purple-400",
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
                  color: "hover:border-green-400",
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
                  color: "hover:border-yellow-400",
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
                  color: "hover:border-red-400",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/20"
                >
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 bg-black/40 rounded-lg text-sm hover:bg-black/60 hover:scale-105 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            ref={(el) => (sectionRefs.current.contact = el)}
            className="mb-20 scroll-mt-24"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50">
                <FaEnvelope className="text-3xl text-cyan-400" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="mailto:zahmad2812@gmail.com"
                className="group bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-900/30 text-center"
              >
                <FaEnvelope className="text-5xl mx-auto mb-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold mb-3">Email</h3>
                <p className="text-gray-300">zahmad2812@gmail.com</p>
              </a>

              <a
                href="https://linkedin.com/in/zubair-ahmed-448041344"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-900/30 text-center"
              >
                <FaLinkedin className="text-5xl mx-auto mb-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold mb-3">LinkedIn</h3>
                <p className="text-gray-300">Connect professionally</p>
              </a>

              <a
                href="https://github.com/zahmed02"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/30 text-center"
              >
                <FaGithub className="text-5xl mx-auto mb-6 text-white group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold mb-3">GitHub</h3>
                <p className="text-gray-300">View my projects</p>
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 pt-12 border-t border-gray-700/50 text-center text-gray-400">
            <div className="mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Zubair Ahmed
              </p>
              <p className="text-gray-400">
                Systems Software Engineer & Full-Stack Developer
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Zubair Ahmed. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Built with Next.js & Tailwind CSS | Deployed on GitHub Pages
            </p>

            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://github.com/zahmed02/zahmed02.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Source Code
              </a>
              <a
                href="/resume.pdf"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Download Resume
              </a>
            </div>
          </footer>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-full shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-white text-xl" />
          </button>
        )}
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-cyan-400 transition-colors"
            >
              ✕ Close
            </button>
            <div className="relative w-full h-full">
              <Image
                src="/procom-event.jpg"
                alt="Zubair Ahmed - Full Size"
                width={3119}
                height={4160}
                className="object-contain w-full h-full rounded-lg shadow-2xl"
                priority
              />
            </div>
            <p className="text-center text-gray-300 mt-4">
              Zubair Ahmed - Professional Profile
            </p>
          </div>
        </div>
      )}
    </>
  );
}
