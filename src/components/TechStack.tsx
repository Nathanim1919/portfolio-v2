"use client";

import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, 
  SiGit, SiGithub, SiDocker, SiKubernetes, SiSpringboot, 
  SiOpenai, SiLangchain, SiPython, SiPostgresql, 
  SiReact, SiExpo, SiSupabase, SiFramer, SiMongodb, SiRedis, SiPrisma, SiVercel, SiGooglegemini, 
} from "react-icons/si";

export default function TechStack() {
  const techStack = [
    { name: "React / Native", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "OpenAI / LLMs", icon: <SiOpenai /> },
    { name: "LangChain", icon: <SiLangchain /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Expo", icon: <SiExpo /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Google Gemini API", icon: <SiGooglegemini /> },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-1">
      <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-white/10 rounded-[32px] overflow-hidden shadow-sm">
        
        {/* Minimalist Header */}
        <div className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold dark:text-white tracking-tighter">Toolkit</h1>
            <div className="h-1 w-1 rounded-full bg-gray-300" />
            <p className="text-xs text-gray-400 font-medium">Modern Full Stack & Gen AI</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center dark:text-white border border-gray-100 dark:border-white/5">
            <MdOutlineArrowOutward size={18} />
          </div>
        </div>

        {/* Unified Icon Grid */}
        <div className="px-8 pb-10 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-y-10 gap-x-4">
          {techStack.map((item, idx) => (
            <div key={idx} className="flex justify-center">
              <TechIcon name={item.name} icon={item.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Individual Icon Component with Logic for Tooltip and Hover
function TechIcon({ name, icon }: { name: string; icon: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: -45, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold rounded-lg whitespace-nowrap shadow-xl pointer-events-none"
          >
            {name}
            {/* Tooltip Arrow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black dark:bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon */}
      <motion.div
        animate={{
          scale: isHovered ? 1.4 : 1,
          opacity: isHovered ? 1 : 0.35,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-3xl text-gray-600 dark:text-gray-400 cursor-default"
      >
        {icon}
      </motion.div>
    </div>
  );
}