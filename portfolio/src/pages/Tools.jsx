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
    <div className="grid h-full relative mt-40 overflow-hidden
    before:absolute before:w-full before:h-full before:bg-gradient-to-tr from-red-400 before:top-[40%] before:left-10 to-pink-600 before:animate-extraSlowSpin
    ">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full text-white bg-black/10 backdrop-blur-3xl relative z-10 border-3 border-gray-100/10">
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
            <FaReact className="animate-ping w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-blue-500" />
            <FaNodeJs className="animate-pulse w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-green-500" />
            <FaJava className="animate-bounce w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-red-500" />
            <IoLogoJavascript className="animate-slowSpin w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-yellow-500" />
            <DiMysql className="animate-extraSlowSpin w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-blue-500" />
            <FaPython className="animate-ping w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-yellow-500" />
            <RiTailwindCssLine className="animate-spin w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-blue-500" />
            <FaDocker className="animate-pulse w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-blue-500" />
            <DiRedis className="animate-bounce w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-red-500" />
            <TbBrandSocketIo className="animate-slowSpin w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-black" />
            <SiSvelte className="animate-extraSlowSpin w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-blue-500" />
            <RiNextjsFill className="animate-ping w-10 h-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-4xl text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
