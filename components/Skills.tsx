"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

const categoryColors: Record<string, { gradient: string; bar: string }> = {
  Languages: {
    gradient: "from-amber-400 to-orange-500",
    bar: "from-amber-400 to-orange-500",
  },
  Frontend: {
    gradient: "from-sky-400 to-blue-600",
    bar: "from-sky-400 to-blue-500",
  },
  Backend: {
    gradient: "from-emerald-400 to-teal-600",
    bar: "from-emerald-400 to-teal-500",
  },
  Database: {
    gradient: "from-violet-400 to-fuchsia-600",
    bar: "from-violet-400 to-fuchsia-500",
  },
  Tools: {
    gradient: "from-rose-400 to-pink-600",
    bar: "from-rose-400 to-pink-500",
  },
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
          <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 font-mono">
            02 — Skills
          </p>
          <h2 className="mt-4 section-title">
            My <span className="gradient-text">tech stack</span> & tools
          </h2>
          <p className="mt-4 text-foreground/60">
            Technologies I use to build performant, accessible, and delightful
            web experiences.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${
                    categoryColors[category]?.gradient ||
                    "from-indigo-500 to-purple-600"
                  } text-white shadow-lg`}
                >
                  {categoryIcons[category] || <Code2 size={18} />}
                </div>
                <h3 className="text-base font-semibold">{category}</h3>
              </div>

              <div className="mt-5 space-y-3">
                {items.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    barColor={categoryColors[category]?.bar || "from-indigo-400 to-purple-500"}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  name,
  level,
  barColor,
}: {
  name: string;
  level: number;
  barColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-foreground/80">{name}</span>
        <span className="text-xs font-mono text-foreground/45">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.21, 0.6, 0.35, 1],
          }}
        />
      </div>
    </div>
  );
}
