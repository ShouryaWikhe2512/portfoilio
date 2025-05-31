"use client";

import { projects } from "@/constants/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Tilt from "react-parallax-tilt";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Work() {
  return (
    <section id="project" className="min-h-screen py-16 px-6 ">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Featured
        <span className="text-purple"> Projects</span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            transitionSpeed={400}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* <Card className="rounded-2xl overflow-hidden shadow-xl  bg-transparent">
                <div className="rounded relative group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-60 object-cover p-3 "
                  /> */}
              <Card className="rounded-2xl overflow-hidden shadow-xl bg-slate-900">
                <div className="relative group p-3">
                  <div className="rounded overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-60 object-cover"
                    />
                  </div>

                  <Link
                    href={project.github}
                    target="_blank"
                    className="absolute top-4 right-4 bg-white dark:bg-zinc-800 p-2 rounded-full hover:scale-110 transition-transform"
                  >
                    <Github className="h-5 w-5 text-black dark:text-white" />
                  </Link>
                </div>

                <CardContent className="p-5 space-y-4  bg-transparent">
                  <h2 className="text-xl font-semibold ">{project.title}</h2>

                  <p className="text-sm text-slate-400 ">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Image
                        key={i}
                        src={tech}
                        alt="Tech Logo"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    ))}
                  </div>

                  <Link
                    href={project.live}
                    target="_blank"
                    className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Live Site →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
