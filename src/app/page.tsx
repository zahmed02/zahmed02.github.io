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
  FaExternalLinkAlt,
  FaTimes,
  FaDownload,
} from "react-icons/fa";
import { SiCodesignal, SiSololearn, SiHackerrank } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

export default function Page() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Track scroll position for background and active nav
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll
      const sections = [
        "about",
        "education",
        "experience",
        "skills",
        "certifications",
        "contact",
      ];
      const currentSection =
        sections.find((section) => {
          const element = sectionRefs.current[section];
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        }) || "hero";

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic background based on scroll
  const getBackgroundStyle = () => {
    const progress = Math.min(scrollY / 1000, 1);
    const hue = Math.floor(210 + progress * 60); // 210 (blue) to 270 (purple)
    return {
      background: `linear-gradient(135deg, 
        hsl(${hue}, 85%, 6%) 0%,
        hsl(${hue + 10}, 75%, 10%) 25%,
        hsl(${hue + 20}, 65%, 12%) 50%,
        hsl(${hue}, 75%, 8%) 75%,
        hsl(${hue - 10}, 85%, 6%) 100%
      )`,
    };
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("hero");
    } else {
      const element = sectionRefs.current[sectionId];
      if (element) {
        const offset = 80; // Account for fixed navbar
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
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

  // Open image in modal
  const openImageModal = () => {
    setIsImageModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close image modal
  const closeImageModal = () => {
    setIsImageModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Handle modal close on backdrop click
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeImageModal();
    }
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background:
            "linear-gradient(90deg, #000814 0%, #001d3d 50%, #000814 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 100, 255, 0.2)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-blue-900/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/in/zubair-ahmed-448041344"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/zahmed02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className="min-h-screen text-white pt-16 transition-all duration-500"
        style={getBackgroundStyle()}
      >
        {/* Animated Background Particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="mb-20 pt-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Image with hover effect */}
              <div
                className="relative group cursor-pointer"
                onClick={openImageModal}
              >
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-300">
                  <Image
                    src="/procom-event.jpg"
                    alt="Zubair Ahmed - Professional Photo"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                    sizes="(max-width: 768px) 16rem, 16rem"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <FaExternalLinkAlt className="inline-block mb-2 text-3xl text-white" />
                      <p className="text-white font-semibold">Click to view</p>
                    </div>
                  </div>
                </div>

                {/* Name under image */}
                <div className="mt-8 text-center">
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                    Zubair Ahmed
                  </h1>
                  <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
                </div>
              </div>

              {/* Hero Text */}
              <div className="flex-1">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="block">Systems Software</span>
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Engineer & Developer
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Passionate Computer Science undergraduate specializing in
                  database management, system-level applications, and full-stack
                  development. Focused on creating efficient, scalable solutions
                  with expertise in both high and low-level programming.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:zahmad2812@gmail.com"
                    className="flex items-center gap-3 bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-600 hover:to-blue-600 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 group"
                  >
                    <FaEnvelope className="group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">Get In Touch</span>
                  </a>
                  <a
                    href="/resume.pdf"
                    className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20 border border-gray-700 group"
                  >
                    <FaDownload className="group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            ref={(el) => (sectionRefs.current.about = el)}
            className="mb-20 scroll-mt-16"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <FaGraduationCap className="text-white" />
              </div>
              <h2 className="text-4xl font-bold">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                  Background & Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing BS in Computer Science at FAST-NUCES
                  Karachi with a focus on systems programming and database
                  architecture. I combine theoretical knowledge with practical
                  experience to build robust software solutions. My passion lies
                  in optimizing performance and creating efficient low-level
                  systems that scale.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-300">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                      <FaPhone className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium">+92-320-3060747</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                      <FaEnvelope className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">zahmad2812@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                      <FaMapMarkerAlt className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium">Karachi, Sindh 75290</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section
            id="education"
            ref={(el) => (sectionRefs.current.education = el)}
            className="mb-20 scroll-mt-16"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                <FaGraduationCap className="text-white" />
              </div>
              <h2 className="text-4xl font-bold">Education</h2>
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
                  className="bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {edu.title}
                      </h3>
                      <p className="text-cyan-300 text-lg">{edu.institution}</p>
                    </div>
                    <span
                      className={`mt-2 md:mt-0 px-4 py-2 bg-gradient-to-r ${edu.color} text-white rounded-full text-sm font-medium`}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <div
                    className={`h-1 w-24 rounded-full bg-gradient-to-r ${edu.color} transition-all duration-300 group-hover:w-32`}
                  ></div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            ref={(el) => (sectionRefs.current.experience = el)}
            className="mb-20 scroll-mt-16"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-cyan-500 flex items-center justify-center">
                <FaBriefcase className="text-white" />
              </div>
              <h2 className="text-4xl font-bold">Professional Experience</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Web Development Intern",
                  company: "HUM Network Ltd",
                  period: "June 2025 – July 2025",
                  points: [
                    "Built responsive full-stack websites with interactive UIs",
                    "Implemented relational database schemas and authentication",
                    "Designed RESTful APIs for data exchange",
                  ],
                  color: "from-cyan-600 to-blue-700",
                },
                {
                  title: "Undergraduate Teaching Assistant",
                  company: "FAST-NUCES",
                  period: "Feb 2025 – May 2025",
                  points: [
                    "Assisted in teaching Multivariate Calculus",
                    "Assisted in teaching Ideology & Constitution of Pakistan",
                    "Provided mentorship to students",
                  ],
                  color: "from-blue-600 to-purple-700",
                },
                {
                  title: "Technical Operations Manager",
                  company: "PROCOM & Developer's Day",
                  period: "Feb 2025 – Apr 2025",
                  points: [
                    "Designed competitive programming problems",
                    "Managed technical logistics and server setup",
                    "Performed live troubleshooting during events",
                  ],
                  color: "from-purple-600 to-pink-700",
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
                >
                  <div className="mb-4">
                    <div
                      className={`h-2 w-16 rounded-full bg-gradient-to-r ${exp.color} mb-4`}
                    ></div>
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-cyan-300">{exp.company}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span
                          className={`w-2 h-2 mt-2 rounded-full bg-gradient-to-r ${exp.color}`}
                        ></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            ref={(el) => (sectionRefs.current.skills = el)}
            className="mb-20 scroll-mt-16"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600 to-yellow-500 flex items-center justify-center">
                <FaCode className="text-white" />
              </div>
              <h2 className="text-4xl font-bold">Technical Skills</h2>
            </div>

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
                  color: "from-orange-500 to-red-500",
                },
                {
                  category: "Databases",
                  skills: ["SQL", "MongoDB", "PostgreSQL", "MySQL", "NoSQL"],
                  color: "from-blue-500 to-cyan-500",
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
                  color: "from-green-500 to-emerald-500",
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
                  color: "from-purple-500 to-pink-500",
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
                  color: "from-gray-500 to-blue-500",
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
                  color: "from-red-500 to-orange-500",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                    ></span>
                    <span className="text-cyan-300">{category.category}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/70 hover:text-white transition-all duration-300 hover:scale-105 cursor-default"
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
          <section
            id="certifications"
            ref={(el) => (sectionRefs.current.certifications = el)}
            className="mb-20 scroll-mt-16"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600 to-rose-500 flex items-center justify-center">
                <FaCertificate className="text-white" />
              </div>
              <h2 className="text-4xl font-bold">
                Certifications & Learning Platforms
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "CodeSignal",
                  icon: SiCodesignal,
                  color: "text-orange-500",
                  bgColor: "from-orange-900/30 to-orange-700/20",
                  href: "https://codesignal.com/learn/course-paths",
                  desc: "Programming courses and certification paths",
                },
                {
                  name: "SoloLearn",
                  icon: SiSololearn,
                  color: "text-blue-500",
                  bgColor: "from-blue-900/30 to-blue-700/20",
                  href: "https://www.sololearn.com/en/profile/27122128",
                  desc: "Interactive coding tutorials and certifications",
                },
                {
                  name: "Google Skillshop",
                  icon: TbWorld,
                  color: "text-green-500",
                  bgColor: "from-green-900/30 to-green-700/20",
                  href: "https://skillshop.docebosaas.com/learn",
                  desc: "Google's official certification platform",
                },
                {
                  name: "LIFE Global",
                  icon: TbWorld,
                  color: "text-purple-500",
                  bgColor: "from-purple-900/30 to-purple-700/20",
                  href: "https://www.life-global.org/",
                  desc: "Leadership and professional development",
                },
                {
                  name: "HackerRank",
                  icon: SiHackerrank,
                  color: "text-emerald-500",
                  bgColor: "from-emerald-900/30 to-emerald-700/20",
                  href: "https://www.hackerrank.com/dashboard",
                  desc: "Coding challenges and skill assessments",
                },
                {
                  name: "Cisco NetAcad",
                  icon: TbWorld,
                  color: "text-red-500",
                  bgColor: "from-red-900/30 to-red-700/20",
                  href: "https://www.netacad.com/",
                  desc: "Networking and IT certifications",
                },
              ].map((platform, index) => (
                <a
                  key={index}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block bg-gradient-to-br ${platform.bgColor} backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gray-800/50 group-hover:bg-gray-700/70 transition-colors">
                      <platform.icon className={`text-3xl ${platform.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{platform.name}</h3>
                    <FaExternalLinkAlt className="ml-auto text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="text-gray-300">{platform.desc}</p>
                  <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 group-hover:w-16 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            ref={(el) => (sectionRefs.current.contact = el)}
            className="mb-20 scroll-mt-16"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: FaEnvelope,
                  title: "Email",
                  value: "zahmad2812@gmail.com",
                  href: "mailto:zahmad2812@gmail.com",
                  gradient: "from-cyan-700 to-blue-600",
                },
                {
                  icon: FaLinkedin,
                  title: "LinkedIn",
                  value: "Connect professionally",
                  href: "https://linkedin.com/in/zubair-ahmed-448041344",
                  gradient: "from-blue-700 to-sky-600",
                },
                {
                  icon: FaGithub,
                  title: "GitHub",
                  value: "View my projects",
                  href: "https://github.com/zahmed02",
                  gradient: "from-gray-700 to-slate-600",
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.title !== "Email" ? "_blank" : undefined}
                  rel={
                    contact.title !== "Email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`block bg-gradient-to-br ${contact.gradient} rounded-2xl p-8 text-center hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group`}
                >
                  <contact.icon className="text-5xl mx-auto mb-6 text-white group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-semibold mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-gray-200">{contact.value}</p>
                  <div className="mt-6 h-1 w-16 mx-auto rounded-full bg-white/30 group-hover:w-24 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-20 pt-12 border-t border-gray-700/50 text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Zubair Ahmed</h3>
              <p className="text-gray-400 mb-6">
                Systems Software Engineer & Full-Stack Developer
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                {[
                  {
                    icon: FaLinkedin,
                    href: "https://linkedin.com/in/zubair-ahmed-448041344",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: FaGithub,
                    href: "https://github.com/zahmed02",
                    color: "hover:text-white",
                  },
                  {
                    icon: FaEnvelope,
                    href: "mailto:zahmad2812@gmail.com",
                    color: "hover:text-cyan-400",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/70`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-gray-500 text-sm">
              <p>
                © {new Date().getFullYear()} Zubair Ahmed. All rights reserved.
              </p>
              <p className="mt-2">
                Built with Next.js & Tailwind CSS | Deployed on GitHub Pages
              </p>
              <div className="mt-4 flex justify-center space-x-6 text-gray-400">
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
                <button
                  onClick={() => scrollToSection("hero")}
                  className="hover:text-white transition-colors"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={handleModalClick}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors p-2"
            >
              <FaTimes size={28} />
            </button>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/procom-event.jpg"
                alt="Zubair Ahmed - Professional Photo"
                width={3119}
                height={4160}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            </div>
            <p className="text-center text-gray-300 mt-4">
              Click outside to close
            </p>
          </div>
        </div>
      )}

      {/* Add custom styles for gradient animation */}
      <style jsx global>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}
