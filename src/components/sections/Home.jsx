
import { Download } from "lucide-react"

function Home() {
    return (
        <div className="space-y-24">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2">Robert Jackson</h1>
                    <h2 className="text-xl text-purple-400 mb-4">Full stack developer</h2>
                </div>

                <a
                    href="/resume.pdf"
                    download="RESUME_Robert.pdf"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none bg-blue-500 text-white hover:bg-purple-700 px-4 py-2"
                >
                    <Download size={16} className="mr-2" />
                    Download CV
                </a>
            </div>

    

            <div>
                <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">About Me</h3>
                <p className="text-zinc-400 leading-relaxed">
                    Experienced Full Stack Developer with over 7 years specializing in React,
                    Angular, Blockchain,Vue.js and Typescript .
                    Also Proven expertise in Python, Django, PostgreSQL, SQL/NOSQL .
                    With this, I have driven key frontend projects with a focus on user experience and performance optimization.
                    I can solve complex backend challenges.
                    Adept at working in Agile and cloud-based environments.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">Education</h3>
                <div className="space-y-4">
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h4 className="font-bold">Master of Science in Computer Science</h4>
                            <span className="text-purple-400">2016 - 2018</span>
                        </div>
                        <p className="text-zinc-400">University of Texas</p>
                    </div>

                </div>
            </div>
{/* 
            <div>
                <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">Strengths</h3>
                <div className="space-y-4">
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h4 className="font-bold">Critical Thinking</h4>
                        </div>
                        <p className="text-zinc-400">Effectively used critical thinking to
                            troubleshoot and solve challenging
                            development problems.</p>
                    </div>

                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h4 className="font-bold">Communication</h4>
                        </div>
                        <p className="text-zinc-400">successfully communicated technical data
                            complications and helped the team to
                            overcome them.</p>
                    </div>

                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h4 className="font-bold">Teamwork</h4>
                        </div>
                        <p className="text-zinc-400">Collaborated with development team to
                            deliver over 10 successful projects within
                            given deadlines.</p>
                    </div>
                </div>
            </div> */}

            {/* <div>
                <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">Certifications</h3>
                <div className="space-y-4">
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h4 className="font-bold">Python for Data Science</h4>
                        </div>
                        <p className="text-zinc-400">A specialized course conducted by Coursera that
                            focused on Python development for data science
                            applications.</p>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h4 className="font-bold">Data Structures and Algorithms</h4>
                        </div>
                        <p className="text-zinc-400">An intensive course offered by Udacity that targeted
                            understanding of key data structures and algorithms.</p>
                    </div>

                </div>
            </div> */}


        </div>
    )
}

// function SkillBar({ name, percentage }) {
//     return (
//         <div>
//             <div className="flex justify-between mb-1">
//                 <span>{name}</span>
//                 <span>{percentage}%</span>
//             </div>
//             <div className="w-full bg-zinc-800 rounded-full h-2">
//                 <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
//             </div>
//         </div>
//     )
// }

// function ToolIcon({ name, icon }) {
//     return (
//         <div className="bg-zinc-900 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center">
//             <div className="mb-2">{icon}</div>
//             <h4 className="text-xs sm:text-sm">{name}</h4>
//         </div>
//     )
// }

export default Home
