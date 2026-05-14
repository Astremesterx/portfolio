"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FolderGit2, Cpu, ShieldCheck } from "lucide-react";
import { MouseEvent } from "react";

const projects = [
  {
    title: "Emotion-Based Music Generation",
    icon: <Cpu size={32} />,
    description: "AI-generated music from text prompts utilizing sentiment analysis and backend APIs.",
    tech: ["Supabase", "AI Alignment", "Sentiment Analysis"],
    color: "rgba(0, 243, 255, 0.5)" // cyan
  },
  {
    title: "Fake Logo Detection System",
    icon: <ShieldCheck size={32} />,
    description: "CNN-based detection system to identify counterfeit logos and secure brand identity.",
    tech: ["TensorFlow", "OpenCV", "TF Lite"],
    color: "rgba(157, 0, 255, 0.5)" // purple
  },
  {
    title: "Cybersecurity Lab & Attack Sim",
    icon: <FolderGit2 size={32} />,
    description: "Simulated attacks focusing on privilege escalation and exploitation testing in a controlled environment.",
    tech: ["Metasploit", "Nmap", "Burp Suite"],
    color: "rgba(255, 0, 255, 0.5)" // magenta
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-10%" }}
      onMouseMove={handleMouseMove}
      className="group relative max-w-sm w-full glass-panel rounded-xl overflow-hidden cursor-pointer p-8 flex flex-col items-start gap-4 transition-transform hover:scale-[1.02]"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${project.color},
              transparent 40%
            )
          `,
        }}
      />
      <div className="relative z-10 text-white group-hover:text-cyber-cyan transition-colors duration-300">
        {project.icon}
      </div>
      <h3 className="relative z-10 text-2xl font-bold font-mono mt-2">{project.title}</h3>
      <p className="relative z-10 text-gray-400 font-sans leading-relaxed">
        {project.description}
      </p>
      <div className="relative z-10 mt-auto pt-4 flex flex-wrap gap-2">
        {project.tech.map((t: string, i: number) => (
          <span key={i} className="text-xs font-mono px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-300">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section className="relative w-full min-h-[150vh] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-mono font-bold text-white tracking-widest uppercase inline-block pb-2">
            Active_<span className="text-cyber-cyan text-glow">Projects</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
