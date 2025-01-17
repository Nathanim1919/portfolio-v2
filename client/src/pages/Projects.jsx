import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { ProjectsData } from "../projects";

const Projects = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-20 place-items-center">
        <div className="flex flex-col gap-3">
          <h2 className="text-sky-400/75">
            Building software is my passion, and I strive to create solutions
            that are not only visually stunning but also highly functional and
            impactful.
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            These Are My Recent Projects, Pushing Boundaries to Deliver
            Excellence
          </h1>
        </div>

        <div>
          <p className="text-[14px] text-gray-400">
            I believe in the power of the web and its ability to connect people
            and ideas. I am passionate about creating websites and web
            applications that are both beautiful and functional. I have
            experience working with a variety of technologies, including HTML,
            CSS, JavaScript, React, and Node.js. I am always looking for new
            opportunities to learn and grow as a developer.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative w-full h-full overflow-hidden before:absolute before:w-[90%] before:h-[100%] before:bg-gray-600 before:top-[10%] before:left-[10%] before:animate-extraSlowSpin">
        <div className="bg-black/70 relative z-10 backdrop-blur-3xl h-full w-full">
          <div className="flex justify-between items-center p-5">
            <h1>Projects</h1>
            <a
              href="https://www.github.com/Nathanim1919"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>

          {ProjectsData.map((project, index) => {
            if (project.featured) {
              return (
                <div
                  key={index}
                  className="project1 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 px-5"
                >
                  <div
                    className={`w-full relative ${
                      index % 2 === 0
                        ? "order-2 lg:order-2"
                        : "order-2 lg:order-1"
                    }`}
                  >
                    <div className="relative w-full h-full p-6 grid gap-5">
                      <div className="proinfo">
                        <ul className="pro-type flex flex-wrap items-center border-b border-gray-800 py-4 gap-1">
                          {project.types.map((type, index) => {
                            return (
                              <li
                                key={index}
                                className="p-[1px] relative overflow-hidden rounded-full text-[12px] text-gray-400
                                    before:absolute before:w-full before:h-full before:bg-gradient-to-r from-sky-500 to-orange-400 before:rounded-full
                                    "
                              >
                                <li className="bg-black/60 backdrop-blur-3xl relative w-full h-full grid place-items-center py-1 px-3 rounded-full">
                                  {type}
                                </li>
                              </li>
                            );
                          })}
                        </ul>
                        <div className="flex flex-col gap-2">
                          <h1 className="text-2xl font-bold">
                            {project.title}
                          </h1>
                          <p className="text-[14px] text-gray-400 w-[90%] lg:w-[60%]">
                            {project.description}
                          </p>
                        </div>
                        <ul className="pro-tech flex items-center py-4 gap-2 flex-wrap">
                          {project.Technologies.map((tech, index) => {
                            return (
                              <li
                                key={index}
                                className="rounded-full text-[12px] text-gray-400 relative overflow-hidden p-[1px]
                                    before:absolute before:w-full before:h-[150%] before:bg-gradient-to-r from-sky-500 to-gray-900 before:rounded-full
                                    "
                              >
                                <li className="py-1 px-3 rounded-full relative w-full h-full bg-black/60 backdrop-blur-3xl">
                                  {tech}
                                </li>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div className="flex items-center gap-5 place-self-end">
                        <a
                          href={project.Links.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub className="text-2xl w-10 h-10 grid place-items-center bg-gray-900 cursor-pointer hover:bg-transparent p-2 rounded-full" />
                        </a>
                        <a
                          href={project.Links.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MdLiveTv className="text-2xl w-10 h-10 grid place-items-center bg-gray-900 cursor-pointer hover:bg-transparent p-2 rounded-full" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`pictures ${
                      index % 2 === 0 ? "order-1" : "order-1 lg:order-1"
                    } grid gap-3 relative overflow-hidden
                      before:w-[50%] before:h-[50%] before:absolute before:bg-red-600 before:animate-pulse
                      after:w-[50%] after:h-[50%] after:absolute after:bg-red-600 after:bottom-0 after:right-0 after:animate-pulse
                    `}
                  >
                    <div className="w-full h-full bg-black/50 backdrop-blur-3xl relative grid place-items-center z-10">
                      <img
                        src={project.image}
                        className="relative w-[90%] h-[90%] shadow-2xl rounded-xl"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
