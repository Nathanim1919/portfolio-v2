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
    <div
      className="grid h-full relative overflow-hidden p-[1px]
    before:absolute before:w-[60%]  before:h-full before:bg-gradient-to-r from-orange-400 before:animate-extraSlowSpin before:top-[40%] before:right-10 to-orange-900
    "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 h-full text-white bg-black/60 backdrop-blur-3xl relative z-10 border-3 border-gray-100/10">
        <div className="p-1 lg:p-10  flex flex-col gap-5 items-center">
          <div className="flex flex-col items-center gap-2">
          <h1 className="text-white text-3xl font-bold">
            Tools and Technologies
          </h1>
          <p className="text-gray-400">
            Languages are just tools, knowing how to use them is the real craft.
            Even if the first thing is to solve a problem, the second is to
            solve it in the best way possible. Here are some of the tools and
            technologies I use to build web applications.
          </p>
          </div>
          <div className="tools w-[80%]">
            <div className="flex items-center gap-5 flex-wrap">
              <FaReact className="text-blue-500 text-4xl" />
              <FaNodeJs className="text-green-500 text-4xl" />
              <IoLogoJavascript className="text-yellow-500 text-4xl" />
              <FaPython className="text-yellow-500 text-4xl" />
           
            {/* <div className="flex items-center gap-5"> */}
              <DiMysql className="text-blue-500 text-4xl" />
              <RiTailwindCssLine className="text-blue-500 text-4xl" />
              <FaDocker className="text-blue-500 text-4xl" />
              <DiRedis className="text-red-500 text-4xl" />
            {/* </div> */}
            {/* <div className="flex items-center gap-5"> */}
              <TbBrandSocketIo className="text-blue-500 text-4xl" />
              <SiSvelte className="text-blue-500 text-4xl" />
              <RiNextjsFill className="text-blue-500 text-4xl" />
              <FaJava className="text-blue-500 text-4xl" />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 place-items-center h-full">
            <IoLogoJavascript className="absolute -bottom-10 right-30 opacity-10 bg-gray-800 p-1 rounded-full border border-orange-500/50 text-[25rem] text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
