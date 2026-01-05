import { MdOutlineArrowOutward } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";

export default function TechStack() {
    const techStack = [
        {
            name: "React",
            icon: <FaReact />,
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs />,
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
        },
        {
            name: "TypeScript",
            icon: <SiTypescript />,
        },
        {
            name: "JavaScript",
            icon: <SiJavascript />,
        },
        {
            name: "HTML5",
            icon: <SiHtml5 />,
        },
        {
            name: "CSS3",
            icon: <SiCss3 />,
        },
        {
            name: "Git",
            icon: <SiGit />,
        },
        {
            name: "GitHub",
            icon: <SiGithub />,
        },
        {
            name: "LinkedIn",
            icon: <SiLinkedin />,
        },
        {
            name: "Docker",
            icon: <SiDocker />,
        },
        {
            name: "Kubernetes",
            icon: <SiKubernetes />,
        },
    ];
    return (
        <div className="w-full flex flex-col items-center justify-center bg-white p-2 shadow-2xl rounded-2xl text-black">
            <div className="bg-gray-100 w-full h-full rounded-2xl flex flex-col items-start">

                <div className="flex items-center justify-between w-full px-4 py-2">
                    <h1 className="text-2xl font-bold rounded-3xl bg-white px-3 py-1 border border-gray-200">Tech Stack</h1>
                    <MdOutlineArrowOutward />
                </div>
                <div className="grid grid-cols-6 gap-4 p-4 w-full h-full">
                    {techStack.map((item) => (
                        <div key={item.name} className="flex flex-col relative p-2 opacity-50 hover:opacity-100 transition-all duration-300">
                            <h2 className="font-bold text-4xl ">{item.icon}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}