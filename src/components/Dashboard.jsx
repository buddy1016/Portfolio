import Home from "./sections/Home"
import Experience from "./sections/Experience"
import Certifications from "./sections/Certifications"
// import Blog from "./sections/Blog"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Skills from "./sections/Skills"

function Dashboard({ activeSection }) {
  return (
    <div className="h-full overflow-hidden bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-800 shadow-xl">
      <div className="h-full overflow-y-auto p-3 sm:p-6">
        <div className="max-w-5xl mx-auto py-2 sm:py-4">
          {activeSection === "Home" && <Home />}
          {activeSection === "Skills" && <Skills />}
          {activeSection === "Experience" && <Experience />}
          {activeSection === "certifications" && <Certifications />}
          {activeSection === "Projects" && <Projects />}
          {activeSection === "contact" && <Contact />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
