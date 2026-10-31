"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, Play, X, Clock } from "lucide-react";
import videosData from "@/data/videos.json";
import type { Video as VideoType } from "@/lib/types";

const videos = videosData.videos as VideoType[];

export default function VideosPage() {
  const [playing, setPlaying] = useState<VideoType | null>(null);

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Video Gallery</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Watch our family stories come to life
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden group"
              >
                <div
                  className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative cursor-pointer"
                  onClick={() => setPlaying(video)}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.div>
                  </div>
                  <Video className="w-16 h-16 text-white/30" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{video.title}</h3>
                      <p className="text-white/60 text-sm line-clamp-2">{video.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-white/50 text-xs">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Video Player Modal */}
          <AnimatePresence>
            {playing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={() => setPlaying(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative max-w-4xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setPlaying(null)}
                    className="absolute -top-12 right-0 text-white/70 hover:text-white z-10"
                  >
                    <X className="w-8 h-8" />
                  </button>

                  <div className="aspect-video bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-10 h-10 text-white ml-1.5" />
                      </div>
                      <p className="text-white/60 text-sm">Playing: {playing.title}</p>
                      <p className="text-white/40 text-xs mt-1">Video player placeholder</p>
                    </div>
                  </div>

                  <div className="mt-4 text-center text-white">
                    <h3 className="text-xl font-semibold">{playing.title}</h3>
                    <p className="text-white/70 text-sm mt-1">{playing.description}</p>
                    <div className="flex items-center justify-center gap-4 mt-2 text-white/50 text-xs">
                      <span>{playing.duration}</span>
                      <span>{playing.date}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
