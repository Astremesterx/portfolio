"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative w-full min-h-[120vh] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-20%" }}
        className="glass-panel p-8 md:p-12 max-w-4xl w-full border border-cyber-purple/30 rounded-lg relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <ShieldAlert size={120} className="text-cyber-purple" />
        </div>
        
        <div className="flex items-center gap-4 mb-8 border-b border-cyber-purple/30 pb-4">
          <div className="w-3 h-3 bg-cyber-purple animate-pulse"></div>
          <h2 className="text-3xl font-mono font-bold text-cyber-purple tracking-widest uppercase">
            Subject_Profile
          </h2>
        </div>

        <div className="space-y-6 text-lg md:text-xl text-gray-300 font-sans leading-relaxed relative z-10">
          <p>
            <span className="text-cyber-cyan font-bold">Cybersecurity-focused</span> Computer Science graduate with expertise in penetration testing, threat modeling, security automation, AI systems, and full-stack development.
          </p>
          <p>
            Passionate about <span className="text-cyber-cyan font-bold">AI safety</span>, adversarial machine learning, and the secure deployment of intelligent systems. I specialize in bridging the gap between offensive security and robust AI architectures.
          </p>
        </div>
        
        <div className="mt-8 flex gap-4">
          <div className="flex-1 h-1 bg-gradient-to-r from-cyber-purple to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
