"use client";

import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import Logo from "../../public/logo.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mx-auto">
      {/* Upper Footer: The Main Content Area */}
      <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-white/10 rounded-[32px] p-8 overflow-hidden relative">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none" />

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
          
          {/* Brand Side */}
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              {/* LOGO PLACEHOLDER */}
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <img 
                  src={Logo.src} 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-black dark:text-white uppercase">
                Nathanim
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Building the future of the web with Gen AI and high-performance full-stack architectures. Let's create something meaningful.
            </p>
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Available for projects
              </span>
            </div>
          </div>

          {/* Navigation Side */}
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Connect</h4>
              <ul className="space-y-3">
                <FooterLink href="https://github.com/Nathanim1919" label="GitHub" icon={<Github size={14} />} />
                <FooterLink href="#" label="LinkedIn" icon={<Linkedin size={14} />} />
                <FooterLink href="#" label="Twitter" icon={<Twitter size={14} />} />
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Contact</h4>
              <ul className="space-y-3">
                <FooterLink href="mailto:your-email@example.com" label="Email" icon={<Mail size={14} />} />
                <li className="text-xs font-bold dark:text-gray-400 pt-2">Addis Ababa, ET</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lower Footer: Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            © {currentYear} Nathanim. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-[10px] font-bold text-gray-400 hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest">
              Privacy Policy
            </button>
            <button className="text-[10px] font-bold text-gray-400 hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Easter Egg / Quote */}
      <div className="mt-8 flex justify-center">
        <p className="text-[10px] text-gray-600 dark:text-white/10 font-mono italic">
          &lt;built with passion and next.js /&gt;
        </p>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white transition-all group/link"
    >
      <span className="text-gray-300 group-hover/link:text-blue-500 transition-colors">{icon}</span>
      {label}
      <ArrowUpRight size={10} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
    </a>
  </li>
);