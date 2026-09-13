"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-[100vh] md:min-h-[120vh] flex flex-col items-center justify-center px-4 py-20 md:py-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-20%" }}
        className="glass-panel p-6 sm:p-8 md:p-12 max-w-4xl w-full border border-cyber-purple/30 rounded-lg relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-15 pointer-events-none">
          <ShieldAlert size={140} className="text-cyber-purple" />
        </div>
        
        <div className="flex items-center justify-between border-b border-cyber-purple/30 pb-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyber-purple animate-pulse"></div>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-cyber-purple tracking-widest uppercase">
              Subject_Profile // 01
            </h2>
          </div>
          <span className="text-xs font-mono text-gray-500 border border-cyber-purple/30 px-2 py-0.5 rounded">
            STATUS: ACTIVE
          </span>
        </div>

        <div className="space-y-5 text-base sm:text-lg text-gray-300 font-sans leading-relaxed relative z-10">
          <p>
            <span className="text-cyber-cyan font-semibold">Cybersecurity professional</span> and <span className="text-white font-semibold">M.Sc. Computer Science graduate</span> with hands-on training and industry internship experience in <span className="text-cyber-cyan">security operations (SOC)</span>, <span className="text-cyber-cyan">vulnerability assessment</span>, <span className="text-cyber-cyan">penetration testing</span>, and <span className="text-cyber-cyan">network threat analysis</span>.
          </p>
          <p>
            Deeply versed in <span className="text-white font-medium">Linux security architectures, Active Directory administration, web security, incident triage, and network traffic forensics</span>. Proven track record constructing anomaly detection systems, realistic vulnerable training labs, and competitive problem-solving in fast-paced attack-and-defense cybersecurity exercises.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10 text-center font-mono">
          <div className="p-3 bg-black/50 border border-white/5 rounded">
            <div className="text-cyber-cyan text-xl sm:text-2xl font-bold">OSCP</div>
            <div className="text-xs text-gray-400 mt-1">Offenso Certified</div>
          </div>
          <div className="p-3 bg-black/50 border border-white/5 rounded">
            <div className="text-cyber-purple text-xl sm:text-2xl font-bold">1st Place</div>
            <div className="text-xs text-gray-400 mt-1">Ethical Hacking Champ</div>
          </div>
          <div className="p-3 bg-black/50 border border-white/5 rounded">
            <div className="text-cyber-cyan text-xl sm:text-2xl font-bold">M.Sc.</div>
            <div className="text-xs text-gray-400 mt-1">Computer Science</div>
          </div>
          <div className="p-3 bg-black/50 border border-white/5 rounded">
            <div className="text-cyber-purple text-xl sm:text-2xl font-bold">SOC</div>
            <div className="text-xs text-gray-400 mt-1">Operations & Traffic</div>
          </div>
        </div>
        
        <div className="mt-8 flex gap-4">
          <div className="flex-1 h-1 bg-gradient-to-r from-cyber-purple via-cyber-cyan to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
