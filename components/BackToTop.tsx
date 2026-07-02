"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-background/70 backdrop-blur-xl text-white shadow-xl shadow-black/20 transition-all duration-500 hover:bg-indigo-600 hover:border-indigo-500 hover:shadow-indigo-500/30 ${
        show
          ? "opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
