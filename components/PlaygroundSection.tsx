"use client";

import { FadeUp } from "./FadeUp";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { 
  Bodoni_Moda,
  Syncopate,
  UnifrakturMaguntia,
  Bungee_Shade,
  Cinzel_Decorative,
  Silkscreen,
  Space_Grotesk,
  Anton,
  Monoton,
  Playfair_Display
} from "next/font/google";

const f1 = Bodoni_Moda({ subsets: ["latin"], weight: "900", style: "italic" });
const f2 = Syncopate({ subsets: ["latin"], weight: "700" });
const f3 = UnifrakturMaguntia({ subsets: ["latin"], weight: "400" });
const f4 = Bungee_Shade({ subsets: ["latin"], weight: "400" });
const f5 = Cinzel_Decorative({ subsets: ["latin"], weight: "900" });
const f6 = Silkscreen({ subsets: ["latin"], weight: "400" });
const f7 = Space_Grotesk({ subsets: ["latin"], weight: "700" });
const f8 = Anton({ subsets: ["latin"], weight: "400" });
const f9 = Monoton({ subsets: ["latin"], weight: "400" });
const f10 = Playfair_Display({ subsets: ["latin"], weight: "900", style: "italic" });

const fontClasses = [
  f1.className,
  f2.className,
  f3.className,
  f4.className,
  f5.className,
  f6.className,
  f7.className,
  f8.className,
  f9.className,
  f10.className,
];

export function PlaygroundSection() {
  const text = "PLAYGROUND";
  const [isHolding, setIsHolding] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [origins, setOrigins] = useState<{x: number, y: number}[]>([]);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (isHolding) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    
    const handleUp = () => setIsHolding(false);

    if (isHolding) {
      window.addEventListener("pointermove", handleMove);
      window.addEventListener("pointerup", handleUp);
      window.addEventListener("pointercancel", handleUp);
    }
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };
  }, [isHolding]);

  const handlePointerDown = (e: React.PointerEvent) => {
    const newOrigins = lettersRef.current.map(el => {
      if (!el) return { x: 0, y: 0 };
      const rect = el.getBoundingClientRect();
      return { 
        x: rect.left + rect.width / 2, 
        y: rect.top + rect.height / 2 
      };
    });
    setOrigins(newOrigins);
    setIsHolding(true);
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  
  return (
    <section 
      className="w-full px-6 md:px-12 py-20 md:py-32 flex flex-col items-center justify-center min-h-[60vh] select-none"
      onPointerDown={handlePointerDown}
    >
      <FadeUp className="flex flex-col items-center text-center w-full">
        <h1 className="flex flex-wrap items-baseline justify-center text-[8.5vw] sm:text-[7vw] md:text-[6vw] lg:text-[5.5vw] uppercase text-brand-orange mb-6 tracking-normal z-50">
          {text.split("").map((char, i) => {
            const origin = origins[i] || { x: 0, y: 0 };
            const x = isHolding ? mousePos.x - origin.x : 0;
            const y = isHolding ? mousePos.y - origin.y : 0;

            return (
              <motion.span 
                key={i} 
                ref={(el) => { lettersRef.current[i] = el; }}
                animate={{ x, y }}
                whileHover={!isHolding ? { scale: 1.1, y: -16, rotate: 12 } : {}}
                transition={isHolding ? {
                  type: "spring",
                  stiffness: 120 - i * 6,
                  damping: 15 + i * 0.5,
                  mass: 0.5 + i * 0.05,
                } : {
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 0.8,
                }}
                className={`${fontClasses[i % fontClasses.length]} inline-block mx-[1px] md:mx-[2px] leading-[0.85] ${!isHolding ? 'cursor-pointer' : 'pointer-events-none'}`}
                style={{
                  textShadow: "0 0 20px rgba(255, 61, 0, 0)",
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </h1>
        <p className="text-lg md:text-xl font-light opacity-80 max-w-2xl mt-4 pointer-events-none">
          An experimental space for creative coding, micro-interactions, and visual explorations. Coming soon.
        </p>
      </FadeUp>
    </section>
  );
}
