const Experiances = () => {
  return (
    <div className="text-white h-screen relative 
    before:w-[50%] before:right-[10%] before:h-[60%] before:bg-gradient-to-b from-black to-red-600 before:absolute before:bottom-[20%] before:animate-slowSpin my-10 rounded-3xl overflow-hidden
    ">
      <div className="grid grid-cols-1 lg:grid-cols-[_.4fr_.6fr] gap-5 h-full bg-black/10 backdrop-blur-3xl overflow-hidden">
        <div 
          className="bg-[#151515] h-[80%] rounded-3xl rounded-br-none relative
                before:bg-[#004af7] border border-orange-400/10 before:absolute before:animate-extraSlowSpin before:duration-500 before:w-[100%] before:h-[80%] overflow-hidden
                "
        >
          <div className="bg-black/60 backdrop-blur-3xl w-full h-full p-6 flex flex-col gap-3">
            <h2 className="text-3xl lg:text-5xl text-gray-400 lg:leading-[3.5rem] relative z-50">
              Currently i'm working at{" "}<br/>
              <span className="text-white font-bold">Web-hub</span>
            </h2>
            <p className="text-gray-500 text-[14px] relative z-50">
              Webhub is a software campany focused on providing ready-made web
              templates for businesses and individuals.
            </p>

            <div className="w-[60%] h-[40%] bg-black/25 rounded-xl shadow-2xl grid  absolute z-30 -bottom-40 lg:bottom-0 right-40 transform rotate-45">
              <div className="w-20 h-10 bg-blue-500 rounded-xl shadow-2xl  relative z-30 bottom-5 right-5 transform rotate-5"></div>
              <div className="w-30 h-20 bg-blue-500 rounded-xl shadow-2xl  relative z-30 bottom-5 right-5 transform rotate-5"></div>
              <div className="w-40 h-30 bg-red-500 rounded-xl shadow-2xl  relative z-30 bottom-5 right-5 transform rotate-20"></div>
            </div>
          </div>
        </div>
        <div
          className="h-[80%] rounded-3xl rounded-bl-none border border-orange-400/15 overflow-hidden relative
                                 "
        >
          <div className="relative w-full h-full bg-black/60 p-5 backdrop-blur-xl">
            <h2 className="text-4xl font-bold">
              webhub.<span className="text-gray-400">com</span>
            </h2>
            <p className="text-gray-600">
              A hub for web templates, web design, and web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiances;
