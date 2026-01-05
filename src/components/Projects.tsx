import { MoveUpRight } from "lucide-react";
import { 
    SiNextdotjs, SiTailwindcss, SiTypescript, 
    SiGit, SiGithub, SiDocker, SiKubernetes, SiSpringboot, 
    SiOpenai, SiLangchain, SiPython, SiPostgresql, 
    SiReact, SiExpo, SiSupabase, SiFramer, SiMongodb, SiRedis, SiPrisma, SiVercel, SiGooglegemini, 
  } from "react-icons/si";


export default function Projects () {
    const projects = [
        {
            title: "Deepen",
            description: "A second brain / AI",
            techStack: [SiReact, SiTailwindcss, SiTypescript, SiGit, SiGithub, SiDocker, SiFramer, SiMongodb, SiRedis, SiVercel, SiGooglegemini, SiOpenai],
            image: "https://deepen.com/image.png",
            link: "https://deepen.com",
        },
        {
            title: "Ma'ed",
            description: "A video-first food discovery mobile app",
            techStack: [SiTailwindcss, SiTypescript, SiGit, SiGithub, SiExpo, SiMongodb, SiRedis],
            image: "https://maed.com/image.png",
            link: "https://maed.com",
        },
        {
            title: "ViralBrain",
            description: "A viral content creation and sharing platform",
            techStack: [SiNextdotjs, SiTailwindcss, SiTypescript, SiGit, SiGithub, SiPostgresql, SiSpringboot, SiFramer, SiRedis, SiPrisma, SiVercel, SiGooglegemini, SiOpenai],
            image: "https://viralbrain.com/image.png",
            link: "https://viralbrain.ai",
        },
        {
            title: "private and Governmental projects",
            description: "I worked on a variety of private and governmental projects which i cannot share publicly",
            techStack: [SiNextdotjs, SiTailwindcss, SiTypescript, SiGit, SiGithub, SiPostgresql, SiSupabase, SiFramer, SiRedis],
            image: "https://viralbrain.com/image.png",
         
        },
        {
            title: "MUCH MORE",
            description: "Coming soon...",
            image: "https://viralbrain.com/image.png",
            link: "https://github.com/Nathanim1919",
        }
    ];
    return (
        <div className="flex flex-col gap-14">
            <div>
            <h2 className="text-6xl font-bold text-black dark:text-white">Work I'm Proud Of</h2>
            <p className="text-gray-500 dark:text-gray-400">From side projects to production apps, here's what I've been building.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
                {projects.map((project) => (
                    <div key={project.title} className="bg-white overflow-hidden dark:bg-[#0d1117] border border-gray-200 dark:border-white/10 rounded-3xl flex flex-col justify-between">
                        <div className="flex flex-col p-4 gap-2">
                        <h3 className="text-lg font-bold text-black dark:text-white">{project.title.toUpperCase()}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
                        {project?.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 text-right group-hover:text-black transition-all duration-300">
                               {project.link.replace('https://', '')}
                            </a>
                        )}
                        </div>
                        <div className="flex flex-wrap gap-1 p-4 border-t border-gray-100">
                            {project?.techStack?.map((tech, index) => {
                                return (
                                    <Tech Icon={tech} key={index} />
                                )
                            })}
                        </div>
                        <div className="p-4 self-end border-t border-gray-100 w-full flex items-center justify-end group bg-gray-50">
                        <button className=" dark:bg-white text-black px-4 py-2 rounded-md opacity-50 cursor-pointer group-hover:scale-105 transition-all duration-300"><MoveUpRight /></button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        );
    }



    const Tech = ({ Icon }: { Icon: React.ComponentType<{ className?: string }> }) => {
        return (
            <div className="inline-block p-1 text-2xl">
                <Icon className="text-gray-500 dark:text-gray-400" />
            </div>
        )
    }