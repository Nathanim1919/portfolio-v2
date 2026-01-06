"use client";

import { ArrowUpRight, Github, Globe, Lock, MoreHorizontal } from "lucide-react";
import { 
    SiNextdotjs, SiTailwindcss, SiTypescript, 
    SiGit, SiGithub, SiDocker, SiKubernetes, SiSpringboot, 
    SiOpenai, SiLangchain, SiPython, SiPostgresql, 
    SiReact, SiExpo, SiSupabase, SiFramer, SiMongodb, SiRedis, SiPrisma, SiVercel, SiGooglegemini, 
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Deepen",
            description: "A second brain / AI powered knowledge management system designed to augment human intelligence.",
            techStack: [SiReact, SiTypescript, SiFramer, SiOpenai],
            link: "https://deepen.com",
            featured: true,
            status: "Production"
        },
        {
            title: "Ma'ed",
            description: "Video-first food discovery mobile application revolutionizing how users explore culinary experiences.",
            techStack: [SiExpo, SiTypescript, SiRedis],
            link: "https://maed.com",
            status: "Beta"
        },
        {
            title: "ViralBrain",
            description: "AI-driven content viralization platform optimizing engagement through predictive analytics.",
            techStack: [SiNextdotjs, SiPostgresql, SiPrisma],
            link: "https://viralbrain.ai",
            status: "Active"
        },
        {
            title: "Enterprise Solutions",
            description: "Confidential governmental and private sector infrastructure projects.",
            techStack: [SiNextdotjs, SiSupabase, SiDocker],
            isPrivate: true,
            status: "Confidential"
        },
        {
            title: "Coming Soon",
            description: "Experimental lab work and upcoming releases.",
            techStack: [],
            isPlaceholder: true,
            status: "In Development"
        }
    ];

    return (
        <section className="w-full flex flex-col gap-12 py-8">
            
            {/* Header Section */}
            <div className="flex flex-col gap-4 max-w-2xl">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white animate-pulse" />
                    <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Selected Work</h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    Building the future <br />
                    <span className="text-zinc-400 dark:text-zinc-600">one pixel at a time.</span>
                </h3>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

        </section>
    );
}

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const isPlaceholder = project.isPlaceholder;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={`
                group relative flex flex-col justify-between
                bg-white dark:bg-[#0A0A0A] 
                border border-zinc-200 dark:border-white/10 
                rounded-3xl p-6 md:p-8 h-[320px]
                overflow-hidden hover:border-zinc-300 dark:hover:border-white/20 transition-colors
                ${project.featured ? 'md:col-span-2' : 'col-span-1'}
            `}
        >
            {/* Background Gradient for Featured */}
            {project.featured && (
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-zinc-100/50 to-transparent dark:from-white/5 dark:to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            )}

            {/* Top Section */}
            <div className="flex flex-col gap-4 relative z-10">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <h4 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                                {project.title}
                            </h4>
                            {project.isPrivate && (
                                <Lock className="w-3 h-3 text-zinc-400" />
                            )}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 border border-zinc-100 dark:border-white/10 px-2 py-0.5 rounded-full w-fit bg-zinc-50 dark:bg-white/5">
                            {project.status}
                        </span>
                    </div>
                    
                    {!isPlaceholder && !project.isPrivate && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-zinc-50 dark:bg-white/5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-all"
                        >
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    )}
                </div>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium max-w-[90%]">
                    {project.description}
                </p>
            </div>

            {/* Bottom Section: Tech Stack */}
            <div className="flex items-end justify-between relative z-10 mt-auto">
                <div className="flex items-center gap-2">
                    {project.techStack.map((Icon: any, i: number) => (
                        <div 
                            key={i} 
                            className="p-2 rounded-xl bg-zinc-50 dark:bg-white/5 text-zinc-400 dark:text-zinc-500 border border-zinc-100 dark:border-white/5 group-hover:scale-110 group-hover:text-zinc-900 dark:group-hover:text-white transition-all duration-300"
                        >
                            <Icon className="w-4 h-4" />
                        </div>
                    ))}
                    {isPlaceholder && (
                        <MoreHorizontal className="w-5 h-5 text-zinc-300 dark:text-zinc-600" />
                    )}
                </div>

                {/* Subtle ID watermark */}
                <span className="text-[10px] font-mono text-zinc-200 dark:text-zinc-800 absolute bottom-0 right-0 pointer-events-none">
                    0{index + 1}
                </span>
            </div>
        </motion.div>
    );
}
