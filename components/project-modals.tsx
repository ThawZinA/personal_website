"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects, type Project } from "../data/projects"
import { LazyImage } from "./lazy-image"
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react"
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
                {project.tools.slice(0, 3).map((tool) => (
                  <Badge
                    key={tool}
                    variant="outline"
                    className="text-xs font-mono border-2 border-black dark:border-white bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                    style={{ boxShadow: "1px 1px 0px rgba(0,0,0,0.2)" }}
                  >
                    {tool}
                  </Badge>
                ))}
                {project.tools.length > 3 && (
                  <Badge
                    variant="outline"
                    className="text-xs font-mono border-2 border-black dark:border-white bg-white dark:bg-gray-800"
                    style={{ boxShadow: "1px 1px 0px rgba(0,0,0,0.2)" }}
                  >
                    +{project.tools.length - 3}
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
  return (
    <>
      <div className="flex items-center gap-3 mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBackToProjects}
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 border-2 border-black dark:border-white font-mono font-bold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.3)" }}
          aria-label="Go back to projects gallery"
        >
          <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
          Back to Projects
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6 font-mono">
        <div
          className="flex items-center gap-1 bg-white dark:bg-gray-800 px-3 py-1 border-2 border-black dark:border-white"
          style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}
        >
          <Calendar className="w-4 h-4" aria-hidden="true" />
          <span className="font-bold">{project.year}</span>
        </div>
        {project.client && (
          <div
            className="flex items-center gap-1 bg-white dark:bg-gray-800 px-3 py-1 border-2 border-black dark:border-white"
            style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}
          >
            <User className="w-4 h-4" aria-hidden="true" />
            <span className="font-bold">{project.client}</span>
          </div>
        )}
        <Badge
          variant="secondary"
          className="bg-[#7391c8] text-white border-2 border-black dark:border-white font-mono font-bold px-3 py-1"
          style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.3)" }}
        >
          {project.category}
        </Badge>
      </div>

      <div className="space-y-8">
        {/* Project Image */}
        <div
          className="w-full h-64 md:h-80 overflow-hidden border-4 border-black dark:border-white"
          style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
        >
          <LazyImage
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} detailed project view`}
            className="w-full h-full object-cover object-top pixel-art bg-gray-100 dark:bg-gray-700"
          />
        </div>

        {/* Project Description */}
        <div
          className="bg-white dark:bg-gray-800 p-6 border-4 border-black dark:border-white"
          style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
        >
          <h3 className="text-xl font-bold mb-3 text-black dark:text-white font-mono tracking-wider border-b-2 border-black dark:border-white pb-2">
            📖 About This Project
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-mono">{project.description}</p>
        </div>

        {/* Tools Used */}
        <div
          className="bg-white dark:bg-gray-800 p-6 border-4 border-black dark:border-white"
          style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
        >
          <h3 className="text-xl font-bold mb-3 text-black dark:text-white font-mono tracking-wider border-b-2 border-black dark:border-white pb-2">
            🛠️ Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used in this project">
            {project.tools.map((tool) => (
              <Badge
                key={tool}
                variant="outline"
                className="px-3 py-1 text-sm border-2 border-black dark:border-white bg-gray-100 dark:bg-gray-700 hover:bg-[#7391c8] hover:text-white transition-colors duration-200 font-mono font-bold"
                style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}
                role="listitem"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div
          className="bg-white dark:bg-gray-800 p-6 border-4 border-black dark:border-white"
          style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
        >
          <h3 className="text-xl font-bold mb-3 text-black dark:text-white font-mono tracking-wider border-b-2 border-black dark:border-white pb-2">
            ⭐ Key Features
          </h3>
          <ul className="space-y-2" role="list" aria-label="Key features of this project">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-gray-700 dark:text-gray-300 font-mono"
                role="listitem"
              >
                <span className="text-[#7391c8] mt-1 font-bold" aria-hidden="true">
                  ▶
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges & Solution */}
        {/* <div className="grid md:grid-cols-2 gap-6">
          <div
            className="bg-red-50 dark:bg-red-900/20 p-6 border-4 border-black dark:border-white"
            style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          >
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white font-mono tracking-wider border-b-2 border-black dark:border-white pb-2">
              ⚠️ Challenges
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-mono">{project.challenges}</p>
          </div>
          <div
            className="bg-green-50 dark:bg-green-900/20 p-6 border-4 border-black dark:border-white"
            style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          >
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white font-mono tracking-wider border-b-2 border-black dark:border-white pb-2">
              ✅ Solution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-mono">{project.solution}</p>
          </div>
        </div> */}

        {/* Project Link */}
        {project.url && (
          <div className="flex justify-center pt-4">
            <Button
              asChild
              className="bg-[#7391c8] hover:bg-[#5f7ab8] dark:bg-[#5f7ab8] dark:hover:bg-[#4a6ba3] text-white border-4 border-black dark:border-white font-mono font-bold px-6 py-3 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.4)" }}
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live project (opens in new tab)`}
              >
                <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />🚀 View Live Project
              </Link>
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
