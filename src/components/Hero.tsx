"use client";

import Image from "next/image";
import me from "../../public/logo.jpg";
import { ArrowDown, Download, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full shrink-0 min-h-[80vh] flex flex-col items-center justify-center rounded-3xl border border-zinc-200 dark:border-zinc-900 overflow-hidden bg-zinc-50 dark:bg-zinc-950/50
    /* Sun Glow Effect - Blue (Light Mode) / Silver (Dark Mode) */
    before:absolute before:-top-[30%] before:-left-[10%] before:w-[80%] before:h-[150%] before:content-[''] 
    before:bg-[radial-gradient(circle,rgba(56,189,248,0.2),transparent_70%)] dark:before:bg-[radial-gradient(circle,rgba(161,161,170,0.3),transparent_70%)]
    before:blur-[100px] before:rotate-[-10deg] before:z-0
    
    /* Sun Rays / Streaks - Blue (Light Mode) / Silver (Dark Mode) */
    after:absolute after:inset-0 after:content-[''] 
    after:bg-[linear-gradient(110deg,transparent_30%,rgba(56,189,248,0.15)_40%,transparent_42%,rgba(56,189,248,0.1)_45%,transparent_48%,rgba(56,189,248,0.05)_55%,transparent_100%)]
    dark:after:bg-[linear-gradient(110deg,transparent_30%,rgba(161,161,170,0.3)_40%,transparent_42%,rgba(161,161,170,0.2)_45%,transparent_48%,rgba(161,161,170,0.15)_55%,transparent_100%)]
    after:z-0
    ">
      

      <div className="flex flex-col items-center relative z-10 px-4 dark:bg-black/20 w-full h-full py-10 backdrop-blur-md">

        {/* Main Heading - Integrated with Image */}
        <div className="text-center text-4xl md:text-6xl lg:text-7xl font-bold flex flex-col items-center text-zinc-900 dark:text-white leading-tight md:leading-[1.1] mb-12">
            <span className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
              Hi, I'm
              <motion.div 
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="relative w-16 h-16 md:w-24 md:h-24 inline-block shadow-2xl rounded-2xl md:rounded-3xl border-4 border-white dark:border-zinc-800 overflow-hidden"
              >
                <Image src={me} alt="Nathanim Tadele" fill className="object-cover" />
              </motion.div>
              Nathanim!
            </span>
            
            <span className="flex flex-col items-center justify-center mt-2 md:mt-4">
              <span className="block">
                <span className="text-zinc-400 dark:text-zinc-600 font-medium">I'm a</span> Software Engineer
              </span>
              <span className="block">
                <span className="text-zinc-400 dark:text-zinc-600 font-medium">and a</span> Founder.
              </span>
            </span>
        </div>

        {/* Action Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
            <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold text-sm tracking-wide overflow-hidden transition-transform hover:scale-105">
                <span>View Projects</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white rounded-full font-bold text-sm tracking-wide border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors">
                <Download className="w-4 h-4" />
                <span>Resume</span>
            </button>
        </motion.div>

      </div>
    </section>
  );
}
