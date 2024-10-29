import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";



const Projects = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-2  border-b border-gray-900 py-7">
        <div className="flex flex-col">
          <h2 className="text-gray-400">
            Let me show you what i am capable of doing
          </h2>
          <h1 className="text-4xl font-bold">My Latest Projects </h1>
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
      <div>
        <div className="flex justify-between items-center p-5">
          <h1>Projects</h1>
          <FaGithub className="text-3xl" />
        </div>
        <div className="project1 grid grid-cols-[_.5fr_.5fr] gap-5 p-5">
          <div className="w-[100%] relative
           before:absolute before:w-[30%] before:h-[30%] before:bg-gradient-to-tr from-red-400 before:top-[40%] before:left-10 to-pink-600
          ">
            <div className="relative w-full h-full bg-black/5 backdrop-blur-3xl p-6 grid gap-5">
            {" "}
            <div className="proinfo">
              <ul className="pro-type flex items-center border-b border-gray-800 py-4 gap-1">
                <li className="py-1 px-3 border border-gray-700 rounded-full text-[12px] text-gray-400">Full-Stack</li>
                <li className="py-1 px-3 border border-gray-700 rounded-full text-[12px] text-gray-400">Web App</li>
              </ul>
              <ul className="pro-tech flex items-center py-4 gap-2">
                <li className="py-1 px-2 border border-orange-600/15 text-[13px rounded-full]">React</li>
                <li className="py-1 px-2 border border-orange-600/15 text-[13px rounded-full]">Node.js</li>
                <li className="py-1 px-2 border border-orange-600/15 text-[13px rounded-full]">Express</li>
                <li className="py-1 px-2 border border-orange-600/15 text-[13px rounded-full]">MongoDB</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Challenge-Track</h1>
              <p className="text-[14px] text-gray-400 w-[60%]">
                A web app that helps you track your progress on coding
                challenges, and compete with friends. it includes advanced
                features like a leaderboard, and a chat system.
              </p>
            </div>
            <div className="flex items-center gap-5">
              <FaGithub className="text-2xl" /> 
                <MdLiveTv className="text-2xl" />
            </div>
            </div>
          </div>
          <div className="pictures grid grid-cols-3 gap-3">
            <div className="w-50 h-50 bg-gray-700">
             <img src="" alt="" />
            </div>
            <div className="w-50 h-50 bg-gray-700">
                <img src="" alt="" />
            </div>
            <div className="w-50 h-50 bg-gray-700">
                <img src="" alt="" />
            </div>
            <div className="w-50 h-50 bg-gray-700">
                <img src="" alt="" />
            </div>
            <div className="w-50 h-50 bg-gray-700">
                <img src="" alt="" />
            </div>
            <div className="w-50 h-50 bg-gray-700">
             <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="project1 grid grid-cols-[_.5fr_.5fr] gap-5 p-5">
         
          <div className="pictures grid grid-cols-3 gap-3">
            <div className="w-50 h-50 bg-gray-700">
             <img src="" alt="" />
            </div>
            <div className="w-50 h-50 bg-gray-700">
                <img src="" alt="" />
            </div>
            <div className="w-50 h-50 bg-gray-700">
                <img src="" alt="" />
            </div>
            <div className="w-50 h-50 bg-gray-700">
                <img src="" alt="" />
            </div>
            <div className="w-50 h-50 bg-gray-700">
                <img src="" alt="" />
            </div>
            <div className="w-50 h-50 bg-gray-700">
             <img src="" alt="" />
            </div>
          </div>
          <div className="w-[100%] relative
           before:absolute before:w-[30%] before:h-[30%] before:bg-gradient-to-tr from-red-400 before:top-[40%] before:right-10 to-blue-600
          ">
            <div className="relative w-full h-full bg-black/5 backdrop-blur-3xl p-6 grid gap-5">
            {" "}
            <div className="proinfo">
              <ul className="pro-type flex items-center border-b border-gray-800 py-4 gap-1">
                <li className="py-1 px-3 border border-gray-700 rounded-full text-[12px] text-gray-400">Full-Stack</li>
                <li className="py-1 px-3 border border-gray-700 rounded-full text-[12px] text-gray-400">Web App</li>
              </ul>
              <ul className="pro-tech flex items-center py-4 gap-2">
                <li className="py-1 px-2 border border-orange-600/15 text-[13px rounded-full]">React</li>
                <li className="py-1 px-2 border border-orange-600/15 text-[13px rounded-full]">Node.js</li>
                <li className="py-1 px-2 border border-orange-600/15 text-[13px rounded-full]">Express</li>
                <li className="py-1 px-2 border border-orange-600/15 text-[13px rounded-full]">MongoDB</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Challenge-Track</h1>
              <p className="text-[14px] text-gray-400 w-[60%]">
                A web app that helps you track your progress on coding
                challenges, and compete with friends. it includes advanced
                features like a leaderboard, and a chat system.
              </p>
            </div>
            <div className="flex items-center gap-5">
              <FaGithub className="text-2xl" /> 
                <MdLiveTv className="text-2xl" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
