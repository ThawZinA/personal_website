export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  tools: string[]
  category: string
  year: string
  client?: string
  url?: string
  features: string[]
  challenges: string
  solution: string
}

export const projects: Project[] = [
  {
    id: "xplore-yangon",
    title: "Xplore Yangon",
    description:
      "A comprehensive mobile application designed to help tourists and locals navigate Yangon city with ease. The app features interactive maps, local recommendations, cultural insights, and real-time navigation to make exploring Myanmar's largest city an unforgettable experience.",
    shortDescription: "A mobile app for navigating Yangon.",
    image: "/images/xplore-yangon-preview.png",
    tools: ["React Native", "TypeScript", "Google Maps API", "Firebase", "Redux", "Expo"],
    category: "Mobile App",
    year: "2023",
    client: "Tourism Board Myanmar",
    url: "https://thawzinag.dev/404",
    features: [
      "Interactive city maps with offline support",
      "Local restaurant and attraction recommendations",
      "Cultural insights and historical information",
      "Real-time navigation and traffic updates",
      "Multi-language support (English, Myanmar, Chinese)",
      "User reviews and ratings system",
    ],
    challenges:
      "The main challenge was integrating accurate local data and ensuring the app works reliably in areas with poor internet connectivity.",
    solution:
      "Implemented offline-first architecture with local data caching and progressive data sync when connectivity is available.",
  },
  {
    id: "grace-website",
    title: "Grace Website",
    description:
      "An elegant e-commerce platform specializing in personalized accessories and custom jewelry. The website features a sophisticated design system, seamless shopping experience, and advanced customization tools that allow customers to create unique pieces tailored to their preferences. Built with a focus on luxury branding and user experience, the site showcases beautiful product galleries, customer testimonials, and an intuitive shopping interface.",
    shortDescription: "E-commerce website for personalised accessories.",
    image: "/images/grace-website-preview.png",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL", "Vercel"],
    category: "E-commerce",
    year: "2023",
    client: "Grace Accessories",
    url: "https://gracesouvenirs.netlify.app/",
    features: [
      "Product customization with real-time preview",
      "Secure payment processing with Stripe",
      "Inventory management system",
      "Customer account dashboard",
      "Order tracking and notifications",
      "Responsive design for all devices",
      "Product gallery with zoom functionality",
      "Customer testimonials and reviews",
      "Social media integration",
      "SEO optimized product pages",
    ],
    challenges:
      "Creating a user-friendly customization interface that could handle complex product variations while maintaining performance and ensuring the luxury brand aesthetic was preserved across all devices.",
    solution:
      "Developed a modular component system with optimized rendering and implemented efficient state management for real-time customization previews. Used high-quality imagery and elegant typography to maintain the premium brand feel.",
  },
  {
    id: "portfolio-dashboard",
    title: "Creative Portfolio Dashboard",
    description:
      "A modern dashboard application for creative professionals to showcase their work, manage client projects, and track business metrics. Features include project galleries, client management, invoice generation, and analytics to help creatives grow their business.",
    shortDescription: "Dashboard for creative professionals.",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["React", "TypeScript", "Chart.js", "Node.js", "Express", "MongoDB", "AWS S3"],
    category: "Web Application",
    year: "2022",
    client: "Freelance Project",
    features: [
      "Project portfolio management",
      "Client relationship management",
      "Invoice generation and tracking",
      "Analytics and reporting dashboard",
      "File storage and organization",
      "Time tracking and productivity metrics",
    ],
    challenges:
      "Balancing feature richness with simplicity to ensure the dashboard remains intuitive for non-technical users.",
    solution:
      "Conducted extensive user research and implemented a progressive disclosure design pattern to reveal advanced features gradually.",
  },
  {
    id: "learning-platform",
    title: "EduTech Learning Platform",
    description:
      "An interactive online learning platform designed for students and educators. The platform includes course creation tools, interactive assignments, progress tracking, and collaborative features to enhance the digital learning experience.",
    shortDescription: "Interactive online learning platform.",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["Vue.js", "Nuxt.js", "Python", "Django", "PostgreSQL", "Redis", "Docker"],
    category: "Education",
    year: "2022",
    client: "EduTech Solutions",
    features: [
      "Course creation and management tools",
      "Interactive video lessons with quizzes",
      "Assignment submission and grading",
      "Student progress analytics",
      "Discussion forums and collaboration",
      "Mobile-responsive design",
    ],
    challenges:
      "Ensuring smooth video streaming and real-time collaboration features while maintaining platform stability under high user loads.",
    solution:
      "Implemented CDN for video delivery, optimized database queries, and used Redis for caching and real-time features.",
  },
  {
    id: "restaurant-pos",
    title: "Restaurant POS System",
    description:
      "A comprehensive point-of-sale system designed specifically for restaurants and cafes. The system includes order management, inventory tracking, staff management, and detailed analytics to help restaurant owners streamline their operations.",
    shortDescription: "Point-of-sale system for restaurants.",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["React", "Electron", "Node.js", "SQLite", "Thermal Printer API", "Square API"],
    category: "Desktop Application",
    year: "2021",
    client: "Local Restaurant Chain",
    features: [
      "Order management and kitchen display",
      "Inventory tracking and alerts",
      "Staff scheduling and time tracking",
      "Sales analytics and reporting",
      "Receipt printing and payment processing",
      "Offline functionality with sync",
    ],
    challenges:
      "Creating a system that works reliably in a fast-paced restaurant environment with potential network issues.",
    solution:
      "Built with offline-first architecture using local SQLite database with automatic cloud sync when connectivity is restored.",
  },
]
