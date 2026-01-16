"use client";

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
} from "react-icons/fa";
import { SiCodesignal, SiSololearn, SiHackerrank } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-4 md:p-8">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header/Navigation */}
        <header className="flex justify-between items-center mb-12 pt-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Zubair Ahmed
          </h1>
          <nav className="hidden md:flex space-x-6">
            {[
              "About",
              "Education",
              "Experience",
              "Skills",
              "Certifications",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </header>

        {/* Hero Section */}
        <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-800/20 z-10"></div>
            <Image
              src="/procom-event.jpg"
              alt="Zubair Ahmed - Professional Photo"
              fill
              className="object-cover rounded-full"
              priority
              sizes="(max-width: 768px) 12rem, 14rem"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Systems Software Engineer &
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/zahmed02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="mailto:zahmad2812@gmail.com"
                className="flex items-center gap-2 bg-cyan-700 hover:bg-cyan-600 px-4 py-2 rounded-lg transition-colors"
              >
                <FaEnvelope /> Contact
              </a>
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
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
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

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-cyan-400" />
                  <span>+92-320-3060747</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-cyan-400" />
                  <span>zahmad2812@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
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
            <FaGraduationCap className="text-cyan-400" />
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-cyan-300">FAST-NUCES, Karachi</p>
              <p className="text-gray-400">Sep 2023 – Jun 2027</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold">
                IGCSE A Levels (Mathematics &amp; CS)
              </h3>
              <p className="text-cyan-300">Cedar College, Karachi</p>
              <p className="text-gray-400">Oct 2022 – Jun 2023</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-purple-500">
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
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Web Development Intern
                  </h3>
                  <p className="text-cyan-300">HUM Network Ltd</p>
                </div>
                <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">
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

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Undergraduate Teaching Assistant
                  </h3>
                  <p className="text-cyan-300">FAST-NUCES</p>
                </div>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">
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

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Assessment Management &amp; Technical Operations
                  </h3>
                  <p className="text-cyan-300">
                    PROCOM &amp; Developer&apos;s Day
                  </p>
                </div>
                <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm">
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
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
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
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {["SQL", "MongoDB", "PostgreSQL", "MySQL", "NoSQL"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="bg-blue-900/50 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
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
                    className="bg-purple-900/50 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
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
                    className="bg-green-900/50 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
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
                    className="bg-yellow-900/50 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
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
                    className="bg-red-900/50 px-3 py-1 rounded-full text-sm"
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
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-4">
                <SiCodesignal className="text-4xl text-orange-500" />
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
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-4">
                <SiSololearn className="text-4xl text-blue-500" />
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
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-4">
                <TbWorld className="text-4xl text-green-500" />
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
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-4">
                <TbWorld className="text-4xl text-purple-500" />
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
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-4">
                <SiHackerrank className="text-4xl text-emerald-500" />
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
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-4">
                <TbWorld className="text-4xl text-red-500" />
                <h3 className="text-xl font-semibold">Cisco NetAcad</h3>
              </div>
              <p className="text-gray-300">Networking and IT certifications</p>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:zahmad2812@gmail.com"
              className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 rounded-xl p-6 text-center hover:from-cyan-800/50 hover:to-blue-800/50 transition-all"
            >
              <FaEnvelope className="text-4xl mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">zahmad2812@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/zubair-ahmed-448041344"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-800/30 to-sky-800/30 rounded-xl p-6 text-center hover:from-blue-800/50 hover:to-sky-800/50 transition-all"
            >
              <FaLinkedin className="text-4xl mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Connect professionally</p>
            </a>

            <a
              href="https://github.com/zahmed02"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800/30 to-slate-800/30 rounded-xl p-6 text-center hover:from-gray-800/50 hover:to-slate-800/50 transition-all"
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
            Built with Next.js &amp; Tailwind CSS | Deployed on GitHub Pages
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://github.com/zahmed02/zahmed02.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Source Code
            </a>
            <a href="/resume.pdf" className="hover:text-white">
              Download Resume
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
