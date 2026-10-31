"use client";

import { motion } from "framer-motion";

export default function FamilyStory() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Family Story</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A journey through generations, filled with love, resilience, and cherished memories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12"
        >
          <p className="text-white/90 text-lg leading-relaxed mb-6">
            Our family&apos;s journey began generations ago, rooted in values of love, unity, and perseverance. 
            Through the years, we have celebrated countless milestones, overcome challenges together, 
            and created memories that will last forever.
          </p>
          <p className="text-white/90 text-lg leading-relaxed mb-6">
            This digital heritage website serves as a testament to our shared history, 
            preserving the stories of those who came before us and inspiring future generations 
            to carry forward our legacy with pride.
          </p>
          <p className="text-white/90 text-lg leading-relaxed">
            Every photograph, every story, and every memory captured here represents a piece of our 
            collective identity—a tapestry woven with love, laughter, and the enduring bonds of family.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
