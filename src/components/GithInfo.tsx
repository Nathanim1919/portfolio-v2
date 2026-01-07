"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { 
  MapPin, Link as LinkIcon, 
  Github, Command, 
  Sparkles,
  Users, Calendar,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const USERNAME = "Nathanim1919";

const GithubActivity = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pRes = await fetch(`https://api.github.com/users/${USERNAME}`);
        setProfile(await pRes.json());
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { yearsExperience, joinedDate } = useMemo(() => {
    if (!profile) return { yearsExperience: '0', joinedDate: '' };
    
    const start = new Date(profile.created_at);
    const now = new Date();
    
    const diffInMs = now.getTime() - start.getTime();
    const years = (diffInMs / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
    
    const formattedDate = start.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });

    return { yearsExperience: years, joinedDate: formattedDate };
  }, [profile]);

  if (loading) return <div className="w-full h-[400px] rounded-[32px] bg-zinc-50 dark:bg-zinc-900/50 animate-pulse border border-zinc-100 dark:border-zinc-800" />;
  if (!profile) return null;2

  return (
    <div className="w-full mx-auto flex flex-col gap-4">
      
      {/* --- Minimalist Header --- */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-white/10 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-sm group hover:scale-105 transition-transform duration-300">
                <Github className="w-6 h-6 text-zinc-900 dark:text-white group-hover:rotate-12 transition-transform" />
            </div>
            <div className="flex flex-col gap-0.5">
                <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    Engineering
                </h2>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                       Github Info
                    </span>
                </div>
            </div>
        </div>
        
        <a 
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all hover:gap-3 group"
        >
            View Profile 
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* --- Bento Grid Layout --- */}
      <div className="grid md:grid-cols-[.5fr_1fr] gap-4">
        
        {/* 1. Profile Card (Monochrome) */}
        <div className="bg-white dark:bg-[#0d1117] border border-zinc-200 dark:border-white/10 rounded-[32px] p-6 flex flex-col justify-between group h-full relative overflow-hidden">
          <div>
            <div className="relative inline-block">
              <img src={profile.avatar_url} className="w-20 h-20 rounded-3xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="avatar" />
              {profile.hireable && (
                <div className="absolute -top-2 -right-2 px-2.5 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[9px] font-bold rounded-full uppercase tracking-wider border-2 border-white dark:border-[#0d1117]">
                  Hireable
                </div>
              )}
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tighter mt-4">{profile.name}</h3>
            <p className="text-zinc-500 text-sm">@{profile.login}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium mt-4">
              {profile.bio}
            </p>
          </div>
          
          <div className="pt-6 border-t border-zinc-100 dark:border-white/5 space-y-3 mt-4">
            <MetaRow icon={<MapPin size={14}/>} text={profile.location} />
            <MetaRow icon={<LinkIcon size={14}/>} text={profile.blog} isLink />
          </div>
        </div>

        {/* 2. Redesigned Stats Cards (Strictly Monochrome) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
            
            <StatCard 
                label="Public Repositories"
                value={profile.public_repos}
                icon={Command}
            />

            <StatCard 
                label="Followers"
                value={profile.followers}
                icon={Users}
            />

            <StatCard 
                label="Member Since"
                value={joinedDate}
                icon={Calendar}
                isText
            />

            <StatCard 
                label="Experience"
                value={yearsExperience}
                suffix="Years"
                icon={Sparkles}
            />

        </div>
      </div>
    </div>
  );
};

// --- Sub Components ---

const StatCard = ({ label, value, icon: Icon, suffix, isText }: any) => (
    <motion.div 
        whileHover={{ y: -2 }}
        className="bg-zinc-50 dark:bg-white/5 border border-transparent dark:border-white/5 hover:border-zinc-200 dark:hover:border-white/10 rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
    >
        <div className="absolute inset-0 bg-zinc-100/0 group-hover:bg-zinc-100/50 dark:group-hover:bg-white/5 transition-colors duration-500" />
        
        <div className="flex justify-between items-start z-10">
            <div className="p-2 rounded-xl bg-white dark:bg-white/10 text-zinc-900 dark:text-white shadow-sm ring-1 ring-zinc-100 dark:ring-white/5 group-hover:scale-110 transition-transform duration-300">
                <Icon size={18} />
            </div>
            <Icon className="absolute -right-4 -top-4 w-24 h-24 opacity-5 dark:opacity-[0.02] rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 text-black dark:text-white" />
        </div>

        <div className="z-10">
            <p className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                {label}
            </p>
            <div className="flex items-baseline gap-1">
                <span className={`font-bold tracking-tighter text-zinc-900 dark:text-white ${isText ? 'text-xl' : 'text-4xl'}`}>
                    {value}
                </span>
                {suffix && (
                    <span className="text-sm font-semibold text-zinc-400 dark:text-zinc-500">
                        {suffix}
                    </span>
                )}
            </div>
        </div>
    </motion.div>
);

const MetaRow = ({ icon, text, isLink }: any) => (
  <div className="flex items-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
    <span className="text-zinc-300 dark:text-white/20">{icon}</span>
    {isLink ? (
      <a href={text} target="_blank" className="hover:text-black dark:hover:text-white truncate transition-colors">
        {text.replace('https://', '')}
      </a>
    ) : <span>{text}</span>}
  </div>
);

export default GithubActivity;
