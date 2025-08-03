"use client"

import { lazy, Suspense } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LoadingSpinner } from "./loading-spinner"
import type { Project } from "../data/projects"

const ProjectsListModal = lazy(() =>
  import("./project-modals").then((module) => ({ default: module.ProjectsListModal })),
)

const ProjectDetailModal = lazy(() =>
  import("./project-modals").then((module) => ({ default: module.ProjectDetailModal })),
)

interface ProjectModalsLazyProps {
  showProjectsModal: boolean
  showProjectDetailModal: boolean
  selectedProject: Project | null
  onProjectClick: (project: Project) => void
  onBackToProjects: () => void
  onCloseAllModals: () => void
  onShowProjectsModal: (show: boolean) => void
}

export function ProjectModalsLazy({
  showProjectsModal,
  showProjectDetailModal,
  selectedProject,
  onProjectClick,
  onBackToProjects,
  onCloseAllModals,
  onShowProjectsModal,
}: ProjectModalsLazyProps) {
  return (
    <>
      {/* Projects List Modal */}
      <Dialog open={showProjectsModal} onOpenChange={onShowProjectsModal}>
        <DialogContent
          className="max-w-6xl max-h-[90vh] overflow-hidden bg-white dark:bg-gray-800 border-4 border-black dark:border-white focus:outline-none"
          style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.4)" }}
          role="dialog"
          aria-labelledby="projects-modal-title"
        >
          <DialogHeader className="bg-[#4a5568] dark:bg-[#2d3748] border-b-4 border-black dark:border-white">
            <DialogTitle id="projects-modal-title" className="font-mono font-bold tracking-wider">
              🎮 MY PROJECTS
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] bg-gray-50 dark:bg-gray-900">
            <Suspense fallback={<LoadingSpinner size="lg" />}>
              <ProjectsListModal onProjectClick={onProjectClick} />
            </Suspense>
          </div>
        </DialogContent>
      </Dialog>

      {/* Project Detail Modal */}
      <Dialog open={showProjectDetailModal} onOpenChange={onCloseAllModals}>
        <DialogContent
          className="max-w-4xl max-h-[90vh] overflow-hidden bg-white dark:bg-gray-800 border-4 border-black dark:border-white focus:outline-none"
          style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.4)" }}
          role="dialog"
          aria-labelledby="project-detail-title"
        >
          {selectedProject && (
            <>
              <DialogHeader className="bg-[#4a5568] dark:bg-[#2d3748] border-b-4 border-black dark:border-white">
                <DialogTitle id="project-detail-title" className="font-mono font-bold tracking-wider">
                  📋 {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] bg-gray-50 dark:bg-gray-900">
                <Suspense fallback={<LoadingSpinner size="lg" />}>
                  <ProjectDetailModal project={selectedProject} onBackToProjects={onBackToProjects} />
                </Suspense>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
