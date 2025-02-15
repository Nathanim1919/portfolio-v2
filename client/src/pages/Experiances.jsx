import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
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

const Experiances = () => {
  return (
    <div
      className="text-white relative flex flex-col items-start gap-3
    "
    >
      <h2 className="text-gray-400 m-0 bg-gray-900 border border-orange-400/25 py-1 px-3 rounded-full text-[13px]">
        02 TOOLS & TECHNOLOGIES
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[_.5fr_.5fr] gap-5 h-full bg-black/10 backdrop-blur-3xl overflow-hidden">
        <div
          className="bg-[#151515] h-full rounded-3xl rounded-br-none relative
                before:bg-[#2b2f39] border border-orange-400/10 before:absolute before:duration-500 before:w-[100%] before:h-[100%] overflow-hidden
                "
        >
          <div className="bg-black/60 backdrop-blur-3xl w-full h-full p-10 flex flex-col gap-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Tools & Technologies I am Comfortable with.
            </h1>

            <p className="text-gray-400">
              Being comfortable with a tool or technology means that I have used
              it in a project or two and I am confident in my ability to use it
              in a project.
            </p>

            <div className="w-[120%] h-[140%] gap-2 rounded-xl grid  absolute z-30 mx-auto -top-0 md:-bottom-40  lg:bottom-0 transform rotate-45 opacity-10">
              <div className="w-100 h-30 bg-sky-500 rounded-xl shadow-2xl  relative z-30 bottom-5 right-5 transform rotate-5"></div>
              <div className="w-80 h-30 bg-blue-500 animate-pulse rounded-xl shadow-2xl  relative z-30 bottom-5 right-5 transform rotate-5"></div>
              <div className="w-60 h-30 bg-white rounded-xl shadow-2xl  relative z-30 bottom-5 right-20 transform rotate-20"></div>
            </div>
          </div>
        </div>
        <div
          className="h-full rounded-bl-none overflow-hidden relative p-6
                                 "
        >
          <div className="relative w-full h-full text-4xl md:text-5xl gap-3 px-0 py-4 flex flex-wrap justify-center items-center">
            <FaNodeJs  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <FaReact  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <IoLogoJavascript  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <FaJava  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <FaPython  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <FaDocker  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <DiRedis  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <RiTailwindCssFill  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <SiSpring  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <DiMongodb  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <SiPostgresql  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <SiSocketdotio  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <SiJest  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <SiRedux  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            <SiTypescript  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
            {/* <SiNextDotJs  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/> */}
            <SiGraphql  className="w-12 h-12 rounded-full  border-8 border-gray-900 bg-transparent p-[1px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiances;
