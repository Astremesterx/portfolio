"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe, Code, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative w-full min-h-[100vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
             animation: 'grid-move 20s linear infinite'
           }}
      />
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes grid-move {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(40px) translateZ(-200px); }
        }
      `}} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-panel p-6 sm:p-8 md:p-12 rounded-2xl w-full max-w-4xl relative z-10 border border-cyber-cyan/30 shadow-[0_0_50px_rgba(0,243,255,0.1)]"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white mb-4 uppercase tracking-widest text-glow">
            Initiate_Contact
          </h2>
          <p className="text-gray-400 font-sans">Secure communication channel open.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-mono text-cyber-cyan mb-6">Connection Details</h3>
            
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=salifspace@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-cyber-cyan group-hover:bg-cyber-cyan/10 transition-all">
                <Mail size={20} className="group-hover:text-cyber-cyan" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-mono">Email Address</div>
                <span className="font-mono text-white text-sm sm:text-base">salifspace@gmail.com</span>
              </div>
            </a>
            
            <a href="tel:+918589900488" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-cyber-purple group-hover:bg-cyber-purple/10 transition-all">
                <Phone size={20} className="group-hover:text-cyber-purple" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-mono">Direct Line</div>
                <span className="font-mono text-white text-sm sm:text-base">+91 8589900488</span>
              </div>
            </a>
            
            <a href="https://linkedin.com/in/salif-muneer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-[#0077b5] group-hover:bg-[#0077b5]/10 transition-all">
                <Globe size={20} className="group-hover:text-[#0077b5]" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-mono">Professional Network</div>
                <span className="font-mono text-white text-sm sm:text-base">linkedin.com/in/salif-muneer</span>
              </div>
            </a>
            
            <a href="https://github.com/Astremesterx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-cyber-cyan group-hover:bg-cyber-cyan/10 transition-all">
                <Code size={20} className="group-hover:text-cyber-cyan" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-mono">Source Code & Repos</div>
                <span className="font-mono text-white text-sm sm:text-base">github.com/Astremesterx</span>
              </div>
            </a>
          </div>

          {/* Form */}
          <form className="flex-1 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <input 
                suppressHydrationWarning
                type="text" 
                placeholder="Designation / Name" 
                className="w-full bg-black/50 border border-gray-700 rounded-none px-4 py-3 text-white font-mono focus:outline-none focus:border-cyber-cyan transition-colors"
                required
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber-cyan transition-all duration-300 group-focus-within:w-full"></div>
            </div>
            
            <div className="relative group">
              <input 
                suppressHydrationWarning
                type="email" 
                placeholder="Return Address (Email)" 
                className="w-full bg-black/50 border border-gray-700 rounded-none px-4 py-3 text-white font-mono focus:outline-none focus:border-cyber-cyan transition-colors"
                required
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber-cyan transition-all duration-300 group-focus-within:w-full"></div>
            </div>
            
            <div className="relative group">
              <textarea 
                suppressHydrationWarning
                placeholder="Encrypted Message..." 
                rows={4}
                className="w-full bg-black/50 border border-gray-700 rounded-none px-4 py-3 text-white font-mono focus:outline-none focus:border-cyber-cyan transition-colors resize-none"
                required
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber-cyan transition-all duration-300 group-focus-within:w-full"></div>
            </div>
            
            <button 
              suppressHydrationWarning
              type="submit"
              className="w-full py-4 mt-4 bg-transparent border-2 border-cyber-cyan text-cyber-cyan font-mono font-bold uppercase tracking-widest hover:bg-cyber-cyan hover:text-black transition-all duration-300 box-glow flex items-center justify-center gap-2 group"
            >
              <span>Transmit Data</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </motion.div>
      
      <div className="absolute bottom-4 text-gray-600 font-mono text-xs">
        © {new Date().getFullYear()} Salif Muneer C P. System Terminated.
      </div>
    </section>
  );
}
