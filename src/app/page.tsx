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
} from "react-icons/fa";
import { SiCodesignal, SiSololearn, SiHackerrank } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

export default function Page() {
  const [activeSection, setActiveSection] = useState("about");
  const [showImageModal, setShowImageModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [bgColorIndex, setBgColorIndex] = useState(0);

  const backgroundColors = [
    "from-gray-900 via-blue-900 to-gray-900",
    "from-gray-900 via-indigo-900 to-purple-900",
    "from-gray-900 via-blue-950 to-gray-950",
    "from-gray-900 via-slate-900 to-blue-950",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Change background color based on scroll position
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
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
        const index = sections.indexOf(currentSection);
        setBgColorIndex(index % backgroundColors.length);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
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
      {/* Interactive Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 100
            ? "bg-black/90 backdrop-blur-lg border-b border-blue-500/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ZA
              </span>
              <div className="hidden md:flex space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                        : "text-gray-300 hover:bg-blue-900/50 hover:text-white"
                    }`}
                  >
                    <span className="hidden sm:inline">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/zubair-ahmed-448041344"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-700 hover:bg-blue-600 rounded-lg transition-all hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/zahmed02"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-110"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className={`min-h-screen bg-gradient-to-br ${backgroundColors[bgColorIndex]} text-white transition-all duration-1000 p-4 md:p-8 pt-20`}
      >
        {/* Animated Background Particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            />
          ))}

          {/* Moving Gradient Orbs */}
          <div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
            style={{ animationDuration: "15s" }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"
            style={{ animationDuration: "25s" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="mb-20 flex flex-col items-center text-center">
            <div className="relative group mb-6">
              <div
                className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/40 transition-all duration-500 group-hover:scale-105 group-hover:shadow-cyan-500/60 cursor-pointer"
                onClick={() => setShowImageModal(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <Image
                  src="/procom-event.jpg"
                  alt="Zubair Ahmed - Professional Photo"
                  fill
                  className="object-cover rounded-full"
                  priority
                  sizes="(max-width: 768px) 16rem, 16rem"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center z-20">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <FaExpand className="text-4xl text-white/80" />
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowImageModal(true)}
                className="mt-4 text-sm text-cyan-300 hover:text-cyan-100 transition-colors flex items-center gap-2 mx-auto"
              >
                <FaExpand /> Click to view full image
              </button>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Zubair{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ahmed
              </span>
            </h1>

            <div className="relative mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                Systems Software Engineer & Full-Stack Developer
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div>

            <p className="text-gray-300 max-w-2xl mb-8">
              CS undergrad proficient in database management, system-level
              applications, game engines, automation tools, &amp; simulators.
              Skilled in high &amp; low-level programming. Focused on building
              efficient, scalable low-level solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:zahmad2812@gmail.com"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-600 hover:to-blue-600 px-6 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <FaEnvelope /> Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-all hover:scale-105 border border-gray-700"
              >
                Download Resume
              </a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mb-20">
            <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaGraduationCap className="text-cyan-400" />
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    Background
                  </h3>
                  <p className="text-gray-300">
                    Currently pursuing BS in Computer Science at FAST-NUCES
                    Karachi. Passionate about systems programming, database
                    management, and building efficient software solutions.
                    Experienced in both high-level and low-level programming
                    with a focus on performance optimization.
                  </p>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all">
                      <FaPhone className="text-cyan-400" />
                      <span>+92-320-3060747</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all">
                      <FaEnvelope className="text-cyan-400" />
                      <span>zahmad2812@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all">
                      <FaMapMarkerAlt className="text-cyan-400" />
                      <span>Karachi, Sindh 75290</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-20">
            <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaGraduationCap className="text-blue-400" />
                Education
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Bachelor of Science in Computer Science",
                    institution: "FAST-NUCES, Karachi",
                    period: "Sep 2023 – Jun 2027",
                    color: "border-cyan-500",
                    description:
                      "Focus on Systems Programming and Database Management",
                  },
                  {
                    title: "IGCSE A Levels (Mathematics & CS)",
                    institution: "Cedar College, Karachi",
                    period: "Oct 2022 – Jun 2023",
                    color: "border-blue-500",
                    description:
                      "Specialized in Mathematics and Computer Science",
                  },
                  {
                    title: "IGCSE O Levels (General Studies)",
                    institution:
                      "Montessori Complex Cambridge School (MCCS), Karachi",
                    period: "May 2019 – Jun 2020 | Score: 2A*, 5A",
                    color: "border-purple-500",
                    description:
                      "Exceptional performance with distinction in key subjects",
                  },
                ].map((edu, index) => (
                  <div
                    key={index}
                    className={`bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border-l-4 ${edu.color} hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10`}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {edu.title}
                    </h3>
                    <p className="text-cyan-300 mt-1">{edu.institution}</p>
                    <p className="text-gray-400 mt-2">{edu.period}</p>
                    <p className="text-gray-300 mt-3">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-20">
            <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaBriefcase className="text-purple-400" />
                Experience
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Web Development Intern",
                    company: "HUM Network Ltd",
                    period: "June 2025 – July 2025",
                    color: "bg-cyan-900",
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
                    color: "bg-blue-900",
                    points: [
                      "Assisted in teaching MT-1008 Multivariate Calculus",
                      "Assisted in teaching SS-1013 Ideology &amp; Constitution of Pakistan",
                    ],
                  },
                  {
                    title: "Assessment Management & Technical Operations",
                    company: "PROCOM & Developer's Day",
                    period: "Feb 2025 – Apr 2025",
                    color: "bg-purple-900",
                    points: [
                      "Designed competitive programming problems and MCQs",
                      "Managed technical logistics and server setup",
                      "Performed live troubleshooting during events",
                    ],
                  },
                ].map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-300">{exp.company}</p>
                      </div>
                      <span
                        className={`${exp.color} text-cyan-300 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 inline-block`}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-20">
            <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-500">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaCode className="text-green-400" />
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
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`${category.color} px-3 py-1 rounded-full text-sm hover:scale-110 transition-all duration-200 cursor-default`}
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
            <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-500">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaCertificate className="text-orange-400" />
                Certifications & Learning Platforms
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    href: "https://codesignal.com/learn/course-paths",
                    icon: <SiCodesignal className="text-4xl text-orange-500" />,
                    title: "CodeSignal",
                    description: "Programming courses and certification paths",
                  },
                  {
                    href: "https://www.sololearn.com/en/profile/27122128",
                    icon: <SiSololearn className="text-4xl text-blue-500" />,
                    title: "SoloLearn",
                    description:
                      "Interactive coding tutorials and certifications",
                  },
                  {
                    href: "https://skillshop.docebosaas.com/learn",
                    icon: <TbWorld className="text-4xl text-green-500" />,
                    title: "Google Skillshop",
                    description: "Google's official certification platform",
                  },
                  {
                    href: "https://www.life-global.org/",
                    icon: <TbWorld className="text-4xl text-purple-500" />,
                    title: "LIFE Global",
                    description: "Leadership and professional development",
                  },
                  {
                    href: "https://www.hackerrank.com/dashboard",
                    icon: (
                      <SiHackerrank className="text-4xl text-emerald-500" />
                    ),
                    title: "HackerRank",
                    description: "Coding challenges and skill assessments",
                  },
                  {
                    href: "https://www.netacad.com/",
                    icon: <TbWorld className="text-4xl text-red-500" />,
                    title: "Cisco NetAcad",
                    description: "Networking and IT certifications",
                  },
                ].map((platform, index) => (
                  <a
                    key={index}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-current transition-all duration-300 hover:scale-[1.03] group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {platform.icon}
                      </div>
                      <h3 className="text-xl font-semibold">
                        {platform.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      {platform.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Get In Touch
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a
                  href="mailto:zahmad2812@gmail.com"
                  className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 rounded-xl p-8 text-center hover:from-cyan-800/50 hover:to-blue-800/50 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <FaEnvelope className="text-4xl mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300 group-hover:text-white">
                    zahmad2812@gmail.com
                  </p>
                </a>

                <a
                  href="https://linkedin.com/in/zubair-ahmed-448041344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-800/30 to-sky-800/30 rounded-xl p-8 text-center hover:from-blue-800/50 hover:to-sky-800/50 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <FaLinkedin className="text-4xl mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-300 group-hover:text-white">
                    Connect professionally
                  </p>
                </a>

                <a
                  href="https://github.com/zahmed02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-800/30 to-slate-800/30 rounded-xl p-8 text-center hover:from-gray-800/50 hover:to-slate-800/50 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <FaGithub className="text-4xl mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-300 group-hover:text-white">
                    View my projects
                  </p>
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400">
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
                className="hover:text-white transition-colors"
              >
                Source Code
              </a>
              <a
                href="/resume.pdf"
                className="hover:text-white transition-colors"
              >
                Download Resume
              </a>
            </div>
          </footer>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg">
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-cyan-300 text-2xl p-2"
            >
              <FaTimes />
            </button>
            <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
              <Image
                src="/procom-event.jpg"
                alt="Zubair Ahmed - Full View"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-gray-300">
              <p>Zubair Ahmed - Professional Photo</p>
              <p className="text-sm text-gray-400">Click outside to close</p>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-0 left-0 right-0 h-1 z-40">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
          style={{
            width: `${
              (scrollY / (document.body.scrollHeight - window.innerHeight)) *
              100
            }%`,
          }}
        />
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden z-40">
        <div className="flex bg-black/80 backdrop-blur-lg rounded-full p-2 border border-gray-700">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-3 rounded-full transition-all ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
