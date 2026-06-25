"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

interface TransitionContextType {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigate: () => {},
});

export function useTransition() {
  return useContext(TransitionContext);
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetLabel, setTargetLabel] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isTransitioning) {
      const t = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const navigate = (href: string) => {
    if (isTransitioning) return;

    let targetPath = href;
    try {
      const url = new URL(href, window.location.origin);
      targetPath = url.pathname;
    } catch (e) {
    }

    const isHash = href.startsWith("#");
    const isCurrentHash = href.startsWith(pathname + "#");
    const normalizedHref = targetPath.endsWith("/") && targetPath.length > 1 ? targetPath.slice(0, -1) : targetPath;
    const normalizedPathname = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
    
    if (normalizedHref === normalizedPathname || isHash || isCurrentHash) {
      router.push(href);
      return;
    }

    let label = "HOME";
    if (normalizedHref === "/") label = "HOME";
    else if (normalizedHref === "/about") label = "ABOUT";
    else if (normalizedHref === "/playground") label = "PLAYGROUND";
    else if (normalizedHref.startsWith("/works/") && normalizedHref !== "/works/") {
      const projectSlug = normalizedHref.replace("/works/", "");
      label = projectSlug.toUpperCase();
    } else if (normalizedHref.includes("works")) label = "WORKS";

    setTargetLabel(label);
    setIsTransitioning(true);

    setTimeout(() => {
      router.push(href);
    }, 850);
  };

  const getSplitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        style={{ whiteSpace: "pre" }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
          delay: index * 0.04 + 0.1,
        }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition-overlay"
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-brand-orange pointer-events-auto"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col items-center justify-center overflow-hidden py-4 px-8">
              <h2 className="text-[12.5vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] font-medium text-brand-cream uppercase italic transform tracking-[-0.04em] leading-none text-center break-words">
                {getSplitText(targetLabel)}
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
