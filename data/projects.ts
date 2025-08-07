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
      "A UI/UX implementaion process for comprehensive mobile application designed to help tourists and locals navigate Yangon city with ease. The app features interactive maps, local recommendations, cultural insights, and real-time navigation to make exploring Myanmar's largest city an unforgettable experience.",
    shortDescription: "A mobile app for navigating Yangon.",
    image: "/images/xplore-yangon-preview.png",
    tools: ["Figma","AdobeXD", "Google Maps API", "SurveyMonkey"],
    category: "Mobile App",
    year: "2019",
    client: "BIT UID Project",
    features: [
      "Interactive city maps with offline support",
      "Local restaurant and attraction recommendations",
      "Cultural insights and historical information",
      "Real-time navigation and traffic updates",
      "User reviews and ratings system",
    ],
    challenges:
      "The main challenge was integrating accurate local data and ensuring the app works simple enough non-technical users",
    solution:
      "Conducted extensive user research and implemented a continuous usability testing and CI/CD.",
  },
  {
    id: "grace-website",
    title: "Grace Website",
    description:
      "An elegant e-commerce platform specialising in personalised accessories and custom jewellery. The website features a sophisticated design system, seamless shopping experience, and advanced customisation tools that allow customers to create unique pieces tailored to their preferences. Built with a focus on luxury branding and user experience, the site showcases beautiful product galleries, customer testimonials, and an intuitive shopping interface.",
    shortDescription: "E-commerce website for personalised accessories.",
    image: "/images/grace-website-preview.png",
    tools: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Firebase"],
    category: "E-commerce",
    year: "2020",
    client: "Grace Souvenirs Myanmar Co.,Ltd.",
    url: "https://gracesouvenirs.netlify.app/",
    features: [
      "Product customisation with real-time preview",
      "Secure payment processing with Banking",
      "Product gallery with category filtering",
      "SEO optimised product pages",
    ],
    challenges:
      "Creating a user-friendly customisation interface that could handle complex product variations while maintaining performance and ensuring the luxury brand aesthetic was preserved across all devices.",
    solution:
      "Developed a modular component system with optimised rendering and implemented efficient state management for real-time customisation previews. Used high-quality imagery and elegant typography to maintain the premium brand feel.",
  },
  {
    id: "acme-dashboard",
    title: "Sale & Invoces Dashboard",
    description:
      "A modern dashboard application for invoice generation, and analytics to help company grow their business.",
    shortDescription: "Dashboard for creative professionals.",
    image: "/images/acme-dashboard-preview.png",
    tools: ["React", "TypeScript", "Tailwind", "Node.js", "Supabase", "Postgresql", "Vercel"],
    category: "Web Application",
    year: "2025",
    client: "Freelance Project",
    url: "https://nextjs-dashboard-roan-omega-nb8oexu114.vercel.app/",
    features: [
      "Client relationship management",
      "Invoice generation and tracking",
      "Analytics and reporting dashboard",
    ],
    challenges:
      "Balancing feature richness with simplicity to ensure the dashboard remains intuitive for non-technical users.",
    solution:
      "Conducted extensive user research and implemented a progressive disclosure design pattern to reveal advanced features gradually.",
  },
  {
    id: "pizzeria-pos-dashboard",
    title: "POS System",
    description:
      "A comprehensive point-of-sale system designed specifically for restaurants and cafes. The system includes order management, inventory tracking, staff management, and detailed analytics to help restaurant owners streamline their operations.",
    shortDescription: "Point-of-sale system for restaurants.",
    image: "/images/pizzeria-pos-preview.png",
    tools: ["React", "Electron", "Square API"],
    category: "Desktop Application",
    year: "2021",
    client: "Local Restaurant Chain",
    url: "https://thawzinag.dev/404",
    features: [
      "Inventory tracking and alerts",
      "Order tracking and notifications",
      "Sales analytics and reporting",
    ],
    challenges:
      "Creating a system that works reliably in a fast-paced restaurant environment with potential network issues.",
    solution:
      "Built with offline-first architecture using local SQLite database with automatic cloud sync when connectivity is restored.",
  },
  {
    id: "Bits & Bytes",
    title: "MDX-like blogposts website",
    description:
      "A modern website to showcase my blog posts. Features similar to MDX blog.",
    shortDescription: "Personal portfolio website for Thaw",
    image: "/images/mdx-blog-preview.png",
    tools: ["React", "Next.js", "Tailwind", "Netlify"],
    category: "Blog Page",
    year: "2025",
    client: "Freelance Project",
    url: "https://mdx-blog-clone.netlify.app/",
    features: [
      "Blog List",
      "Codesnippet demo with Bright",
      "Sound On/Off",
      "Dark Mode"
    ],
    challenges:
      "",
    solution:
      "",
  },
  {
    id: "portfolio-website",
    title: "My Personal Portfolio Website",
    description:
      "A modern website to showcase my works. Features include project, accessibility and SEO optimisation.",
    shortDescription: "Personal portfolio website for Thaw",
    image: "/images/personal-projects.png",
    tools: ["React", "TypeScript", "Next.js", "Tailwind", "SEO"],
    category: "Web Page",
    year: "2025",
    client: "Freelance Project",
    url: "https://thawzinag.dev/",
    features: [
      "Project portfolio",
      "Light/Dark Mode",
      "Sound On/Off",
    ],
    challenges:
      "Balancing feature richness with simplicity, accessibility, usability and aesthetics.",
    solution:
      "Conducted extensive user research and implemented a continuous usability testing and CI/CD.",
  },
]
