"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Globe } from "lucide-react";
import { education, languages } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section relative">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 font-mono">
            04 — Education
          </p>
          <h2 className="mt-4 section-title">
            Education &{" "}
            <span className="gradient-text">certifications</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card-hover p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20">
                {i === 0 ? <GraduationCap size={18} /> : <Award size={18} />}
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug">
                {e.degree}
              </h3>
              <p className="mt-2 text-sm text-foreground/55">
                {e.institution}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="font-mono text-foreground/45">{e.period}</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-medium text-foreground/75">
                  {e.grade}
                </span>
              </div>
              <p className="mt-2 text-xs text-foreground/40">{e.location}</p>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 glass-card p-6"
        >
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-indigo-400" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
              Languages
            </h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {languages.map((l) => (
              <div
                key={l.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm transition-colors hover:bg-white/[0.06]"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-medium text-foreground/85">{l.name}</span>
                <span className="text-foreground/40">— {l.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
