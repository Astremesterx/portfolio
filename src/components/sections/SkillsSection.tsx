"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Cybersecurity",
    color: "cyber-cyan",
    items: ["Penetration Testing", "Vulnerability Assessment", "Web Security", "Network Security", "Threat Detection", "Incident Analysis", "OSINT", "Phishing Analysis", "MITRE ATT&CK"],
  },
  {
    category: "Programming & AI",
    color: "cyber-purple",
    items: ["Python", "TensorFlow", "Keras", "OpenCV", "Data Analysis", "AI Model Integration"],
  },
  {
    category: "Tools & Tech",
    color: "cyber-blue",
    items: ["Nmap", "Wireshark", "Metasploit", "SQLMap", "Shodan", "URLScan", "Git", "Node.js", "React", "Supabase", "APIs"],
  }
];

export function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative w-full min-h-[150vh] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="w-12 h-1 bg-cyber-cyan"></div>
          <h2 className="text-4xl font-mono font-bold text-white tracking-widest uppercase">
            System_Capabilities
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass-panel p-6 border-t-4 border-t-cyber-cyan hover:border-t-white transition-colors duration-300"
            >
              <h3 className="text-xl font-mono font-bold text-cyber-cyan mb-6 uppercase tracking-wider">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-sm font-mono text-gray-300 bg-black/50 border border-cyber-cyan/30 rounded hover:border-cyber-cyan hover:text-cyber-cyan transition-colors hover:box-glow cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
