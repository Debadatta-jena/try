"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const timelineEvents = [
  { year: "1950", title: "Family Founded" },
  { year: "1975", title: "First Grandchild" },
  { year: "2000", title: "Family Reunion" },
  { year: "2020", title: "Digital Archive" }
];

export default function TimelinePreview() {
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
            Our Journey Through Time
          </motion.h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Key moments that shaped our family history
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.08,
                y: -12,
                rotate: [0, 3, -3, 0],
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
              }}
              className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 text-center glass-enhanced ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
            >
              <motion.div 
                className="text-3xl font-bold text-white mb-2"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                {event.year}
              </motion.div>
              <div className="text-white/70 text-sm">{event.title}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/timeline"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-sm hover-glow"
            >
              View Full Timeline
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
