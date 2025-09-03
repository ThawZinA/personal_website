import { EnvelopeClosedIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, MobileIcon } from "@radix-ui/react-icons"

export const skills = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Motion","Sass"],
    backend: ["Node.js", "PHP", "MongoDB", "PostgreSQL", "Supabase", "Firebase","MySQL"],
    tools: ["Git", "Vercel", "Netlify","Jest","ESLint","Notion"],
    design: ["UI/UX Design", "Canva", "Figma", "Wireframing", "AdobeXD"],
  }

export const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Freelance",
      description: "Leading complex web development projects and mentoring junior developers.",
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      description: "Developed scalable web applications using modern technologies and best practices.",
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Digital Agency",
      description: "Created responsive and interactive user interfaces for various client projects.",
    },
    {
      year: "2021",
      title: "Junior Web Developer",
      company: "StartupXYZ",
      description: "Started my professional journey building websites and learning industry standards.",
    },
  ]

  export const socialLinks = [
    {
      icon: GitHubLogoIcon,
      label: "GitHub",
      href: "https://github.com/ThawZinA",
      color: "hover:text-gray-900 dark:hover:text-white hover:scale-110",
    },
    {
      icon: LinkedInLogoIcon,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/thaw-zin-ag419/",
      color: "hover:text-blue-600 dark:hover:text-blue-500 hover:scale-110",
    },
    {
      icon: InstagramLogoIcon,
      label: "Instagram",
      href: "https://www.instagram.com/__thaw_/",
      color: "hover:text-pink-500 dark:hover:text-pink-400 hover:scale-110",
    }
  ]

export  const contactMethods = [
      {
        icon: EnvelopeClosedIcon,
        label: "Email",
        value: "thawzinag419@gmail.com",
        href: "mailto:thawzinag419@gmail.com",
      },
      {
        icon: MobileIcon,
        label: "Phone",
        value: "+447774414862",
        href: "tel:+447774414862",
      },
    ]