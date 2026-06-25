"use client";

import { useState, MouseEvent, useRef, useEffect } from "react";
import { works } from "../data/works";
import { FadeUp } from "./FadeUp";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { TransitionLink } from "./TransitionLink";
import Image from "next/image";

export function RecentWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const previewX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const previewY = useSpring(mouseY, { stiffness: 300, damping: 25 });
  const previewXOffset = useTransform(previewX, (v) => v - 200);
  const previewYOffset = useTransform(previewY, (v) => v - 140);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };
  return (
    <section id="works" className="w-full px-6 md:px-12 py-6 md:py-10">
      <FadeUp>
        <div className="text-brand-orange text-sm md:text-base font-light pb-4">
          Recent work
        </div>
        <div className="h-px bg-brand-line w-full"></div>
      </FadeUp>

      <div
        className="flex flex-col relative hide-custom-cursor cursor-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          timeoutRef.current = setTimeout(() => {
            setHoveredIndex(null);
          }, 30);
        }}
      >
        {works.slice(0, 3).map((work, index) => (
          <TransitionLink
            href={`/works/${work.title.toLowerCase()}`}
            key={index}
            className="group flex flex-col relative cursor-none"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              setHoveredIndex(index);
              setActiveIndex(index);
            }}
          >
            <FadeUp delay={index * 0.1}>
              <div className="flex flex-col md:flex-row md:items-center justify-between py-10 sm:py-12 md:py-20 gap-3 sm:gap-4 md:gap-0 z-10 relative">
                <motion.h3
                  className="text-[2.6rem] sm:text-[3.5rem] md:text-[4.5rem] font-light tracking-[-0.04em] text-brand-orange leading-[0.85] md:leading-[0.8] mb-1 sm:mb-2 md:mb-0"
                  animate={{
                    x: hoveredIndex === index ? 20 : 0,
                    opacity:
                      hoveredIndex !== null && hoveredIndex !== index ? 0.2 : 1,
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 25 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  {work.title}
                </motion.h3>
                <motion.div
                  className="text-brand-orange text-sm md:text-base font-light md:text-right whitespace-pre-line leading-[1.4] md:leading-[1.3] z-10"
                  animate={{
                    x: hoveredIndex === index && !isMobile ? -20 : 0,
                    opacity:
                      hoveredIndex !== null && hoveredIndex !== index ? 0.2 : 1,
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 25 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  {work.role}
                </motion.div>
              </div>
            </FadeUp>
            <FadeUp delay={index * 0.1 + 0.1} className="w-full">
              <div className="h-px bg-brand-line w-full"></div>
            </FadeUp>
          </TransitionLink>
        ))}

        <motion.div
          style={{
            x: previewXOffset,
            y: previewYOffset,
          }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.5,
          }}
          transition={{
            opacity: { duration: 0.2 },
            scale: { type: "spring", stiffness: 300, damping: 25 },
          }}
          className="fixed top-0 left-0 w-[400px] h-[280px] pointer-events-none z-0 hidden md:block overflow-hidden"
        >
          <motion.div
            className="w-full h-full flex flex-col"
            animate={{ y: `-${activeIndex * 100}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {works.slice(0, 3).map((work, idx) => (
              <div key={idx} className="w-full h-full shrink-0 relative">
                {work.image && (
                  <Image draggable={false}
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="400px"
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-95">
            <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center text-brand-cream text-[15px] font-medium tracking-wide">
              View
            </div>
          </div>
        </motion.div>
      </div>

      <FadeUp delay={0.2} className="mt-16 flex justify-center">
        <TransitionLink
          href="/works"
          className="px-6 py-3 border border-brand-orange text-brand-orange text-sm md:text-base font-light hover:bg-brand-orange hover:text-brand-cream transition-colors duration-300"
        >
          More Work
        </TransitionLink>
      </FadeUp>
    </section>
  );
}
