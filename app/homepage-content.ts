// Portfolio Content Configuration
// This file contains only arrays for dynamic list data

// Navigation sections
export const sections = ["intro", "work", "connect"];

// Skills and focus areas
export const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Product Engineering",
] as const;

// Work experience
export interface Job {
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
  website: string;
}

export const jobs: Job[] = [
  {
    year: "Present - 2024",
    role: "Full-Stack Engineer",
    company: "Cozero",
    description:
      "Built supplier engagement platform for enterprise carbon accounting. Modernized frontend infrastructure and built scalable interfaces enabling clients to calculate product-level emissions and efficiently process large-scale data imports.",
    tech: ["React", "Nest.js", "PostgreSQL", "Prisma", "Typescript"],
    website: "https://www.cozero.io/",
  },
  {
    year: "2024 - 2022",
    role: "Full-Stack Engineer",
    company: "Charles",
    description:
      "Developed core components of WhatsApp-based CRM platform. Led frontend work on template builder and segmentation tool redesign. Owned invalid contact management system and resolved critical performance bottlenecks in campaign infrastructure",
    tech: ["Vue", "Express.js", "PostgreSQL", "Storybook", "BullMQ"],
    website: "https://www.hello-charles.com/",
  },
  {
    year: "2022 - 2021",
    role: "Junior Full-Stack Developer",
    company: "Elara Digital",
    description:
      "Early engineer building maintenance and production management software from the ground up. Contributed to technical architecture, design, and product strategy as part of founding team.",
    tech: ["React", "GraphQL", "PostgreSQL", "Typescript", "Hasura"],
    website: "https://getelara.de/",
  },
  {
    year: "2021",
    role: "Full Stack Developer",
    company: "Tracks (Transporeon)",
    description:
      "Develop fuel consumption tracking features. Built POC for company website using static site generation.",
    tech: ["Vue", "Django", "Python"],
    website: "https://www.transporeon.com/",
  },
];

// Blog posts (for future use)
export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
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
    excerpt: "Comparing architectural approaches for modern API design.",
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
];

// Social links
export interface SocialLink {
  name: string;
  handle: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    handle: "@jmdtc",
    url: "https://github.com/jmdtc",
  },
  {
    name: "LinkedIn",
    handle: "My profile",
    url: "https://linkedin.com/in/mathieu-delisle",
  },
];
