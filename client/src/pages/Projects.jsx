import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { ProjectsData } from "../projects";

const Projects = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 border-b border-gray-900 pt-7 px-4">
        <div className="flex flex-col">
          <h2 className="text-gray-400">
            Let me show you what I am capable of doing
          </h2>
          <h1 className="text-4xl font-bold">My Latest Projects</h1>
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
            <FaGithub className="text-3xl" />
          </div>
          
          {ProjectsData.map((project, index) => {
            if (project.featured) {
              return (
                <div
                  key={index}
                  className="project1 grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 py-10"
                >
                  {/* Text Section */}
                  <div className={`w-full relative ${index % 2 === 0 ? "order-2 lg:order-1" : "order-1 lg:order-2"}`}>
                    <div className="relative w-full h-full p-6 grid gap-5">
                      <div className="proinfo">
                        <ul className="pro-type flex items-center border-b border-gray-800 py-4 gap-1">
                          <li className="py-1 px-3 border border-gray-700 rounded-full text-[12px] text-gray-400">
                            Full-Stack
                          </li>
                          <li className="py-1 px-3 border border-gray-700 rounded-full text-[12px] text-gray-400">
                            Web App
                          </li>
                        </ul>
                        <ul className="pro-tech flex items-center py-4 gap-2">
                          <li className="py-1 px-2 border border-orange-600/15 rounded-full text-[13px]">
                            React
                          </li>
                          <li className="py-1 px-2 border border-orange-600/15 rounded-full text-[13px]">
                            Node.js
                          </li>
                          <li className="py-1 px-2 border border-orange-600/15 rounded-full text-[13px]">
                            Express
                          </li>
                          <li className="py-1 px-2 border border-orange-600/15 rounded-full text-[13px]">
                            MongoDB
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">Challenge-Track</h1>
                        <p className="text-[14px] text-gray-400 w-[90%] lg:w-[60%]">
                          A web app that helps you track your progress on coding
                          challenges and compete with friends. It includes advanced
                          features like a leaderboard and a chat system.
                        </p>
                      </div>
                      <div className="flex items-center gap-5 place-self-end">
                        <FaGithub className="text-2xl w-10 h-10 grid place-items-center bg-gray-900 cursor-pointer hover:bg-transparent p-2 rounded-full" />
                        <MdLiveTv className="text-2xl w-10 h-10 grid place-items-center bg-gray-900 cursor-pointer hover:bg-transparent p-2 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className={`pictures ${index % 2 === 0 ? "order-1 lg:order-2" : "order-2 lg:order-1"} grid gap-3 relative overflow-hidden
                      before:w-[50%] before:h-[50%] before:absolute before:bg-red-600 before:animate-pulse
                      after:w-[50%] after:h-[50%] after:absolute after:bg-red-600 after:bottom-0 after:right-0 after:animate-pulse
                    `}>
                    <div className="w-full h-full bg-black/50 backdrop-blur-3xl relative grid place-items-center z-10">
                      <img src={project.image} className="relative w-[90%] h-[90%] shadow-2xl rounded-xl" alt="" />
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
