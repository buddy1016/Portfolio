import { Briefcase } from "lucide-react"

function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Innovate Digital Group",
      period: "2021 - Present",
      description:
        "Worked on HTML, JavaScript and Python development projects, with a focus ondata fetching and cleansing.",
      technologies: [],
    },
    {
      title: "Senior Full Stack Developer",
      company: "Innovate Digital Group",
      period: "2021 - present",
      description:
        "Implemented RESTful APIs and optimized integration between backend systems and front-end interfaces.",
      technologies: ["React", "TypeScript", "Django", "Node.js"],
    },
    {
      title: "Senior Full Stack Developer",
      company: "Innovate Digital Group",
      period: "2021 - present",
      description:
        "Built smart contracts and blockchain solutions for secure transactions and decentralized apps",
      technologies: ["Solidity", "Rust", "JavaScript", "Go"],
    },
    {
      title: "Senior Full Stack Developer",
      company: "Innovate Digital Group",
      period: "2021 - present",
      description:
        "Integrated Shopify and Laravel for e-commerce and content management solutions.",
      technologies: ["Shopify", "Laravel"],
    },
    {
      title: "Web Developer",
      company: "Accenture",
      period: "Dec 2017 - Jan 2020",
      description:
        "Worked on web development projects using HTML and JavaScript. Gained Python skills on the job",
      technologies: [],
    },
    {
      title: "Web Developer",
      company: "Accenture",
      period: "Dec 2017 - Jan 2020",
      description:
        "Contributed to backend development in Python and Django, ensuring the efficiency and scalability of the system.",
      technologies: ["Python", "Django", "Django REST Framework (DRF)	", "ORM & Database", "Version Control	"],
    },
    {
      title: "Web Developer",
      company: "Accenture",
      period: "Dec 2017 - Jan 2020",
      description:
        "Collaborated with the team on integrating blockchain technologies to provide innovative decentralized solutions.",
      technologies: ["Python", "Smart Contracts", "Ethereum", "Solidity"],
    }
  ]

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Work Experience</h2>

      <div className="relative border-l-2 border-purple-600 pl-4 sm:pl-8 ml-2 sm:ml-4 space-y-8 sm:space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[11px] sm:-left-12 mt-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center">
              <Briefcase size={14} />
            </div>

            {/* Content */}
            <div className="bg-zinc-900 rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="text-lg sm:text-xl font-bold">{exp.title}</h3>
                <span className="text-purple-400 font-medium text-sm sm:text-base">{exp.period}</span>
              </div>

              <p className="text-zinc-400 mb-2">{exp.company}</p>
              <p className="mb-4 text-sm sm:text-base">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
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

export default Experience
