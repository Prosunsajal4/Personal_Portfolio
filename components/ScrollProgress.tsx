"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-[width] duration-150 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
