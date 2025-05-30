"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { wins, Win } from "@/constants/wins";
import Image from "next/image";

const TimelineCard = ({ win }: { win: Win }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
        }
      );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-[#1a1a2e] text-white rounded-xl p-6 shadow-lg w-full md:w-[45%] border border-[#333]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={win.organizationLogo}
          alt="org logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h3 className="text-lg font-bold">{win.hackathonName}</h3>
          <p className="text-sm text-gray-400">{win.date}</p>
        </div>
      </div>
      <div className="w-full h-40 mb-3 relative rounded overflow-hidden">
        <Image
          src={win.image}
          alt={win.hackathonName}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">{win.description}</p>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1a] py-20 px-6 relative">
      <h2 className="text-4xl font-bold text-white text-center mb-20">
        🏆 Hackathon Wins Timeline
      </h2>
      <div className="relative flex flex-col items-center">
        <div className="absolute w-1 bg-gradient-to-b from-purple-500 to-transparent opacity-40 h-full left-1/2 transform -translate-x-1/2" />

        {wins.map((win, index) => (
          <div
            key={win.id}
            className={`w-full md:w-1/2 mb-16 ${
              index % 2 === 0 ? "self-start" : "self-end"
            }`}
          >
            <TimelineCard win={win} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
