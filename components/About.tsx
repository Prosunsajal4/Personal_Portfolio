"use client";

import { motion } from "framer-motion";
import { Palette, Server, Layers } from "lucide-react";
import { personalInfo, services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  palette: <Palette size={22} />,
  server: <Server size={22} />,
  layers: <Layers size={22} />,
};

const colorMap: Record<string, string> = {
  palette: "from-indigo-500 to-blue-600",
  server: "from-emerald-500 to-teal-600",
  layers: "from-purple-500 to-pink-600",
};

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container-x">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 font-mono">
            01 — About
          </p>
          <h2 className="mt-4 section-title">
            A bit about{" "}
            <span className="gradient-text">what I do</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="text-base md:text-lg text-foreground/65 leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="mt-4 text-base md:text-lg text-foreground/65 leading-relaxed">
              I have a solid understanding of database design, state management,
              and performance optimization. I&apos;m eager to build robust,
              data-driven applications and deliver seamless user experiences.
            </p>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <Stat value="3.30" label="CGPA" />
              <Stat value="4+" label="Projects" />
              <Stat value="MERN" label="Stack" />
            </div>
          </motion.div>

          {/* Right: service cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="glass-card-hover p-5 group"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${
                    colorMap[s.icon] || "from-indigo-500 to-purple-600"
                  } text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  {iconMap[s.icon]}
                </div>
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/55 leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-card p-4 text-center group hover:border-white/15 transition-colors">
      <div className="text-2xl md:text-3xl font-bold gradient-text">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-foreground/50">
        {label}
      </div>
    </div>
  );
}
