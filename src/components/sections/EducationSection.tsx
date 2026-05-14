"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section className="relative w-full min-h-[120vh] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12">
        
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="flex-1 glass-panel p-8 rounded-xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <GraduationCap size={100} className="text-white" />
          </div>
          <h2 className="text-3xl font-mono font-bold text-white mb-8 border-b border-white/20 pb-4 inline-flex items-center gap-3 uppercase tracking-widest">
            <GraduationCap className="text-cyber-cyan" /> Education
          </h2>
          
          <div className="space-y-8 relative z-10">
            <div>
              <div className="flex justify-between items-end mb-1">
                <h3 className="text-xl font-bold font-mono text-cyber-cyan text-glow">M.Sc. Computer Science</h3>
                <span className="text-gray-400 font-mono text-sm">[ 2023–2025 ]</span>
              </div>
              <p className="text-gray-300 font-sans text-lg">University of Calicut</p>
            </div>
            
            <div>
              <div className="flex justify-between items-end mb-1">
                <h3 className="text-xl font-bold font-mono text-white">BCA</h3>
                <span className="text-gray-400 font-mono text-sm">[ 2020–2023 ]</span>
              </div>
              <p className="text-gray-300 font-sans text-lg">University of Calicut</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications & Interests */}
        <div className="flex-1 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            className="glass-panel p-8 rounded-xl border border-cyber-purple/30 relative overflow-hidden flex-1"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Award size={80} className="text-cyber-purple" />
            </div>
            <h2 className="text-2xl font-mono font-bold text-cyber-purple mb-6 uppercase tracking-widest flex items-center gap-2">
              <Award /> Certifications
            </h2>
            <div className="flex items-center gap-3 bg-black/40 p-4 rounded-lg border border-cyber-purple/20">
              <div className="w-2 h-2 rounded-full bg-cyber-purple animate-pulse" />
              <p className="text-lg font-sans text-gray-200">
                Offenso Certified Security Professional <span className="text-gray-500 font-mono text-sm block mt-1">(Expected 2026)</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            className="glass-panel p-8 rounded-xl border border-cyber-cyan/30 flex-1"
          >
            <h2 className="text-2xl font-mono font-bold text-cyber-cyan mb-6 uppercase tracking-widest">
              Core_Interests
            </h2>
            <div className="flex flex-wrap gap-3">
              {["AI Safety", "Adversarial Machine Learning", "Secure AI Systems", "Threat Modeling", "Generative AI"].map((interest, i) => (
                <span key={i} className="px-3 py-2 text-sm font-sans font-medium text-white bg-black/50 rounded-full border border-cyber-cyan/40 hover:border-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all cursor-default">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
