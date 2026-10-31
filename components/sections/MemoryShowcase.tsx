"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import galleryData from "@/data/gallery.json";

export default function MemoryShowcase() {
  const previewPhotos = galleryData.photos.slice(0, 3);

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
            Memory Showcase
          </motion.h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A glimpse into our cherished moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {previewPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -15,
                rotate: [0, 2, -2, 0],
              }}
              className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden glass-enhanced ${index === 0 ? 'animate-float' : index === 1 ? 'animate-float-delayed' : 'animate-float-slow'}`}
            >
              <motion.div 
                className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative overflow-hidden"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white/30 text-center px-4 text-sm leading-relaxed">
                  {photo.description}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{photo.title}</h3>
                <p className="text-white/70 text-sm">{photo.description}</p>
              </div>
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
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-sm hover-glow"
            >
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
