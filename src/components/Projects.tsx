import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Claim-Based Application (HCA)',
    description:
      'Engineered a full-stack hospital claim management application using Entity Framework for ORM. Built with React.js frontend and C# backend, hosted on Azure cloud services with GitHub Actions CI/CD pipeline.',
    technologies: ['React.js', 'C#', 'ASP.NET MVC', 'Entity Framework', 'Azure', 'GitHub Actions'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'RPA Automation Solutions (Vanderbilt)',
    description:
      'Developed enterprise-scale RPA solutions using UiPath and Automation Anywhere to automate critical business processes. Created custom task-bots with Python and Automation Anywhere for department-specific workflows.',
    technologies: ['UiPath', 'Automation Anywhere', 'Python', 'Visual Studio', 'ASP.NET'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Financial Data Infrastructure (Wealth Access)',
    description:
      'Optimizing ETL feed processing and sanitizing banking data. Implemented application performance monitoring with DataDog, tracking database server activity across development environments to ensure robust and scalable data flow.',
    technologies: ['DataDog', 'ETL', 'Azure', 'MSSQL', 'DevOps'],
    link: '#',
    github: '#',
  },
]

export default function Projects(): React.ReactElement {
  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects and experiments.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.link && (
                  <a href={project.link} className="project-link">
                    Live <FaExternalLinkAlt />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} className="project-link">
                    Code <FaGithub />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
