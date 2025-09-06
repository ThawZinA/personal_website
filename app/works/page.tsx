"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, ExternalLink, Github, Calendar, User } from "lucide-react"
import Link from "next/link"
import { LazyImage } from "../../components/lazy-image"
import { Navigation } from "../../components/navigation"
import { Footer } from "../../components/footer"
import { useSoundEffects } from "../../hooks/useSoundEffects"
import { projects, getAllCategories } from "../../data/projects"

export default function WorksPage() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const { playHover, playClick } = useSoundEffects(isSoundEnabled)

  useEffect(() => {
    const savedSound = localStorage.getItem("soundEnabled")
    if (savedSound !== null) {
      setIsSoundEnabled(savedSound === "true")
    }
  }, [])

  useEffect(() => {
    let filtered = projects

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((project) => project.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredProjects(filtered)
  }, [searchTerm, selectedCategory])

  const toggleSound = () => {
    const newSoundState = !isSoundEnabled
    setIsSoundEnabled(newSoundState)
    localStorage.setItem("soundEnabled", newSoundState.toString())
  }

  const categories = getAllCategories()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation isSoundEnabled={isSoundEnabled} onToggleSound={toggleSound} />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                My <span className="text-primary">Works</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                A collection of projects I've worked on, ranging from web applications to mobile apps and everything in
                between. Each project represents a unique challenge and learning opportunity.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{projects.length} Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{categories.length} Categories</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Filter className="w-4 h-4" />
                  <span>Filter by:</span>
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48 border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              className="mt-6 text-sm text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Showing {filteredProjects.length} of {projects.length} projects
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <motion.div
                  key="projects-grid"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link href={`/works/${project.id}`}>
                        <Card
                          className="group cursor-pointer bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full"
                          onMouseEnter={playHover}
                          onClick={playClick}
                        >
                          <CardContent className="p-0 h-full flex flex-col">
                            <div className="aspect-video overflow-hidden rounded-t-lg">
                              <LazyImage
                                src={project.image}
                                alt={`${project.title} preview`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                              <div className="flex items-center justify-between mb-3">
                                <Badge
                                  variant="secondary"
                                  className="bg-primary/10 text-primary border border-primary/20"
                                >
                                  {project.category}
                                </Badge>
                                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                  <Calendar className="w-3 h-3" />
                                  <span>{project.completedAt.split("-")[0]}</span>
                                </div>
                              </div>

                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                              </h3>

                              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                                {project.description}
                              </p>

                              {project.client && (
                                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-3">
                                  <User className="w-3 h-3" />
                                  <span>{project.client}</span>
                                </div>
                              )}

                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.slice(0, 3).map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="outline"
                                    className="text-xs border-gray-300 dark:border-gray-600"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                                {project.tags.length > 3 && (
                                  <Badge variant="outline" className="text-xs border-gray-300 dark:border-gray-600">
                                    +{project.tags.length - 3}
                                  </Badge>
                                )}
                              </div>

                              <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex gap-2">
                                  {project.liveUrl && (
                                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                      <ExternalLink className="w-3 h-3" />
                                      <span>Live</span>
                                    </div>
                                  )}
                                  {project.githubUrl && (
                                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                      <Github className="w-3 h-3" />
                                      <span>Code</span>
                                    </div>
                                  )}
                                </div>
                                {project.featured && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs bg-yellow-100 text-yellow-800 border-yellow-200"
                                  >
                                    Featured
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  className="text-center py-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No projects found</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("all")
                      playClick()
                    }}
                    onMouseEnter={playHover}
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Have a Project in Mind?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                I'm always excited to work on new and challenging projects. Let's discuss how we can bring your ideas to
                life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-[#5f7ab8] text-white px-8"
                    onMouseEnter={playHover}
                    onClick={playClick}
                  >
                    Start a Project
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 bg-transparent"
                    onMouseEnter={playHover}
                    onClick={playClick}
                  >
                    Learn More About Me
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
