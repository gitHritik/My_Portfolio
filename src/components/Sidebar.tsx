import { Github, Code, FileText, Linkedin } from 'lucide-react';

function Sidebar() {
    return (
        <aside className="bg-gray-100/30 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-3xl flex flex-col items-center gap-6 p-4">
            {/* Profile */}
            <div className="w-52 h-52 rounded-full border-2 border-dashed border-gray-400 dark:border-gray-700 flex items-center justify-center bg-gray-200 dark:bg-gray-950 mb-4 text-8xl">
                👻
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Hritik Chouhan</h2>

            {/* Links */}
            <div className="flex flex-col gap-3 w-full">
                <a
                    href="https://github.com/gitHritik"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-200/30 dark:bg-gray-800/30 border border-gray-300 dark:border-gray-800 rounded-xl hover:bg-gray-300/50 dark:hover:bg-gray-800/50 hover:border-gray-400 dark:hover:border-gray-700 transition text-gray-900 dark:text-white"
                >
                    <Github size={18} /> Github
                </a>
                <a
                    href="https://leetcode.com/u/Hritik_Ch"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-200/30 dark:bg-gray-800/30 border border-gray-300 dark:border-gray-800 rounded-xl hover:bg-gray-300/50 dark:hover:bg-gray-800/50 hover:border-gray-400 dark:hover:border-gray-700 transition text-gray-900 dark:text-white"
                >
                    <Code size={18} /> LeetCode
                </a>
                <a
                    href="https://drive.google.com/file/d/1vghXMRlzBtdCksvAp9SOIT19D2VIym1o/view?usp=sharing"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-200/30 dark:bg-gray-800/30 border border-gray-300 dark:border-gray-800 rounded-xl hover:bg-gray-300/50 dark:hover:bg-gray-800/50 hover:border-gray-400 dark:hover:border-gray-700 transition text-gray-900 dark:text-white"
                >
                    <FileText size={18} /> Resume
                </a>
                <a
                    href="https://www.linkedin.com/in/hritik-chouhan-0522051b6"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-200/30 dark:bg-gray-800/30 border border-gray-300 dark:border-gray-800 rounded-xl hover:bg-gray-300/50 dark:hover:bg-gray-800/50 hover:border-gray-400 dark:hover:border-gray-700 transition text-gray-900 dark:text-white"
                >
                    <Linkedin size={18} /> LinkedIn
                </a>
            </div>
        </aside>
    );
}

export default Sidebar;
