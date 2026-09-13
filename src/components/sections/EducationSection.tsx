"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="relative w-full min-h-[100vh] md:min-h-[120vh] flex flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12">
        
        {/* Education & Academic Foundation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="flex-1 glass-panel p-6 sm:p-8 rounded-xl border border-white/10 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <GraduationCap size={110} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-8 border-b border-white/20 pb-4 inline-flex items-center gap-3 uppercase tracking-widest">
              <GraduationCap className="text-cyber-cyan" /> Education
            </h2>
            
            <div className="space-y-8 relative z-10">
              <div className="p-4 rounded-lg bg-black/40 border border-cyber-cyan/20">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-1 gap-1">
                  <h3 className="text-xl font-bold font-mono text-cyber-cyan text-glow">M.Sc. Computer Science</h3>
                  <span className="text-gray-400 font-mono text-sm">[ 2023 – 2025 ]</span>
                </div>
                <p className="text-gray-300 font-sans text-base">University of Calicut</p>
                <p className="text-xs text-gray-400 font-mono mt-2">
                  Specialized in advanced systems, network security architectures, algorithms, and AI models.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-black/40 border border-white/10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-1 gap-1">
                  <h3 className="text-xl font-bold font-mono text-white">Bachelor of Computer Applications (BCA)</h3>
                  <span className="text-gray-400 font-mono text-sm">[ 2020 – 2023 ]</span>
                </div>
                <p className="text-gray-300 font-sans text-base">University of Calicut</p>
                <p className="text-xs text-gray-400 font-mono mt-2">
                  Core fundamentals in software engineering, operating systems, Linux, and networking.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
            <span>VERIFIED CREDENTIALS</span>
            <span className="text-cyber-cyan">UNIVERSITY OF CALICUT</span>
          </div>
        </motion.div>

        {/* Certifications & CTF / Competitive Achievements */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Certification Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            className="glass-panel p-6 sm:p-8 rounded-xl border border-cyber-purple/30 relative overflow-hidden flex-1 shadow-lg"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Award size={80} className="text-cyber-purple" />
            </div>
            <h2 className="text-2xl font-mono font-bold text-cyber-purple mb-5 uppercase tracking-widest flex items-center gap-2">
              <Award /> Certifications
            </h2>
            <div className="flex flex-col gap-3 bg-black/50 p-5 rounded-lg border border-cyber-purple/30 hover:border-cyber-purple transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyber-purple/20 text-purple-300 border border-cyber-purple/40">
                  OFFICIAL CERTIFICATION
                </span>
                <span className="text-gray-400 font-mono text-xs">[ 2026 ]</span>
              </div>
              <p className="text-lg font-mono font-bold text-white flex items-center gap-2 mt-1">
                <span className="w-2.5 h-2.5 rounded-full bg-cyber-purple animate-pulse" />
                Offenso Certified Security Professional (OSCP)
              </p>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Demonstrated practical competency in offensive security, vulnerability exploitation, reconnaissance, network pivoting, and reporting.
              </p>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            className="glass-panel p-6 sm:p-8 rounded-xl border border-cyber-cyan/30 flex-1 shadow-lg"
          >
            <h2 className="text-2xl font-mono font-bold text-cyber-cyan mb-5 uppercase tracking-widest flex items-center gap-2">
              <Trophy size={24} /> Key_Achievements
            </h2>
            <div className="space-y-3.5">
              <div className="p-3.5 bg-black/50 rounded-lg border border-cyber-cyan/20 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyber-cyan">
                    🥇 WINNER (1st PLACE)
                  </span>
                  <span className="text-[11px] font-mono text-gray-500">2026</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  The Beginning Cybersecurity & Ethical Hacking Challenge
                </div>
                <div className="text-xs text-gray-400 font-sans">
                  Offenso Hackers Academy — Ranked 1st across OSINT, Web Security, Cryptography, Forensics, and Reverse Engineering.
                </div>
              </div>

              <div className="p-3.5 bg-black/50 rounded-lg border border-white/10 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-purple-400">
                    🥈 2nd PLACE
                  </span>
                  <span className="text-[11px] font-mono text-gray-500">2026</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Event Horizon: The Cyber Olympics 2026
                </div>
                <div className="text-xs text-gray-400 font-sans">
                  Secured 2nd place in a rigorous 15-hour non-stop cybersecurity competition demonstrating live technical problem-solving and rapid incident triage.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
