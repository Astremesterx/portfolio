"use client";

import { motion } from "framer-motion";
import { Shield, Terminal, Award, FolderGit2, Mail, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "About", href: "#about", icon: Shield },
  { name: "Skills", href: "#skills", icon: Terminal },
  { name: "Experience", href: "#experience", icon: Award },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function CyberNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-cyber-cyan/30 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Terminal Tag */}
        <a href="#" className="flex items-center gap-2 font-mono group">
          <div className="w-8 h-8 rounded border border-cyber-cyan/50 bg-cyber-cyan/10 flex items-center justify-center text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-black transition-all">
            <span className="font-bold text-sm">SM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
              SALIF MUNEER
            </span>
            <span className="text-[10px] text-gray-400 -mt-0.5 tracking-tight font-mono">
              [SOC_ANALYST]
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3.5 py-1.5 rounded text-xs font-mono text-gray-300 hover:text-cyber-cyan hover:bg-cyber-cyan/10 border border-transparent hover:border-cyber-cyan/30 transition-all uppercase tracking-wider"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Status indicator & Direct CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-black/60 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR HIRE</span>
          </div>
          <a
            href="#contact"
            className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider font-bold text-black bg-cyber-cyan hover:bg-white transition-colors duration-200 shadow-[0_0_15px_rgba(0,243,255,0.4)]"
          >
            Connect
          </a>
        </div>
      </div>
    </motion.header>
  );
}
