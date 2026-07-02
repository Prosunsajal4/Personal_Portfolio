"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";
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
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 font-mono">
              03 — Projects
            </p>
            <h2 className="mt-4 section-title">
              Featured <span className="gradient-text">work</span>
            </h2>
            <p className="mt-4 text-foreground/60">
              A selection of projects that showcase my approach to building
              scalable, user-centric applications.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass-card-hover overflow-hidden"
            >
              {/* Top gradient strip */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${
                  p.color || "from-indigo-500 to-purple-600"
                }`}
              />

              <div className="p-6 md:p-7">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                        {p.title}
                      </h3>
                      {p.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                          <Star size={9} />
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-foreground/45 font-medium">
                      {p.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {p.github && p.github !== "#" && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground/60 transition-all duration-300 hover:text-white hover:bg-white/10 hover:border-white/20"
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
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground/60 transition-all duration-300 hover:text-white hover:bg-white/10 hover:border-white/20"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-foreground/60 leading-relaxed">
                  {p.description}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/65">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1 text-xs font-mono text-foreground/75 transition-colors group-hover:border-white/[0.12]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
