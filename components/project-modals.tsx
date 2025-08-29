"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects, type Project } from "../data/projects"
import { LazyImage } from "./lazy-image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectsListModalProps {
  onProjectClick: (project: Project) => void
}

export function ProjectsListModal({ onProjectClick }: ProjectsListModalProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="grid" aria-label="Projects gallery">
      {projects.map((project) => (
        <Card
          key={project.id}
          onClick={() => onProjectClick(project)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              onProjectClick(project)
            }
          }}
          className="cursor-pointer bg-white dark:bg-gray-800 border-4 border-black dark:border-white transition-all duration-300 hover:scale-105 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
          style={{
            boxShadow: "4px 4px 0px rgba(0,0,0,0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "6px 6px 0px rgba(0,0,0,0.4)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "4px 4px 0px rgba(0,0,0,0.3)"
          }}
          tabIndex={0}
          role="gridcell"
          aria-label={`View ${project.title} project details. ${project.shortDescription}`}
        >
          <CardContent className="p-0">
            <div className="h-48 overflow-hidden border-b-4 border-black dark:border-white">
              <LazyImage
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} project preview`}
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 pixel-art bg-gray-100 dark:bg-gray-700"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Badge
                  variant="secondary"
                  className="text-xs bg-[#7391c8] text-white border-2 border-black dark:border-white font-mono font-bold px-2 py-1"
                  style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.3)" }}
                >
                  {project.category}
                </Badge>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono font-bold bg-gray-200 dark:bg-gray-700 px-2 py-1 border-2 border-black dark:border-white">
                  {project.year}
                </span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-black dark:text-white font-mono tracking-wider">
                {project.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 font-mono">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs font-mono border-2 border-black dark:border-white bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                    style={{ boxShadow: "1px 1px 0px rgba(0,0,0,0.2)" }}
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge
                    variant="outline"
                    className="text-xs font-mono border-2 border-black dark:border-white bg-white dark:bg-gray-800"
                    style={{ boxShadow: "1px 1px 0px rgba(0,0,0,0.2)" }}
                  >
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

interface ProjectDetailModalProps {
  project: Project
  onBackToProjects: () => void
}

export function ProjectDetailModal({ project, onBackToProjects }: ProjectDetailModalProps) {
  // Choose two other projects for the "Other Projects" section
  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2)

  return (
    <article className="space-y-10">
      {/* Back */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBackToProjects}
          className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 font-mono"
          aria-label="Go back to projects gallery"
        >
          <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
          Back to Projects
        </Button>
      </div>

      {/* Intro + Meta */}
      <section aria-labelledby="intro-title" className="space-y-6">
        <div className="space-y-2">
          <h2 id="intro-title" className="text-2xl md:text-3xl font-semibold tracking-tight text-black dark:text-white">
            {project.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-3xl">
            {project.shortDescription || project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="rounded border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
            <div className="text-gray-500 dark:text-gray-400">Year</div>
            <div className="font-medium text-gray-900 dark:text-gray-100">{project.year}</div>
          </div>
          <div className="rounded border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
            <div className="text-gray-500 dark:text-gray-400">Type</div>
            <div className="font-medium text-gray-900 dark:text-gray-100">{project.category}</div>
          </div>
          <div className="rounded border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
            <div className="text-gray-500 dark:text-gray-400">Client</div>
            <div className="font-medium text-gray-900 dark:text-gray-100">{project.client ?? "—"}</div>
          </div>
          <div className="rounded border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
            <div className="text-gray-500 dark:text-gray-400">Live</div>
            <div className="font-medium">
              {project.url ? (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#5f7ab8] hover:text-[#4a6ba3] underline"
                  aria-label={`Open ${project.title} live link in a new tab`}
                >
                  Visit <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </Link>
              ) : (
                <span className="text-gray-400">Not published</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Browser mockup hero */}
      <section aria-label="Project preview" className="space-y-4">
        <div className="rounded-lg border-2 border-gray-300 dark:border-gray-600 overflow-hidden bg-gray-100 dark:bg-gray-800">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <div className="ml-3 h-6 flex-1 rounded bg-gray-100 dark:bg-gray-800" />
          </div>
          {/* Image */}
          <div className="bg-gray-200 dark:bg-gray-700">
            <LazyImage
              src={project.image || "/placeholder.svg?height=640&width=1024&query=project%20hero"}
              alt={`${project.title} hero screenshot`}
              className="w-full h-[340px] md:h-[420px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Purpose + Stack */}
      <section className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">Project Purpose and Goal</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-300">{project.description}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">Web Stack and Explanation</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
            Below is the core stack used to implement this project. Tools were chosen for developer experience,
            performance, and the project&apos;s delivery timeline.
          </p>
          <div className="mt-4 space-y-4">
            {project.technologies.frontend && project.technologies.frontend.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.frontend.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-2 border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {project.technologies.backend && project.technologies.backend.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.backend.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-2 border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {project.technologies.database && project.technologies.database.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Database</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.database.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-2 border-purple-300 dark:border-purple-600 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {project.technologies.tools && project.technologies.tools.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tools & Services</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.tools.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-2 border-orange-300 dark:border-orange-600 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Small mockups grid */}
      <section aria-label="Interface previews" className="grid md:grid-cols-2 gap-8">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
          <LazyImage
            src={project.image || "/placeholder.svg?height=420&width=720&query=interface%20preview%201"}
            alt={`${project.title} interface preview 1`}
            className="w-full h-56 object-cover bg-gray-100 dark:bg-gray-800"
          />
          <div className="p-4">
            <h4 className="text-sm font-semibold">Home / Primary View</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              The primary user flow focuses on clarity and quick access to the most important actions.
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
          <LazyImage
            src={project.image || "/placeholder.svg?height=420&width=720&query=interface%20preview%202"}
            alt={`${project.title} interface preview 2`}
            className="w-full h-56 object-cover bg-gray-100 dark:bg-gray-800"
          />
          <div className="p-4">
            <h4 className="text-sm font-semibold">Blog / Content</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Content pages are designed with generous spacing and readable typographic scales.
            </p>
          </div>
        </div>
      </section>

      {/* Problems and Thought Process */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-black dark:text-white">Problems and Thought Process</h3>
        <p className="text-sm leading-7 text-gray-700 dark:text-gray-300">
          We identified key trade-offs between performance, design fidelity, and delivery speed. The solution was to
          build a modular UI system and incrementally enhance interactions. The features list below captures core areas
          that guided the architecture and UX decisions.
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      {/* Large product/page mockup */}
      <section aria-label="Detailed page view" className="space-y-4">
        <div className="rounded-lg border-2 border-gray-300 dark:border-gray-600 overflow-hidden bg-gray-100 dark:bg-gray-800">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <div className="ml-3 h-6 flex-1 rounded bg-gray-100 dark:bg-gray-800" />
          </div>
          <div className="bg-gray-200 dark:bg-gray-700">
            <LazyImage
              src={project.image || "/placeholder.svg?height=640&width=1024&query=detailed%20product%20page"}
              alt={`${project.title} detailed page screenshot`}
              className="w-full h-[360px] md:h-[460px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-black dark:text-white">Lessons Learned</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
            <h4 className="font-medium mb-2">Challenges</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {project.challenges ||
                "Balancing feature richness with simplicity, accessibility, and brand consistency."}
            </p>
          </div>
          <div className="rounded border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
            <h4 className="font-medium mb-2">Solutions</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {project.solution ||
                "Iterated with usability testing, created a composable component system, and optimized delivery."}
            </p>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section aria-labelledby="other-projects" className="space-y-4">
        <h3 id="other-projects" className="text-lg font-semibold text-black dark:text-white">
          Other Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((p) => (
            <div
              key={p.id}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
            >
              <LazyImage
                src={p.image || "/placeholder.svg?height=240&width=400&query=other%20project"}
                alt={`${p.title} preview`}
                className="w-full h-40 object-cover bg-gray-100 dark:bg-gray-800"
              />
              <div className="p-4">
                <h4 className="text-sm font-semibold">{p.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{p.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-900/60">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-black dark:text-white">Let&apos;s Build Something Together</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
          </div>
          <Button asChild className="bg-[#7391c8] hover:bg-[#5f7ab8] text-white">
            <Link href="#contact" aria-label="Go to contact section">
              Get in touch
            </Link>
          </Button>
        </div>
      </section>
    </article>
  )
}
