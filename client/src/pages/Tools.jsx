import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { DiMysql } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { TbBrandSocketIo } from "react-icons/tb";
import { SiSvelte } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const Tools = () => {
  return (
    <div className="grid h-full relative overflow-hidden
    before:absolute before:w-[50%]  before:h-full before:bg-gradient-to-r from-orange-400 before:top-[40%] before:right-10 to-orange-900
    ">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 h-full text-white bg-black/10 backdrop-blur-3xl relative z-10 border-3 border-gray-100/10">
        <div className="p-10 flex flex-col gap-5">
          <h1 className="text-white text-3xl font-bold">
            Tools and Technologies
          </h1>
          <p className="text-gray-400">
            I have experience working with a variety of technologies, including
            HTML, CSS, JavaScript, React, and Node.js. I am always looking for
            new opportunities to learn and grow as a developer.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-4 place-items-center h-full">
            <FaReact className="absolute -top-10  bg-gray-800 p-1 rounded-full border opacity-35 border-orange-500/50 text-[10rem] text-blue-500" />
            <FaNodeJs className="absolute -bottom-10 -right-3 opacity-25 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-[10rem] text-green-500" />
            <FaJava className="relative -top-10 animate-ping w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-red-500" />
            <IoLogoJavascript className="absolute -bottom-10 -left-3 opacity-25 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-[10rem] text-yellow-500" />
            <DiMysql className="relative -top-10 animate-ping w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-blue-500" />
            <FaPython className="absolute -top-10 right-[50%] opacity-25 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-[10rem] text-yellow-500" />
            <RiTailwindCssLine className="relative -top-10 animate-ping w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-blue-500" />
            <FaDocker className="relative -top-10 animate-ping w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-blue-500" />
            <DiRedis className="relative -top-10 animate-ping w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-red-500" />
            <TbBrandSocketIo className="relative -top-10 animate-ping w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-black" />
            <SiSvelte className="relative -top-10 animate-ping w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-blue-500" />
            <RiNextjsFill className="relative -top-10 animate-ping w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
