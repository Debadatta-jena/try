"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import eventsData from "@/data/events.json";
import type { Event } from "@/lib/types";

const events = eventsData.events as Event[];

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function isPast(dateStr: string): boolean {
  return new Date(dateStr + "T00:00:00") < new Date();
}

export default function EventsPage() {
  const upcoming = events.filter((e) => !isPast(e.date));
  const past = events.filter((e) => isPast(e.date));

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Family Events</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Upcoming gatherings and celebrations
            </p>
          </motion.div>

          {upcoming.length > 0 && (
            <div className="mb-12">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-semibold text-white mb-6 flex items-center gap-2"
              >
                <Clock className="w-5 h-5 text-green-400" />
                Upcoming Events
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcoming.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="backdrop-blur-md bg-white/10 border border-purple-500/30 rounded-xl p-6 hover:bg-white/15 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-purple-300 text-sm mb-1">
                          <Clock className="w-3 h-3" />
                          {formatDate(event.date)}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                        <p className="text-white/70 text-sm mb-3">{event.description}</p>
                        <div className="flex items-center gap-1 text-white/50 text-xs">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {past.length > 0 && (
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-semibold text-white/60 mb-6 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Past Events
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {past.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 opacity-60"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white/40" />
                      </div>
                      <div>
                        <div className="text-white/40 text-sm mb-1">{formatDate(event.date)}</div>
                        <h3 className="text-lg font-semibold text-white/70 mb-1">{event.title}</h3>
                        <p className="text-white/50 text-sm">{event.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
