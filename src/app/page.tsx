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
  FaBars,
  FaChevronUp,
} from "react-icons/fa";
import { SiCodesignal, SiSololearn, SiHackerrank } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

export default function Page() {
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark-blue");

  // Handle scroll for navbar and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Highlight active section
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

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme cycling effect
  useEffect(() => {
    const themes = ["dark-blue", "dark-purple", "deep-black"];
    const interval = setInterval(() => {
      setTheme((prev) => {
        const currentIndex = themes.indexOf(prev);
        return themes[(currentIndex + 1) % themes.length];
      });
    }, 10000); // Change theme every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const getThemeClasses = () => {
    switch (theme) {
      case "dark-blue":
        return "from-gray-900 via-blue-900 to-gray-900";
      case "dark-purple":
        return "from-gray-900 via-purple-900 to-gray-900";
      case "deep-black":
        return "from-gray-900 via-gray-800 to-black";
      default:
        return "from-gray-900 via-blue-900 to-gray-900";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false);
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
      {showImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setShowImageModal(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setShowImageModal(false);
            }}
          >
            <FaTimes size={32} />
          </button>
          <div className="relative max-w-4xl max-h-[90vh]">
            <Image
              src="/procom-event.jpg"
              alt="Zubair Ahmed - Full View"
              width={3119}
              height={4160}
              className="rounded-lg object-contain max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 bg-gradient-to-r from-cyan-600 to-blue-600 p-3 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <FaChevronUp />
      </button>

      {/* Animated Background */}
      <div
        className={`fixed inset-0 bg-gradient-to-br ${getThemeClasses()} animate-gradient transition-all duration-500`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Fixed Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("about")}
                className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                ZA
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section className="mb-20 flex flex-col md:flex-row items-center gap-8">
          <div className="relative group">
            <div
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/30 animate-pulse-glow cursor-pointer"
              onClick={() => setShowImageModal(true)}
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
              {/* View Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="text-center">
                  <FaExternalLinkAlt className="mx-auto text-3xl text-white mb-2" />
                  <span className="text-sm font-semibold text-white">
                    Click to View
                  </span>
                </div>
              </div>
            </div>

            {/* Name Display */}
            <div className="mt-6 text-center animate-slide-in">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zubair Ahmed
              </h1>
              <p className="text-gray-400 mt-1">Systems Software Engineer</p>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-float">
              Systems Software Engineer &
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
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
                className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 px-5 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/zahmed02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 px-5 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="mailto:zahmad2812@gmail.com"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-600 hover:to-cyan-700 px-5 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
              >
                <FaEnvelope /> Contact
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-cyan-400 animate-float" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-[1.02]">
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

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 hover:text-cyan-300 transition-colors cursor-pointer">
                  <FaPhone className="text-cyan-400" />
                  <span>+92-320-3060747</span>
                </div>
                <a
                  href="mailto:zahmad2812@gmail.com"
                  className="flex items-center gap-3 hover:text-cyan-300 transition-colors"
                >
                  <FaEnvelope className="text-cyan-400" />
                  <span>zahmad2812@gmail.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span>Karachi, Sindh 75290</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-cyan-400 animate-float animation-delay-2000" />
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border-l-4 border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-xl font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-cyan-300">FAST-NUCES, Karachi</p>
              <p className="text-gray-400">Sep 2023 – Jun 2027</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <h3 className="text-xl font-semibold">
                IGCSE A Levels (Mathematics &amp; CS)
              </h3>
              <p className="text-cyan-300">Cedar College, Karachi</p>
              <p className="text-gray-400">Oct 2022 – Jun 2023</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
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
        <section id="experience" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaBriefcase className="text-cyan-400 animate-float animation-delay-1000" />
            Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Web Development Intern
                  </h3>
                  <p className="text-cyan-300">HUM Network Ltd</p>
                </div>
                <span className="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full text-sm">
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
                  Designed RESTful APIs for data exchange across various systems
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Undergraduate Teaching Assistant
                  </h3>
                  <p className="text-cyan-300">FAST-NUCES</p>
                </div>
                <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">
                  Feb 2025 – May 2025
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Assisted in teaching MT-1008 Multivariate Calculus</li>
                <li>
                  Assisted in teaching SS-1013 Ideology &amp; Constitution of
                  Pakistan
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Assessment Management &amp; Technical Operations
                  </h3>
                  <p className="text-cyan-300">
                    PROCOM &amp; Developer&apos;s Day
                  </p>
                </div>
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">
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
        <section id="skills" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaCode className="text-cyan-400 animate-float" />
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
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
                    className="bg-gray-700/50 px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {["SQL", "MongoDB", "PostgreSQL", "MySQL", "NoSQL"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="bg-blue-900/30 px-3 py-1 rounded-full text-sm hover:bg-blue-800/50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
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
                    className="bg-purple-900/30 px-3 py-1 rounded-full text-sm hover:bg-purple-800/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
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
                    className="bg-green-900/30 px-3 py-1 rounded-full text-sm hover:bg-green-800/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
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
                    className="bg-yellow-900/30 px-3 py-1 rounded-full text-sm hover:bg-yellow-800/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
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
                    className="bg-red-900/30 px-3 py-1 rounded-full text-sm hover:bg-red-800/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaCertificate className="text-cyan-400 animate-float animation-delay-1000" />
            Certifications &amp; Learning Platforms
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "CodeSignal",
                icon: SiCodesignal,
                color: "orange",
                href: "https://codesignal.com/learn/course-paths",
              },
              {
                name: "SoloLearn",
                icon: SiSololearn,
                color: "blue",
                href: "https://www.sololearn.com/en/profile/27122128",
              },
              {
                name: "Google Skillshop",
                icon: TbWorld,
                color: "green",
                href: "https://skillshop.docebosaas.com/learn",
              },
              {
                name: "LIFE Global",
                icon: TbWorld,
                color: "purple",
                href: "https://www.life-global.org/",
              },
              {
                name: "HackerRank",
                icon: SiHackerrank,
                color: "emerald",
                href: "https://www.hackerrank.com/dashboard",
              },
              {
                name: "Cisco NetAcad",
                icon: TbWorld,
                color: "red",
                href: "https://www.netacad.com/",
              },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-${platform.color}-500 hover:scale-[1.03] transition-all duration-300 hover:shadow-lg hover:shadow-${platform.color}-500/20 group`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <platform.icon
                    className={`text-4xl text-${platform.color}-500 group-hover:scale-110 transition-transform`}
                  />
                  <h3 className="text-xl font-semibold">{platform.name}</h3>
                </div>
                <p className="text-gray-300">
                  Click to visit certification platform
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:zahmad2812@gmail.com"
              className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 rounded-xl p-8 text-center hover:from-cyan-800/50 hover:to-blue-800/50 transition-all duration-300 hover:scale-[1.03] group"
            >
              <FaEnvelope className="text-4xl mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">zahmad2812@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/zubair-ahmed-448041344"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-800/30 to-sky-800/30 rounded-xl p-8 text-center hover:from-blue-800/50 hover:to-sky-800/50 transition-all duration-300 hover:scale-[1.03] group"
            >
              <FaLinkedin className="text-4xl mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Connect professionally</p>
            </a>

            <a
              href="https://github.com/zahmed02"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800/30 to-slate-800/30 rounded-xl p-8 text-center hover:from-gray-800/50 hover:to-slate-800/50 transition-all duration-300 hover:scale-[1.03] group"
            >
              <FaGithub className="text-4xl mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">View my projects</p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-700 text-center text-gray-400">
          <div className="mb-4">
            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Zubair Ahmed
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Systems Software Engineer & Full-Stack Developer
            </p>
          </div>
          <p>© {new Date().getFullYear()} Zubair Ahmed. All rights reserved.</p>
          <p className="mt-2">
            Built with Next.js &amp; Tailwind CSS | Deployed on GitHub Pages
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://github.com/zahmed02/zahmed02.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              Source Code
            </a>
            <a
              href="/resume.pdf"
              className="hover:text-cyan-300 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
