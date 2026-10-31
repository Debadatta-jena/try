"use client";

import { motion } from "framer-motion";
import { Heart, Users, Calendar, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Our Family</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the story, values, and legacy that define who we are
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-white/90 text-lg leading-relaxed">
              <p>
                Our family&apos;s journey began generations ago, rooted in values of love, unity, and perseverance. 
                Through the years, we have celebrated countless milestones, overcome challenges together, 
                and created memories that will last forever.
              </p>
              <p>
                From humble beginnings to the thriving family we are today, every generation has contributed 
                to building a legacy of strength, compassion, and unwavering support for one another. Our story 
                is not just about dates and events—it&apos;s about the people, the relationships, and the love that 
                binds us together.
              </p>
              <p>
                This digital heritage website serves as a testament to our shared history, preserving the 
                stories of those who came before us and inspiring future generations to carry forward our 
                legacy with pride.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-full flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Love & Compassion</h3>
                  <p className="text-white/70">
                    We believe in the power of love to overcome any obstacle and support each other unconditionally.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-full flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Unity & Togetherness</h3>
                  <p className="text-white/70">
                    We stand together as one family, celebrating our differences and embracing our shared bonds.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-full flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Tradition & Heritage</h3>
                  <p className="text-white/70">
                    We honor our traditions while creating new ones that future generations will cherish.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-full flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Excellence & Growth</h3>
                  <p className="text-white/70">
                    We strive for excellence in all we do and support each other&apos;s personal growth and success.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Legacy</h2>
            <div className="space-y-4 text-white/90 text-lg leading-relaxed">
              <p>
                Our legacy is built on the foundation laid by those who came before us—their sacrifices, their 
                wisdom, and their unwavering commitment to family. We carry this legacy forward by living the 
                values they instilled in us and passing them on to the next generation.
              </p>
              <p>
                Every photograph, every story, and every memory captured in this digital archive represents a 
                piece of our collective identity—a tapestry woven with love, laughter, and the enduring bonds 
                of family.
              </p>
              <p>
                As we look to the future, we remain committed to preserving our heritage while embracing new 
                ways of connecting and sharing our story with the world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
