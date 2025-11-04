"use client";

import Link from "next/link";
import { SectionLayout } from "./components/SectionLayout";
import {
  sections,
  hero,
  currentWork,
  focusLabel,
  skills,
  jobs,
  connect,
  socialLinks,
  footer,
} from "./homepage-content";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <SectionLayout sections={sections}>
        {(getSectionRef) => (
          <main className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">
            <header
              id="intro"
              ref={getSectionRef(0)}
              className="min-h-screen flex items-center opacity-0"
            >
              <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
                <div className="lg:col-span-3 space-y-6 sm:space-y-8">
                  <div className="space-y-3 sm:space-y-2">
                    <div className="text-sm text-muted-foreground font-mono tracking-wider">
                      {hero.label}
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight">
                      {hero.firstName}
                      <br />
                      <span className="text-amber-600">{hero.lastName}</span>
                    </h1>
                  </div>

                  <div className="space-y-6 max-w-md">
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                      {hero.title}
                      <span className="text-foreground">
                        {" "}
                        {hero.titleHighlight}
                      </span>
                      . {hero.bio}
                      <a
                        href={hero.company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-amber-600 transition-colors duration-300"
                      >
                        {" "}
                        {hero.company.name}
                      </a>
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        {hero.availability.status}
                      </div>
                      <div>{hero.availability.location}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
                  <div className="text-sm text-muted-foreground font-mono">
                    {currentWork.sectionLabel}
                  </div>
                  <div className="space-y-2">
                    <div className="text-foreground">
                      {currentWork.mainRole.title}
                    </div>
                    <div className="text-muted-foreground">
                      <a
                        href={currentWork.mainRole.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-600 transition-colors duration-300"
                      >
                        @ {currentWork.mainRole.company}
                      </a>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {currentWork.mainRole.period}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-foreground">
                      {currentWork.sideProject.title}
                    </div>
                    <div className="text-muted-foreground">
                      {currentWork.sideProject.description}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground font-mono">
                      {focusLabel}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs border border-border rounded-full hover:border-amber-600/50 hover:text-amber-600 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <section
              id="work"
              ref={getSectionRef(1)}
              className="min-h-screen py-20 sm:py-32 opacity-0"
            >
              <div className="space-y-12 sm:space-y-16">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <h2 className="text-3xl sm:text-4xl font-serif font-light">
                    Selected Work
                  </h2>
                </div>

                <div className="space-y-8 sm:space-y-12">
                  {jobs.map((job, index) => (
                    <div
                      key={index}
                      className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8"
                    >
                      <div className="lg:col-span-2">
                        <div className="text-xl sm:text-2xl font-serif font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                          {job.year}
                        </div>
                      </div>

                      <div className="lg:col-span-6 space-y-3">
                        <div>
                          <h3 className="text-lg sm:text-xl font-serif font-medium">
                            {job.role} · {job.company}
                          </h3>
                          {/* <div className="text-muted-foreground">
                            {job.company}
                          </div> */}
                        </div>
                        <p className="text-muted-foreground leading-relaxed max-w-lg">
                          {job.description}
                        </p>
                      </div>

                      <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                        {job.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* <section
              id="thoughts"
              ref={getSectionRef(2)}
              className="min-h-screen py-20 sm:py-32 opacity-0"
            >
              <div className="space-y-12 sm:space-y-16">
                <h2 className="text-3xl sm:text-4xl font-serif font-light">
                  Recent Thoughts
                </h2>

                <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                  {[
                    {
                      title: "Building Scalable Full-Stack Applications",
                      excerpt:
                        "Lessons from scaling systems with React and Node.js in high-growth startups.",
                      date: "Dec 2024",
                      readTime: "6 min",
                    },
                    {
                      title: "Performance Optimization in React",
                      excerpt:
                        "Practical techniques for identifying and eliminating performance bottlenecks.",
                      date: "Nov 2024",
                      readTime: "7 min",
                    },
                    {
                      title: "GraphQL vs REST: Making the Right Choice",
                      excerpt:
                        "Comparing architectural approaches for modern API design.",
                      date: "Oct 2024",
                      readTime: "8 min",
                    },
                    {
                      title: "The Future of Full-Stack Development",
                      excerpt:
                        "How TypeScript and modern frameworks are reshaping backend development.",
                      date: "Sep 2024",
                      readTime: "5 min",
                    },
                  ].map((post, index) => (
                    <article
                      key={index}
                      className="group p-6 sm:p-8 border border-border rounded-lg hover:border-amber-600/50 hover:text-amber-600 transition-all duration-500 hover:shadow-lg cursor-pointer"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-serif font-medium group-hover:text-amber-600 transition-colors duration-300">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <span>Read more</span>
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section> */}

            <section
              id="connect"
              ref={getSectionRef(2)}
              className="py-20 sm:py-32 opacity-0"
            >
              <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
                <div className="space-y-6 sm:space-y-8">
                  <h2 className="text-3xl sm:text-4xl font-serif font-light">
                    {connect.heading}
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                      {connect.bio}
                    </p>

                    <div className="space-y-4">
                      <Link
                        href={`mailto:${connect.email}`}
                        className="group flex items-center gap-3 text-foreground hover:text-amber-600 transition-colors duration-300"
                      >
                        <span className="text-base sm:text-lg">
                          {connect.email}
                        </span>
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <div className="text-sm text-muted-foreground font-mono h-[40px]">
                    {connect.elsewhereLabel}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.url}
                        className="group p-4 border border-border rounded-lg hover:border-amber-600/50 transition-all duration-300 hover:shadow-sm"
                      >
                        <div className="space-y-2">
                          <div className="text-foreground group-hover:text-amber-600 transition-colors duration-300">
                            {social.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {social.handle}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <footer className="py-12 sm:py-16 border-t border-border">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    {footer.copyright}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {footer.tagline}
                  </div>
                </div>
              </div>
            </footer>
          </main>
        )}
      </SectionLayout>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
