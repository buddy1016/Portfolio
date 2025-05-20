
"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "../ui/button"

function Proejcts() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Shopify",
      description: "Poko tasked me with converting their InVision design into a Shopify template, resembling the Prestige theme but requiring customizations to fit their needs.",
      image: "projects/Shopify.png",
      category: "web",
      technologies: ["Shopify Templates", "Shopify",],
      demoLink: "#",
    },
    {
      title: "Cyber Coffee",
      description: "Web prototype for managing a PC service room",
      image: "projects/vue.png",
      category: "web",
      technologies: ["Vue.js", "Javascript", "Google cloud Platform"],
      demoLink: "#",
    },
    {
      title: "TSS Pro",
      description: "We develop a comprehensive taxidermy management platform for the fishing industry, integrating tracking, billing, invoicing, and subscription-based access for seamless operations.",
      image: "projects/tss.png",
      category: "web",
      technologies: ["Laravel", "Web API", "React.js", "MySql"],
      demoLink: "#",
      githubLink: "https://github.com/initials101/mpesaAPI",
    },
    {
      title: "React.js + Python",
      description: "aKube.ai offers AI-powered teammates designed to transform the way engineering, Project Management and DevOps teams manage workflows, track projects, and troubleshoot issues. ",
      image: "projects/Python.png",
      category: "app",
      technologies: ["Python", "ML", "React.js", "AI", "Next.js"],
      demoLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "This is my portfolio website to showcase my talent and skilly Happy coding!!",
      image: "projects/portfolio.png",
      category: "app",
      technologies: ["React", "TailwindCSS"],
      demoLink: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Portfolio</h2>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          className={`rounded-full text-sm ${filter === "all" ? "bg-blue-500 hover:bg-purple-700" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "web" ? "default" : "outline"}
          className={`rounded-full text-sm ${filter === "web" ? "bg-blue-500 hover:bg-purple-700" : ""}`}
          onClick={() => setFilter("web")}
        >
          Web
        </Button>
        <Button
          variant={filter === "app" ? "default" : "outline"}
          className={`rounded-full text-sm ${filter === "app" ? "bg-blue-500 hover:bg-purple-700" : ""}`}
          onClick={() => setFilter("app")}
        >
          Apps
        </Button>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg group">
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg?height=300&width=600"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
                
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-zinc-400 mb-4 line-clamp-2 text-sm sm:text-base">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Proejcts
