"use client";

import { useState, useEffect } from "react";
import { TransitionLink } from "./TransitionLink";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverOrange, setIsOverOrange] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const orangeSections = document.querySelectorAll("section.bg-brand-orange");
      let overOrange = false;
      
      const navHeight = 60;
      
      orangeSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navHeight && rect.bottom >= navHeight / 2) {
          overOrange = true;
        }
      });
      
      setIsOverOrange(overOrange);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navTextColorClass = (isOverOrange && !isOpen) ? "text-white" : "text-[#00BAF3]";

  return (
    <>
      <header className="w-full h-[60px] md:h-[68px] shrink-0 pointer-events-none">
        <nav className={`fixed top-0 left-0 w-full px-6 py-4 md:px-12 flex justify-between items-center ${navTextColorClass} mix-blend-difference text-base sm:text-lg md:text-xl font-bold z-[60] transition-colors duration-300 pointer-events-auto`}>
          <div className="flex-1 flex justify-start">
            <TransitionLink href="/" className="lowercase shrink-0" onClick={closeMenu}>
              abdadraka
            </TransitionLink>
          </div>

          <div className="flex-1 hidden md:flex flex-wrap justify-center gap-1 text-xs sm:text-sm md:text-base lg:text-[1.05rem] font-medium tracking-wide">
            <TransitionLink
              href="/about"
              className="opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              About,
            </TransitionLink>
            <TransitionLink
              href="/works"
              className="opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              Works,
            </TransitionLink>
            <TransitionLink
              href="/playground"
              className="opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              Playground
            </TransitionLink>
          </div>

          <div className="flex-1 flex justify-end items-center gap-3 sm:gap-5 text-xs sm:text-sm md:text-base lg:text-[1.05rem] font-medium tracking-wide">
            <a
              href="https://www.linkedin.com/in/gemayel-abdad-rakadiansyah-32552a412"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden md:flex items-center gap-0.5 opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              <span className="relative z-10 font-medium">LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </a>
            
            <button
              className={`md:hidden flex items-center justify-center w-8 h-8 ${navTextColorClass} relative z-[60] transition-colors duration-300`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-brand-bg z-[55] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-8 text-4xl font-bold tracking-tight text-brand-orange">
              <TransitionLink href="/" className="hover:opacity-70 transition-opacity" onClick={closeMenu}>
                Home
              </TransitionLink>
              <TransitionLink href="/about" className="hover:opacity-70 transition-opacity" onClick={closeMenu}>
                About
              </TransitionLink>
              <TransitionLink href="/works" className="hover:opacity-70 transition-opacity" onClick={closeMenu}>
                Works
              </TransitionLink>
              <TransitionLink href="/playground" className="hover:opacity-70 transition-opacity" onClick={closeMenu}>
                Playground
              </TransitionLink>
              
              <div className="flex items-center gap-4 w-full mt-4">
                <div className="h-[2px] w-12 bg-brand-orange/30"></div>
                <span className="text-sm font-medium tracking-widest uppercase text-brand-orange/50">Connect</span>
                <div className="h-[2px] w-12 bg-brand-orange/30"></div>
              </div>

              <a
                href="https://www.linkedin.com/in/gemayel-abdad-rakadiansyah-32552a412"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center gap-1 hover:opacity-70 transition-opacity mt-4 text-2xl"
              >
                LinkedIn <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
