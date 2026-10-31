"use client";

import { motion } from "framer-motion";
import { Cake, Heart, Users } from "lucide-react";
import Link from "next/link";
import membersData from "@/data/family-members.json";
import type { FamilyMember } from "@/lib/types";

const familyMembers = membersData.members as FamilyMember[];

function calculateAge(birthDate: string, deathDate: string | null): string {
  const birth = new Date(birthDate);
  const end = deathDate ? new Date(deathDate) : new Date();
  let age = end.getFullYear() - birth.getFullYear();
  const monthDiff = end.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && end.getDate() < birth.getDate())) age--;
  if (deathDate) return `1925-2010 (${age})`;
  return `${age} years old`;
}

export default function MembersPage() {
  const generations = [...new Set(familyMembers.map((m) => m.generation))].sort();

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Family Members</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Meet the wonderful people who make our family special
            </p>
          </motion.div>

          {generations.map((gen) => (
            <div key={gen} className="mb-12">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-semibold text-white/80 mb-6 flex items-center gap-3"
              >
                <Users className="w-6 h-6" />
                Generation {gen === 0 ? "0 — Founders" : gen === 1 ? "1 — The Patriarch & Matriarch" : gen === 2 ? "2 — Our Parents" : `${gen} — The Next Generation`}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {familyMembers
                  .filter((m) => m.generation === gen)
                  .map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all"
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-3xl font-bold">
                          {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white text-center mb-1">{member.name}</h3>
                      <p className="text-white/60 text-sm text-center mb-3">
                        <Cake className="w-3 h-3 inline mr-1" />
                        {calculateAge(member.birthDate, member.deathDate)}
                      </p>
                      <p className="text-white/70 text-sm text-center leading-relaxed">{member.bio}</p>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8"
          >
            <Link
              href="/family-tree"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all"
            >
              <Heart className="w-4 h-4" />
              View Family Tree
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
