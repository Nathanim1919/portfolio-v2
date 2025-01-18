const Services = () => {
  return (
    <div className="text-white grid place-items-center p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 lg:gap-10 py-10">
        <div className="py-3 lg:py-6 flex flex-col items-start gap-1">
          <h3 className="text-gray-400 bg-gray-900 border border-orange-400/25 py-1 px-3 rounded-full text-[13px]">00 SERVICES</h3>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Solving real-world Complex Business problems with software
            solutions.
          </h1>
        </div>
        <div className="introdcution">
          <p className="text-gray-400 lg:text-[18px]">
            I am a software engineer with a passion for building software
            applications that solve real-world problems. I have experience in
            building web applications using JavaScript, React, and Node.js. I am
            always eager to learn new technologies and improve my skills.
          </p>
        </div>
      </div>
      <div className="services grid place-items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            className=" bg-gray-950 rounded-xl overflow-hidden shadow-2xl border border-orange-700/20 p-[1px]
          before:w-[100%] before:h-full before:bg-gradient-to-r  before:from-[#191919] before:to-[#1D2671] before:absolute before:left-0  before:top-0 before:bottom-0 relative
          "
          >
            <div className="bg-black/70 backdrop-blur-xl relative w-full h-full p-6 flex flex-col gap-3">
              <h2 className="lg:text-2xl font-bold">Web Development</h2>
              <p className="text-gray-300 text-[14px]">
                I specialize in building web applications using JavaScript,
                React, and Node.js. I can help you create a custom website that
                meets your specific needs and requirements.
              </p>
            </div>
          </div>
          <div
            className=" bg-gray-950 rounded-xl overflow-hidden shadow-2xl border border-orange-700/20 p-[1px]
          before:w-[100%] before:h-full before:bg-gradient-to-r  before:from-[#d3dc55] before:to-[#1D2671] before:absolute before:left-0 before:top-0 before:bottom-0 relative
          "
          >
            <div className="bg-black/70 rounded-xl backdrop-blur-xl relative w-full h-full p-6 flex flex-col gap-3">
              <h2 className="md:text-2xl font-bold">SaaS Development</h2>
              <p className="text-gray-300 text-[14px]">
                With a focus on building scalable SaaS (Software as a Service)
                solutions, I can help transform your business processes by
                delivering cloud-based services to a broad range of users. I’ll
                handle everything from backend architecture to user management
                and billing solutions.
              </p>
            </div>
          </div>
          <div
            className=" bg-gray-950 rounded-xl overflow-hidden shadow-2xl border border-orange-700/20 p-[1px]
          before:w-[100%] before:h-full before:bg-gradient-to-r  before:from-[#C33764] before:to-[#1a1b1b] before:absolute before:left-0 before:top-0 before:bottom-0 relative
          "
          >
            <div className="bg-black/70 rounded-lg overflow-hidden backdrop-blur-xl relative w-full h-full p-6 flex flex-col gap-3">
              <h2 className="md:text-2xl font-bold">Custom Solutions</h2>
              <p className="text-gray-300 text-[14px]">
                I can help you build custom software solutions to solve your
                unique business problems. Whether you need a CRM system, an
                inventory management system, or a custom API, I can help you
                build the software you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
