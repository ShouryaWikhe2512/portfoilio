"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
  Nextjs,
  Vuejs,
  Nodejs,
  Python,
  Mongodb,
  Postgresql,
  Docker,
  Git,
  Figma,
  Appwrite,
  Typescript,
} from "@/components/icons/SkillIcons";

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon: React.ReactNode;
    color: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <Html5 />, color: "#E34F26" },
      { name: "CSS3", icon: <Css3 />, color: "#1572B6" },
      { name: "JavaScript", icon: <Javascript />, color: "#F7DF1E" },
      { name: "Typescript", icon: <Typescript />, color: "#1572B6" },

      { name: "React", icon: <ReactLogo />, color: "#61DAFB" },
      { name: "Next.js", icon: <Nextjs />, color: "#000000" },
      { name: "Express.js", icon: <Vuejs />, color: "#000000" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <Nodejs />, color: "#339933" },
      { name: "Python", icon: <Python />, color: "#3776AB" },
      { name: "MongoDB", icon: <Mongodb />, color: "#47A248" },
      { name: "PostgreSQL", icon: <Postgresql />, color: "#336791" },
      { name: "Appwrite", icon: <Appwrite />, color: "#336791" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Docker", icon: <Docker />, color: "#2496ED" },
      { name: "Git", icon: <Git />, color: "#F05032" },
      { name: "Figma", icon: <Figma />, color: "#F24E1E" },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const categoryRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const categories = categoryRefs.current;

    if (section && heading && categories.length) {
      // Heading animation
      gsap.fromTo(
        heading,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Categories staggered animation
      categories.forEach((category, index) => {
        gsap.fromTo(
          category,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: category,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );

        // Animate skill icons within each category
        const skillElements = category.querySelectorAll(".skill-item");
        gsap.fromTo(
          skillElements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
            delay: index * 0.2 + 0.3,
            scrollTrigger: {
              trigger: category,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 ">
      <div className="container mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-5xl md:text-4xl font-bold text-center mb-16"
        >
          Technical <span className="text-purple">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => {
                if (el) categoryRefs.current[index] = el;
              }}
              className="bg-slate-900 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-item flex flex-col items-center text-center"
                  >
                    <div
                      className="w-16 h-16 flex items-center justify-center rounded-full mb-3 transition-transform duration-300 hover:scale-110"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        {/* <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-8 text-center">
            Proficiency Levels
          </h3>

          {[
            { name: "Frontend Development", percentage: 95 },
            { name: "Backend Development", percentage: 85 },
            { name: "UI/UX Design", percentage: 80 },
            { name: "DevOps & Deployment", percentage: 75 },
          ].map((skill, index) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                <div
                  className="skill-progress h-full bg-primary rounded-full"
                  style={{
                    width: `${skill.percentage}%`,
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Initialize GSAP for progress bars */}
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener("DOMContentLoaded", function() {
            const progressBars = document.querySelectorAll('.skill-progress');
            
            gsap.fromTo(
              progressBars,
              { scaleX: 0 },
              {
                scaleX: 1,
                duration: 1.5,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: progressBars[0],
                  start: 'top 90%',
                  toggleActions: 'play none none none',
                },
              }
            );
          });
        `,
        }}
      /> */}
    </section>
  );
}
