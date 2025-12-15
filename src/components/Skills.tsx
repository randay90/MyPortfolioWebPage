import React from 'react'

interface Skill {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: 'Languages & Frameworks',
    items: ['C#', 'Python', 'JavaScript/TypeScript', 'React.js', 'Node.js', 'ASP.NET MVC'],
  },
  {
    category: 'DevOps & Infrastructure',
    items: ['Azure', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Azure DevOps', 'DataDog', 'Dynatrace'],
  },
  {
    category: 'Automation & Databases',
    items: ['UiPath', 'Automation Anywhere', 'MSSQL', 'Entity Framework', 'RESTful APIs'],
  },
  {
    category: 'Development Tools',
    items: ['Visual Studio 2026', 'VS Code', 'Postman', 'Azure Data Studio', 'Git'],
  },
]

export default function Skills(): React.ReactElement {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          The tools and technologies I use to build amazing web applications.
        </p>

        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skill-card">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((item) => (
                  <li key={item} className="skill-item">
                    <span className="skill-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
