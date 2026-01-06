"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Atlas Computer Technology",
            location: "Addis Ababa, Ethiopia",
            employmentType: "Full-time",
            date: "2023 - 2025",
            description: "Developed scalable web applications and collaborated with cross-functional teams to deliver high-quality software solutions.",
        },
        {
            title: "Full Stack Developer",
            company: "ALX Ventures",
            location: "Addis Ababa, Ethiopia",
            employmentType: "Remote",
            date: "2024 - 2025",
            description: "Built and maintained full-stack applications, optimizing database performance and enhancing user interface responsiveness.",
        },
        {
            title: "Senior Frontend Developer",
            company: "Atlas Computer Technology",
            location: "Addis Ababa, Ethiopia",
            employmentType: "Full-time",
            date: "2026 - Present",
            description: "Leading the frontend team, establishing best practices, and architecting modern user interfaces for enterprise clients.",
        },
        {
            title: "Full Stack Gen AI Developer",
            company: "Humanodize Ventures",
            location: "De' France, France",
            employmentType: "Remote",
            date: "2025 - Present",
            description: "integrating Generative AI models into web platforms, creating intelligent agents and personalized user experiences.",
        },
    ];

    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-[#0d1117] p-2 rounded-2xl text-zinc-900 dark:text-zinc-100 overflow-hidden font-sans border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none transition-colors duration-300">
            <div className="bg-zinc-50/50 dark:bg-white/5 w-full h-full rounded-xl flex flex-col border border-zinc-100 dark:border-white/5 overflow-hidden relative">
                
                {/* Header */}
                <div className="flex items-center justify-between w-full px-6 py-5 z-10 bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-sm sticky top-0 border-b border-zinc-100 dark:border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-zinc-100 dark:bg-white/10 rounded-lg">
                            <Briefcase className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                        </div>
                        <h1 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-200">Experience</h1>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                    <div className="relative border-l border-zinc-200 dark:border-white/10 ml-3 space-y-8">
                        {experiences.map((item, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className="ml-6 relative group"
                            >
                                {/* Timeline Dot */}
                                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-[#0d1117] bg-zinc-300 dark:bg-zinc-600 group-hover:bg-zinc-800 dark:group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-sm" />
                                
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-start justify-between flex-wrap gap-2">
                                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                                            {item.title}
                                        </h3>
                                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/5">
                                            {item.date}
                                        </span>
                                    </div>
                                    
                                    <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                                        {item.company}
                                    </div>

                                    <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {item.location}
                                        </div>
                                        <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                        <div className="flex items-center gap-1">
                                            <span className="px-1.5 py-0.5 rounded bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 text-zinc-500 dark:text-zinc-400">
                                                {item.employmentType}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed max-w-[90%] group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
