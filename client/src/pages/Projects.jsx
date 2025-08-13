import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { ProjectsData } from "../projects";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
// import { SiNextDotJs } from "react-icons/si";
import { SiGraphql } from "react-icons/si";

const Projects = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1 my-6 lg:grid-cols-1 gap-4 md:gap-10 md:py-20 place-items-center">
        <div className="flex w-full flex-col gap-3 items-start justify-center">
          <h3 className="text-gray-400 m-0 bg-gray-900 border border-orange-400/25 py-1 px-3 rounded-full text-[13px]">
            01 PROJECTS
          </h3>

          <h1 className="text-2xl m-0 md:text-4xl lg:text-5xl font-bold">
            Projects I’ve Proudly Built
          </h1>
        </div>

        <div>
          <p className="text-[14px] text-gray-400">
            I believe in the transformative power of the web to bring people and
            ideas together. My focus is on creating websites and web
            applications that are both aesthetically pleasing and highly
            functional, tailored to make a real difference.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative w-full h-full overflow-hidden">
        <div className="relative z-10 backdrop-blur-3xl h-full w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {ProjectsData.map((project, index) => {
              if (project.featured) {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-8 p-6 hover:bg-gray-900/50 border border-transparent hover:border-gray-800 rounded-md cursor-pointer"
                  >
                    <div>
                       <img src={project.image} alt="project-image"/>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-4xl font-bold">{project.title.toUpperCase()}</h2>
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                    <div className="flex items-center text-2xl gap-6">
                      <a
                        href={project.Links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.Links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-blue-500"
                      >
                        <MdOutlineArrowOutward />
                      </a>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap border-t border-gray-600 pt-4">
                      {project.Technologies.map((tech, index) => (
                        <span className="px-[12px] text-[11px] py-[4px] bg-gray-800 rounded-full"
                         key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
