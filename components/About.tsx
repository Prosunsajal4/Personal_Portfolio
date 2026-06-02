"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary-400 font-mono">
            01 — About
          </p>
          <h2 className="mt-3 section-title">
            Crafting reliable products,
            <br />
            <span className="gradient-text">pixel by pixel.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 space-y-5"
        >
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            {personalInfo.summary}
          </p>
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            I have a solid understanding of database design, state management,
            and performance optimization. I&apos;m eager to build robust,
            data-driven applications, contribute to end-to-end development
            processes, and deliver seamless user experiences while collaborating
            with cross-functional teams in a dynamic environment.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            <Stat value="3.30" label="CGPA @ KU" />
            <Stat value="4+" label="Projects Shipped" />
            <Stat value="MERN" label="Primary Stack" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-card p-4 text-center">
      <div className="text-2xl md:text-3xl font-bold gradient-text">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-foreground/60">
        {label}
      </div>
    </div>
  );
}
