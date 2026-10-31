"use client";

import { motion } from "framer-motion";
import { Heart, Calendar, Users, Award } from "lucide-react";

const highlights = [
  {
    icon: Heart,
    title: "Founded in 1950",
    description: "The beginning of our family legacy"
  },
  {
    icon: Calendar,
    title: "75+ Years",
    description: "Of cherished memories and traditions"
  },
  {
    icon: Users,
    title: "4 Generations",
    description: "Growing stronger together"
  },
  {
    icon: Award,
    title: "Timeless Values",
    description: "Love, unity, and perseverance"
  }
];

export default function FamilyHighlights() {
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
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Family Highlights
          </motion.h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Key milestones that define our journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
              }}
              className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center glass-enhanced ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
            >
              <motion.div 
                className="flex justify-center mb-4"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                <div className="p-3 bg-white/10 rounded-full animate-pulse-glow">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
              <p className="text-white/70 text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
