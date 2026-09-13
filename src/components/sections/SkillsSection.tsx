"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Cybersecurity & Operations",
    color: "cyber-cyan",
    borderColor: "border-t-cyber-cyan",
    badgeBorder: "border-cyber-cyan/30 hover:border-cyber-cyan hover:text-cyber-cyan",
    icon: "Shield",
    items: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Web Application Security",
      "Network Security",
      "Threat Detection",
      "Security Monitoring (SOC)",
      "Incident Analysis",
      "Phishing Analysis",
      "Network Traffic Analysis"
    ],
  },
  {
    category: "Networking & System Administration",
    color: "cyber-purple",
    borderColor: "border-t-cyber-purple",
    badgeBorder: "border-cyber-purple/30 hover:border-cyber-purple hover:text-cyber-purple",
    icon: "Server",
    items: [
      "Linux",
      "Active Directory",
      "TCP/IP & DNS",
      "Routing & Switching",
      "Firewalls & VPN",
      "Network Troubleshooting",
      "VirtualBox",
      "Cisco Packet Tracer"
    ],
  },
  {
    category: "Programming & Security Tools",
    color: "cyber-blue",
    borderColor: "border-t-[#00f3ff]",
    badgeBorder: "border-blue-400/30 hover:border-blue-400 hover:text-cyan-300",
    icon: "Cpu",
    items: [
      "Python",
      "C",
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "Metasploit",
      "SQLMap",
      "Wazuh",
      "Splunk",
      "MobSF",
      "Shodan",
      "VirusTotal",
      "URLScan"
    ],
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
    <section id="skills" className="relative w-full min-h-[100vh] md:min-h-[150vh] flex flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="mb-8 md:mb-12 flex items-center gap-4"
        >
          <div className="w-12 h-1 bg-cyber-cyan"></div>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white tracking-widest uppercase">
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
          {skillGroups.map((skillGroup, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`glass-panel p-6 sm:p-7 border-t-4 ${skillGroup.borderColor} hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all duration-300 rounded-xl flex flex-col`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-mono font-bold text-white uppercase tracking-wider">
                  {skillGroup.category}
                </h3>
                <span className="text-xs font-mono px-2 py-1 rounded bg-black/60 border border-white/10 text-gray-400">
                  {skillGroup.items.length} Modules
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((skill, j) => (
                  <span
                    key={j}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-mono text-gray-200 bg-black/60 border ${skillGroup.badgeBorder} rounded-md transition-all cursor-default shadow-sm`}
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
