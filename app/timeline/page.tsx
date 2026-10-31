"use client";

import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";
import timelineData from "@/data/timeline.json";
import type { TimelineEvent } from "@/lib/types";

const events = timelineData.events as TimelineEvent[];

export default function TimelinePage() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Family Timeline</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A journey through our family history
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/40 via-pink-500/40 to-purple-500/40" />

            <div className="space-y-12">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-2xl md:text-3xl font-bold text-purple-300">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                      <p className="text-white/70 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:relative md:left-0 md:flex md:items-center md:justify-center z-10">
                    <div className="w-4 h-4 bg-purple-500 rounded-full ring-4 ring-purple-500/20" />
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 inline-block">
              <Clock className="w-8 h-8 text-white/60 mx-auto mb-3" />
              <p className="text-white/70">
                Our story continues... New memories are being made every day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
