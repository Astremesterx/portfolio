"use client";

import { motion } from "framer-motion";
import { ChevronDown, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Salif Muneer C P";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <section className="relative w-full min-h-[100vh] md:min-h-[150vh] flex flex-col items-center justify-start pt-[20vh] sm:pt-[30vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center z-10 glass-panel p-6 sm:p-8 md:p-10 rounded-2xl max-w-4xl w-full border-t border-t-cyber-cyan/50 backdrop-blur-md bg-black/40"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-cyber-cyan font-mono text-xs sm:text-sm uppercase tracking-widest opacity-90">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
            <Terminal size={14} />
            <span>SOC & Cyber Security Analyst</span>
          </span>
          <span className="hidden sm:inline text-gray-500">|</span>
          <span className="text-gray-300">Calicut, Kerala, India</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 font-mono tracking-tight text-white glitch-hover">
          <span className="text-glow">{text}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-3.5 sm:w-4 h-10 sm:h-12 bg-cyber-cyan ml-2 align-middle shadow-[0_0_12px_#00f3ff]"
          />
        </h1>
        
        <h2 className="text-base sm:text-xl md:text-2xl text-gray-200 font-mono mb-6 leading-relaxed max-w-3xl mx-auto">
          Cybersecurity Professional <span className="text-cyber-cyan">/</span> SOC Analyst <span className="text-cyber-cyan">/</span> Security Researcher
        </h2>
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-cyber-cyan/40 bg-cyber-cyan/10 text-cyber-cyan font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
            Seeking Entry-Level Cyber Security Analyst / SOC Analyst Role
          </span>
        </div>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto italic border-l-4 border-cyber-cyan pl-4 text-left leading-relaxed">
          "Bridging offensive security operations, penetration testing, and AI-driven threat detection to engineer resilient defensive ecosystems."
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 font-mono font-bold uppercase tracking-wider text-black bg-cyber-cyan hover:bg-white transition-colors duration-300 box-glow text-center rounded-none group"
          >
            <span className="relative z-10">Explore Security Projects</span>
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 font-mono font-bold uppercase tracking-wider text-cyber-cyan border border-cyber-cyan hover:bg-cyber-cyan/10 transition-colors duration-300 box-glow text-center rounded-none"
          >
            Initiate Contact
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-16 sm:bottom-32 text-cyber-cyan flex flex-col items-center gap-2 font-mono text-xs sm:text-sm tracking-widest opacity-70"
      >
        <span>SCROLL TO INITIATE SEQUENCE</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
