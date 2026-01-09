"use client";

import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Copy } from 'lucide-react';
import Logo from "../../public/logo.jpg";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col gap-6 py-8">
      
      {/* Main Footer Card */}
      <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[40px] p-8 md:p-12 overflow-hidden relative flex flex-col justify-between min-h-[400px]
        /* Diamond / Crystal Prism Effect - Intensified Blue (Light) / Silver (Dark) */
        before:absolute before:inset-0 before:content-[''] before:z-0
        before:bg-[conic-gradient(from_0deg_at_50%_50%,rgba(56,189,248,0.2)_0deg,transparent_60deg,rgba(56,189,248,0.2)_120deg,transparent_180deg,rgba(56,189,248,0.2)_240deg,transparent_300deg,rgba(56,189,248,0.2)_360deg)]
        dark:before:bg-[conic-gradient(from_0deg_at_50%_50%,rgba(161,161,170,0.05)_0deg,transparent_60deg,rgba(161,161,170,0.05)_120deg,transparent_180deg,rgba(161,161,170,0.05)_240deg,transparent_300deg,rgba(161,161,170,0.05)_360deg)]
        
        after:absolute after:inset-0 after:content-[''] after:z-0
        after:bg-[radial-gradient(circle_at_50%_-20%,rgba(56,189,248,0.4),transparent_40%),radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.2),transparent_40%)]
        dark:after:bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1),transparent_40%),radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent_40%)]
      ">
        
        {/* Shimmer / Sparkle Overlay */}
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150 mix-blend-overlay pointer-events-none" />

        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            
            {/* Left: Brand & CTA */}
            <div className="flex flex-col gap-6 max-w-lg">
                <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-1 ring-zinc-200 dark:ring-white/10 shadow-sm">
                        <Image src={Logo} alt="Logo" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                            Nathanim
                        </span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                            Full Stack Engineer
                        </span>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                    Let's build something <br/>
                    <span className="text-zinc-400 dark:text-zinc-600">extraordinary together.</span>
                </h2>

                <div className="flex flex-wrap gap-3 mt-2">
                    <a href="mailto:nathanim2tadele@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-bold tracking-wide hover:scale-105 transition-transform duration-300">
                        <Mail className="w-4 h-4" />
                        Get in touch
                    </a>
                    <a href="tel:+251942581962" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white text-sm font-bold tracking-wide border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/20 transition-colors">
                        <span className="text-xs">📞</span>
                        Call me
                    </a>
                </div>
            </div>

            {/* Right: Links Grid */}
            <div className="grid grid-cols-2 gap-8 md:justify-items-end">
                <div className="flex flex-col gap-4">
                    <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        Socials
                    </h3>
                    <ul className="flex flex-col gap-3">
                        <FooterLink href="https://github.com/Nathanim1919" label="GitHub" />
                        <FooterLink href="https://www.linkedin.com/in/nathanim-tadele-762099247/" label="LinkedIn" />
                        <FooterLink href="https://x.com/NathanimTadele" label="Twitter / X" />
                        <FooterLink href="https://www.instagram.com/nathan21te/" label="Instagram" />
                    </ul>
                </div>
                
                <div className="flex flex-col gap-4">
                    <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        Legal
                    </h3>
                    <ul className="flex flex-col gap-3">
                        <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500 cursor-not-allowed">Privacy</span>
                        <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500 cursor-not-allowed">Terms</span>
                    </ul>
                </div>
            </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 pt-12 mt-auto relative z-10">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Based in Addis Ababa, Ethiopia
                </span>
            </div>
            
            <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
                © {currentYear} Nathanim. All Rights Reserved.
            </p>
        </div>

      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
    >
      {label}
      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </a>
  </li>
);
