import { Github, Code, FileText, Linkedin } from 'lucide-react';



function Sidebar() {
    return (
        <aside className="fixed top-32 w-80 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl ">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-8">
                <div className="w-52 h-52 rounded-full border-2 border-dashed border-gray-700 flex items-center justify-center bg-gray-950 mb-4">
                    <div className="text-center">
                        <div className="text-8xl">👻</div>
                    </div>
                </div>
                <h2 className="text-lg font-semibold">Hritik Chouhan</h2>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
                <a
                    href="https://github.com/gitHritik"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-800/30 border border-gray-800 rounded-xl hover:bg-gray-800/50 hover:border-gray-700 transition"
                >
                    <Github size={18} />
                    <span>Github</span>
                </a>
                <a
                    href="https://leetcode.com/u/Hritik_Ch"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-800/30 border border-gray-800 rounded-xl hover:bg-gray-800/50 hover:border-gray-700 transition"
                >
                    <Code size={18} />
                    <span>LeetCode</span>
                </a>
                <a
                    href="#resume"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-800/30 border border-gray-800 rounded-xl hover:bg-gray-800/50 hover:border-gray-700 transition"
                >
                    <FileText size={18} />
                    <span>Resume</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/hritik-chouhan-0522051b6"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-800/30 border border-gray-800 rounded-xl hover:bg-gray-800/50 hover:border-gray-700 transition"
                >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                </a>
            </div>
        </aside>
    )
}

export default Sidebar