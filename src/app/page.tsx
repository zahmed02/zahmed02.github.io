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
  FaBirthdayCake,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import { SiCodesignal, SiSololearn, SiHackerrank } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

export default function Page() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const backgrounds = [
    "from-gray-900 via-blue-900 to-gray-900",
    "from-gray-900 via-purple-900 to-gray-900",
    "from-gray-900 via-red-900 to-gray-900",
    "from-gray-900 via-cyan-900 to-gray-900",
    "from-gray-900 via-emerald-900 to-gray-900",
    "from-gray-900 via-indigo-900 to-gray-900",
  ];

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Interest in Your Profile");
    const body = encodeURIComponent(
      `Dear Zubair,\n\nI came across your portfolio and wanted to connect regarding...\n\nBest regards,\n`
    );
    window.open(
      `mailto:zahmad2812@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  // Background rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-cyan-400 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>
            <Image
              src="/procom-event.jpg"
              alt="Zubair Ahmed - Professional Photo"
              width={3119}
              height={4160}
              className="rounded-lg shadow-2xl max-h-[80vh] w-auto object-contain"
            />
            <div className="mt-2 text-center text-white">
              <p className="text-sm opacity-75">Click anywhere to close</p>
            </div>
          </div>
        </div>
      )}

      <div
        className={`min-h-screen bg-gradient-to-br ${backgrounds[currentBackground]} text-white transition-all duration-3000 ease-in-out`}
      >
        {/* Enhanced Glow Effects with Animation */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
          <div className="absolute top-20 right-20 w-60 h-60 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-6000"></div>
        </div>

        {/* Interactive Navigation Bar */}
        <nav
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            scrolled
              ? "bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zubair Ahmed
              </h1>
              <div className="flex space-x-2 md:space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-3 py-2 text-sm md:text-base font-medium rounded-lg transition-all duration-300 hover:bg-blue-800/50 hover:text-cyan-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-24 pb-12">
          {/* Hero Section */}
          <section className="mb-20 flex flex-col md:flex-row items-center gap-8 animate-slideUp">
            <div className="relative group">
              <div
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30 group-hover:shadow-cyan-500/50 group-hover:scale-105 transition-all duration-500 cursor-pointer"
                onClick={() => setIsImageModalOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-800/10 z-10 group-hover:from-cyan-600/30 group-hover:to-blue-800/30 transition-all duration-500"></div>
                <Image
                  src="/procom-event.jpg"
                  alt="Zubair Ahmed - Professional Photo"
                  fill
                  className="object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 12rem, 14rem"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 z-20">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <FaExternalLinkAlt className="text-3xl text-white mx-auto mb-2" />
                    <span className="text-white font-semibold">
                      View Full Image
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                Click to View
              </div>
            </div>

            <div className="flex-1">
              <h2
                className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp"
                style={{ animationDelay: "0.2s" }}
              >
                Systems Software Engineer &
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
              </h2>
              <p
                className="text-gray-300 mb-6 animate-slideUp"
                style={{ animationDelay: "0.4s" }}
              >
                CS undergrad proficient in database management, system-level
                applications, game engines, automation tools, &amp; simulators.
                Skilled in high &amp; low-level programming. Focused on building
                efficient, scalable low-level solutions.
              </p>

              <div
                className="flex flex-wrap gap-4 animate-slideUp"
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="https://linkedin.com/in/zubair-ahmed-448041344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-4 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/zahmed02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 px-4 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/30"
                >
                  <FaGithub /> GitHub
                </a>
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-700 hover:to-cyan-900 px-4 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <FaEnvelope /> Contact via Email
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 animate-slideUp">
              <FaGraduationCap className="text-cyan-400" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                  Background
                </h3>
                <p className="text-gray-300 mb-4">
                  Currently pursuing BS in Computer Science at FAST-NUCES
                  Karachi. Passionate about systems programming, database
                  management, and building efficient software solutions.
                  Experienced in both high-level and low-level programming with
                  a focus on performance optimization.
                </p>
                <div className="flex items-center gap-3 mt-4 text-gray-300">
                  <FaBirthdayCake className="text-cyan-400" />
                  <span>Born on December 28th</span>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <FaPhone className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>+92-320-3060747</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <FaEnvelope className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>zahmad2812@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <FaMapMarkerAlt className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>Karachi, Sindh 75290</span>
                  </div>
                </div>

                {/* Shout Out Section */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold mb-3 text-cyan-300">
                    Acknowledgments
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/shoaib-ahmad-siddiqui-a1036a37/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="font-bold">S</span>
                    </div>
                    <div>
                      <p className="font-medium">S/O Shoaib Ahmed</p>
                      <p className="text-sm opacity-75">Mentor & Inspiration</p>
                    </div>
                    <FaExternalLinkAlt className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 animate-slideUp">
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
                  delay: 0,
                },
                {
                  title: "IGCSE A Levels (Mathematics & CS)",
                  institution: "Cedar College, Karachi",
                  period: "Oct 2022 – Jun 2023",
                  color: "border-blue-500",
                  delay: 0.1,
                },
                {
                  title: "IGCSE O Levels (General Studies)",
                  institution:
                    "Montessori Complex Cambridge School (MCCS), Karachi",
                  period: "May 2019 – Jun 2020 | Score: 2A*, 5A",
                  color: "border-purple-500",
                  delay: 0.2,
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 ${
                    edu.color
                  } hover:shadow-lg hover:shadow-${
                    edu.color.split("-")[1]
                  }-500/10 transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] animate-slideUp`}
                  style={{ animationDelay: `${edu.delay}s` }}
                >
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                  <p className="text-cyan-300">{edu.institution}</p>
                  <p className="text-gray-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 animate-slideUp">
              <FaBriefcase className="text-cyan-400" />
              Experience
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Web Development Intern",
                  company: "HUM Network Ltd",
                  period: "June 2025 – July 2025",
                  color: "bg-cyan-900/30",
                  textColor: "text-cyan-300",
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
                  color: "bg-blue-900/30",
                  textColor: "text-blue-300",
                  points: [
                    "Assisted in teaching MT-1008 Multivariate Calculus",
                    "Assisted in teaching SS-1013 Ideology & Constitution of Pakistan",
                  ],
                },
                {
                  title: "Assessment Management & Technical Operations",
                  company: "PROCOM & Developer's Day",
                  period: "Feb 2025 – Apr 2025",
                  color: "bg-purple-900/30",
                  textColor: "text-purple-300",
                  points: [
                    "Designed competitive programming problems and MCQs",
                    "Managed technical logistics and server setup",
                    "Performed live troubleshooting during events",
                  ],
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-gray-700/20 transition-all duration-500 transform hover:-translate-y-1 group"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-300">{exp.company}</p>
                    </div>
                    <span
                      className={`${exp.color} ${exp.textColor} px-3 py-1 rounded-full text-sm mt-2 md:mt-0`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    {exp.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="group-hover:text-gray-200 transition-colors"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section - Enhanced */}
          <section id="skills" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 animate-slideUp">
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
                  color: "bg-gray-700 hover:bg-gray-600",
                },
                {
                  title: "Databases",
                  skills: ["SQL", "MongoDB", "PostgreSQL", "MySQL", "NoSQL"],
                  color: "bg-blue-900/50 hover:bg-blue-800/50",
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
                  color: "bg-purple-900/50 hover:bg-purple-800/50",
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
                  color: "bg-green-900/50 hover:bg-green-800/50",
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
                  color: "bg-yellow-900/50 hover:bg-yellow-800/50",
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
                  color: "bg-red-900/50 hover:bg-red-800/50",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 transform hover:-translate-y-1 animate-slideUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`${category.color} px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-md`}
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
          <section id="certifications" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 animate-slideUp">
              <FaCertificate className="text-cyan-400" />
              Certifications & Learning Platforms
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  href: "https://codesignal.com/learn/course-paths",
                  icon: SiCodesignal,
                  name: "CodeSignal",
                  color: "text-orange-500",
                  desc: "Programming courses and certification paths",
                },
                {
                  href: "https://www.sololearn.com/en/profile/27122128",
                  icon: SiSololearn,
                  name: "SoloLearn",
                  color: "text-blue-500",
                  desc: "Interactive coding tutorials and certifications",
                },
                {
                  href: "https://skillshop.docebosaas.com/learn",
                  icon: TbWorld,
                  name: "Google Skillshop",
                  color: "text-green-500",
                  desc: "Google's official certification platform",
                },
                {
                  href: "https://www.life-global.org/",
                  icon: TbWorld,
                  name: "LIFE Global",
                  color: "text-purple-500",
                  desc: "Leadership and professional development",
                },
                {
                  href: "https://www.hackerrank.com/dashboard",
                  icon: SiHackerrank,
                  name: "HackerRank",
                  color: "text-emerald-500",
                  desc: "Coding challenges and skill assessments",
                },
                {
                  href: "https://www.netacad.com/",
                  icon: TbWorld,
                  name: "Cisco NetAcad",
                  color: "text-red-500",
                  desc: "Networking and IT certifications",
                },
              ].map((platform, index) => (
                <a
                  key={index}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 group animate-slideUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <platform.icon
                      className={`text-4xl ${platform.color} group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition-colors">
                      {platform.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {platform.desc}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Visit Platform</span>
                    <FaExternalLinkAlt className="ml-2" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact Section - Enhanced */}
          <section id="contact" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 animate-slideUp">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <button
                onClick={handleEmailClick}
                className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 rounded-xl p-8 text-center hover:from-cyan-800/50 hover:to-blue-800/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                  Email
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  zahmad2812@gmail.com
                </p>
                <p className="mt-3 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Opens your email client with pre-filled template
                </p>
              </button>

              <a
                href="https://linkedin.com/in/zubair-ahmed-448041344"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-800/30 to-sky-800/30 rounded-xl p-8 text-center hover:from-blue-800/50 hover:to-sky-800/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaLinkedin className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  Connect professionally
                </p>
                <p className="mt-3 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  View professional experience & recommendations
                </p>
              </a>

              <a
                href="https://github.com/zahmed02"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-800/30 to-slate-800/30 rounded-xl p-8 text-center hover:from-gray-800/50 hover:to-slate-800/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-700 to-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaGithub className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">
                  GitHub
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  View my projects
                </p>
                <p className="mt-3 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore source code & contributions
                </p>
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400 animate-fadeIn">
            <p>
              © {new Date().getFullYear()} Zubair Ahmed. All rights reserved.
            </p>
            <p className="mt-2">Born on December 28th | Karachi, Pakistan</p>
            <p className="mt-2">
              Built with Next.js & Tailwind CSS | Deployed on GitHub Pages
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              <a
                href="https://github.com/zahmed02/zahmed02.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors hover:scale-105"
              >
                Source Code
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-cyan-300 transition-colors hover:scale-105"
              >
                Contact Me
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-blue-300 transition-colors hover:scale-105"
              >
                Back to Top
              </button>
            </div>
          </footer>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #0ea5e9, #3b82f6);
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0284c7, #2563eb);
        }
      `}</style>
    </>
  );
}
