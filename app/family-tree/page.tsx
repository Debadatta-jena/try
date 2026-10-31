"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TreePine, Users, Heart, ChevronDown, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import treeData from "@/data/family-tree.json";
import membersData from "@/data/family-members.json";
import type { FamilyMember } from "@/lib/types";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), { ssr: false });

interface RawNode {
  id: string;
  name: string;
  generation: number;
  children: string[];
  spouse: string | null;
}

const tree = treeData.tree as RawNode[];
const members = membersData.members as FamilyMember[];

interface TreeNode {
  id: string;
  name: string;
  generation: number;
  children: TreeNode[];
  spouse: string | null;
}

function buildTree(): TreeNode[] {
  const itemMap = new Map<string, TreeNode>();
  tree.forEach((t) => {
    itemMap.set(t.id, { ...t, children: [] });
  });
  const roots: TreeNode[] = [];
  tree.forEach((t) => {
    const node = itemMap.get(t.id)!;
    const parent = tree.find((p) => p.children.includes(t.id));
    if (parent && itemMap.has(parent.id)) {
      itemMap.get(parent.id)!.children.push(node);
    } else {
      roots.push(node);
    }
  });
  return roots;
}

function TreeNodeComponent({
  node,
  depth,
}: {
  node: TreeNode;
  depth: number;
}) {
  const [expanded, setExpanded] = useState(depth < 1);
  const member = members.find((m) => m.id === node.id);

  return (
    <div className="ml-4 md:ml-6">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-start gap-2 py-1.5"
      >
        {node.children.length > 0 ? (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1 text-white/50 hover:text-white transition-colors"
          >
            {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        ) : (
          <div className="w-4" />
        )}
        <div className="flex-1">
          <div
            className={`backdrop-blur-sm rounded-lg px-3 py-2 border transition-all ${
              member?.deathDate
                ? "bg-white/5 border-white/10 opacity-70"
                : "bg-white/10 border-white/20 hover:bg-white/15"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-white font-medium text-sm">{node.name}</span>
              {node.spouse && (
                <span className="text-white/40 text-xs flex items-center gap-1">
                  <Heart className="w-3 h-3" /> {tree.find((t) => t.id === node.spouse)?.name}
                </span>
              )}
              {member?.deathDate && (
                <span className="text-white/30 text-xs">&#8224;</span>
              )}
            </div>
            {member && (
              <p className="text-white/50 text-xs mt-0.5">
                {member.birthDate} {member.deathDate ? `– ${member.deathDate}` : ""}
              </p>
            )}
          </div>
        </div>
      </motion.div>
      {expanded && node.children.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-l border-white/10 ml-2"
        >
          {node.children.map((child) => (
            <TreeNodeComponent key={child.id} node={child} depth={depth + 1} />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default function FamilyTreePage() {
  const roots = buildTree();
  const [show3D, setShow3D] = useState(false);

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Family Tree</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Explore the connections that bind us together across generations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 text-center"
            >
              <TreePine className="w-8 h-8 text-white/60 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{tree.filter((t) => t.spouse || t.children.length > 0).length}</div>
              <div className="text-white/60 text-sm">Family Units</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 text-center"
            >
              <Users className="w-8 h-8 text-white/60 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{members.length}</div>
              <div className="text-white/60 text-sm">Family Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 text-center"
            >
              <Heart className="w-8 h-8 text-white/60 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{Math.max(...tree.map((t) => t.generation)) + 1}</div>
              <div className="text-white/60 text-sm">Generations</div>
            </motion.div>
          </div>

          {/* 3D Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <button
              onClick={() => setShow3D(!show3D)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                show3D
                  ? "bg-white text-slate-900"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              {show3D ? "Show Tree View" : "Explore 3D Visualization"}
            </button>
          </motion.div>

          {show3D ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden mb-8"
              style={{ height: "500px" }}
            >
              <HeroScene />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12"
            >
              <div className="max-w-3xl mx-auto">
                <p className="text-white/70 text-sm mb-6 text-center">
                  Click the arrows to expand branches. Hover over names for details.
                </p>
                {roots.map((root) => (
                  <TreeNodeComponent key={root.id} node={root} depth={0} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
