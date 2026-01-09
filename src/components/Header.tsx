"use client";

import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter, TbMoon, TbSun } from "react-icons/tb";
import Logo from "../../public/logo.jpg";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex items-center justify-between w-full text-zinc-900 dark:text-zinc-100 px-4 py-2 sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-zinc-200/50 dark:border-white/5 supports-backdrop-filter:bg-white/60 rounded-full
    /* Minimal Strike Effect */
    before:absolute before:inset-0 before:w-full before:h-full before:content-[''] before:z-0 before:pointer-events-none
    before:bg-[linear-gradient(110deg,transparent_25%,rgba(56,189,248,0.05)_45%,transparent_50%,rgba(56,189,248,0.1)_50%,transparent_55%)]
    dark:before:bg-[linear-gradient(110deg,transparent_25%,rgba(161,161,170,0.05)_45%,transparent_50%,rgba(161,161,170,0.1)_50%,transparent_55%)]
    ">
      <div className="flex items-center gap-3 relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-zinc-200 to-zinc-400 dark:from-zinc-800 dark:to-zinc-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <Image 
            src={Logo} 
            alt="Logo" 
            width={44} 
            height={44} 
            className="relative rounded-xl shadow-sm ring-1 ring-zinc-100 dark:ring-white/10" 
          />
        </div>
        <span className="font-bold tracking-tight text-lg hidden sm:block">
          nathanim<span className="text-zinc-400 dark:text-zinc-600">.dev</span>
        </span>
      </div>
      
      <div className="flex items-center gap-6 relative z-10">
        {/* Social Icons */}
        <div className="hidden sm:flex items-center gap-5 text-xl text-zinc-400 dark:text-zinc-500">
          <a href="https://www.linkedin.com/in/nathanim-tadele-762099247/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300">
            <TbBrandLinkedin />
          </a>
          <a href="https://github.com/Nathanim1919" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300">
            <TbBrandGithub />
          </a>
          <a href="https://x.com/NathanimTadele" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300">
            <TbBrandTwitter />
          </a>
          <a href="https://www.instagram.com/nathan21te/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300">
            <TbBrandInstagram />
          </a>
        </div>

        {/* Separator */}
        <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block"></div>

        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <TbSun className="text-xl" /> : <TbMoon className="text-xl" />}
          </button>
        )}
      </div>
    </header>
  );
}
