"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import type { Achievement } from "@/lib/data";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export default function AchievementCard({
  achievement,
  index,
}: AchievementCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView && cardRef.current) {
      // Create glitch effect when card comes into view
      gsap.to(cardRef.current, {
        duration: 0.1,
        x: "+=5",
        yoyo: true,
        repeat: 3,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(cardRef.current, {
            duration: 0.05,
            opacity: 0.8,
            yoyo: true,
            repeat: 1,
          });
        },
      });

      // Animate text lines like terminal boot-up
      const textLines = cardRef.current.querySelectorAll(".text-line");
      gsap.fromTo(
        textLines,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.15,
          ease: "power1.out",
        }
      );
    }
  }, [isInView]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-blue border border-blue-500 rounded-lg p-6 shadow-lg relative overflow-hidden"
      style={{
        boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      }}
    >
      {/* Circuit board pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/placeholder.svg?height=400&width=400')",
          backgroundSize: "cover",
        }}
      />

      {/* Card content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-line">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 font-mono">
              {achievement.name}
            </h3>
          </div>
          <div className="text-line w-12 h-12 relative">
            <Image
              src={achievement.logo || "/placeholder.svg"}
              alt={`${achievement.name} logo`}
              width={48}
              height={48}
              className="rounded-full border border-blue-400"
            />
          </div>
        </div>

        <div className="text-line mb-4 text-blue-200 font-mono text-sm">
          <span className="text-yellow-400">{"> Hosted By-"}</span>{" "}
          {achievement.host}
          <br />
          <br />
          <span className="text-yellow-400">{">"}</span>{" "}
          {achievement.description}
        </div>

        <div className="text-line mb-4 relative h-48 md:h-64 rounded-md overflow-hidden border border-blue-500">
          <Image
            src={achievement.image || "/placeholder.svg"}
            alt={achievement.name}
            fill
            style={{ objectFit: "cover" }}
            className="hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="text-line mt-4">
          <h4 className="text-yellow-400 font-mono font-bold mb-2">
            🔍 What I Learned
          </h4>
          <ul className="list-disc list-inside text-blue-200 space-y-1 font-mono text-sm">
            {achievement.learnings.map((learning, i) => (
              <li key={i} className="text-line">
                {learning}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
