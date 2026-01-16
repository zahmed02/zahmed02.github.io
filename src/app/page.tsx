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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [gradientIndex, setGradientIndex] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState("");

  // Background gradient rotation
  const gradients = [
    "from-gray-900 via-blue-900 to-gray-900",
    "from-gray-900 via-purple-900 to-gray-900",
    "from-gray-900 via-red-900 to-gray-900",
    "from-gray-900 via-green-900 to-gray-900",
    "from-gray-900 via-indigo-900 to-gray-900",
  ];

  useEffect(() => {
    // Rotate background gradient every 10 seconds
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 10000);

    // Set time-based greeting
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("Morning");
    else if (hour < 18) setTimeOfDay("Afternoon");
    else setTimeOfDay("Evening");

    return () => clearInterval(interval);
  }, [gradients.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveNav(id);
    }
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Let's Connect - Portfolio Inquiry");
    const body = encodeURIComponent(
      `Hello Zubair,\n\nI came across your portfolio and would like to connect with you.\n\nBest regards,`
    );
    window.open(
      `mailto:zahmad2812@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl max-h-[90vh]">
            <Image
              src="/procom-event.jpg"
              alt="Zubair Ahmed - Professional Photo"
              width={3119}
              height={4160}
              className="rounded-lg object-contain max-h-[85vh]"
              onClick={() => setIsModalOpen(false)}
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-all"
            >
              <FaTimes size={24} />
            </button>
            <div className="text-center mt-4 text-white">
              <p className="text-sm">
                Click outside image or press ESC to close
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pulsing Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${i * 20}%`,
              backgroundColor:
                i % 3 === 0 ? "#1e40af" : i % 3 === 1 ? "#991b1b" : "#4c1d95",
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Background */}
      <div
        className={`min-h-screen bg-gradient-to-br transition-all duration-5000 ${gradients[gradientIndex]} text-white`}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Fixed Navigation Bar */}
          <nav className="sticky top-0 z-40 bg-gradient-to-r from-black/90 via-blue-900/90 to-black/90 backdrop-blur-md border-b border-blue-500/30 shadow-xl">
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zubair Ahmed
                  </h1>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                  {[
                    "About",
                    "Education",
                    "Experience",
                    "Skills",
                    "Certifications",
                    "Contact",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                        activeNav === item.toLowerCase()
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                          : "text-gray-300 hover:text-white hover:bg-blue-800/50"
                      }`}
                    >
                      {item}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                          activeNav === item.toLowerCase()
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <div className="md:hidden">
                  <button className="text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          <div className="p-4 md:p-8">
            {/* Hero Section */}
            <section className="mb-16 flex flex-col md:flex-row items-center gap-8 pt-8">
              <div
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/50 cursor-pointer group"
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
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-20">
                  <div className="text-center transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <FaExternalLinkAlt className="text-4xl text-white mx-auto mb-2" />
                    <span className="text-white font-semibold">
                      Click to View
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-pulse">
                  Hover to view
                </div>
              </div>

              <div className="flex-1">
                <div className="inline-block bg-gradient-to-r from-cyan-800/30 to-blue-800/30 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
                  <span className="text-sm">Good {timeOfDay}! 🌟</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Systems Software Engineer &
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                    Full-Stack Developer
                  </span>
                </h2>
                <p className="text-gray-300 mb-4">
                  Born on{" "}
                  <span className="text-cyan-300 font-semibold">
                    28 December
                  </span>
                  . CS undergrad proficient in database management, system-level
                  applications, game engines, automation tools, &amp;
                  simulators. Skilled in high &amp; low-level programming.
                  Focused on building efficient, scalable low-level solutions.
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <FaBirthdayCake className="text-cyan-400" />
                    <span>28 Dec</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    <span>Karachi, Pakistan</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://linkedin.com/in/zubair-ahmed-448041344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 px-4 py-3 rounded-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/zahmed02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-all hover:scale-105 shadow-lg shadow-gray-500/30"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <button
                    onClick={handleEmailClick}
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-600 hover:to-blue-600 px-4 py-3 rounded-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/30"
                  >
                    <FaEnvelope /> Email Me
                  </button>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaGraduationCap className="text-cyan-400" />
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all hover:scale-[1.02] shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    Background
                  </h3>
                  <p className="text-gray-300">
                    Born on December 28th, currently pursuing BS in Computer
                    Science at FAST-NUCES Karachi. Passionate about systems
                    programming, database management, and building efficient
                    software solutions. Experienced in both high-level and
                    low-level programming with a focus on performance
                    optimization.
                  </p>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all hover:scale-[1.02] shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    Contact Info
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 hover:text-cyan-300 transition-colors cursor-pointer group">
                      <div className="bg-blue-900/50 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                        <FaPhone className="text-cyan-400" />
                      </div>
                      <span>+92-320-3060747</span>
                    </div>
                    <button
                      onClick={handleEmailClick}
                      className="flex items-center gap-3 hover:text-cyan-300 transition-colors w-full text-left group"
                    >
                      <div className="bg-cyan-900/50 p-2 rounded-lg group-hover:bg-cyan-700 transition-colors">
                        <FaEnvelope className="text-cyan-400" />
                      </div>
                      <span>zahmad2812@gmail.com</span>
                    </button>
                    <div className="flex items-center gap-3 hover:text-cyan-300 transition-colors cursor-pointer group">
                      <div className="bg-purple-900/50 p-2 rounded-lg group-hover:bg-purple-700 transition-colors">
                        <FaMapMarkerAlt className="text-cyan-400" />
                      </div>
                      <span>Karachi, Sindh 75290</span>
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
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border-l-4 border-cyan-500 hover:border-cyan-400 transition-all hover:scale-[1.01] shadow-lg hover:shadow-cyan-500/20">
                  <h3 className="text-xl font-semibold">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-cyan-300">FAST-NUCES, Karachi</p>
                  <p className="text-gray-400">Sep 2023 – Jun 2027</p>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border-l-4 border-blue-500 hover:border-blue-400 transition-all hover:scale-[1.01] shadow-lg hover:shadow-blue-500/20">
                  <h3 className="text-xl font-semibold">
                    IGCSE A Levels (Mathematics &amp; CS)
                  </h3>
                  <p className="text-cyan-300">Cedar College, Karachi</p>
                  <p className="text-gray-400">Oct 2022 – Jun 2023</p>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border-l-4 border-purple-500 hover:border-purple-400 transition-all hover:scale-[1.01] shadow-lg hover:shadow-purple-500/20">
                  <h3 className="text-xl font-semibold">
                    IGCSE O Levels (General Studies)
                  </h3>
                  <p className="text-cyan-300">
                    Montessori Complex Cambridge School (MCCS), Karachi
                  </p>
                  <p className="text-gray-400">
                    May 2019 – Jun 2020 | Score: 2A*, 5A
                  </p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaBriefcase className="text-cyan-400" />
                Experience
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all hover:scale-[1.01] border border-gray-700 hover:border-cyan-500/50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Web Development Intern
                      </h3>
                      <p className="text-cyan-300">HUM Network Ltd</p>
                    </div>
                    <span className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-cyan-300 px-3 py-1 rounded-full text-sm animate-pulse">
                      June 2025 – July 2025
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>
                      Built responsive full-stack websites with interactive UIs,
                      CRUD functionality
                    </li>
                    <li>
                      Implemented relational database schemas and session-based
                      authentication
                    </li>
                    <li>
                      Designed RESTful APIs for data exchange across various
                      systems
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all hover:scale-[1.01] border border-gray-700 hover:border-blue-500/50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Undergraduate Teaching Assistant
                      </h3>
                      <p className="text-cyan-300">FAST-NUCES</p>
                    </div>
                    <span className="bg-gradient-to-r from-blue-900 to-blue-700 text-blue-300 px-3 py-1 rounded-full text-sm animate-pulse">
                      Feb 2025 – May 2025
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Assisted in teaching MT-1008 Multivariate Calculus</li>
                    <li>
                      Assisted in teaching SS-1013 Ideology &amp; Constitution
                      of Pakistan
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all hover:scale-[1.01] border border-gray-700 hover:border-purple-500/50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Assessment Management &amp; Technical Operations
                      </h3>
                      <p className="text-cyan-300">
                        PROCOM &amp; Developer&apos;s Day
                      </p>
                    </div>
                    <span className="bg-gradient-to-r from-purple-900 to-purple-700 text-purple-300 px-3 py-1 rounded-full text-sm animate-pulse">
                      Feb 2025 – Apr 2025
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Designed competitive programming problems and MCQs</li>
                    <li>Managed technical logistics and server setup</li>
                    <li>Performed live troubleshooting during events</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaCode className="text-cyan-400" />
                Technical Skills
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all hover:scale-[1.02] hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "C/C++",
                      "C#",
                      "Python",
                      "Java",
                      "JavaScript/TypeScript",
                      "Go",
                      "R",
                      "Assembly(x86)",
                      "Bash/Shell",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full text-sm transition-all cursor-default hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-600 transition-all hover:scale-[1.02] hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    Databases
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["SQL", "MongoDB", "PostgreSQL", "MySQL", "NoSQL"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="bg-blue-900/50 hover:bg-blue-800 px-3 py-1 rounded-full text-sm transition-all cursor-default hover:scale-105"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-600 transition-all hover:scale-[1.02] hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    Web Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML",
                      "CSS",
                      "TailwindCSS",
                      "React",
                      "Next.js",
                      "PHP",
                      "jQuery",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-purple-900/50 hover:bg-purple-800 px-3 py-1 rounded-full text-sm transition-all cursor-default hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-600 transition-all hover:scale-[1.02] hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    Data Science &amp; ML
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Pandas",
                      "NumPy",
                      "Scikit-Learn",
                      "R",
                      "dplyr",
                      "ggplot2",
                      "tidyr",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-green-900/50 hover:bg-green-800 px-3 py-1 rounded-full text-sm transition-all cursor-default hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-600 transition-all hover:scale-[1.02] hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    Infrastructure &amp; Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Ubuntu-Linux",
                      "Git",
                      "LaTeX",
                      "Irvine32",
                      "System Design",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-yellow-900/50 hover:bg-yellow-800 px-3 py-1 rounded-full text-sm transition-all cursor-default hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-600 transition-all hover:scale-[1.02] hover:shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                    Core Concepts
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "OOP",
                      "Functional Programming",
                      "Data Structures",
                      "Algorithms",
                      "LLMs",
                      "AI/ML",
                      "Cybersecurity",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-red-900/50 hover:bg-red-800 px-3 py-1 rounded-full text-sm transition-all cursor-default hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaCertificate className="text-cyan-400" />
                Certifications &amp; Learning Platforms
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a
                  href="https://codesignal.com/learn/course-paths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all hover:scale-[1.03] shadow-lg hover:shadow-cyan-500/30 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <SiCodesignal className="text-4xl text-orange-500 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold">CodeSignal</h3>
                  </div>
                  <p className="text-gray-300">
                    Programming courses and certification paths
                  </p>
                </a>

                <a
                  href="https://www.sololearn.com/en/profile/27122128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all hover:scale-[1.03] shadow-lg hover:shadow-blue-500/30 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <SiSololearn className="text-4xl text-blue-500 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold">SoloLearn</h3>
                  </div>
                  <p className="text-gray-300">
                    Interactive coding tutorials and certifications
                  </p>
                </a>

                <a
                  href="https://skillshop.docebosaas.com/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all hover:scale-[1.03] shadow-lg hover:shadow-green-500/30 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <TbWorld className="text-4xl text-green-500 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold">Google Skillshop</h3>
                  </div>
                  <p className="text-gray-300">
                    Google&apos;s official certification platform
                  </p>
                </a>

                <a
                  href="https://www.life-global.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.03] shadow-lg hover:shadow-purple-500/30 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <TbWorld className="text-4xl text-purple-500 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold">LIFE Global</h3>
                  </div>
                  <p className="text-gray-300">
                    Leadership and professional development
                  </p>
                </a>

                <a
                  href="https://www.hackerrank.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition-all hover:scale-[1.03] shadow-lg hover:shadow-emerald-500/30 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <SiHackerrank className="text-4xl text-emerald-500 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold">HackerRank</h3>
                  </div>
                  <p className="text-gray-300">
                    Coding challenges and skill assessments
                  </p>
                </a>

                <a
                  href="https://www.netacad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all hover:scale-[1.03] shadow-lg hover:shadow-red-500/30 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <TbWorld className="text-4xl text-red-500 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold">Cisco NetAcad</h3>
                  </div>
                  <p className="text-gray-300">
                    Networking and IT certifications
                  </p>
                </a>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <button
                  onClick={handleEmailClick}
                  className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 backdrop-blur-sm rounded-xl p-6 text-center hover:from-cyan-800/50 hover:to-blue-800/50 transition-all hover:scale-105 shadow-lg hover:shadow-cyan-500/30 group"
                >
                  <FaEnvelope className="text-4xl mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    zahmad2812@gmail.com
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Opens your email client
                  </p>
                </button>

                <a
                  href="https://linkedin.com/in/zubair-ahmed-448041344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-800/30 to-sky-800/30 backdrop-blur-sm rounded-xl p-6 text-center hover:from-blue-800/50 hover:to-sky-800/50 transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/30 group"
                >
                  <FaLinkedin className="text-4xl mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    Connect professionally
                  </p>
                </a>

                <a
                  href="https://github.com/zahmed02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-800/30 to-slate-800/30 backdrop-blur-sm rounded-xl p-6 text-center hover:from-gray-800/50 hover:to-slate-800/50 transition-all hover:scale-105 shadow-lg hover:shadow-gray-500/30 group"
                >
                  <FaGithub className="text-4xl mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    View my projects
                  </p>
                </a>
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-700/50 text-center text-gray-400">
              <div className="bg-gradient-to-r from-black/30 via-blue-900/30 to-black/30 backdrop-blur-sm rounded-xl p-6">
                <p className="text-lg">
                  © {new Date().getFullYear()} Zubair Ahmed. All rights
                  reserved.
                </p>
                <p className="mt-2 text-gray-300">
                  Born on <span className="text-cyan-300">28 December</span> •
                  Computer Science Student • Aspiring Systems Engineer
                </p>
                <p className="mt-2">
                  Built with Next.js &amp; Tailwind CSS | Deployed on GitHub
                  Pages
                </p>
                <div className="mt-6 flex justify-center space-x-6">
                  <a
                    href="https://github.com/zahmed02/zahmed02.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors hover:scale-110"
                  >
                    Source Code
                  </a>
                  <a
                    href="/resume.pdf"
                    className="hover:text-white transition-colors hover:scale-110"
                  >
                    Download Resume
                  </a>
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="hover:text-cyan-300 transition-colors hover:scale-110"
                  >
                    Back to Top ↑
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
