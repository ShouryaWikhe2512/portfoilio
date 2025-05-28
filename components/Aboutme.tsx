"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Palette, Lightbulb, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const cards = cardRefs.current;

    if (section && content && image && cards.length) {
      // Main content animation
      gsap.fromTo(
        content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Image animation
      gsap.fromTo(
        image,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards staggered animation
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 ">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-4xl font-bold text-center mb-16">
          About
          <span className="text-purple"> Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
            <h3 className="text-3xl font-semibold">
              Creative Developer & Problem Solver
            </h3>

            <p className="text-muted-foreground text-lg">
              I'm a passionate developer with a strong focus on creating
              beautiful, functional digital experiences. With expertise in both
              front-end and back-end technologies, I bring ideas to life through
              clean, efficient code and thoughtful design.
            </p>

            <p className="text-muted-foreground text-lg">
              Having worked on diverse projects ranging from an AI-based waste
              management system aimed at creating a positive social impact, to
              building a platform for content creators to enhance their
              creativity, I thrive on challenges that push me to innovate and
              grow. I'm particularly passionate about using technology to solve
              real-world problems and crafting solutions that blend
              functionality with purpose.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                {
                  name: "Development",
                  icon: <Code className="text-yellow-500" size={24} />,
                },
                {
                  name: "Design",
                  icon: <Palette className="text-yellow-500" size={24} />,
                },
                {
                  name: "Problem Solving",
                  icon: <Lightbulb className="text-yellow-500" size={24} />,
                },
                {
                  name: "Collaboration",
                  icon: <Users className="text-yellow-500" size={24} />,
                },
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                  className="flex items-center p-4 rounded-lg bg-muted/50"
                >
                  {skill.icon}
                  <span className="ml-3 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/WhatsApp Image 2025-01-31 at 13.20.09_a2075cf8.jpg"
                alt="Professional headshot"
                width={600}
                height={800}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="glassmorphism absolute -bottom-3 -left-3 p-4 rounded-lg max-w-xs">
              <p className="text-sm ">
                <span className="block text-xl font-bold mb-2">2+ Years</span>
                Professional experience creating innovative digital solutions
              </p>
            </div>

            <div className="glassmorphism absolute -top-2 -right-3 p-4 rounded-lg">
              <p className="text-xl font-bold text-primary">20+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
