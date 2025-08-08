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
}

export const projects: Project[] = [
  {
    id: "grace-website",
    title: "Grace Website",
    description:
      "An elegant e-commerce platform specialising in personalised accessories and custom jewellery. The website features a sophisticated design system, seamless shopping experience, and advanced customisation tools that allow customers to create unique pieces tailored to their preferences. Built with a focus on luxury branding and user experience, the site showcases beautiful product galleries, customer testimonials, and an intuitive shopping interface.",
    shortDescription: "E-commerce website for personalised accessories.",
    image: "/images/grace-website-preview.png",
    tools: ["Figma", "JavaScript", "Bootstrap", "Stripe", "Firebase"],
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
  },
  {
    id: "acme-dashboard",
    title: "Sale & Invoces Dashboard",
    description:
      "A modern dashboard application for invoice generation, and analytics to help company grow their business.",
    shortDescription: "Dashboard for creative professionals.",
    image: "/images/acme-dashboard-preview.png",
    tools: ["React", "TypeScript", "Tailwind", "Next.js", "Supabase", "Postgresql", "Vercel"],
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
    features: [
      "Inventory tracking and alerts",
      "Order tracking and notifications",
      "Sales analytics and reporting",
    ],
  },
  {
    id: "Bits & Bytes",
    title: "MDX-like blogposts website",
    description:
      "A modern website to showcase blog posts. Features similar to MDX blog. As part of joy of react course.",
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
    ]
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
