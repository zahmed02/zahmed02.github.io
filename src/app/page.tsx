"use client";

import { useState } from "react";
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
  FaExternalLinkAlt,
  FaChevronDown,
  FaBars,
  FaTimesCircle,
} from "react-icons/fa";
import { SiCodesignal, SiSololearn, SiHackerrank } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

export default function Page() {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    "About",
    "Education",
    "Experience",
    "Skills",
    "Certifications",
    "Contact",
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section.toLowerCase());
    setMobileMenuOpen(false);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.toLowerCase());
          break;
        }
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  const emailBody = `Dear Zubair,

I came across your portfolio and was impressed by your skills and experience. I would like to discuss [your reason for contacting] with you.

Best regards,
[Your Name]`;

  const emailLink = `mailto:zahmad2812@gmail.com?subject=Regarding Your Portfolio&body=${encodeURIComponent(
    emailBody
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-0">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full animate-pulse-slow filter blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full animate-pulse-slower filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full animate-spin-slow filter blur-3xl"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 7}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 backdrop-blur-lg border-b border-purple-500/30 shadow-2xl shadow-purple-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zubair Ahmed
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1 bg-gray-900/50 backdrop-blur-sm rounded-full p-1">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === section.toLowerCase()
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-500/30"
                      : "hover:bg-gray-800/50 hover:shadow-md hover:shadow-blue-500/20"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {section}
                    {activeSection === section.toLowerCase() && (
                      <FaChevronDown className="animate-bounce text-xs" />
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-gray-900/95 backdrop-blur-lg rounded-xl mt-2 mb-4 border border-purple-500/30 shadow-2xl">
              <div className="py-2 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => handleNavClick(section)}
                    className={`w-full text-left px-4 py-3 rounded-lg mx-2 transition-all duration-300 ${
                      activeSection === section.toLowerCase()
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-500/30"
                        : "hover:bg-gray-800/50"
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-8">
        {/* Hero Section */}
        <section id="hero" className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image with Hover Effect */}
            <div className="relative group">
              <div
                onClick={() => setImageModalOpen(true)}
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/50 hover:border-purple-400"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-purple-600/10 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <Image
                  src="/procom-event.jpg"
                  alt="Zubair Ahmed - Professional Photo"
                  fill
                  className="object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 12rem, 14rem"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                  <div className="flex items-center gap-2 text-white text-sm font-semibold bg-black/50 px-3 py-2 rounded-full">
                    <FaExternalLinkAlt /> Click to view full size
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                Available
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Systems Software Engineer
                </span>
                <span className="block mt-2">
                  &{" "}
                  <span className="text-purple-300">Full-Stack Developer</span>
                </span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed bg-gray-900/30 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20">
                CS undergrad proficient in database management, system-level
                applications, game engines, automation tools, &amp; simulators.
                Skilled in high &amp; low-level programming. Focused on building
                efficient, scalable low-level solutions.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://linkedin.com/in/zubair-ahmed-448041344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
                >
                  <FaLinkedin className="text-lg" /> LinkedIn
                </a>
                <a
                  href="https://github.com/zahmed02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-gray-500/30 hover:-translate-y-1"
                >
                  <FaGithub className="text-lg" /> GitHub
                </a>
                <a
                  href={emailLink}
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-600 hover:to-cyan-700 px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1"
                >
                  <FaEnvelope className="text-lg" /> Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-cyan-400 animate-bounce" />
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-1">
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

            <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 hover:bg-gray-800/30 rounded-lg transition-colors">
                  <div className="p-2 bg-blue-900/30 rounded-lg">
                    <FaPhone className="text-cyan-400" />
                  </div>
                  <span>+92-320-3060747</span>
                </div>
                <a
                  href={emailLink}
                  className="flex items-center gap-3 p-2 hover:bg-gray-800/30 rounded-lg transition-colors"
                >
                  <div className="p-2 bg-cyan-900/30 rounded-lg">
                    <FaEnvelope className="text-cyan-400" />
                  </div>
                  <span className="hover:text-cyan-300">
                    zahmad2812@gmail.com
                  </span>
                </a>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-800/30 rounded-lg transition-colors">
                  <div className="p-2 bg-purple-900/30 rounded-lg">
                    <FaMapMarkerAlt className="text-cyan-400" />
                  </div>
                  <span>Karachi, Sindh 75290</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Bachelor of Science in Computer Science",
                institution: "FAST-NUCES, Karachi",
                period: "Sep 2023 – Jun 2027",
                color: "from-cyan-600/20 to-blue-600/20",
                border: "border-cyan-500",
              },
              {
                title: "IGCSE A Levels (Mathematics & CS)",
                institution: "Cedar College, Karachi",
                period: "Oct 2022 – Jun 2023",
                color: "from-blue-600/20 to-purple-600/20",
                border: "border-blue-500",
              },
              {
                title: "IGCSE O Levels (General Studies)",
                institution:
                  "Montessori Complex Cambridge School (MCCS), Karachi",
                period: "May 2019 – Jun 2020 | Score: 2A*, 5A",
                color: "from-purple-600/20 to-pink-600/20",
                border: "border-purple-500",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${edu.color} backdrop-blur-sm rounded-2xl p-6 border-l-4 ${edu.border} shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg`}
              >
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                <p className="text-cyan-300 mt-1">{edu.institution}</p>
                <p className="text-gray-400 mt-2">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaBriefcase className="text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Web Development Intern",
                company: "HUM Network Ltd",
                period: "June 2025 – July 2025",
                color: "from-cyan-900/30 to-cyan-700/30",
                border: "border-cyan-500",
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
                color: "from-blue-900/30 to-blue-700/30",
                border: "border-blue-500",
                points: [
                  "Assisted in teaching MT-1008 Multivariate Calculus",
                  "Assisted in teaching SS-1013 Ideology & Constitution of Pakistan",
                ],
              },
              {
                title: "Assessment Management & Technical Operations",
                company: "PROCOM & Developer's Day",
                period: "Feb 2025 – Apr 2025",
                color: "from-purple-900/30 to-purple-700/30",
                border: "border-purple-500",
                points: [
                  "Designed competitive programming problems and MCQs",
                  "Managed technical logistics and server setup",
                  "Performed live troubleshooting during events",
                ],
              },
            ].map((exp, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${exp.color} backdrop-blur-sm rounded-2xl p-6 border ${exp.border}/30 shadow-xl transform transition-all duration-500 hover:scale-[1.02]`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-cyan-300">{exp.company}</p>
                  </div>
                  <span
                    className={`mt-2 md:mt-0 bg-gradient-to-r ${exp.color
                      .split(" ")[0]
                      .replace("/30", "")} ${exp.color
                      .split(" ")[1]
                      .replace(
                        "/30",
                        ""
                      )} text-white px-4 py-1 rounded-full text-sm font-medium`}
                  >
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaCode className="text-cyan-400 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Technical Skills
            </span>
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
                color: "from-gray-800/50 to-gray-900/50",
                border: "border-gray-700",
              },
              {
                title: "Databases",
                skills: ["SQL", "MongoDB", "PostgreSQL", "MySQL", "NoSQL"],
                color: "from-blue-900/30 to-blue-800/30",
                border: "border-blue-700",
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
                color: "from-purple-900/30 to-purple-800/30",
                border: "border-purple-700",
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
                color: "from-green-900/30 to-green-800/30",
                border: "border-green-700",
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
                color: "from-yellow-900/30 to-yellow-800/30",
                border: "border-yellow-700",
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
                color: "from-red-900/30 to-red-800/30",
                border: "border-red-700",
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-2xl p-6 border ${category.border} shadow-xl transform transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl`}
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-800/70 hover:bg-gray-700/70 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105 cursor-default"
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
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Certifications & Learning Platforms
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "CodeSignal",
                icon: SiCodesignal,
                url: "https://codesignal.com/learn/course-paths",
                color: "from-orange-900/30 to-orange-800/30",
                border: "hover:border-orange-500",
                iconColor: "text-orange-500",
              },
              {
                name: "SoloLearn",
                icon: SiSololearn,
                url: "https://www.sololearn.com/en/profile/27122128",
                color: "from-blue-900/30 to-blue-800/30",
                border: "hover:border-blue-500",
                iconColor: "text-blue-500",
              },
              {
                name: "Google Skillshop",
                icon: TbWorld,
                url: "https://skillshop.docebosaas.com/learn",
                color: "from-green-900/30 to-green-800/30",
                border: "hover:border-green-500",
                iconColor: "text-green-500",
              },
              {
                name: "LIFE Global",
                icon: TbWorld,
                url: "https://www.life-global.org/",
                color: "from-purple-900/30 to-purple-800/30",
                border: "hover:border-purple-500",
                iconColor: "text-purple-500",
              },
              {
                name: "HackerRank",
                icon: SiHackerrank,
                url: "https://www.hackerrank.com/dashboard",
                color: "from-emerald-900/30 to-emerald-800/30",
                border: "hover:border-emerald-500",
                iconColor: "text-emerald-500",
              },
              {
                name: "Cisco NetAcad",
                icon: TbWorld,
                url: "https://www.netacad.com/",
                color: "from-red-900/30 to-red-800/30",
                border: "hover:border-red-500",
                iconColor: "text-red-500",
              },
            ].map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${platform.color} backdrop-blur-sm rounded-2xl p-6 border border-gray-700 ${platform.border} transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl group`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gray-900/50 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <platform.icon
                      className={`text-3xl ${platform.iconColor}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition-colors">
                    {platform.name}
                  </h3>
                </div>
                <p className="text-gray-300 group-hover:text-gray-200">
                  {platform.name === "Google Skillshop"
                    ? "Google&apos;s official certification platform"
                    : platform.name === "SoloLearn"
                    ? "Interactive coding tutorials and certifications"
                    : platform.name === "HackerRank"
                    ? "Coding challenges and skill assessments"
                    : platform.name === "CodeSignal"
                    ? "Programming courses and certification paths"
                    : platform.name === "Cisco NetAcad"
                    ? "Networking and IT certifications"
                    : "Leadership and professional development"}
                </p>
                <div className="mt-4 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                  Visit platform <FaExternalLinkAlt className="text-xs" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href={emailLink}
              className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 text-center border border-cyan-500/30 hover:border-cyan-400 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-cyan-500/20 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-700 to-cyan-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300">
                Email
              </h3>
              <p className="text-gray-300">zahmad2812@gmail.com</p>
              <div className="mt-4 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Opens email client
              </div>
            </a>

            <a
              href="https://linkedin.com/in/zubair-ahmed-448041344"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-900/30 to-sky-900/30 rounded-2xl p-6 text-center border border-blue-500/30 hover:border-blue-400 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-blue-500/20 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-700 to-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaLinkedin className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300">
                LinkedIn
              </h3>
              <p className="text-gray-300">Connect professionally</p>
              <div className="mt-4 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Opens in new tab
              </div>
            </a>

            <a
              href="https://github.com/zahmed02"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-gray-900/30 to-slate-900/30 rounded-2xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-gray-500/20 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaGithub className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300">
                GitHub
              </h3>
              <p className="text-gray-300">View my projects</p>
              <div className="mt-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Opens in new tab
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-purple-500/30 text-center text-gray-400">
          <p className="mb-2">
            © {new Date().getFullYear()} Zubair Ahmed. All rights reserved.
          </p>
          <p className="text-sm mb-4 opacity-75">
            Built with Next.js & Tailwind CSS | Deployed on GitHub Pages
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/zahmed02/zahmed02.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors hover:underline"
            >
              Source Code
            </a>
            <a
              href="/resume.pdf"
              className="hover:text-purple-300 transition-colors hover:underline"
            >
              Download Resume
            </a>
          </div>
        </footer>
      </div>

      {/* Image Modal */}
      {imageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
          onClick={() => setImageModalOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-cyan-400 transition-colors"
            onClick={() => setImageModalOpen(false)}
          >
            <FaTimesCircle />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] mx-4">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/procom-event.jpg"
                alt="Zubair Ahmed - Full Size"
                width={3119}
                height={4160}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="text-center mt-4 text-gray-300">
              <p className="text-sm">Click anywhere to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
