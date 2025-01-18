import RocketImage from "../assets/rocate.png";

const CallToAction = () => {
  return (
    <div
      className="call-to-action relative
    before:absolute before:w-[70%] before:right-0 rounded-[3rem] rounded-bl-none border border-orange-500/10 overflow-hidden before:rounded-tl-full before:h-full before:bg-gradient-to-r from-[#C33764] to-[#1D2671] before:animate-extraSlowSpin p-[1px]
    "
    >
      <div className="relative bg-black/60 w-full h-full rounded-[3rem] rounded-bl-none text-white p-4 grid backdrop-blur-3xl">
        <div className="flex items-start p-4 flex-col gap-5">
          <h1 className="text-gray-400 ">
            Let&apos;s build something amazing together!
          </h1>
          <h2 className="font-bold text-3xl">Ready to get started?</h2>
          <div className="relative w-[50%] grid place-items-center h-full p-[1px] rounded-full overflow-hidden
          before:absolute before:w-full before:h-full before:bg-gradient-to-r from-sky-500 to-orange-400 before:rounded-full
          ">
            <a href="https://www.linkedin.com/in/nathanim-tadele-762099247/" className=" relative w-full h-full py-2 px-3 bg-gradient-to-r from-red-900 to-black rounded-full">
              Get in touch
            </a>
          </div>
        </div>
        <div className=" grid place-items-center">
          <img
            src={RocketImage}
            alt="rocket"
            className="
                  w-[200px] h-auto object-cover relative
                "
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
