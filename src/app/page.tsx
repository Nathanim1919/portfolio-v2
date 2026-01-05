import Experiance from "@/components/Experiance";
import { Footer } from "@/components/Footer";
import GithubActivity from "@/components/GithInfo";
import GithubCalendar from "@/components/GithubGraph";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className=" w-[70%] flex flex-col gap-10 mx-auto h-screen scroll-smooth scroll-behavior-smooth overflow-y-scroll scrollbar-hide p-6">
      <Header />
      <Hero />
      <div className="grid grid-cols-2 gap-4 place-items-start py-10">
      <Experiance />
      <TechStack />
      </div>
      <GithubActivity />
      <GithubCalendar />
      <Projects/>
      <Footer />
    </div>
  );
}