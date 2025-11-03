"use client";

import { RefObject } from "react";

export interface SectionNavigationProps {
  sections: string[];
  activeSection: string;
  sectionsRef: RefObject<(HTMLElement | null)[]>;
  className?: string;
}

export function SectionNavigation({
  sections,
  activeSection,
  sectionsRef,
  className = "",
}: SectionNavigationProps) {
  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className={`fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block ${className}`}
    >
      <div className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-8 rounded-full transition-all duration-500 ${
              activeSection === section
                ? "bg-amber-600"
                : "bg-muted-foreground/30 hover:bg-amber-600/50"
            }`}
            aria-label={`Navigate to ${section}`}
          />
        ))}
      </div>
    </nav>
  );
}
