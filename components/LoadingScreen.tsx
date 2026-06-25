"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingScreen({ initialHasVisited = false }: { initialHasVisited?: boolean }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(!initialHasVisited);
  const [shouldRender, setShouldRender] = useState(!initialHasVisited);

  useEffect(() => {
    if (initialHasVisited) return;

    document.body.style.overflow = "hidden";

    const duration = 1800;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progressTime = timestamp - startTime;

      const t = Math.min(progressTime / duration, 1);
      const easeOutQuad = (t: number) => t * (2 - t);

      setProgress(Math.min(Math.round(easeOutQuad(t) * 100), 100));

      if (t < 1) {
        animationFrameId = requestAnimationFrame(animateProgress);
      } else {
        setTimeout(() => {
          document.cookie = "hasVisited=true; path=/; max-age=86400";
          setIsLoading(false);
          document.body.style.overflow = "";
          setTimeout(() => setShouldRender(false), 1000);
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "";
    };
  }, [initialHasVisited]);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-end bg-brand-orange text-brand-cream pb-12 md:pb-24 px-6 md:px-12"
        >
          <div className="w-full flex justify-between items-end">
            <span className="text-xl md:text-3xl font-medium tracking-tight">
              abdadraka
            </span>
            <div
              className="text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] leading-[0.8] font-medium tracking-tight"
              style={{
                fontFamily: "'Google Sans Flex', system-ui, sans-serif",
              }}
            >
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
