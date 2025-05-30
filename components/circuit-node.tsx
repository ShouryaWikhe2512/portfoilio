"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CircuitNodeProps {
  index: number;
}

export default function CircuitNode({ index }: CircuitNodeProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={nodeRef}
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="circuit-node w-6 h-6 rounded-full bg-yellow-500 border-2 border-blue-400 z-20"
      style={{
        boxShadow: "0 0 10px rgba(234, 179, 8, 0.5)",
        marginTop: "2rem",
      }}
    >
      {/* Inner pulse effect */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 0.2, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
        className="w-full h-full rounded-full bg-yellow-400"
      />
    </motion.div>
  );
}
