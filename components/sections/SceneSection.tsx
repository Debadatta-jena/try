"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const FloatingMemories = dynamic(() => import("@/components/3d/FloatingMemories"), { ssr: false });

export default function SceneSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">
            Memories in Motion
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our cherished moments floating through time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden"
          style={{ height: "450px" }}
        >
          <FloatingMemories />
        </motion.div>
      </div>
    </section>
  );
}
