"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { 
  MapPin, Briefcase, Link as LinkIcon, 
  Github, ArrowUpRight, Command, 
  History, Sparkles, Clock,
  UserCheck
} from 'lucide-react';
import { MdCardMembership } from 'react-icons/md';

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

  // Logic to calculate years of experience based on created_at
  const { yearsExperience, joinedDate } = useMemo(() => {
    if (!profile) return { yearsExperience: '0', joinedDate: '' };
    
    const start = new Date(profile.created_at);
    const now = new Date(); // In your context, it's 2026
    
    // Calculate total years with one decimal point
    const diffInMs = now.getTime() - start.getTime();
    const years = (diffInMs / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
    
    const formattedDate = start.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });

    return { yearsExperience: years, joinedDate: formattedDate };
  }, [profile]);

  if (loading) return <div className="w-full h-[400px] rounded-[32px] bg-gray-50 dark:bg-white/5 animate-pulse" />;
  if (!profile) return null;

  return (
    <div className="w-full max-w-5xl mx-auto font-sans antialiased flex flex-col">
      
      {/* --- Minimalist Header --- */}
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
            <Github size={20} className="text-white dark:text-black" />
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-black dark:text-white">Engineering Activity</h2>
            <div className="flex items-center gap-2 text-emerald-500">
              <p className="text-[11px] font-bold uppercase tracking-widest">Github Profile</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bento Grid Layout --- */}
      <div className="grid md:grid-cols-[.5fr_1fr] gap-4">
        
        {/* 1. Profile Card (The Anchor) */}
        <div className=" bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-white/10 rounded-[32px] p-6 flex flex-col justify-between group">
          <div>
            <div className="relative inline-block">
              <img src={profile.avatar_url} className="w-20 h-20 rounded-3xl object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" alt="avatar" />
              {profile.hireable && (
                <div className="absolute -top-2 -right-2 px-2 py-1 bg-emerald-500 text-white text-[9px] font-bold rounded-full uppercase shadow-lg">
                  Hireable
                </div>
              )}
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white tracking-tighter">{profile.name}</h3>
            <p className="text-gray-500 text-sm">@{profile.login}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              {profile.bio}
            </p>
          </div>
          
          <div className="pt-6 border-t border-gray-100 dark:border-white/5 space-y-3">
            <MetaRow icon={<MapPin size={14}/>} text={profile.location} />
            <MetaRow icon={<LinkIcon size={14}/>} text={profile.blog} isLink />
          </div>
        </div>

        {/* 2. Repositories Stats */}
        <div className="grid md:grid-cols-2 gap-2">
        <div className=" bg-gray-50 dark:bg-white/5 border border-transparent dark:border-white/5 rounded-3xl p-4 flex flex-col justify-center relative overflow-hidden">
          <Command size={80} className="absolute -right-4 -top-4 text-gray-200 dark:text-white/5 rotate-12" />
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Public Repositories</p>
          <p className="text-5xl font-bold text-black  dark:text-white tracking-tighter">{profile.public_repos}</p>
        </div>

        {/* 3. Followers Stats */}
        <div className=" bg-white relative overflow-hidden dark:bg-white border border-transparent rounded-3xl p-4 flex flex-col justify-center text-black">
          <UserCheck size={80} className="absolute -right-4 -top-4 text-gray-200 dark:text-white/5" />
          <p className="text-[11px] font-bold opacity-50 uppercase tracking-widest mb-2">Followers</p>
          <p className="text-5xl font-bold text-black tracking-tighter">{profile.followers}</p>
        </div>

        {/* 4. Started Journey (New Box) */}
        <div className=" bg-white relative overflow-hidden dark:bg-[#0d1117] border border-gray-200 dark:border-white/10 rounded-3xl p-4 flex flex-col justify-center">
            <MdCardMembership size={80} className="absolute -right-4 -top-4 text-gray-200 dark:text-white/5"/>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Member Since</p>
          <p className="text-3xl font-bold text-black dark:text-white tracking-tight">{joinedDate}</p>
        </div>

        {/* 5. Years of Experience (New Box) */}
        <div className=" bg-gray-50  dark:bg-white/5 border border-transparent dark:border-white/5 rounded-3xl p-4 flex items-center justify-between group overflow-hidden relative">
          <div className="relative z-10">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">GitHub Experience</p>
            <div className="flex items-baseline gap-2">
                <p className="text-5xl font-bold text-black dark:text-white tracking-tighter">{yearsExperience}</p>
                <p className="text-xl font-bold text-black tracking-tight">Years</p>
            </div>
          </div>
          <Sparkles  className="absolute -right-4 -top-4 text-gray-200 dark:text-white/5" size={80} />
        </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper ---
const MetaRow = ({ icon, text, isLink }: any) => (
  <div className="flex items-center gap-3 text-xs font-medium text-gray-500 dark:text-gray-400">
    <span className="text-gray-300 dark:text-white/20">{icon}</span>
    {isLink ? (
      <a href={text} target="_blank" className="hover:text-black dark:hover:text-white truncate transition-colors">
        {text.replace('https://', '')}
      </a>
    ) : <span>{text}</span>}
  </div>
);

export default GithubActivity;