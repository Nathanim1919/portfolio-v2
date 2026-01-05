import Experiance from "@/components/Experiance";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className=" w-[70%] mx-auto h-screen scroll-smooth scroll-behavior-smooth overflow-y-scroll scrollbar-hide">
      <Header />
      <Hero />
      <div className="grid grid-cols-2 gap-4 place-items-start py-10">
      <Experiance />
      <TechStack />
      </div>
    </div>
  );
}