const Header = () => {
  return (
    <header className="relative flex items-center justify-between py-6">
      <div className="flex items-center gap-5">
        <h1 className="font-bold text-white text-2xl">Nathan</h1>
        <div className="relative overflow-hidden p-[1px] grid place-items-center
        before:absolute before:w-[100%] before:h-[100%] before:bg-gradient-to-r from-sky-500 to-orange-400 before:rounded-full before:animate-extraSlowSpin
        ">
        <span className="bg-black/100 backdrop-blur-3xl p-1 text-orange-400 relative w-full h-full rounded-full">software engineer</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
