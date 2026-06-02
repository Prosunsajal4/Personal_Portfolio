"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import {
  Code2,
  Palette,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 size={18} />,
  Frontend: <Palette size={18} />,
  Backend: <Server size={18} />,
  Database: <Database size={18} />,
  Tools: <Wrench size={18} />,
};

const categoryColors: Record<string, string> = {
  Languages: "from-amber-400 to-pink-500",
  Frontend: "from-sky-400 to-blue-600",
  Backend: "from-emerald-400 to-teal-600",
  Database: "from-violet-400 to-fuchsia-600",
  Tools: "from-rose-400 to-orange-500",
};

export default function Skills() {
  return (
    <section id="skills" className="section relative">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary-400 font-mono">
            02 — Skills
          </p>
          <h2 className="mt-3 section-title">
            My <span className="gradient-text">tech stack</span> & tools
          </h2>
          <p className="mt-4 text-foreground/70">
            A curated toolbox I use to build performant, accessible, and
            delightful web experiences.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 hover:border-white/20 transition group"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${
                    categoryColors[category] || "from-primary-500 to-accent-500"
                  } text-white shadow-lg`}
                >
                  {categoryIcons[category] || <Code2 size={18} />}
                </div>
                <h3 className="text-lg font-semibold">{category}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/85 transition group-hover:border-white/20 group-hover:bg-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
