"use client";

import { useEffect, useRef, useState } from "react";

export interface UseSectionObserverConfig {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
}

export function useSectionObserver(
  sectionIds: string[],
  config: UseSectionObserverConfig = {},
) {
  const {
    threshold = 0.3,
    rootMargin = "0px 0px -20% 0px",
    animationClass = "animate-fade-in-up",
  } = config;

  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin, animationClass]);

  const getSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionsRef.current[index] = el;
  };

  return {
    activeSection,
    sectionsRef,
    getSectionRef,
  };
}
