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
    <section className="relative w-full h-[150vh] flex flex-col items-center justify-start pt-[30vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center z-10 glass-panel p-10 rounded-2xl max-w-4xl w-full border-t border-t-cyber-cyan/50 backdrop-blur-md bg-black/40"
      >
        <div className="flex items-center justify-center gap-3 mb-4 text-cyber-cyan font-mono text-sm uppercase tracking-widest opacity-80">
          <Terminal size={16} />
          <span>System Initialized</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-mono tracking-tight text-white glitch-hover">
          <span className="text-glow">{text}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-4 h-12 bg-cyber-cyan ml-2 align-middle"
          />
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 font-mono mb-6">
          Cybersecurity Engineer <span className="text-cyber-cyan">|</span> AI Systems Developer <span className="text-cyber-cyan">|</span> Security Researcher
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto italic border-l-4 border-cyber-cyan pl-4 text-left">
          "Bridging AI and Cybersecurity to build secure intelligent systems"
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button suppressHydrationWarning className="px-8 py-4 font-mono font-bold uppercase tracking-wider text-black bg-cyber-cyan hover:bg-white transition-colors duration-300 box-glow relative overflow-hidden group">
            <span className="relative z-10">Explore Projects</span>
            <div className="absolute inset-0 h-full w-0 bg-white transition-all duration-300 ease-out group-hover:w-full z-0"></div>
          </button>
          <button suppressHydrationWarning className="px-8 py-4 font-mono font-bold uppercase tracking-wider text-cyber-cyan border border-cyber-cyan hover:bg-cyber-cyan/10 transition-colors duration-300 box-glow">
            Contact Me
          </button>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-32 text-cyber-cyan flex flex-col items-center gap-2 font-mono text-sm tracking-widest opacity-70"
      >
        <span>SCROLL TO INITIATE SEQUENCE</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
