import React from "react";
import ProfileImage from "../assets/me.jpg";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";



const Home = () => {
  return (
    <div
      className="relative w-full h-full p-[1px]
    before:absolute before:w-[100%] before:right-0 before:animate-extraSlowSpin rounded-[3rem] rounded-br-none border border-orange-500/10 overflow-hidden before:rounded-tl-full before:h-full before:bg-gradient-to-r from-[#C33764] to-[#131314]
    "
    >
      <div className="relative w-full h-full rounded-[3rem] rounded-br-none overflow-hidden flex flex-col p-4 lg:p-6 gap-10 bg-black/55 backdrop-blur-3xl">
        <div className="flex justify-between items-center text-white mt-[1rem] flex-col lg:flex-row">
          <div className="flex items-center gap-4">
            <div className="w-[3rem] h-[3rem] rounded-full relative bg-gray-800 transform -rotate-90">
              {/* <img src={ProfileImage} alt="Profile" className="w-full h-full"/> */}
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold m-0">Hi, i'm Nathanim.</h3>
              <p className="text-gray-400 m-0 text-[13px]">Software Engineer</p>
            </div>
          </div>
          <div className="socialMedias flex items-center gap-6">
            <FaGithub className="text-2xl cursor-pointer w-8 h-8  p-1  hover:bg-gray-900 rounded-full grid place-items-center"/>
            <FaTwitter className="text-2xl cursor-pointer w-8 h-8  p-1  hover:bg-gray-900 rounded-full grid place-items-center"/>
            <TiSocialLinkedin className="text-2xl cursor-pointer w-8 h-8  p-1  hover:bg-gray-900 rounded-full grid place-items-center"/>
          </div>
        </div>
        <div className="grid gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold">Passionate to Pursue<br/> The Technology.</h1>
          <p className="text-gray-400">
            I am a software engineer with a passion for building software
            applications that solve real-world problems. I have experience in
            building web applications using JavaScript, React, and Node.js. I am
            always eager to learn new technologies and improve my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
