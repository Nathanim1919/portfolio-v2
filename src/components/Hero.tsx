import Image from "next/image";
import me from "../../public/me.jpg";
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter } from "react-icons/tb";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center relative py-16">
      <div className="text-center text-5xl font-bold flex flex-col text-black dark:text-white">
        <span className="flex items-center justify-center gap-2">
        Hi, I'm
        <span className="mr-2 w-25 inline-block p-1.5 shadow-2xl rounded-4xl">
          <Image src={me} alt="Nathanim Tadele" className="rounded-3xl w-full h-full object-cover bg-white" />
        </span>
         Nathanim Tadele!
        </span><br />
        <span className="flex flex-col items-center justify-center gap-2 -mt-14">
        <span className="font-bold">
         <span className="text-gray-400">I'm a</span> software engineer
        </span>
        <span className="font-bold">
          <span className="text-gray-400">and a</span> founder.
        </span>
        </span>
      </div>
      <div className="flex items-center justify-around gap-2 w-[70%] py-10">
        <button className="bg-black shadow-2xl cursor-pointer text-white px-4 py-2 rounded-md">
          Download Resume
        </button>
        <div className="flex items-center justify-center gap-6 text-4xl text-gray-500">
          <span className="hover:text-black transition-all duration-300 cursor-pointer">
            <TbBrandLinkedin />
          </span>
          <span className="hover:text-black transition-all duration-300 cursor-pointer">
            <TbBrandGithub />
          </span>
          <span className="hover:text-black transition-all duration-300 cursor-pointer">
            <TbBrandTwitter />
          </span>
          <span className="hover:text-black transition-all duration-300 cursor-pointer">
            <TbBrandInstagram />
          </span>
        </div>
      </div>
    </div>
  );
}