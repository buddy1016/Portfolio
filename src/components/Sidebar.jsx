"use client"

import { useState } from "react"
// import { Download, Mail, MapPin, Phone } from "lucide-react"
import {
  FileText,
  Briefcase,
  Award,
  Newspaper,
  FolderOpen,
  Mail,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Phone,
  X,
  MapPin,
} from "lucide-react"
import { Button } from "./ui/button"
import SkillBadge from "./SkillBadge"

function Sidebar({ activeSection, setActiveSection, closeSidebar }) {
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = [
    { id: "Home", label: "Home", icon: FileText },
    { id: "Experience", label: "Experience", icon: Briefcase },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "Skills", label: "Skills", icon: Briefcase },
    { id: "Projects", label: "Projects", icon: Newspaper },
    { id: "contact", label: "Contact", icon: Mail },

  ]

  const skills = ["React", "JavaScript", "Metasploit", "Tailwind CSS", "Node.js", "Burpsuite", "Wireshark"]

  const handleMenuClick = (id) => {
    setActiveSection(id)
    // On mobile, close the sidebar after selection
    if (window.innerWidth < 768) {
      closeSidebar()
    }
  }

  return (
    <div
      className={`relative ${collapsed ? "w-20" : "w-72"
        } h-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl transition-all duration-300 flex flex-col mr-0 md:mr-4 overflow-hidden shadow-xl`}
    >
      {/* Mobile close button - only visible on small screens */}
      <button className="absolute top-2 right-2 p-1 rounded-full bg-zinc-800 md:hidden" onClick={closeSidebar}>
        <X size={16} />
      </button>

      {/* Collapse toggle button - hidden on mobile */}
      <button
        className="absolute -right-3 top-8 z-10 bg-blue-500 rounded-full p-1 text-white shadow-lg hidden md:block"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <div className={`flex flex-col space-y-4 items-center py-8 ${collapsed ? "px-2" : "px-6"}`}>

        <div className={`flex flex-col items-center py-8 ${collapsed ? "px-2" : "px-6"}`}>
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
              <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-zinc-900"></div>
          </div>
          {!collapsed && (
            <>
              <h2 className="mt-4 text-lg font-bold">Robert Jackson</h2>
              <p className="text-sm text-zinc-400">Full stack Developer</p>

              <div className="flex gap-2 mt-4">
                <a href="https://github.com/initials101" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/initials101"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white"
                >
                  <Linkedin size={18} />
                </a>

              </div>
            </>
          )}
        </div>
      </div>
      {/* WhatsApp contact button */}
      <div className={`px-4 mb-4 ${collapsed ? "flex justify-center" : ""}`}>
        <Button
          className={`${collapsed ? "w-12 h-12 p-0 rounded-full" : "w-full"
            } bg-green-500 hover:bg-green-600 flex items-center justify-center gap-2`}
          onClick={() => window.open("https://wa.me/+254112395869", "_blank")}
        >
          <Phone size={collapsed ? 20 : 16} />
          {!collapsed && <span>WhatsApp Me</span>}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <button
                  className={`w-full flex items-center ${collapsed ? "justify-center" : "justify-start"
                    } gap-3 px-3 py-2.5 rounded-lg transition-colors ${activeSection === item.id
                      ? "bg-blue-500 text-white"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    }`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  <Icon size={18} />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Skills section */}
      {/* {!collapsed && ( */}
      <div className="px-4 py-4 border-t border-zinc-800">
        <h3 className="text-sm font-medium text-zinc-400 mb-3">Address</h3>
        <div className="flex flex-wrap gap-2">
          {/* {skills.map((skill, index) => (
              <SkillBadge key={index} name={skill} small />
            ))} */}
          <div className="flex flex-col gap-2 text-zinc-400">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>g35816339@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+254112395869</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Jurong, Singapore</span>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  )
}

export default Sidebar
