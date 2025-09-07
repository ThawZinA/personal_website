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
  solutions: string[]
  technologies: {
    frontend: string[]
    backend: string[]
    database: string[]
    tools: string[]
  }
  testimonial?: {
    content: string
    author: string
    position: string
    company: string
  }
}

export const projects: Project[] = [
  {
    id: "form-builder",
    title: "BuildAForm",
    description: "Drag-and-drop form builder with real-time preview",
    longDescription:
      "A comprehensive form builder application that allows users to create complex forms through an intuitive drag-and-drop interface. Features real-time preview, advanced validation, and multiple export options including HTML, React components, and JSON schemas.",
    image: "/images/form-builder-preview.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Application",
    liveUrl: "https://buildaform.netlify.app/",
    githubUrl: "https://github.com/thawzinag/form-builder",
    featured: false,
    completedAt: "2024-12-15",
    client: "Personal Project",
    duration: "3 months",
    role: "Full Stack Developer & UI/UX Designer",
    features: [
      "Drag-and-drop form builder interface",
      "Real-time form preview and validation",
      "Multiple input types (text, email, select, checkbox, radio, etc.)",
      "Custom validation rules and error messages",
      "Form styling and theming options",
      "Export to HTML, React, and JSON formats",
      "Template library with pre-built form layouts",
      "Form analytics and submission tracking",
      "Responsive design for all devices",
      "Dark mode support",
    ],
    challenges: [
      "Implementing complex drag-and-drop functionality with proper state management",
      "Creating a flexible validation system that works with dynamic form structures",
      "Ensuring real-time synchronization between builder and preview modes",
      "Optimizing performance for large forms with many components",
      "Building a robust export system that generates clean, production-ready code",
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
    testimonial: {
      content:
        "This form builder has revolutionized how we create forms for our clients. The intuitive interface and powerful features make it incredibly easy to build complex forms in minutes.",
      author: "Sarah Johnson",
      position: "Product Manager",
      company: "TechCorp Solutions",
    },
  },
  {
    id: "gridable",
    title: "Gridable",
    description: "CSS Grid layout generator and learning tool",
    longDescription:
      "An interactive CSS Grid layout generator that helps developers learn and create complex grid layouts. Features visual grid editing, code generation, and educational resources to master CSS Grid.",
    image: "/images/gridable-preview.png",
    tags: ["React", "TypeScript", "CSS Grid", "Tailwind CSS", "Vite"],
    category: "Developer Tool",
    liveUrl: "https://gridable.netlify.app/",
    githubUrl: "https://github.com/thawzinag/gridable",
    featured: true,
    completedAt: "2024-11-20",
    client: "Open Source Project",
    duration: "2 months",
    role: "Frontend Developer & UI/UX Designer",
    features: [
      "Visual CSS Grid editor with drag-and-drop interface",
      "Real-time code generation (CSS, HTML, React)",
      "Interactive grid item positioning and sizing",
      "Pre-built layout templates and examples",
      "Grid area naming and management",
      "Responsive breakpoint support",
      "Export functionality for multiple formats",
      "Educational tutorials and documentation",
      "Dark/light theme support",
      "Keyboard shortcuts for power users",
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
    testimonial: {
      content:
        "Gridable made learning CSS Grid so much easier! The visual interface helped me understand complex grid concepts that I struggled with for months.",
      author: "Mike Chen",
      position: "Frontend Developer",
      company: "StartupXYZ",
    },
  },
  {
    id: "collaborative-whiteboard",
    title: "KollaBoard",
    description: "Drag-and-drop form builder with real-time preview",
    longDescription:
      "A comprehensive form builder application that allows users to create complex forms through an intuitive drag-and-drop interface. Features real-time preview, advanced validation, and multiple export options including HTML, React components, and JSON schemas.",
    image: "/images/form-builder-preview.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Application",
    liveUrl: "https://kollabboard.netlify.app/",
    githubUrl: "https://github.com/thawzinag/form-builder",
    featured: false,
    completedAt: "2024-12-15",
    client: "Personal Project",
    duration: "3 months",
    role: "Full Stack Developer & UI/UX Designer",
    features: [
      "Drag-and-drop form builder interface",
      "Real-time form preview and validation",
      "Multiple input types (text, email, select, checkbox, radio, etc.)",
      "Custom validation rules and error messages",
      "Form styling and theming options",
      "Export to HTML, React, and JSON formats",
      "Template library with pre-built form layouts",
      "Form analytics and submission tracking",
      "Responsive design for all devices",
      "Dark mode support",
    ],
    challenges: [
      "Implementing complex drag-and-drop functionality with proper state management",
      "Creating a flexible validation system that works with dynamic form structures",
      "Ensuring real-time synchronization between builder and preview modes",
      "Optimizing performance for large forms with many components",
      "Building a robust export system that generates clean, production-ready code",
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
    testimonial: {
      content:
        "This form builder has revolutionized how we create forms for our clients. The intuitive interface and powerful features make it incredibly easy to build complex forms in minutes.",
      author: "Sarah Johnson",
      position: "Product Manager",
      company: "TechCorp Solutions",
    },
  },
  {
    id: "blog-platform",
    title: "Byte Size Blog",
    description: "Modern blog platform with MDX support",
    longDescription:
      "A feature-rich blog platform built with Next.js and MDX, offering a seamless writing experience with support for interactive components, syntax highlighting, and SEO optimization.",
    image: "/images/bytesizeblog-preview.png",

    tags: ["Next.js", "MDX", "TypeScript", "Tailwind CSS", "Contentlayer"],
    category: "Blog Platform",
    liveUrl: "https://bytesizeblogs.netlify.app/",
    githubUrl: "https://github.com/thawzinag/mdx-blog",
    featured: true,
    completedAt: "2024-07-10",
    client: "Personal Project",
    duration: "2 months",
    role: "Full Stack Developer",
    features: [
      "MDX support for interactive blog posts",
      "Syntax highlighting for code blocks",
      "SEO optimization with meta tags",
      "Tag-based categorization system",
      "Search functionality",
      "RSS feed generation",
      "Comment system integration",
      "Social media sharing",
      "Reading time estimation",
      "Related posts suggestions",
    ],
    challenges: [
      "Implementing MDX compilation and rendering efficiently",
      "Creating a flexible component system for blog posts",
      "Optimizing SEO for dynamic content",
      "Building a fast search functionality",
      "Ensuring accessibility across all components",
    ],
    solutions: [
      "Used Contentlayer for efficient MDX processing and type safety",
      "Built a component library specifically for blog content",
      "Implemented dynamic meta tag generation with Next.js",
      "Created a client-side search using Fuse.js for fast results",
      "Applied WCAG guidelines and tested with screen readers",
    ],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX"],
      backend: ["Next.js API Routes", "Contentlayer"],
      database: ["File System", "Git"],
      tools: ["Vercel", "Contentlayer", "Prism.js", "Fuse.js"],
    },
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
