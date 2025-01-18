const Header = () => {
  return (
    <header className="sticky top-0 z-50  flex items-center justify-between py-1 md:py-6">
       
       <ul className="flex gap-10 w-[90%] backdrop-blur-2xl md:w-[50%] lg:w-[30%] bg-gray-500/25 border border-sky-700/35 mx-auto justify-center p-1 rounded-full">
          <li className="text-gray-400 py-1">About</li>
          <li className="text-gray-400 py-1">Services</li>
          <li className="text-gray-400 py-1">Projects</li>
          <li className="text-gray-400 py-1">Careers</li>
       </ul>
    </header>
  );
};

export default Header;
