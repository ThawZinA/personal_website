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
  uxProcess: {
    research: string[]
    userPersonas?: string[]
    problemStatement: string
    designGoals: string[]
    wireframes?: string[]
    prototyping: string[]
    userTesting?: string[]
    iterations: string[]
  }
  features: string[]
  challenges: string[]
  solutions: string[]
  designDecisions: string[]
  userFeedback?: string[]
  accessibility: string[]
  technicalDetails?: string
  technologies: {
    frontend: string[]
    backend: string[]
    database: string[]
    tools: string[]
  }
  lessonsLearned?: string
  designLessons: string[]
}


export const projects: Project[] = [
  {
    id: "ai-ethics-report",
    title: "ai-ethics-report",
    description: "AI ethics scorecard and a carbon impact tool",
    longDescription:
      "AI Ethics Report is a web tool that helps users explore and understand the ethical considerations of artificial intelligence. The goal was to make AI styems' ethics and impact easier to check and reflect on, especially for people building or using AI systems.This is my MSc project and thus it combines core lessons of the MSc courses, my experience and skills, and personal values in one place. I've always wanted to build something that doesn't just showcase code, but also creates awareness and impact. For me, it is more than a portfolio piece — it's a statement about how I see the future of technology: innovative, sustainable, and responsible. ",
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
    uxProcess: {
      research: [
        "Literature review on AI ethics frameworks (UNESCO, EU AI Act, IEEE standards)",
        "Survey of 50+ AI practitioners about current ethics assessment tools",
        "Competitive analysis of existing AI governance platforms",
        "User interviews with AI developers and ethics officers"
      ],
      userPersonas: [
        "AI Product Manager: Needs quick ethics compliance checks",
        "Ethics Officer: Requires detailed reporting and tracking",
        "Independent Researcher: Wants educational tools and resources"
      ],
      problemStatement: "AI developers and organizations lack accessible, comprehensive tools to assess and document the ethical implications of their AI systems, leading to potential harm and regulatory non-compliance.",
      designGoals: [
        "Make complex ethical frameworks understandable and actionable",
        "Create a seamless evaluation workflow that doesn't interrupt development",
        "Provide clear, exportable documentation for compliance",
        "Build trust through transparency and educational content"
      ],
      wireframes: [
        "Low-fidelity sketches exploring assessment flow and navigation",
        "Information architecture mapping ethical categories to user actions"
      ],
      prototyping: [
        "Interactive Figma prototype with key user journeys",
        "Usability testing prototype for assessment workflow",
        "High-fidelity mockups for dashboard and reporting features"
      ],
      userTesting: [
        "Moderated usability sessions with 12 AI practitioners",
        "A/B testing of assessment question formats",
        "Accessibility testing with screen reader users"
      ],
      iterations: [
        "Simplified assessment categories based on user confusion",
        "Added progress indicators and save functionality",
        "Redesigned results page for better comprehension",
        "Improved mobile experience after testing feedback"
      ]
    },
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
    designDecisions: [
      "Used card-based layout to break down complex information into digestible sections",
      "Implemented progressive disclosure to prevent cognitive overload",
      "Chose warm, approachable colors to make ethics discussions feel less intimidating",
      "Added visual progress indicators to maintain user engagement through long assessments"
    ],
    userFeedback: [
      "'Finally, an ethics tool that doesn't feel like homework' - AI Product Manager",
      "'The visual breakdown makes it much easier to explain to stakeholders' - Ethics Officer",
      "'I learned things about AI ethics I didn't know before' - Junior Developer"
    ],
    accessibility: [
      "WCAG 2.1 AA compliance with keyboard navigation",
      "High contrast mode for visually impaired users",
      "Screen reader optimization with proper ARIA labels",
      "Simplified language options for non-native English speakers"
    ],
    technologies: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form", "Zod"],
      backend: ["Next.js API Routes", "Node.js"],
      database: ["Local Storage", "IndexedDB"],
      tools: ["Vercel", "ESLint", "Prettier", "Figma"],
    },
    technicalDetails: "Next and Shadcn ui for consistent and easy UI implementation. Tailwind CSS is used for styling. Supabase for quick and easy database implementaion. The combination of these technologies results in a modern, responsive, and pretty intuitive web application.",
    lessonsLearned: "Phewww....It was a pretty big project considering all the research, survey, analysis and report writing leading to the web application as the final produt. But I learned a lot during the process. The AI Ethics Report connects closely with my MSc in Business Information Systems Management (BISM), as it brings together lessons from all four core modules. It taught me how to translate complex ethical frameworks into practical tools, balancing technical implementation with user experience. I learned the importance of clear communication, especially when dealing with abstract concepts like ethics. This project reinforced my belief that technology should serve society responsibly, and it showed me how developers can contribute to that vision through thoughtful design and implementation.",
    designLessons: [
      "Complex topics require extra attention to information hierarchy and visual design",
      "User testing early and often prevents major redesigns later",
      "Accessibility isn't an afterthought—it improves usability for everyone",
      "Educational content works best when integrated naturally into the workflow"
    ]
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
    uxProcess: {
      research: [
        "Analyzed 15+ existing CSS Grid tools to identify gaps in user experience",
        "Surveyed 80 frontend developers about their CSS Grid pain points",
        "Conducted contextual inquiries with junior developers learning CSS Grid",
        "Researched educational design patterns in coding tools"
      ],
      userPersonas: [
        "CSS Grid Beginner: Needs visual learning aids and clear explanations",
        "Experienced Developer: Wants quick prototyping and code export",
        "Design-to-Code Translator: Requires precise grid recreation tools"
      ],
      problemStatement: "Developers struggle to learn and implement CSS Grid layouts due to the gap between abstract concepts and visual results, leading to trial-and-error coding and frustration.",
      designGoals: [
        "Make CSS Grid concepts immediately visual and understandable",
        "Provide instant feedback between visual design and code output",
        "Create a learning experience that builds confidence progressively",
        "Ensure the tool works for both learning and professional use"
      ],
      wireframes: [
        "Grid editor interface with drag-and-drop functionality",
        "Code export panel with multiple format options",
        "Tutorial overlay system for guided learning"
      ],
      prototyping: [
        "Paper prototypes for initial grid interaction concepts",
        "Interactive Figma prototype testing drag-and-drop behaviors",
        "HTML/CSS proof-of-concept for grid visualization accuracy"
      ],
      userTesting: [
        "Task-based usability testing with 8 developers of varying skill levels",
        "A/B testing of tutorial vs. discovery-based learning approaches",
        "Accessibility testing for keyboard-only grid manipulation"
      ],
      iterations: [
        "Redesigned grid item selection to be more discoverable",
        "Added visual grid line numbers after user confusion",
        "Simplified the properties panel based on cognitive load feedback",
        "Improved mobile responsiveness for smaller screen usage"
      ]
    },
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
    designDecisions: [
      "Used a split-panel layout to show visual and code simultaneously",
      "Implemented color-coding to connect grid areas with their corresponding code",
      "Chose drag-and-drop over form inputs for more intuitive grid manipulation",
      "Added subtle animations to guide user attention to important changes"
    ],
    userFeedback: [
      "'This finally made CSS Grid click for me!' - Junior Frontend Developer",
      "'I use this for all my grid prototyping now' - Senior Developer",
      "'Great for explaining layouts to designers' - Frontend Lead"
    ],
    accessibility: [
      "Full keyboard navigation support for all grid operations",
      "High contrast mode for better visibility of grid lines",
      "Screen reader support with descriptive grid state announcements",
      "Reduced motion options for users with vestibular disorders"
    ],
    technologies: {
      frontend: ["React", "TypeScript", "CSS Grid", "Tailwind CSS", "Vite", "Framer Motion"],
      backend: ["Static Site"],
      database: ["Local Storage"],
      tools: ["Netlify", "ESLint", "Prettier", "Figma"],
    },
    lessonsLearned: "Building Gridable showed me how much clarity matters when teaching technical concepts. Beginners need strong visuals and small hints that guide them through without feeling lost. I learned that even advanced tools should feel approachable, like a friendly teacher rather than a complicated manual.",
    designLessons: [
      "Visual learning tools require extreme attention to visual-code accuracy",
      "Educational interfaces benefit from progressive complexity reveal",
      "Real-time feedback creates confidence in experimental learning",
      "Developer tools still need excellent UX—efficiency isn't everything"
    ]
  },
  {
    id: "brew-buddy",
    title: "Brew Buddy",
    description: "A whimsical coffee recipe app",
    longDescription:
      "This project taught me how small design choices — like animations, spacing, and micro-interactions — can make a big difference in how friendly an app feels. I also learned the importance of structuring state for scalability, so new menu items or features don't break existing flows. Most importantly, it showed me how to balance practical UX with whimsical design to make a simple app more memorable.",
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
    uxProcess: {
      research: [
        "Ethnographic study of home coffee brewing routines with 15 coffee enthusiasts",
        "Analysis of existing coffee apps focusing on user engagement and retention",
        "Survey of 120 coffee drinkers about their brewing habits and pain points",
        "Competitive analysis of recipe apps across different domains"
      ],
      userPersonas: [
        "Coffee Enthusiast: Wants to perfect brewing techniques and try new recipes",
        "Busy Professional: Needs quick, reliable recipes for morning routine",
        "Casual Brewer: Seeks simple guidance without overwhelming detail"
      ],
      problemStatement: "Home coffee brewers struggle to achieve consistent results and discover new recipes due to scattered information, complex measurements, and lack of engaging brewing guidance.",
      designGoals: [
        "Make coffee brewing feel approachable and fun for all skill levels",
        "Create an engaging experience that encourages experimentation",
        "Provide clear, actionable guidance without cognitive overload",
        "Build a sense of community around coffee brewing"
      ],
      wireframes: [
        "Recipe discovery flow with filtering and search",
        "Step-by-step brewing interface with timer integration",
        "Recipe collection and personal brewing journal"
      ],
      prototyping: [
        "Interactive Figma prototype focusing on brewing flow and animations",
        "Paper prototype testing for recipe organization and discovery",
        "Working prototype for timer functionality and user interactions"
      ],
      userTesting: [
        "In-context testing with users brewing actual coffee using the app",
        "A/B testing of playful vs. professional design approaches",
        "Usability testing focusing on timer and step navigation"
      ],
      iterations: [
        "Added personality and whimsy after testing revealed desire for more engagement",
        "Simplified recipe steps based on user confusion during brewing",
        "Enhanced timer visibility and audio cues for hands-free brewing",
        "Improved recipe discovery through better categorization"
      ]
    },
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
    designDecisions: [
      "Used warm, coffee-inspired colors to create emotional connection",
      "Implemented micro-animations to celebrate small wins and maintain engagement",
      "Chose friendly, conversational language over technical brewing jargon",
      "Added personality through illustrations and playful interactions"
    ],
    userFeedback: [
      "'This app actually makes brewing coffee fun!' - Coffee Enthusiast",
      "'Love the animations, they make me smile every morning' - Daily User",
      "'Finally found consistent results with my pour-over' - Home Brewer"
    ],
    accessibility: [
      "Voice guidance for hands-free brewing when handling hot water",
      "High contrast timer display for easy reading in bright kitchen lighting",
      "Simplified navigation for users with motor difficulties",
      "Audio timer alerts for visually impaired users"
    ],
    technologies: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form", "Zod"],
      backend: ["Next.js API Routes", "Node.js"],
      database: ["Local Storage", "IndexedDB"],
      tools: ["Vercel", "ESLint", "Prettier", "Figma"],
    },
    lessonsLearned: "This project taught me how small design choices — like animations, spacing, and micro-interactions — can make a big difference in how 'friendly' an app feels. I also learned the importance of structuring state for scalability, so new menu items or features don't break existing flows. Most importantly, it showed me how to balance practical UX with whimsical design to make a simple app more memorable.",
    designLessons: [
      "Personality in design creates emotional attachment and increases engagement",
      "Micro-interactions should reinforce the core experience, not distract from it",
      "Context matters—kitchen environments require different UX considerations",
      "User testing in real environments reveals insights impossible to get in labs"
    ]
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
