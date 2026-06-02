"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section relative">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary-400 font-mono">
              03 — Projects
            </p>
            <h2 className="mt-3 section-title">
              Featured <span className="gradient-text">work</span>
            </h2>
            <p className="mt-4 text-foreground/70">
              A selection of projects that showcase my approach to building
              scalable, user-centric applications.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass-card p-6 md:p-8 hover:border-white/20 transition overflow-hidden"
            >
              {/* gradient glow on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/20 group-hover:to-accent-500/20 transition -z-10 blur-xl" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-200">
                      <Star size={10} />
                      Featured
                    </span>
                  )}
                  <h3 className="mt-3 text-xl md:text-2xl font-semibold leading-tight">
                    {p.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {p.github && p.github !== "#" && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 hover:text-white hover:bg-white/10 transition"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {p.live && p.live !== "#" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 hover:text-white hover:bg-white/10 transition"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-4 text-foreground/70 leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-foreground/75">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-white/10 px-3 py-1 text-xs font-mono text-foreground/85"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
