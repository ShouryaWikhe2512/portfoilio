"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import AboutSection from "@/components/Aboutme";
import SkillsSection from "@/components/Skills";
import Work from "@/components/work";
import AchievementsSection from "@/components/achievement-card";

import AchievementCard from "@/components/achievement-card";
import HackathonTimeline from "@/components/hackathon-timeline";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <AboutSection />
        <SkillsSection />
        <Work />
        <br />
        <br />
        <br />
        <br />
        <HackathonTimeline />
        {/* <Grid /> */}
        {/* <RecentProjects /> */}
        {/* <Clients /> */}
        {/* <Experience /> */}
        <br />
        <Approach />
        <Contact />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
