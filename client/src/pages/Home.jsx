import SaluteImage from "../assets/hey.png";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

const Home = () => {
  return (
    <div
      className="relative w-full h-full p-[1px]
    before:absolute before:w-[100%] before:right-10 before:top-10  rounded-[3rem] rounded-br-none border border-orange-500/10 overflow-hidden before:rounded-tl-full before:h-full before:bg-gradient-to-r from-[#29808b] to-[#1b1b5c67]
    "
    >
      <div className="relative w-full h-full rounded-[3rem] rounded-br-none overflow-hidden flex flex-col p-4 lg:p-6 gap-10 bg-black/55 backdrop-blur-3xl">
        <div className="flex justify-between items-center text-white mt-[1rem] flex-col lg:flex-row">
          <div className="flex items-center gap-4">
            <div
              className="w-[3rem] h-[3rem] rounded-full relative bg-gray-800 transform p-[1px]
            before:absolute before:w-full before:h-[90%] before:bg-gradient-to-r from-sky-500 to-orange-400 before:rounded-full before:animate-extraSlowSpin
            "
            >
              <div className="relative w-full h-full rounded-full bg-black">
                <img
                  src={SaluteImage}
                  alt="profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold m-0">Hi, i'm Nathanim.</h3>
              <p className="text-gray-400 m-0 text-[13px]">Software Engineer</p>
            </div>
          </div>
          <div
            className="p-[1px] relative rounded-full overflow-hidden
          before:absolute before:w-full before:h-[140%] before:bg-gradient-to-r from-sky-500 to-orange-400 before:rounded-full before:animate-extraSlowSpin
          "
          >
            <div className="socialMedias p-2 bg-black flex items-center gap-6 relative w-full h-full  rounded-full">
              <a href="https://www.github.com/Nathanim1919" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl w-full h-full relative cursor-pointer bg-black hover:bg-gray-900 rounded-full grid place-items-center" />
              </a>
              <a href="https://x.com/NathanimTadele" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl w-full h-full relative cursor-pointer bg-black hover:bg-gray-900 rounded-full grid place-items-center" />
              </a>
              <a href="https://www.linkedin.com/in/nathanim-tadele-762099247/" target="_blank" rel="noreferrer">
              <TiSocialLinkedin className="text-2xl w-full h-full relative cursor-pointer bg-black hover:bg-gray-900 rounded-full grid place-items-center" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid gap-5 p-6">
          <h1 className="text-2xl md:text-3xl lg:text-6xl text-white font-bold">
          Driven to Explore
            <br />  Technology.
          </h1>
          <p className="text-gray-400 text-[13px] md:text-[15px]">
          I am a passionate software engineer dedicated to developing innovative solutions that solve real-world challenges. Committed to continuous learning and growth, I strive to create impactful and efficient digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
