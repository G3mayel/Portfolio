"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FadeUp } from "./FadeUp";

interface ProjectGalleryProps {
  images: string[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <section className="w-full px-6 md:px-12 py-20 md:py-32 flex flex-col gap-6 md:gap-8 bg-brand-bg">
      <FadeUp>
        <div className="w-full relative aspect-[16/10] md:aspect-[21/9] bg-gray-200 overflow-hidden">
          {images.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={`Gallery image ${idx + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                idx === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </FadeUp>

      {images.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {images.map((img, idx) => (
            <FadeUp
              key={img}
              delay={idx * 0.1}
              className="w-full h-full"
            >
              <div 
                className={`w-full h-full relative aspect-[4/3] bg-gray-200 cursor-pointer group border-2 transition-colors duration-300 ${
                  idx === activeIndex
                    ? "border-brand-orange"
                    : "border-transparent hover:border-brand-orange/50"
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                <Image
                  src={img}
                  alt={`Gallery thumbnail ${idx + 1}`}
                  fill
                  className={`object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    idx === activeIndex ? "scale-100" : "group-hover:scale-[1.02]"
                  }`}
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      )}
    </section>
  );
}
