export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  completedAt: string
  client?: string
  duration: string
  role: string
  features: string[]
  challenges: string[]
  solutions: string[],
  technicalDetails?: string
  technologies: {
    frontend: string[]
    backend: string[]
    database: string[]
    tools: string[]
  }
  lessonsLearned?: string
}

export const projects: Project[] = [
  {
    id: "ai-ethics-report",
    title: "ai-ethics-report",
    description: "AI ethics scorecard and a carbon impact tool",
    longDescription:
      "AI Ethics Report is a web tool that helps users explore and understand the ethical considerations of artificial intelligence. It presents complex topics like fairness, accountability, transparency, and bias in an approachable format, turning academic frameworks into something more digestible for students, researchers, and professionals. The goal was to make AI ethics easier to check and reflect on, especially for people building or using AI systems.This is my dream project because it combines my academic research, technical skills, and personal values in one place. I’ve always wanted to build something that doesn’t just showcase code, but also creates awareness and impact. For me, AI Ethics Report is more than a portfolio piece — it’s a statement about how I see the future of technology: innovative, sustainable, and responsible.The AI Ethics Report connects closely with my MSc in Business Information Systems Management (BISM), as it brings together lessons from all four core modules.",
    image: "/images/ai-ethics-report-preview.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "Web Application",
    liveUrl: "https://ai-ethics-report.netlify.app/",
    githubUrl: "https://github.com/ThawZinA/ai-ethics-report",
    featured: true,
    completedAt: "2024-11-15",
    client: "BISM MSc Final Project",
    duration: "6 months",
    role: "Full Stack Developer & UI/UX Designer",
    features: [
      "Clear categories for AI ethics principles (fairness, accountability, transparency, etc.)",
      "Interactive, mobile-friendly UI with dark mode",
      "Check AI systems against UNESCO, EU AI criteria",
      "Carbon impact calculator for AI models",
      "Dashards to track scores over time",
      "Export the report as PDF",
      "User authentication and profiles",
    ],
    challenges: [
      "Implementing complex ethical standards as score systems",
      "Creating a flexible validation system that works with dynamic form structures",
      "Keeping the site engaging while text-heavy",
      "Building report download as PDF",
    ],
    solutions: [
      "Used React pdf library for generating downloadable reports",
      "Implemented a schema-based validation system using Zod for type safety",
      "Created a centralized state management system using Zustand for real-time updates",
      "Applied virtualization techniques for handling large forms efficiently",
    ],
    technologies: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form", "Zod"],
      backend: ["Next.js API Routes", "Node.js"],
      database: ["Local Storage", "IndexedDB"],
      tools: ["Vercel", "ESLint", "Prettier", "Figma"],
    },
    technicalDetails: " React & Typescript ensures interactive UI with safety for grid configurations.CSS grid is the core concept and foundation of the layout. Tailwind CSS is used for styling. Framer Motion adds smooth animations and transitions. The combination of these technologies results in a modern, responsive, and visually appealing web application.",
    
  },
  {
    id: "gridable",
    title: "Gridable",
    description: "CSS Grid layout generator and learning tool",
    longDescription:
      "Gridable is an interactive CSS Grid layout generator and learning tool. It empowers developers to visually design complex grid layouts, then export them instantly as HTML, CSS code. It also serves as a teaching tool, offering real-time visualizations to help beginners understand grid concepts.",
    image: "/images/gridable-preview.png",
    tags: ["React", "TypeScript", "CSS Grid", "Tailwind CSS", "Framer Motion"],
    category: "Developer Tool",
    liveUrl: "https://gridable.netlify.app/",
    githubUrl: "https://github.com/ThawZinA/gridable-layout-builder",
    featured: true,
    completedAt: "2024-11-20",
    client: "Open Source Project",
    duration: "2 months",
    role: "Frontend Developer & UI/UX Designer",
    features: [
      "Visual CSS Grid editor with drag-and-drop interface",
      "Real-time code generation (CSS, HTML, React)",
      "Interactive grid item positioning and sizing",
      "Grid area naming and management",
      "Responsive breakpoint support",
    ],
    challenges: [
      "Creating an intuitive visual representation of CSS Grid concepts",
      "Implementing real-time code generation that stays in sync with visual changes",
      "Building a responsive editor that works across different screen sizes",
      "Handling complex grid layouts with overlapping areas and gaps",
      "Making CSS Grid concepts accessible to beginners",
    ],
    solutions: [
      "Developed a custom grid visualization system using CSS Grid and absolute positioning",
      "Built a reactive code generation engine that updates instantly with visual changes",
      "Implemented a responsive design system that adapts the editor interface",
      "Created algorithms to handle grid area conflicts and provide helpful warnings",
      "Added interactive tutorials and tooltips to guide users through complex concepts",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "CSS Grid", "Tailwind CSS", "Vite", "Framer Motion"],
      backend: ["Static Site"],
      database: ["Local Storage"],
      tools: ["Netlify", "ESLint", "Prettier", "Figma"],
    },
    lessonsLearned: "Building Gridable showed me how much clarity matters when teaching technical concepts. Beginners need strong visuals and small hints that guide them through without feeling lost. I learned that even advanced tools should feel approachable, like a friendly teacher rather than a complicated manual."
  },
  {
    id: "brew-buddy",
    title: "Brew Buddy",
    description: "A whimsical coffee recipe app",
    longDescription:
      "This project taught me how small design choices — like animations, spacing, and micro-interactions — can make a big difference in how “friendly” an app feels. I also learned the importance of structuring state for scalability, so new menu items or features don’t break existing flows. Most importantly, it showed me how to balance practical UX with whimsical design to make a simple app more memorable.",
    image: "/images/brewbuddy_preview.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Application",
    liveUrl: "https://brewwbuddy.netlify.app/",
    githubUrl: "https://github.com/ThawZinA/brew-buddy",
    featured: true,
    completedAt: "2025-09-15",
    client: "Personal Project",
    duration: "1 months",
    role: "Full Stack Developer & UI/UX Designer",
    features: [
      "A fun, interactive UI with animations and micro-interactions",
      "Brewing timers and step-by-step instructions",
      "Brewing recipe library with local storage",
      "Custom validation rules and error messages",
      "Form styling and theming options",
      "Export to HTML, React, and JSON formats",
      "Template library with pre-built form layouts",
      "Form analytics and submission tracking",
      "Responsive design for all devices",
    ],
    challenges: [
      "Persisting user experience",
      "Making the UI engaging without overwhelming",
      "Implementing animation",
    ],
    solutions: [
      "Used React DnD library with custom hooks for smooth drag-and-drop experience",
      "Implemented a schema-based validation system using Zod for type safety",
      "Created a centralized state management system using Zustand for real-time updates",
      "Applied virtualization techniques for handling large forms efficiently",
      "Built a template engine that generates optimized code with proper formatting",
    ],
    technologies: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form", "Zod"],
      backend: ["Next.js API Routes", "Node.js"],
      database: ["Local Storage", "IndexedDB"],
      tools: ["Vercel", "ESLint", "Prettier", "Figma"],
    },
  },
  {
    id: "blog-platform",
    title: "Byte Size Blog",
    description: "Modern blog platform with MDX support",
    longDescription:
      "A simple minimalistic blog platform built with Next.js and MDX, offering a seamless reading experience with support for interactive components, syntax highlighting, and SEO optimization. Currently intended as my personal blog but may change into a blog platform for developers.",
    image: "/images/bytesizeblog-preview.png",
    tags: ["Next.js", "MDX", "TypeScript", "Tailwind CSS"],
    category: "Blog Platform",
    liveUrl: "https://bytesizeblogs.netlify.app/",
    githubUrl: "https://github.com/ThawZinA/byte-size-blog",
    featured: true,
    completedAt: "2024-07-10",
    client: "Personal Project",
    duration: "1 months",
    role: "Full Stack Developer",
    features: [
      "MDX support for interactive blog posts",
      "Syntax highlighting for code blocks",
      "Light and dark mode themes",
      "Dynamic routing for blog posts",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing MDX compilation and rendering efficiently",
      "Creating a flexible component system for blog posts",
      "Optimizing SEO for dynamic content",
      "Ensuring accessibility across all components",

    ],
    solutions: [
      "Used Contentlayer for efficient MDX processing and type safety",
      "Built a component library specifically for blog content",
      "Implemented dynamic routing with Next.js",
      "Applied WCAG guidelines and tested with screen readers",
    ],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX"],
      backend: ["Next.js API Routes", "Contentlayer"],
      database: ["File System", "Git"],
      tools: ["Vercel", "Contentlayer", "Prism.js", "Fuse.js"],
    },
    lessonsLearned: "Building Byte Size Blog taught me the power of MDX for creating rich, interactive content. I realized how much effeort went into adding small touches like even a  syntax highlighting. I also learned that accessibility isn’t optional — it’s what makes a platform welcoming to everyone."
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category)
}

export function getAllCategories(): string[] {
  return [...new Set(projects.map((project) => project.category))]
}
