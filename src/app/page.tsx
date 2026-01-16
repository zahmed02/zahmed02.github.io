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
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const backgroundColors = [
    "from-gray-900 via-blue-900 to-gray-900",
    "from-gray-900 via-indigo-900 to-purple-900",
    "from-gray-900 via-blue-950 to-cyan-900",
    "from-gray-900 via-purple-900 to-violet-900",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll
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

    // Change background color every 30 seconds
    const bgInterval = setInterval(() => {
      setBgColorIndex((prev) => (prev + 1) % backgroundColors.length);
    }, 30000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(bgInterval);
    };
  }, []);

  const handleNavClick = (section: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const openImageModal = () => {
    setIsImageModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${backgroundColors[bgColorIndex]} text-white transition-all duration-1000 p-4 md:p-8`}
    >
      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={closeImageModal}
              className="absolute -top-10 right-0 text-white hover:text-cyan-300 text-2xl"
            >
              <FaTimes />
            </button>
            <Image
              src="/procom-event.jpg"
              alt="Zubair Ahmed - Full Size"
              width={3119}
              height={4160}
              className="rounded-lg shadow-2xl object-contain max-h-[80vh]"
            />
            <p className="text-center mt-4 text-gray-300">
              Zubair Ahmed - Professional Photo
            </p>
          </div>
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Fixed Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/90 backdrop-blur-md border-b border-blue-500/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <nav className="flex justify-center">
            <div className="flex space-x-1 md:space-x-2 bg-gray-900/80 border border-blue-500/30 rounded-full px-2 py-2 backdrop-blur-sm">
              {[
                "about",
                "education",
                "experience",
                "skills",
                "certifications",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeSection === item
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-blue-900/30"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto pt-24">
        {/* Hero Section */}
        <section className="mb-20 flex flex-col md:flex-row items-center gap-10">
          <div className="relative group">
            <div
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-cyan-500/50 cursor-pointer"
              onClick={openImageModal}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-800/20 z-10"></div>
              <Image
                src="/procom-event.jpg"
                alt="Zubair Ahmed"
                fill
                className="object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                priority
                sizes="(max-width: 768px) 14rem, 16rem"
              />

              {/* Hover overlay with view button */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <div className="text-center">
                  <FaExpand className="text-4xl text-white mb-2 mx-auto" />
                  <span className="text-white font-semibold">
                    Click to View
                  </span>
                </div>
              </div>
            </div>

            {/* Name under image */}
            <div className="mt-6 text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse-slow">
                Zubair Ahmed
              </h1>
              <p className="text-gray-300 mt-2">
                Systems Software Engineer & Full-Stack Developer
              </p>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Building the Future with
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Code & Innovation
              </span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              CS undergraduate specializing in database management, system-level
              applications, and scalable software solutions. Passionate about
              creating efficient, high-performance systems through innovative
              programming approaches.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://linkedin.com/in/zubair-ahmed-448041344"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <FaLinkedin className="text-xl" /> Connect on LinkedIn
              </a>
              <a
                href="https://github.com/zahmed02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/30"
              >
                <FaGithub className="text-xl" /> View GitHub Projects
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <FaGraduationCap className="text-cyan-400 animate-bounce-slow" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                Background & Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing BS in Computer Science at FAST-NUCES Karachi
                with a focus on systems programming and database architecture.
                My vision is to bridge the gap between high-level application
                development and low-level system optimization, creating software
                that's both powerful and efficient.
              </p>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50 transition-colors">
                    <FaPhone className="text-cyan-400" />
                  </div>
                  <span>+92-320-3060747</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50 transition-colors">
                    <FaEnvelope className="text-cyan-400" />
                  </div>
                  <span>zahmad2812@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50 transition-colors">
                    <FaMapMarkerAlt className="text-cyan-400" />
                  </div>
                  <span>Karachi, Sindh 75290</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <FaGraduationCap className="text-cyan-400 animate-bounce-slow" />
            Education
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Bachelor of Science in Computer Science",
                institution: "FAST-NUCES, Karachi",
                period: "Sep 2023 – Jun 2027",
                borderColor: "border-cyan-500",
                bgColor: "bg-cyan-500/10",
              },
              {
                title: "IGCSE A Levels (Mathematics & CS)",
                institution: "Cedar College, Karachi",
                period: "Oct 2022 – Jun 2023",
                borderColor: "border-blue-500",
                bgColor: "bg-blue-500/10",
              },
              {
                title: "IGCSE O Levels (General Studies)",
                institution:
                  "Montessori Complex Cambridge School (MCCS), Karachi",
                period: "May 2019 – Jun 2020 | Score: 2A*, 5A",
                borderColor: "border-purple-500",
                bgColor: "bg-purple-500/10",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className={`bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border-l-4 ${edu.borderColor} ${edu.bgColor} hover:scale-[1.01] transition-all duration-500 hover:shadow-xl`}
              >
                <h3 className="text-2xl font-semibold mb-2">{edu.title}</h3>
                <p className="text-cyan-300 text-lg mb-1">{edu.institution}</p>
                <p className="text-gray-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <FaBriefcase className="text-cyan-400 animate-bounce-slow" />
            Experience
          </h2>
          <div className="space-y-8">
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
                className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.01] hover:shadow-xl group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-300 text-lg mt-1">{exp.company}</p>
                  </div>
                  <span
                    className={`bg-${exp.color}-900/30 text-${exp.color}-300 px-4 py-2 rounded-full text-sm font-medium`}
                  >
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 group/item hover:text-white transition-colors"
                    >
                      <div
                        className={`w-2 h-2 mt-2 rounded-full bg-${exp.color}-500`}
                      ></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <FaCode className="text-cyan-400 animate-bounce-slow" />
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Programming Languages",
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
                className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-sm bg-${category.color}-900/30 hover:bg-${category.color}-900/50 text-${category.color}-300 hover:text-white transition-all duration-300 cursor-default hover:scale-105`}
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
        <section id="certifications" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <FaCertificate className="text-cyan-400 animate-bounce-slow" />
            Certifications & Learning Platforms
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <SiCodesignal className="text-4xl text-orange-500" />,
                title: "CodeSignal",
                description: "Programming courses and certification paths",
                link: "https://codesignal.com/learn/course-paths",
                color: "orange",
              },
              {
                icon: <SiSololearn className="text-4xl text-blue-500" />,
                title: "SoloLearn",
                description: "Interactive coding tutorials and certifications",
                link: "https://www.sololearn.com/en/profile/27122128",
                color: "blue",
              },
              {
                icon: <TbWorld className="text-4xl text-green-500" />,
                title: "Google Skillshop",
                description: "Google's official certification platform",
                link: "https://skillshop.docebosaas.com/learn",
                color: "green",
              },
              {
                icon: <TbWorld className="text-4xl text-purple-500" />,
                title: "LIFE Global",
                description: "Leadership and professional development",
                link: "https://www.life-global.org/",
                color: "purple",
              },
              {
                icon: <SiHackerrank className="text-4xl text-emerald-500" />,
                title: "HackerRank",
                description: "Coding challenges and skill assessments",
                link: "https://www.hackerrank.com/dashboard",
                color: "emerald",
              },
              {
                icon: <TbWorld className="text-4xl text-red-500" />,
                title: "Cisco NetAcad",
                description: "Networking and IT certifications",
                link: "https://www.netacad.com/",
                color: "red",
              },
            ].map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-${platform.color}-500 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-${platform.color}-500/20 group`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{platform.title}</h3>
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {platform.description}
                </p>
                <div className="mt-4 text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
                  Click to visit →
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-10">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:zahmad2812@gmail.com"
              className="bg-gradient-to-br from-cyan-800/20 to-blue-800/20 rounded-2xl p-8 text-center border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/20 group"
            >
              <div className="bg-cyan-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-3xl text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                zahmad2812@gmail.com
              </p>
            </a>

            <a
              href="https://linkedin.com/in/zubair-ahmed-448041344"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-800/20 to-sky-800/20 rounded-2xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20 group"
            >
              <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaLinkedin className="text-3xl text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                Connect professionally
              </p>
            </a>

            <a
              href="https://github.com/zahmed02"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-gray-800/20 to-slate-800/20 rounded-2xl p-8 text-center border border-gray-600/20 hover:border-gray-400/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-gray-500/20 group"
            >
              <div className="bg-gray-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaGithub className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                View my projects
              </p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-gray-700/50 text-center text-gray-400">
          <p className="text-lg mb-2">
            © {new Date().getFullYear()} Zubair Ahmed. All rights reserved.
          </p>
          <p className="mb-6">
            Built with Next.js & Tailwind CSS | Deployed on GitHub Pages
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/zahmed02/zahmed02.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110"
            >
              Source Code
            </a>
            <a
              href="/resume.pdf"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110"
            >
              Download Resume
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-400 hover:text-cyan-300 transition-colors hover:scale-110"
            >
              Back to Top ↑
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
