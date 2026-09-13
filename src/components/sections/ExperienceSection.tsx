"use client";

import { motion } from "framer-motion";
import { TerminalSquare } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full min-h-[100vh] md:min-h-[150vh] flex flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="text-center md:text-right mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white tracking-widest uppercase inline-block border-b-2 border-cyber-purple pb-2">
            Experience_Log
          </h2>
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-24 bottom-0 w-[2px] bg-cyber-purple/30 z-0"></div>

        {/* Experience 1: Infotact Solutions */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-20%" }}
          className="relative z-10 flex flex-col md:flex-row items-center w-full mb-16"
        >
          {/* Timeline Dot */}
          <div className="absolute left-[17px] md:left-1/2 w-4 h-4 rounded-full bg-cyber-cyan box-glow transform md:-translate-x-1/2 mt-6 md:mt-0 z-20">
            <div className="absolute inset-0 rounded-full bg-cyber-cyan animate-ping opacity-75"></div>
          </div>

          <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 text-left md:text-right">
            <div className="flex items-center justify-start md:justify-end gap-2 text-cyber-cyan mb-2 font-mono">
              <TerminalSquare size={18} />
              <span className="font-semibold text-glow">[ Jul 2026 – Present ]</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Cybersecurity Intern</h3>
            <h4 className="text-lg text-cyber-cyan/90 font-mono mb-2">Infotact Solutions</h4>
            <span className="inline-block px-2.5 py-0.5 text-xs font-mono bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan rounded mb-3">
              CURRENT POSITION
            </span>
          </div>

          <div className="w-full md:w-1/2 pl-12 md:pl-12 mt-4 md:mt-0">
            <div className="glass-panel p-6 rounded-lg border-l-4 border-cyber-cyan text-gray-300 font-sans space-y-2.5 shadow-lg">
              <ul className="list-disc list-inside space-y-2 marker:text-cyber-cyan text-sm sm:text-base leading-relaxed">
                <li>Gaining hands-on industry experience through professional cybersecurity training, technical assessments, and project-based development.</li>
                <li>Applying cybersecurity and networking concepts through practical exercises and industry-oriented security projects.</li>
                <li>Analyzing security telemetry, evaluating threat surfaces, and implementing hardened posture safeguards.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Experience 2: Offenso Hackers Academy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-20%" }}
          className="relative z-10 flex flex-col md:flex-row items-center w-full mb-8"
        >
          {/* Timeline Dot */}
          <div className="absolute left-[17px] md:left-1/2 w-4 h-4 rounded-full bg-cyber-purple box-glow transform md:-translate-x-1/2 mt-6 md:mt-0 z-20">
            <div className="absolute inset-0 rounded-full bg-cyber-purple opacity-50"></div>
          </div>

          <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 text-left md:text-right">
            <div className="flex items-center justify-start md:justify-end gap-2 text-cyber-purple mb-2 font-mono">
              <TerminalSquare size={18} />
              <span>[ Feb 2026 – Aug 2026 ]</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Cyber Security Student Trainee</h3>
            <h4 className="text-lg text-cyber-purple font-mono mb-2">Offenso Hackers Academy</h4>
            <span className="inline-block px-2.5 py-0.5 text-xs font-mono bg-cyber-purple/10 border border-cyber-purple/40 text-purple-300 rounded mb-3">
              INTENSIVE TRAINING
            </span>
          </div>

          <div className="w-full md:w-1/2 pl-12 md:pl-12 mt-4 md:mt-0">
            <div className="glass-panel p-6 rounded-lg border-l-4 border-cyber-purple text-gray-300 font-sans space-y-2.5 shadow-lg">
              <ul className="list-disc list-inside space-y-2 marker:text-cyber-purple text-sm sm:text-base leading-relaxed">
                <li>Received hands-on training in penetration testing, Linux security, web application security, SOC operations, Active Directory, network security, and Android security.</li>
                <li>Practiced machine and network penetration testing, vulnerability assessment, reconnaissance, exploitation, and security analysis through practical labs and CTF exercises.</li>
                <li>Applied offensive and defensive security concepts through attack-and-defense exercises, CTF challenges, and security monitoring activities.</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
