"use client";

import { motion } from "framer-motion";
import { TerminalSquare } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="relative w-full min-h-[150vh] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="text-right mb-16"
        >
          <h2 className="text-4xl font-mono font-bold text-white tracking-widest uppercase inline-block border-b-2 border-cyber-purple pb-2">
            Experience_Log
          </h2>
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-24 bottom-0 w-[2px] bg-cyber-purple/30 z-0"></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-20%" }}
          className="relative z-10 flex flex-col md:flex-row items-center w-full mb-12"
        >
          {/* Timeline Dot */}
          <div className="absolute left-[26px] md:left-1/2 w-4 h-4 rounded-full bg-cyber-cyan box-glow transform md:-translate-x-1/2 mt-6 md:mt-0 z-20">
            <div className="absolute inset-0 rounded-full bg-cyber-cyan animate-ping opacity-50"></div>
          </div>

          <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-12 text-left md:text-right">
            <div className="flex items-center justify-start md:justify-end gap-2 text-cyber-cyan mb-2 font-mono">
              <TerminalSquare size={18} />
              <span>[ 2026 - Present ]</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Cyber Security Student Trainee</h3>
            <h4 className="text-xl text-gray-400 font-mono mb-4">Offenso Hackers Academy</h4>
          </div>

          <div className="w-full md:w-1/2 pl-16 md:pl-12 mt-4 md:mt-0">
            <div className="glass-panel p-6 rounded-lg border-l-4 border-cyber-cyan text-gray-300 font-sans space-y-2">
              <ul className="list-disc list-inside space-y-2 marker:text-cyber-cyan">
                <li>Conducting advanced cybersecurity lab simulations</li>
                <li>Performing comprehensive vulnerability assessments</li>
                <li>Executing deep network traffic analysis</li>
                <li>Developing Python scripts for security automation</li>
                <li>Researching adversarial behavior and defense mechanisms</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
