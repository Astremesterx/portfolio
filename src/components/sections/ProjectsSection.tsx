"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FolderGit2, Cpu, ShieldCheck } from "lucide-react";
import { MouseEvent } from "react";

const projects = [
  {
    title: "CAN-Sentinel — Automotive ECU IDS",
    badge: "AUTOMOTIVE CYBERSECURITY / ML",
    icon: <ShieldCheck size={32} />,
    description: "Automotive ECU Intrusion Detection System built with Linux SocketCAN/vcan0. Features C-based real-time packet capture, an Isolation Forest anomaly detection pipeline in Python/Scikit-learn, and a PyQt dashboard for live threat visualization.",
    tech: ["Linux SocketCAN", "C", "Python", "Scikit-learn", "Isolation Forest", "PyQt"],
    color: "rgba(0, 243, 255, 0.55)" // cyan
  },
  {
    title: "Cybersecurity Training Range",
    badge: "OFFENSIVE & DEFENSIVE WEB LAB",
    icon: <FolderGit2 size={32} />,
    description: "Vulnerable web platform designed for penetration-testing mastery. Implements live labs for Command Injection, Path Traversal, IDOR, Race Conditions, and Broken Access Control with remediation playbooks.",
    tech: ["Node.js", "Express.js", "SQLite", "OWASP Top 10", "Burp Suite", "Secure Coding"],
    color: "rgba(157, 0, 255, 0.55)" // purple
  },
  {
    title: "Fake Logo Detection & Brand Defense",
    badge: "COMPUTER VISION / THREAT MITIGATION",
    icon: <Cpu size={32} />,
    description: "Deep learning CNN detection framework built to recognize counterfeit digital logos and protect brand authenticity against malicious brand impersonation and phishing kits.",
    tech: ["TensorFlow", "Keras", "OpenCV", "TF Lite", "Python", "Threat Mitigation"],
    color: "rgba(0, 243, 255, 0.45)" // cyan
  },
  {
    title: "Cybersecurity Lab & Attack Simulation",
    badge: "PENETRATION TESTING & CTF",
    icon: <ShieldCheck size={32} />,
    description: "Controlled attack-and-defense environment configured for privilege escalation, Active Directory reconnaissance, lateral movement analysis, and network packet forensics.",
    tech: ["Metasploit", "Nmap", "Wireshark", "Burp Suite", "Active Directory", "Linux"],
    color: "rgba(255, 0, 255, 0.5)" // magenta
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-10%" }}
      onMouseMove={handleMouseMove}
      className="group relative max-w-md w-full glass-panel rounded-xl overflow-hidden cursor-pointer p-6 sm:p-8 flex flex-col items-start gap-4 transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-cyber-cyan/50 hover:shadow-[0_0_35px_rgba(0,243,255,0.15)]"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${project.color},
              transparent 40%
            )
          `,
        }}
      />
      <div className="flex items-center justify-between w-full relative z-10">
        <div className="text-white group-hover:text-cyber-cyan transition-colors duration-300">
          {project.icon}
        </div>
        <span className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded bg-black/70 border border-cyber-cyan/30 text-cyber-cyan">
          {project.badge}
        </span>
      </div>
      <h3 className="relative z-10 text-xl sm:text-2xl font-bold font-mono mt-1 text-white group-hover:text-glow transition-all">
        {project.title}
      </h3>
      <p className="relative z-10 text-gray-300 font-sans leading-relaxed text-sm sm:text-base">
        {project.description}
      </p>
      <div className="relative z-10 mt-auto pt-4 flex flex-wrap gap-2 w-full border-t border-white/10">
        {project.tech.map((t: string, i: number) => (
          <span key={i} className="text-xs font-mono px-2.5 py-1 bg-white/5 rounded border border-white/15 text-gray-200">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full min-h-[100vh] md:min-h-[150vh] flex flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="mb-14 text-center"
        >
          <div className="inline-block mb-3">
            <span className="text-xs font-mono text-cyber-cyan tracking-widest uppercase border border-cyber-cyan/30 px-3 py-1 rounded-full bg-cyber-cyan/10">
              FEATURED SECURITY WORK
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white tracking-widest uppercase block pb-2">
            Active_<span className="text-cyber-cyan text-glow">Projects & Labs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
