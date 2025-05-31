"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hackathonData } from "@/lib/data";
import AchievementCard from "./achievement-card";
import CircuitNode from "./circuit-node";

gsap.registerPlugin(ScrollTrigger);

export default function HackathonTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the circuit path
    if (pathRef.current) {
      gsap.fromTo(
        pathRef.current,
        {
          backgroundImage:
            "linear-gradient(to bottom, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.3))",
          boxShadow: "0 0 5px rgba(59, 130, 246, 0.3)",
        },
        {
          backgroundImage:
            "linear-gradient(to bottom, rgba(59, 130, 246, 0.5), rgba(234, 179, 8, 0.5))",
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
          duration: 2,
          repeat: -1,
          yoyo: true,
        }
      );
    }

    // Set up scroll triggers for each achievement
    const nodes = document.querySelectorAll(".circuit-node");
    nodes.forEach((node) => {
      gsap.to(node, {
        boxShadow: "0 0 20px rgba(234, 179, 8, 0.8)",
        scale: 1.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: node,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="achievements">
      <div className="relative" ref={timelineRef}>
        <h1 className="text-purple text-center text-4xl font-bold">
          Achievements
        </h1>
        <br />
        <br />
        {/* Circuit path */}
        <div
          ref={pathRef}
          className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-1 h-full bg-blue-500 z-10"
          style={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
        />

        {/* Timeline content */}
        <div className="relative z-20">
          {hackathonData.map((achievement, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start mb-24 relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Circuit node */}
              <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%]">
                <CircuitNode index={index} />
              </div>

              {/* Content */}
              <div className="w-full md:w-5/12 px-4 md:px-8">
                <AchievementCard achievement={achievement} index={index} />
              </div>

              {/* Date marker */}
              <div className="w-full md:w-5/12 flex justify-center md:justify-start items-center mt-4 md:mt-7">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className={`text-yellow-400 font-mono text-lg md:text-xl font-bold ${
                    index % 1 === 0
                      ? "md:text-left md:pl-40"
                      : "md:text-right md:pr-30"
                  }`}
                >
                  {achievement.date}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
