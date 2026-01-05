"use client";

import { TbMenuDeep } from "react-icons/tb";
import { motion } from "framer-motion";
import Logo from "../../public/logo.jpg";
import Me from "../../public/me.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between  w-full text-black dark:text-white px-4 sticky top-0 z-1000">
      <div className="flex items-center justify-between">
        <span className="p-2 flex items-center justify-center gap-2">
        <Image src={Logo} alt="Logo" width={50} height={60} className=" shadow-2xl rounded-2xl" />
        nathanim.dev
        </span>
      </div>
      <TbMenuDeep />
     
    </header>
  );
}