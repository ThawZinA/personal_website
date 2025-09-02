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
    title: "Form Builder",
    description: "Drag-and-drop form builder with real-time preview",
    longDescription:
      "A comprehensive form builder application that allows users to create complex forms through an intuitive drag-and-drop interface. Features real-time preview, advanced validation, and multiple export options including HTML, React components, and JSON schemas.",
    image: "/images/form-builder-preview.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Application",
    liveUrl: "https://v0-form-builder-ten-nu.vercel.app/",
    githubUrl: "https://github.com/thawzinag/form-builder",
    featured: true,
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
    id: "grace-website",
    title: "Grace Website",
    description: "E-commerce platform for personalized accessories",
    longDescription:
      "A modern e-commerce platform specializing in personalized accessories and gifts. Features a custom product configurator, secure payment processing, and an intuitive admin dashboard for inventory management.",
    image: "/images/grace-website-preview.png",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    category: "E-commerce",
    liveUrl: "https://gracesouvenirs.netlify.app/",
    githubUrl: "https://github.com/thawzinag/grace-website",
    featured: true,
    completedAt: "2024-10-30",
    client: "Grace Accessories",
    duration: "4 months",
    role: "Full Stack Developer",
    features: [
      "Product catalog with advanced filtering and search",
      "Custom product configurator for personalization",
      "Secure payment processing with Stripe integration",
      "User authentication and account management",
      "Order tracking and history",
      "Admin dashboard for inventory management",
      "Responsive design optimized for mobile shopping",
      "SEO optimization for better search visibility",
      "Email notifications for orders and updates",
      "Multi-language support",
    ],
    challenges: [
      "Building a flexible product configurator that handles various customization options",
      "Implementing secure payment processing with proper error handling",
      "Creating an efficient inventory management system",
      "Optimizing performance for large product catalogs",
      "Ensuring mobile-first responsive design for optimal shopping experience",
    ],
    solutions: [
      "Developed a modular configurator system using React components and context",
      "Integrated Stripe with comprehensive error handling and webhook processing",
      "Built a real-time inventory system with automatic stock updates",
      "Implemented lazy loading and image optimization for better performance",
      "Used CSS Grid and Flexbox for responsive layouts that work on all devices",
    ],
    technologies: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Next.js API Routes", "Node.js", "Stripe API"],
      database: ["MongoDB", "Stripe Dashboard"],
      tools: ["Vercel", "MongoDB Atlas", "Stripe CLI", "Figma"],
    },
    testimonial: {
      content:
        "The website exceeded our expectations! Sales increased by 150% in the first month after launch. The custom configurator is exactly what our customers needed.",
      author: "Grace Thompson",
      position: "Founder",
      company: "Grace Accessories",
    },
  },
  {
    id: "acme-dashboard",
    title: "ACME Dashboard",
    description: "Modern analytics dashboard for businesses",
    longDescription:
      "A comprehensive business analytics dashboard that provides real-time insights into key performance metrics. Features interactive charts, customizable widgets, and advanced reporting capabilities.",
    image: "/images/acme-dashboard-preview.png",
    tags: ["Next.js", "Supabase", "Charts", "TypeScript", "Tailwind CSS"],
    category: "Dashboard",
    liveUrl: "https://acme-dashboard-demo.vercel.app/",
    githubUrl: "https://github.com/thawzinag/acme-dashboard",
    featured: true,
    completedAt: "2024-09-15",
    client: "ACME Corporation",
    duration: "3 months",
    role: "Frontend Developer",
    features: [
      "Real-time analytics and KPI tracking",
      "Interactive charts and data visualizations",
      "Customizable dashboard widgets",
      "Advanced filtering and date range selection",
      "Export functionality for reports and data",
      "User role management and permissions",
      "Responsive design for all devices",
      "Dark mode support",
      "Real-time notifications and alerts",
      "Integration with multiple data sources",
    ],
    challenges: [
      "Handling large datasets efficiently without performance issues",
      "Creating responsive charts that work on mobile devices",
      "Implementing real-time data updates without overwhelming the UI",
      "Building a flexible widget system for customization",
      "Ensuring data security and proper access controls",
    ],
    solutions: [
      "Implemented data virtualization and pagination for large datasets",
      "Used responsive chart libraries with mobile-optimized configurations",
      "Built a WebSocket connection with throttling for real-time updates",
      "Created a modular widget architecture using React components",
      "Integrated Supabase RLS (Row Level Security) for data protection",
    ],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chart.js", "Recharts"],
      backend: ["Supabase", "PostgreSQL", "Edge Functions"],
      database: ["PostgreSQL", "Supabase"],
      tools: ["Vercel", "Supabase CLI", "Figma", "PostHog"],
    },
    testimonial: {
      content:
        "This dashboard transformed how we monitor our business metrics. The real-time insights have helped us make faster, data-driven decisions.",
      author: "John Smith",
      position: "CEO",
      company: "ACME Corporation",
    },
  },
  {
    id: "xplore-yangon",
    title: "Xplore Yangon",
    description: "Mobile app for exploring Yangon city",
    longDescription:
      "A comprehensive mobile application for tourists and locals to discover the best places, restaurants, and attractions in Yangon. Features interactive maps, reviews, and personalized recommendations.",
    image: "/images/xplore-yangon-preview.png",
    images: [
      "/images/xplore-yangon-preview.png",
      "/images/xplore-yangon-map.png",
      "/images/xplore-yangon-places.png",
      "/images/xplore-yangon-reviews.png",
    ],
    tags: ["UI/UX", "Mobile", "Maps", "React Native", "Firebase"],
    category: "Mobile App",
    liveUrl: "https://xplore-yangon.app/",
    githubUrl: "https://github.com/thawzinag/xplore-yangon",
    featured: false,
    completedAt: "2024-08-20",
    client: "Tourism Board Myanmar",
    duration: "5 months",
    role: "UI/UX Designer & Mobile Developer",
    features: [
      "Interactive city map with points of interest",
      "Place discovery with photos and descriptions",
      "User reviews and ratings system",
      "Personalized recommendations based on preferences",
      "Offline map functionality",
      "Multi-language support (English, Myanmar)",
      "Social sharing capabilities",
      "Event calendar and notifications",
      "GPS navigation integration",
      "Favorite places and trip planning",
    ],
    challenges: [
      "Designing an intuitive interface for diverse user demographics",
      "Implementing offline functionality for areas with poor connectivity",
      "Handling large amounts of location data efficiently",
      "Creating accurate and up-to-date place information",
      "Ensuring app performance on various mobile devices",
    ],
    solutions: [
      "Conducted extensive user research and testing with local users",
      "Implemented local data caching and offline-first architecture",
      "Used efficient data structures and lazy loading for location data",
      "Built a content management system for easy updates",
      "Optimized app performance with code splitting and image compression",
    ],
    technologies: {
      frontend: ["React Native", "TypeScript", "React Navigation", "React Native Maps"],
      backend: ["Firebase", "Cloud Functions", "Node.js"],
      database: ["Firestore", "Firebase Storage"],
      tools: ["Expo", "Firebase Console", "Figma", "Adobe XD"],
    },
    testimonial: {
      content:
        "Xplore Yangon has become an essential tool for tourists visiting our city. The app beautifully showcases our culture and attractions.",
      author: "Daw Khin Mya",
      position: "Director",
      company: "Tourism Board Myanmar",
    },
  },
  {
    id: "mdx-blog",
    title: "MDX Blog Platform",
    description: "Modern blog platform with MDX support",
    longDescription:
      "A feature-rich blog platform built with Next.js and MDX, offering a seamless writing experience with support for interactive components, syntax highlighting, and SEO optimization.",
    image: "/images/mdx-blog-preview.png",

    tags: ["Next.js", "MDX", "TypeScript", "Tailwind CSS", "Contentlayer"],
    category: "Blog Platform",
    liveUrl: "https://mdx-blog-clone.netlify.app/",
    githubUrl: "https://github.com/thawzinag/mdx-blog",
    featured: false,
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
