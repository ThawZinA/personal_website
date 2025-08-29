"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Sun, Moon, ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { LazyImage } from "../../../components/lazy-image"
import { useSoundEffects } from "../../../hooks/useSoundEffects"
import { SoundButton } from "../../../components/sound-button"
import { projects } from "../../../data/projects"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const [activeSection, setActiveSection] = useState("works")

  // Sound effects
  const { playHover, playClick } = useSoundEffects(isSoundEnabled)

  // Find the project
  const project = projects.find((p) => p.id === params.id)

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }

    // Check for saved sound preference
    const savedSound = localStorage.getItem("soundEnabled")
    if (savedSound !== null) {
      setIsSoundEnabled(savedSound === "true")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")

    if (newTheme) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    playClick()
  }

  const toggleSound = () => {
    const newSoundState = !isSoundEnabled
    setIsSoundEnabled(newSoundState)
    localStorage.setItem("soundEnabled", newSoundState.toString())
    // Don't play click sound here since we're toggling sound
  }

  const navItems = [
    { id: "home", label: "HOME", href: "/" },
    { id: "about", label: "ABOUT", href: "/about" },
    { id: "works", label: "WORKS", href: "/works" },
    { id: "contact", label: "CONTACT", href: "/contact" },
  ]

  if (!project) {
    notFound()
  }

  // Get other projects for the "Other Projects" section
  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2)

  // Get all technologies from the project and limit to 5
  const getAllTechnologies = (project: any) => {
    const allTechs = [
      ...(project.technologies?.frontend || []),
      ...(project.technologies?.backend || []),
      ...(project.technologies?.database || []),
      ...(project.technologies?.tools || []),
    ]
    return allTechs.slice(0, 5)
  }

  const getTechBadgeColor = (index: number) => {
    const colors = [
      "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 border-green-200 dark:border-green-800",
      "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300 border-orange-200 dark:border-orange-800",
      "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300 border-pink-200 dark:border-pink-800",
    ]
    return colors[index % colors.length]
  }

  const getTechLogo = (tech: string) => {
    const techLogos: { [key: string]: string } = {
      React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      Supabase: "https://supabase.com/favicon.ico",
      "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      Vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      Svelte: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      Vercel: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico",
      Netlify: "https://www.netlify.com/favicon.ico",
      Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      GitLab: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      "Adobe XD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
      Photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      Illustrator: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      Stripe: "https://stripe.com/favicon.ico",
      PayPal: "https://www.paypal.com/favicon.ico",
      Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      GraphQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      Prisma: "https://www.prisma.io/favicon.ico",
      Vite: "https://vitejs.dev/logo.svg",
      Webpack: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      Babel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
      ESLint: "https://eslint.org/favicon.ico",
      Prettier: "https://prettier.io/icon.png",
      Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      Cypress: "https://docs.cypress.io/img/logo/cypress-logo-circle-dark.png",
      Storybook: "https://storybook.js.org/favicon.ico",
      "Framer Motion": "https://www.framer.com/favicon.ico",
      "Three.js": "https://threejs.org/favicon.ico",
      "D3.js": "https://d3js.org/favicon.png",
      "Chart.js": "https://www.chartjs.org/favicon.ico",
      "Socket.io": "https://socket.io/favicon.ico",
      "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      Fastify: "https://www.fastify.io/favicon.ico",
      NestJS: "https://nestjs.com/favicon.ico",
      Deno: "https://deno.land/favicon.ico",
      Bun: "https://bun.sh/favicon.ico",
      "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      Expo: "https://expo.dev/favicon.ico",
      Ionic: "https://ionicframework.com/favicon.ico",
      Electron: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
      Tauri: "https://tauri.app/favicon.ico",
      Rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
      Go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
      Symfony: "https://symfony.com/favicon.ico",
      Ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
      Rails: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
      Kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      Swift: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      Scala: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
      Clojure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg",
      Elixir: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
      Haskell: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg",
      Erlang: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original.svg",
      R: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
      MATLAB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
      Jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      NumPy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      PyTorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      Keras: "https://keras.io/favicon.ico",
      OpenCV: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      Unity: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
      "Unreal Engine": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
      Blender: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
      Maya: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg",
      "After Effects": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
      "Premiere Pro": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
      "Final Cut Pro":
        "https://help.apple.com/assets/61F4A8B2A61F4E7E9D0A8D5C/61F4A8B3A61F4E7E9D0A8D63/en_US/0b3b8b8e8b8b8b8b8b8b8b8b8b8b8b8b.png",
      "DaVinci Resolve": "https://www.blackmagicdesign.com/favicon.ico",
      "Logic Pro":
        "https://help.apple.com/assets/61F4A8B2A61F4E7E9D0A8D5C/61F4A8B3A61F4E7E9D0A8D63/en_US/0b3b8b8e8b8b8b8b8b8b8b8b8b8b8b8b.png",
      "Pro Tools": "https://www.avid.com/favicon.ico",
      "Ableton Live": "https://www.ableton.com/favicon.ico",
      "FL Studio": "https://www.image-line.com/favicon.ico",
      Cubase: "https://www.steinberg.net/favicon.ico",
      Reaper: "https://www.reaper.fm/favicon.ico",
      Audacity: "https://www.audacityteam.org/favicon.ico",
      GarageBand:
        "https://help.apple.com/assets/61F4A8B2A61F4E7E9D0A8D5C/61F4A8B3A61F4E7E9D0A8D63/en_US/0b3b8b8e8b8b8b8b8b8b8b8b8b8b8b8b.png",
      Sketch: "https://www.sketch.com/favicon.ico",
      InVision: "https://www.invisionapp.com/favicon.ico",
      Marvel: "https://marvelapp.com/favicon.ico",
      Principle: "https://principleformac.com/favicon.ico",
      Framer: "https://www.framer.com/favicon.ico",
      ProtoPie: "https://www.protopie.io/favicon.ico",
      Zeplin: "https://zeplin.io/favicon.ico",
      Abstract: "https://www.abstract.com/favicon.ico",
      Avocode: "https://avocode.com/favicon.ico",
      Sympli: "https://sympli.io/favicon.ico",
      Maze: "https://maze.co/favicon.ico",
      Hotjar: "https://www.hotjar.com/favicon.ico",
      Mixpanel: "https://mixpanel.com/favicon.ico",
      "Google Analytics": "https://www.google.com/favicon.ico",
      Amplitude: "https://amplitude.com/favicon.ico",
      Segment: "https://segment.com/favicon.ico",
      Intercom: "https://www.intercom.com/favicon.ico",
      Zendesk: "https://www.zendesk.com/favicon.ico",
      Freshworks: "https://www.freshworks.com/favicon.ico",
      Salesforce: "https://www.salesforce.com/favicon.ico",
      HubSpot: "https://www.hubspot.com/favicon.ico",
      Mailchimp: "https://mailchimp.com/favicon.ico",
      SendGrid: "https://sendgrid.com/favicon.ico",
      Twilio: "https://www.twilio.com/favicon.ico",
      Slack: "https://slack.com/favicon.ico",
      Discord: "https://discord.com/favicon.ico",
      Telegram: "https://telegram.org/favicon.ico",
      WhatsApp: "https://www.whatsapp.com/favicon.ico",
      Zoom: "https://zoom.us/favicon.ico",
      "Microsoft Teams": "https://www.microsoft.com/favicon.ico",
      "Google Meet": "https://www.google.com/favicon.ico",
      Skype: "https://www.skype.com/favicon.ico",
      Notion: "https://www.notion.so/favicon.ico",
      Obsidian: "https://obsidian.md/favicon.ico",
      "Roam Research": "https://roamresearch.com/favicon.ico",
      Logseq: "https://logseq.com/favicon.ico",
      Craft: "https://www.craft.do/favicon.ico",
      Bear: "https://bear.app/favicon.ico",
      Ulysses: "https://ulysses.app/favicon.ico",
      Scrivener: "https://www.literatureandlatte.com/favicon.ico",
      Typora: "https://typora.io/favicon.ico",
      "Mark Text": "https://marktext.app/favicon.ico",
      Zettlr: "https://www.zettlr.com/favicon.ico",
      Joplin: "https://joplinapp.org/favicon.ico",
      "Standard Notes": "https://standardnotes.org/favicon.ico",
      Simplenote: "https://simplenote.com/favicon.ico",
      "Google Keep": "https://www.google.com/favicon.ico",
      "Apple Notes":
        "https://help.apple.com/assets/61F4A8B2A61F4E7E9D0A8D5C/61F4A8B3A61F4E7E9D0A8D63/en_US/0b3b8b8e8b8b8b8b8b8b8b8b8b8b8b8b.png",
      OneNote: "https://www.microsoft.com/favicon.ico",
      Evernote: "https://evernote.com/favicon.ico",
      "CSS Grid": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      Flexbox: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      SASS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      SCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      LESS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg",
      Stylus: "https://stylus-lang.com/favicon.ico",
      PostCSS: "https://postcss.org/favicon.ico",
      Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      Bulma: "https://bulma.io/favicon.ico",
      Foundation: "https://get.foundation/favicon.ico",
      "Semantic UI": "https://semantic-ui.com/favicon.ico",
      "Material-UI": "https://mui.com/favicon.ico",
      "Ant Design": "https://ant.design/favicon.ico",
      "Chakra UI": "https://chakra-ui.com/favicon.ico",
      Mantine: "https://mantine.dev/favicon.ico",
      "React Hook Form": "https://react-hook-form.com/favicon.ico",
      Formik: "https://formik.org/favicon.ico",
      Yup: "https://github.com/jquense/yup/raw/master/logo.png",
      Zod: "https://zod.dev/favicon.ico",
      Joi: "https://joi.dev/favicon.ico",
      Ajv: "https://ajv.js.org/favicon.ico",
      "React Router": "https://reactrouter.com/favicon.ico",
      "Reach Router": "https://reach.tech/favicon.ico",
      "Next Router": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "Vue Router": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      "Angular Router": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      "React Navigation": "https://reactnavigation.org/favicon.ico",
      "Expo Router": "https://expo.dev/favicon.ico",
      "React Query": "https://tanstack.com/favicon.ico",
      SWR: "https://swr.vercel.app/favicon.ico",
      "Apollo Client": "https://www.apollographql.com/favicon.ico",
      Relay: "https://relay.dev/favicon.ico",
      urql: "https://formidable.com/favicon.ico",
      Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      "Redux Toolkit": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      MobX: "https://mobx.js.org/favicon.ico",
      Zustand: "https://zustand-demo.pmnd.rs/favicon.ico",
      Jotai: "https://jotai.org/favicon.ico",
      Recoil: "https://recoiljs.org/favicon.ico",
      Valtio: "https://valtio.pmnd.rs/favicon.ico",
      XState: "https://xstate.js.org/favicon.ico",
      Immer: "https://immerjs.github.io/immer/favicon.ico",
      Lodash: "https://lodash.com/favicon.ico",
      Ramda: "https://ramdajs.com/favicon.ico",
      RxJS: "https://rxjs.dev/favicon.ico",
      "Moment.js": "https://momentjs.com/favicon.ico",
      "Day.js": "https://day.js.org/favicon.ico",
      "Date-fns": "https://date-fns.org/favicon.ico",
      Luxon: "https://moment.github.io/luxon/favicon.ico",
      Axios: "https://axios-http.com/favicon.ico",
      Fetch: "https://developer.mozilla.org/favicon.ico",
      Superagent: "https://visionmedia.github.io/superagent/favicon.ico",
      Got: "https://github.com/sindresorhus/got/raw/main/media/logo.svg",
      "Node Fetch": "https://www.npmjs.com/favicon.ico",
      Undici: "https://undici.nodejs.org/favicon.ico",
      Recharts: "https://recharts.org/favicon.ico",
      Victory: "https://formidable.com/favicon.ico",
      Nivo: "https://nivo.rocks/favicon.ico",
      Plotly: "https://plotly.com/favicon.ico",
      Highcharts: "https://www.highcharts.com/favicon.ico",
      ApexCharts: "https://apexcharts.com/favicon.ico",
      "Chart.js": "https://www.chartjs.org/favicon.ico",
      Visx: "https://airbnb.io/visx/favicon.ico",
      "Observable Plot": "https://observablehq.com/favicon.ico",
      Leaflet: "https://leafletjs.com/favicon.ico",
      Mapbox: "https://www.mapbox.com/favicon.ico",
      "Google Maps": "https://www.google.com/favicon.ico",
      OpenLayers: "https://openlayers.org/favicon.ico",
      Cesium: "https://cesium.com/favicon.ico",
      "Deck.gl": "https://deck.gl/favicon.ico",
      "React Map GL": "https://visgl.github.io/react-map-gl/favicon.ico",
      "React Leaflet": "https://react-leaflet.js.org/favicon.ico",
      "Google Maps React": "https://www.google.com/favicon.ico",
      "React Native Maps": "https://github.com/react-native-maps/react-native-maps/raw/master/logo.png",
      Lottie: "https://airbnb.design/favicon.ico",
      "React Spring": "https://www.react-spring.io/favicon.ico",
      "React Transition Group": "https://reactcommunity.org/favicon.ico",
      "React Pose": "https://popmotion.io/favicon.ico",
      Popmotion: "https://popmotion.io/favicon.ico",
      GSAP: "https://greensock.com/favicon.ico",
      "Anime.js": "https://animejs.com/favicon.ico",
      "Velocity.js": "http://velocityjs.org/favicon.ico",
      "Mo.js": "https://mojs.github.io/favicon.ico",
      "Barba.js": "https://barba.js.org/favicon.ico",
      AOS: "https://michalsnik.github.io/aos/favicon.ico",
      "Wow.js": "https://wowjs.uk/favicon.ico",
      "Animate.css": "https://animate.style/favicon.ico",
      "Hover.css": "http://ianlunn.github.io/Hover/favicon.ico",
      "Magic Animations": "https://www.minimamente.com/favicon.ico",
      CSShake: "https://elrumordelaluz.github.io/csshake/favicon.ico",
      "Bounce.js": "http://bouncejs.com/favicon.ico",
      "Kute.js": "https://thednp.github.io/kute.js/favicon.ico",
      "Tween.js": "https://tweenjs.github.io/tween.js/favicon.ico",
      "React Beautiful DnD": "https://github.com/atlassian/react-beautiful-dnd/raw/master/logo/logo-small.png",
      "React DnD": "https://react-dnd.github.io/react-dnd/favicon.ico",
      "React Sortable HOC": "https://github.com/clauderic/react-sortable-hoc/raw/master/logo/logo-small.png",
      "React Draggable": "https://github.com/react-grid-layout/react-draggable/raw/master/example/example.gif",
      "React Resizable": "https://github.com/react-grid-layout/react-resizable/raw/master/example/example.gif",
      "React Grid Layout": "https://github.com/react-grid-layout/react-grid-layout/raw/master/screenshot.png",
      "React Window": "https://react-window.vercel.app/favicon.ico",
      "React Virtualized": "https://bvaughn.github.io/react-virtualized/favicon.ico",
      "React Virtual": "https://tanstack.com/favicon.ico",
      "React Infinite Scroller": "https://github.com/danbovey/react-infinite-scroller/raw/master/demo/demo.gif",
      "React Waypoint": "https://github.com/civiccc/react-waypoint/raw/master/logo.png",
      "React Intersection Observer":
        "https://github.com/thebuilder/react-intersection-observer/raw/master/story/logo.svg",
      "React Use": "https://github.com/streamich/react-use/raw/master/docs/logo.png",
      "React Hooks Lib": "https://github.com/beizhedenglong/react-hooks-lib/raw/master/logo.png",
      Ahooks: "https://ahooks.js.org/favicon.ico",
      "React Helmet": "https://github.com/nfl/react-helmet/raw/master/logo.png",
      "React Helmet Async": "https://github.com/staylor/react-helmet-async/raw/master/logo.png",
      "React Meta Tags": "https://github.com/s-yadav/react-meta-tags/raw/master/logo.png",
      "React Document Title": "https://github.com/gaearon/react-document-title/raw/master/logo.png",
      "React Hot Toast": "https://react-hot-toast.com/favicon.ico",
      "React Toastify": "https://fkhadra.github.io/react-toastify/favicon.ico",
      "React Toast Notifications": "https://github.com/jossmac/react-toast-notifications/raw/master/logo.png",
      Notistack: "https://notistack.com/favicon.ico",
      "React Notifications Component": "https://github.com/teodosii/react-notifications-component/raw/master/logo.png",
      "React Modal": "https://github.com/reactjs/react-modal/raw/master/logo.png",
      "React Portal": "https://github.com/tajo/react-portal/raw/master/logo.png",
      "React Overlays": "https://github.com/react-bootstrap/react-overlays/raw/master/logo.png",
      "React Popper": "https://github.com/popperjs/react-popper/raw/master/logo.png",
      "React Tooltip": "https://github.com/wwayne/react-tooltip/raw/master/logo.png",
      "React Tippy": "https://github.com/tvkhoa/react-tippy/raw/master/logo.png",
      "React Popover": "https://github.com/littlebits/react-popover/raw/master/logo.png",
      "React Dropdown": "https://github.com/fraserxu/react-dropdown/raw/master/logo.png",
      "React Select": "https://react-select.com/favicon.ico",
      "React Autosuggest": "https://github.com/moroshko/react-autosuggest/raw/master/logo.png",
      "React Autocomplete": "https://github.com/reactjs/react-autocomplete/raw/master/logo.png",
      "React Typeahead": "https://github.com/ericgio/react-bootstrap-typeahead/raw/master/logo.png",
      "React Mentions": "https://github.com/signavio/react-mentions/raw/master/logo.png",
      "React Textarea Autosize": "https://github.com/Andarist/react-textarea-autosize/raw/master/logo.png",
      "React Input Mask": "https://github.com/sanniassin/react-input-mask/raw/master/logo.png",
      "React Number Format": "https://github.com/s-yadav/react-number-format/raw/master/logo.png",
      "React Currency Input Field": "https://github.com/cchanxzy/react-currency-input-field/raw/master/logo.png",
      "React Phone Number Input": "https://github.com/catamphetamine/react-phone-number-input/raw/master/logo.png",
      "React OTP Input": "https://github.com/devfolioco/react-otp-input/raw/master/logo.png",
      "React PIN Input": "https://github.com/arunghosh/react-pin-input/raw/master/logo.png",
      "React Code Input": "https://github.com/40818419/react-code-input/raw/master/logo.png",
      "React Verification Input": "https://github.com/andreaswilli/react-verification-input/raw/master/logo.png",
      "React Color": "https://github.com/casesandberg/react-color/raw/master/logo.png",
      "React Colorful": "https://github.com/omgovich/react-colorful/raw/master/logo.svg",
      "React Color Palette": "https://github.com/vkbansal/react-color-palette/raw/master/logo.png",
      "React Sketch": "https://github.com/tbolis/react-sketch/raw/master/logo.png",
      "React Canvas Draw": "https://github.com/embiem/react-canvas-draw/raw/master/logo.png",
      "React Signature Canvas": "https://github.com/agilgur5/react-signature-canvas/raw/master/logo.png",
      "React Signature Pad": "https://github.com/michaeldzjap/react-signature-pad-wrapper/raw/master/logo.png",
      "React Webcam": "https://github.com/mozmorris/react-webcam/raw/master/logo.png",
      "React Camera": "https://github.com/laurenashpole/react-camera-pro/raw/master/logo.png",
      "React QR Code": "https://github.com/zpao/qrcode.react/raw/master/logo.png",
      "React Barcode": "https://github.com/kciter/react-barcode/raw/master/logo.png",
      "React QR Scanner": "https://github.com/JodusNodus/react-qr-scanner/raw/master/logo.png",
      "React QR Reader": "https://github.com/JodusNodus/react-qr-reader/raw/master/logo.png",
      "React Dropzone": "https://github.com/react-dropzone/react-dropzone/raw/master/logo/logo.png",
      "React File Upload": "https://github.com/odysseyscience/react-s3-uploader/raw/master/logo.png",
      "React Filepond": "https://github.com/pqina/react-filepond/raw/master/logo.png",
      "React Uploader": "https://github.com/rpldy/react-uploady/raw/master/logo.png",
      "React Fine Uploader": "https://github.com/FineUploader/react-fine-uploader/raw/master/logo.png",
      "React Avatar Editor": "https://github.com/mosch/react-avatar-editor/raw/master/logo.png",
      "React Image Crop": "https://github.com/DominicTobias/react-image-crop/raw/master/logo.png",
      "React Easy Crop": "https://github.com/ricardo-ch/react-easy-crop/raw/master/logo.png",
      "React Image Gallery": "https://github.com/xiaolin/react-image-gallery/raw/master/logo.png",
      "React Image Lightbox": "https://github.com/frontend-collective/react-image-lightbox/raw/master/logo.png",
      "React Images": "https://github.com/jossmac/react-images/raw/master/logo.png",
      "React Photo Gallery": "https://github.com/neptunian/react-photo-gallery/raw/master/logo.png",
      "React Masonry CSS": "https://github.com/paulcollett/react-masonry-css/raw/master/logo.png",
      "React Masonry Component": "https://github.com/eiriklv/react-masonry-component/raw/master/logo.png",
      "React Grid Gallery": "https://github.com/benhowell/react-grid-gallery/raw/master/logo.png",
      "React Justified Layout": "https://github.com/flickr/justified-layout/raw/master/logo.png",
      "React Lazy Load Image Component":
        "https://github.com/Aljullu/react-lazy-load-image-component/raw/master/logo.png",
      "React Lazyload": "https://github.com/twobin/react-lazyload/raw/master/logo.png",
      "React Intersection Observer":
        "https://github.com/thebuilder/react-intersection-observer/raw/master/story/logo.svg",
      "React Visibility Sensor": "https://github.com/joshwnj/react-visibility-sensor/raw/master/logo.png",
      "React In Viewport": "https://github.com/roderickhsiao/react-in-viewport/raw/master/logo.png",
      "React On Screen": "https://github.com/fkhadra/react-on-screen/raw/master/logo.png",
      "React Waypoint": "https://github.com/civiccc/react-waypoint/raw/master/logo.png",
      "React Scroll": "https://github.com/fisshy/react-scroll/raw/master/logo.png",
      "React Scrollspy": "https://github.com/makotot/react-scrollspy-nav/raw/master/logo.png",
      "React Scrollspy Nav": "https://github.com/makotot/react-scrollspy-nav/raw/master/logo.png",
      "React Sticky": "https://github.com/captivationsoftware/react-sticky/raw/master/logo.png",
      "React Stickynode": "https://github.com/yahoo/react-stickynode/raw/master/logo.png",
      "React Sticky Box": "https://github.com/codecks-io/react-sticky-box/raw/master/logo.png",
      "React Sticky Header": "https://github.com/bharatzz/react-sticky-header/raw/master/logo.png",
      "React Headroom": "https://github.com/KyleAMathews/react-headroom/raw/master/logo.png",
      "React Parallax": "https://github.com/rrutsche/react-parallax/raw/master/logo.png",
      "React Parallax Component": "https://github.com/keske/react-parallax-component/raw/master/logo.png",
      "React Parallax Tilt": "https://github.com/mkosir/react-parallax-tilt/raw/master/logo.png",
      "React Tilt": "https://github.com/jonathandion/react-tilt/raw/master/logo.png",
      "React Mouse Parallax": "https://github.com/suhailsulu/react-mouse-parallax/raw/master/logo.png",
      "React Reveal": "https://github.com/rnosov/react-reveal/raw/master/logo.png",
      "React Fade In": "https://github.com/joshwcomeau/react-fade-in/raw/master/logo.png",
      "React Transition Group": "https://reactcommunity.org/favicon.ico",
      "React Flip Move": "https://github.com/joshwcomeau/react-flip-move/raw/master/logo.png",
      "React Move": "https://github.com/sghall/react-move/raw/master/logo.png",
      "React Motion": "https://github.com/chenglou/react-motion/raw/master/logo.png",
      "React Spring": "https://www.react-spring.io/favicon.ico",
      "React Use Gesture": "https://github.com/pmndrs/react-use-gesture/raw/master/logo.png",
      "React Use Measure": "https://github.com/pmndrs/react-use-measure/raw/master/logo.png",
      "React Resize Detector": "https://github.com/maslianok/react-resize-detector/raw/master/logo.png",
      "React Element Resize Detector": "https://github.com/wnr/element-resize-detector/raw/master/logo.png",
      "React Measure": "https://github.com/souporserious/react-measure/raw/master/logo.png",
      "React Dimensions": "https://github.com/digidem/react-dimensions/raw/master/logo.png",
      "React Container Dimensions": "https://github.com/okonet/react-container-dimensions/raw/master/logo.png",
      "React Size Me": "https://github.com/ctrlplusb/react-sizeme/raw/master/logo.png",
      "React Component Size": "https://github.com/renatorib/react-component-size/raw/master/logo.png",
      "React Element Size": "https://github.com/jaredLunde/react-element-size/raw/master/logo.png",
      "React Use Size": "https://github.com/jaredLunde/react-use-size/raw/master/logo.png",
      "React Use Dimensions": "https://github.com/Swizec/useDimensions/raw/master/logo.png",
      "React Use Bounding Client Rect":
        "https://github.com/bmcmahen/react-use-bounding-client-rect/raw/master/logo.png",
      "React Use Element Size": "https://github.com/jaredLunde/react-use-element-size/raw/master/logo.png",
      "React Use Resize Observer": "https://github.com/ZeeCoder/use-resize-observer/raw/master/logo.png",
      "React Use Media": "https://github.com/streamich/react-use/raw/master/docs/logo.png",
      "React Use Breakpoint": "https://github.com/imbhargav5/rooks/raw/master/logo.png",
      "React Responsive": "https://github.com/contra/react-responsive/raw/master/logo.png",
      "React Device Detect": "https://github.com/duskload/react-device-detect/raw/master/logo.png",
      "React User Agent": "https://github.com/quentin-sommer/react-useragent/raw/master/logo.png",
      "React Browser Detection": "https://github.com/KyleAMathews/react-browser-detection/raw/master/logo.png",
      "React Is Mobile": "https://github.com/kaimallea/isMobile/raw/master/logo.png",
      "React Mobile Detect": "https://github.com/hgoebl/mobile-detect.js/raw/master/logo.png",
      "React Touch": "https://github.com/scurker/react-touch/raw/master/logo.png",
      "React Swipeable": "https://github.com/dogfessional/react-swipeable/raw/master/logo.png",
      "React Swipe": "https://github.com/voronianski/react-swipe/raw/master/logo.png",
      "React Swiper": "https://swiperjs.com/favicon.ico",
      "React Slick": "https://github.com/akiran/react-slick/raw/master/logo.png",
      "React Alice Carousel": "https://github.com/maxmarinich/react-alice-carousel/raw/master/logo.png",
      "React Responsive Carousel": "https://github.com/leandrowd/react-responsive-carousel/raw/master/logo.png",
      "React Multi Carousel": "https://github.com/YIZHUANG/react-multi-carousel/raw/master/logo.png",
      "React Elastic Carousel": "https://github.com/sag1v/react-elastic-carousel/raw/master/logo.png",
      "React Awesome Slider": "https://github.com/rcaferati/react-awesome-slider/raw/master/logo.png",
      "React Image Slider": "https://github.com/littlebits/react-image-slider/raw/master/logo.png",
      "React Pure Carousel": "https://github.com/aaronvanston/react-pure-carousel/raw/master/logo.png",
      "React Carousel": "https://github.com/brainhubeu/react-carousel/raw/master/logo.png",
      "React Flickity": "https://github.com/theolampert/react-flickity-component/raw/master/logo.png",
      "React Glide": "https://github.com/jedrzejchalubek/glidejs/raw/master/logo.png",
      "React Splide": "https://github.com/Splidejs/react-splide/raw/master/logo.png",
      "React Keen Slider": "https://github.com/rcbyr/keen-slider/raw/master/logo.png",
      "React Tiny Slider": "https://github.com/ganlanyuan/tiny-slider/raw/master/logo.png",
      "React Owl Carousel": "https://github.com/florinn/react-owl-carousel2/raw/master/logo.png",
      "React Bootstrap Carousel": "https://github.com/react-bootstrap/react-bootstrap/raw/master/logo.png",
      "React Material UI Carousel": "https://github.com/Learus/react-material-ui-carousel/raw/master/logo.png",
      "React Ant Design Carousel": "https://github.com/ant-design/ant-design/raw/master/logo.png",
      "React Semantic UI Carousel": "https://github.com/Semantic-Org/Semantic-UI-React/raw/master/logo.png",
      "React Foundation Carousel": "https://github.com/digiaonline/react-foundation/raw/master/logo.png",
      "React Bulma Carousel": "https://github.com/couds/react-bulma-components/raw/master/logo.png",
      "React Chakra UI Carousel": "https://github.com/chakra-ui/chakra-ui/raw/master/logo.png",
      "React Mantine Carousel": "https://github.com/mantinedev/mantine/raw/master/logo.png",
      "React Next UI Carousel": "https://github.com/nextui-org/nextui/raw/master/logo.png",
      "React Arco Design Carousel": "https://github.com/arco-design/arco-design/raw/master/logo.png",
      "React Semi Design Carousel": "https://github.com/DouyinFE/semi-design/raw/master/logo.png",
      "React Tdesign Carousel": "https://github.com/Tencent/tdesign-react/raw/master/logo.png",
      "React Rsuite Carousel": "https://github.com/rsuite/rsuite/raw/master/logo.png",
      "React Antd Mobile Carousel": "https://github.com/ant-design/ant-design-mobile/raw/master/logo.png",
      "React Vant Carousel": "https://github.com/3lang3/react-vant/raw/master/logo.png",
      "React Taroify Carousel": "https://github.com/mallfoundry/taroify/raw/master/logo.png",
      "React NutUI Carousel": "https://github.com/jdf2e/nutui-react/raw/master/logo.png",
      "React Zarm Carousel": "https://github.com/ZhongAnTech/zarm/raw/master/logo.png",
      "React Quark Design Carousel": "https://github.com/hellof2e/quark-design/raw/master/logo.png",
      "React Varlet Carousel": "https://github.com/varletjs/varlet/raw/master/logo.png",
      "React DevUI Carousel": "https://github.com/DevCloudFE/react-devui/raw/master/logo.png",
      "React Fast Carousel": "https://github.com/microsoft/fast/raw/master/logo.png",
      "React Fluent UI Carousel": "https://github.com/microsoft/fluentui/raw/master/logo.png",
      "React Carbon Carousel": "https://github.com/carbon-design-system/carbon/raw/master/logo.png",
      "React Spectrum Carousel": "https://github.com/adobe/react-spectrum/raw/master/logo.png",
      "React Atlaskit Carousel": "https://github.com/atlassian/atlaskit-mk-2/raw/master/logo.png",
      "React Polaris Carousel": "https://github.com/Shopify/polaris-react/raw/master/logo.png",
      "React Garden Carousel": "https://github.com/zendeskgarden/react-components/raw/master/logo.png",
      "React Evergreen Carousel": "https://github.com/segmentio/evergreen/raw/master/logo.png",
      "React Grommet Carousel": "https://github.com/grommet/grommet/raw/master/logo.png",
      "React Rebass Carousel": "https://github.com/rebassjs/rebass/raw/master/logo.png",
      "React Theme UI Carousel": "https://github.com/system-ui/theme-ui/raw/master/logo.png",
      "React Styled System Carousel": "https://github.com/styled-system/styled-system/raw/master/logo.png",
      "React Emotion Carousel": "https://github.com/emotion-js/emotion/raw/master/logo.png",
      "React Styled Components Carousel": "https://github.com/styled-components/styled-components/raw/master/logo.png",
      "React JSS Carousel": "https://github.com/cssinjs/jss/raw/master/logo.png",
      "React Aphrodite Carousel": "https://github.com/Khan/aphrodite/raw/master/logo.png",
      "React Glamorous Carousel": "https://github.com/paypal/glamorous/raw/master/logo.png",
      "React Fela Carousel": "https://github.com/robinweser/fela/raw/master/logo.png",
      "React Radium Carousel": "https://github.com/FormidableLabs/radium/raw/master/logo.png",
      "React Stitches Carousel": "https://github.com/modulz/stitches/raw/master/logo.png",
      "React Vanilla Extract Carousel": "https://github.com/seek-oss/vanilla-extract/raw/master/logo.png",
      "React Linaria Carousel": "https://github.com/callstack/linaria/raw/master/logo.png",
      "React Compiled Carousel": "https://github.com/atlassian-labs/compiled/raw/master/logo.png",
      "React Twin Macro Carousel": "https://github.com/ben-rogerson/twin.macro/raw/master/logo.png",
      "React Goober Carousel": "https://github.com/cristianbote/goober/raw/master/logo.png",
      "React Otion Carousel": "https://github.com/kripod/otion/raw/master/logo.png",
      "React Treat Carousel": "https://github.com/seek-oss/treat/raw/master/logo.png",
      "React CSS Modules Carousel": "https://github.com/css-modules/css-modules/raw/master/logo.png",
      "React PostCSS Carousel": "https://github.com/postcss/postcss/raw/master/logo.png",
      "React Autoprefixer Carousel": "https://github.com/postcss/autoprefixer/raw/master/logo.png",
      "React PurgeCSS Carousel": "https://github.com/FullHuman/purgecss/raw/master/logo.png",
      "React Critical Carousel": "https://github.com/addyosmani/critical/raw/master/logo.png",
      "React UnCSS Carousel": "https://github.com/uncss/uncss/raw/master/logo.png",
      "React CSS Tree Shaking Carousel":
        "https://github.com/webpack-contrib/webpack-bundle-analyzer/raw/master/logo.png",
      "React Bundle Analyzer Carousel":
        "https://github.com/webpack-contrib/webpack-bundle-analyzer/raw/master/logo.png",
      "React Source Map Explorer Carousel": "https://github.com/danvk/source-map-explorer/raw/master/logo.png",
      "React Bundle Stats Carousel": "https://github.com/relative-ci/bundle-stats/raw/master/logo.png",
      "React Size Limit Carousel": "https://github.com/ai/size-limit/raw/master/logo.png",
      "React Bundlephobia Carousel": "https://github.com/pastelsky/bundlephobia/raw/master/logo.png",
      "React Package Phobia Carousel": "https://github.com/styfle/packagephobia/raw/master/logo.png",
      "React Cost of Modules Carousel": "https://github.com/siddharthkp/cost-of-modules/raw/master/logo.png",
      "React Import Cost Carousel": "https://github.com/wix/import-cost/raw/master/logo.png",
      "React Bundle Buddy Carousel": "https://github.com/samccone/bundle-buddy/raw/master/logo.png",
      "React Webpack Monitor Carousel": "https://github.com/webpackmonitor/webpackmonitor/raw/master/logo.png",
      "React Webpack Dashboard Carousel": "https://github.com/FormidableLabs/webpack-dashboard/raw/master/logo.png",
      "React Webpack Visualizer Carousel": "https://github.com/chrisbateman/webpack-visualizer/raw/master/logo.png",
      "React Webpack Chart Carousel": "https://github.com/alexkuz/webpack-chart/raw/master/logo.png",
      "React Webpack Analyse Carousel": "https://github.com/webpack/analyse/raw/master/logo.png",
      "React Webpack Bundle Tracker Carousel":
        "https://github.com/django-webpack/webpack-bundle-tracker/raw/master/logo.png",
      "React Webpack Stats Plugin Carousel":
        "https://github.com/FormidableLabs/webpack-stats-plugin/raw/master/logo.png",
      "React Webpack Bundle Size Analyzer Carousel":
        "https://github.com/robertknight/webpack-bundle-size-analyzer/raw/master/logo.png",
      "React Webpack Unused Carousel": "https://github.com/tomchentw/webpack-unused/raw/master/logo.png",
      "React Webpack Duplicate Package Checker Carousel":
        "https://github.com/darrenscerri/duplicate-package-checker-webpack-plugin/raw/master/logo.png",
      "React Webpack Circular Dependency Plugin Carousel":
        "https://github.com/aackerman/circular-dependency-plugin/raw/master/logo.png",
      "React Webpack Bundle Analyzer Carousel":
        "https://github.com/webpack-contrib/webpack-bundle-analyzer/raw/master/logo.png",
      "React Webpack Speed Measure Plugin Carousel":
        "https://github.com/stephencookdev/speed-measure-webpack-plugin/raw/master/logo.png",
      "React Webpack Build Notifier Carousel": "https://github.com/RoccoC/webpack-build-notifier/raw/master/logo.png",
      "React Webpack Progress Plugin Carousel": "https://github.com/webpack/webpack/raw/master/logo.png",
      "React Webpack Dashboard Plugin Carousel":
        "https://github.com/FormidableLabs/webpack-dashboard/raw/master/logo.png",
      "React Webpack Notifier Carousel": "https://github.com/Turbo87/webpack-notifier/raw/master/logo.png",
      "React Webpack System Bell Plugin Carousel":
        "https://github.com/cherrry/webpack-system-bell-plugin/raw/master/logo.png",
      "React Webpack Sounds Plugin Carousel": "https://github.com/jdmota/webpack-sounds-plugin/raw/master/logo.png",
      "React Webpack Done Plugin Carousel": "https://github.com/ericclemmons/webpack-done-plugin/raw/master/logo.png",
      "React Webpack Success Plugin Carousel":
        "https://github.com/unindented/webpack-success-plugin/raw/master/logo.png",
      "React Webpack Fail Plugin Carousel": "https://github.com/TiddoLangerak/webpack-fail-plugin/raw/master/logo.png",
      "React Webpack Error Plugin Carousel":
        "https://github.com/guerrerocarlos/webpack-error-plugin/raw/master/logo.png",
      "React Webpack Warning Plugin Carousel":
        "https://github.com/mattlewis92/webpack-warning-plugin/raw/master/logo.png",
      "React Webpack Info Plugin Carousel": "https://github.com/unindented/webpack-info-plugin/raw/master/logo.png",
      "React Webpack Log Plugin Carousel": "https://github.com/unindented/webpack-log-plugin/raw/master/logo.png",
      "React Webpack Debug Plugin Carousel": "https://github.com/unindented/webpack-debug-plugin/raw/master/logo.png",
      "React Webpack Verbose Plugin Carousel":
        "https://github.com/unindented/webpack-verbose-plugin/raw/master/logo.png",
      "React Webpack Quiet Plugin Carousel": "https://github.com/unindented/webpack-quiet-plugin/raw/master/logo.png",
      "React Webpack Silent Plugin Carousel": "https://github.com/unindented/webpack-silent-plugin/raw/master/logo.png",
      "React Webpack Mute Plugin Carousel": "https://github.com/unindented/webpack-mute-plugin/raw/master/logo.png",
      "React Webpack Suppress Plugin Carousel":
        "https://github.com/unindented/webpack-suppress-plugin/raw/master/logo.png",
      "React Webpack Hide Plugin Carousel": "https://github.com/unindented/webpack-hide-plugin/raw/master/logo.png",
      "React Webpack Ignore Plugin Carousel": "https://github.com/unindented/webpack-ignore-plugin/raw/master/logo.png",
      "React Webpack Skip Plugin Carousel": "https://github.com/unindented/webpack-skip-plugin/raw/master/logo.png",
      "React Webpack Exclude Plugin Carousel":
        "https://github.com/unindented/webpack-exclude-plugin/raw/master/logo.png",
      "React Webpack Filter Plugin Carousel": "https://github.com/unindented/webpack-filter-plugin/raw/master/logo.png",
      "React Webpack Remove Plugin Carousel": "https://github.com/unindented/webpack-remove-plugin/raw/master/logo.png",
      "React Webpack Delete Plugin Carousel": "https://github.com/unindented/webpack-delete-plugin/raw/master/logo.png",
      "React Webpack Clean Plugin Carousel": "https://github.com/johnagan/clean-webpack-plugin/raw/master/logo.png",
      "React Webpack Clear Plugin Carousel": "https://github.com/unindented/webpack-clear-plugin/raw/master/logo.png",
      "React Webpack Reset Plugin Carousel": "https://github.com/unindented/webpack-reset-plugin/raw/master/logo.png",
      "React Webpack Fresh Plugin Carousel": "https://github.com/unindented/webpack-fresh-plugin/raw/master/logo.png",
      "React Webpack New Plugin Carousel": "https://github.com/unindented/webpack-new-plugin/raw/master/logo.png",
      "React Webpack Start Plugin Carousel": "https://github.com/unindented/webpack-start-plugin/raw/master/logo.png",
      "React Webpack Begin Plugin Carousel": "https://github.com/unindented/webpack-begin-plugin/raw/master/logo.png",
    }

    // Return a default icon if no specific logo is found
    return techLogos[tech] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
  }

  const technologies = getAllTechnologies(project)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation - Same as homepage */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={playHover}
                onClick={playClick}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <LazyImage src="/images/logo.png" alt="Thaw Zin Aung" className="w-full h-full object-cover" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-semibold text-black dark:text-white">THAW ZIN AUNG</h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Web Designer & Developer</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.id}>
                  <Link href={item.href}>
                    <motion.button
                      className={`text-sm font-medium transition-colors hover:text-[#7391c8] ${
                        activeSection === item.id ? "text-[#7391c8]" : "text-gray-700 dark:text-gray-300"
                      }`}
                      whileHover={{ y: -2 }}
                      onMouseEnter={playHover}
                      onClick={playClick}
                    >
                      {item.label}
                    </motion.button>
                  </Link>
                </div>
              ))}
            </div>

            {/* Theme & Sound Controls */}
            <div className="flex items-center gap-2">
              {/* Sound Toggle Button */}
              <SoundButton
                isSoundEnabled={isSoundEnabled}
                onToggle={toggleSound}
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              />

              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={playHover}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-gray-600" />}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen)
                  playClick()
                }}
                className="md:hidden w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={playHover}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.id}>
                    <Link href={item.href}>
                      <motion.button
                        className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#7391c8] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                        whileHover={{ x: 4 }}
                        onMouseEnter={playHover}
                        onClick={() => {
                          playClick()
                          setIsMenuOpen(false)
                        }}
                      >
                        {item.label}
                      </motion.button>
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/works">
              <Button
                variant="ghost"
                className="text-gray-600 dark:text-gray-400 hover:text-[#7391c8] p-0"
                onMouseEnter={playHover}
                onClick={playClick}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Works
              </Button>
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.header
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{project.title}</h1>

            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 mb-8">
              <p className="text-xl leading-relaxed">{project.description}</p>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.completedAt}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Category</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.category}</p>
              </div>
              {project.client && (
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Client</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.client}</p>
                </div>
              )}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Links</h3>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      onClick={() => {
                        playClick()
                        window.open(project.liveUrl, "_blank")
                      }}
                      className="bg-[#7391c8] hover:bg-[#5f7ab8] text-white h-8 px-3 text-xs"
                      onMouseEnter={playHover}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Site
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        playClick()
                        window.open(project.githubUrl, "_blank")
                      }}
                      className="h-8 px-3 text-xs border-gray-300 dark:border-gray-600"
                      onMouseEnter={playHover}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.header>

          {/* Hero Image */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <LazyImage src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Tech Stack */}
          {technologies.length > 0 && (
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tech Stack</h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 mb-6">
                <p className="leading-relaxed">
                  This project leveraged modern web technologies to create a robust and scalable solution. The tech
                  stack was carefully chosen to balance performance, developer experience, and maintainability.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge
                    key={tech}
                    className={`px-4 py-2 text-sm font-medium border flex items-center gap-2 ${getTechBadgeColor(index)}`}
                  >
                    <img
                      src={getTechLogo(tech) || "/placeholder.svg"}
                      alt={`${tech} logo`}
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.section>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7391c8] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Problems and Thought Process */}
          {project.challenges && project.challenges.length > 0 && (
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Problems and Thought Process</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
                    <p className="leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Solutions */}
          {project.solutions && project.solutions.length > 0 && (
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Solutions</h2>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <div key={index} className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
                    <p className="leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Lessons Learned */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Lessons Learned</h2>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
              <p className="leading-relaxed">
                Every project brings valuable insights and learning opportunities. This project reinforced the
                importance of user-centered design, iterative development, and the power of modern web technologies in
                creating engaging digital experiences. The challenges faced during development led to creative solutions
                and a deeper understanding of the problem domain.
              </p>
            </div>
          </motion.section>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Other Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {otherProjects.map((otherProject) => (
                  <Link key={otherProject.id} href={`/works/${otherProject.id}`}>
                    <div className="group cursor-pointer" onMouseEnter={playHover} onClick={playClick}>
                      <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-lg">
                        <LazyImage
                          src={otherProject.image}
                          alt={otherProject.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#7391c8] transition-colors">
                        {otherProject.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{otherProject.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* Call to Action */}
          <motion.section
            className="text-center py-16 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Build Something Together</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Interested in working together? I'm always open to discussing new opportunities and creative challenges.
            </p>
            <Link href="/#contact">
              <Button
                className="bg-[#7391c8] hover:bg-[#5f7ab8] text-white px-8 py-3 text-lg"
                onMouseEnter={playHover}
                onClick={playClick}
              >
                Get In Touch
              </Button>
            </Link>
          </motion.section>
        </article>
      </main>
    </div>
  )
}
