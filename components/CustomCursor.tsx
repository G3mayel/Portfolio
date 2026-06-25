"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isOverOrange, setIsOverOrange] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfigBig = { stiffness: 1200, damping: 40, mass: 0.1 };
  const bigX = useSpring(mouseX, springConfigBig);
  const bigY = useSpring(mouseY, springConfigBig);

  const springConfigSmall = { stiffness: 2000, damping: 50, mass: 0.1 };
  const smallX = useSpring(mouseX, springConfigSmall);
  const smallY = useSpring(mouseY, springConfigSmall);

  const bigXOffset = useTransform(bigX, (v) => v - 16);
  const bigYOffset = useTransform(bigY, (v) => v - 16);
  const smallXOffset = useTransform(smallX, (v) => v - 4);
  const smallYOffset = useTransform(smallY, (v) => v - 4);
  const isHiddenState = isHidden || !hasMoved;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setHasMoved((prev) => {
        if (!prev) return true;
        return prev;
      });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target && typeof target.closest === "function") {
        setIsOverOrange(!!target.closest(".bg-brand-orange"));
        setIsHidden(!!target.closest(".hide-custom-cursor"));
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        typeof target.closest === "function" &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button"))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference ${
          isOverOrange ? "border-white" : "border-[#00BAF3]"
        }`}
        style={{
          x: bigXOffset,
          y: bigYOffset,
        }}
        animate={{
          scale: isClicked ? 0.7 : isHovering ? 1.5 : 1,
          opacity: isHiddenState ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1200,
          damping: 40,
          mass: 0.1,
        }}
      />
      <motion.div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference ${
          isOverOrange ? "bg-white" : "bg-[#00BAF3]"
        }`}
        style={{
          x: smallXOffset,
          y: smallYOffset,
        }}
        animate={{
          scale: isClicked ? 0.3 : 1,
          opacity: isHiddenState ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 2000,
          damping: 50,
          mass: 0.1,
        }}
      />
    </>
  );
}
