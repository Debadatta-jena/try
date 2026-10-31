"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TreePine } from "lucide-react";

export default function FamilyTreePreview() {
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
            Our Family Tree
          </motion.h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore the connections that bind us together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
          }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 text-center glass-enhanced animate-float-slow"
        >
          <motion.div 
            className="flex justify-center mb-6"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="p-4 bg-white/10 rounded-full animate-pulse-glow">
              <TreePine className="w-16 h-16 text-white" />
            </div>
          </motion.div>
          <p className="text-white/90 text-lg mb-6">
            Our family tree spans multiple generations, each branch representing stories of love, 
            sacrifice, and triumph. Discover your place in our rich heritage.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/family-tree"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105 hover-glow"
            >
              Explore Family Tree
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
