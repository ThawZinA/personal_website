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
      title: "MSc Business Information Systems Management",
      company: "Middlesex University",
      description: "Graduated with Merit for MSc BISM from Middlesex University.",
    },
    {
      year: "2023",
      title: "Wed Developer",
      company: "Grace Souvenirs Myanmar.",
      description: "Developed scalable web applications using modern technologies and best practices.",
    },
    {
      year: "2019",
      title: "Web Designer",
      company: "JarPlay Agency",
      description: "Created responsive and interactive user interfaces for various client projects.",
    },
    {
      year: "2019",
      title: "BSc Business Information Technology",
      company: "University of Greenwich",
      description: "Graduated with 2:1 for BSc BIT from University of Greenwich.",
    },
  ]

  export const socialLinks = [
    {
      icon: GitHubLogoIcon,
      label: "GitHub",
      href: "https://github.com/ThawZinA",
      color: "text-amber-400",
    },
    {
      icon: LinkedInLogoIcon,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/thaw-zin-ag419/",
      color: "text-blue-600",
    },
    {
      icon: InstagramLogoIcon,
      label: "Instagram",
      href: "https://www.instagram.com/__thaw_/",
      color: "text-pink-300",
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