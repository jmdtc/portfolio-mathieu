"use client";

import { ReactNode } from "react";
import {
  useSectionObserver,
  UseSectionObserverConfig,
} from "../hooks/useSectionObserver";
import { SectionNavigation } from "./SectionNavigation";

export interface SectionLayoutProps {
  sections: string[];
  children: (
    getSectionRef: (index: number) => (el: HTMLElement | null) => void,
  ) => ReactNode;
  showNavigation?: boolean;
  navigationClassName?: string;
  observerConfig?: UseSectionObserverConfig;
}

export function SectionLayout({
  sections,
  children,
  showNavigation = true,
  navigationClassName,
  observerConfig,
}: SectionLayoutProps) {
  const { activeSection, sectionsRef, getSectionRef } = useSectionObserver(
    sections,
    observerConfig,
  );

  return (
    <>
      {showNavigation && (
        <SectionNavigation
          sections={sections}
          activeSection={activeSection}
          sectionsRef={sectionsRef}
          className={navigationClassName}
        />
      )}
      {children(getSectionRef)}
    </>
  );
}
