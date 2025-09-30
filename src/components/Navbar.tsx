import { Home, Briefcase, Laptop, Mail, Moon } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="sticky top-0 flex justify-between items-center px-8 py-3 bg-gray-950 backdrop-blur-sm border border-gray-800 rounded-2xl">
            <h1 className="text-base font-medium px-4 py-2 border border-gray-800 rounded-lg">@hritik-chouhan</h1>

            <div className="flex items-center gap-2">
                <a href="#home" className="flex items-center border border-gray-800 gap-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    <Home size={18} />
                    <span>Home</span>
                </a>
                <a href="#projects" className="flex items-center border border-gray-800 gap-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    <Briefcase size={18} />
                    <span>Projects</span>
                </a>
                <a href="#work" className="flex items-center border border-gray-800 gap-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    <Laptop size={18} />
                    <span>Work</span>
                </a>
                <a href="#contact" className="flex items-center border border-gray-800 gap-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    <Mail size={18} />
                    <span>Contact</span>
                </a>
                <button className="p-2 border border-gray-800 rounded-lg hover:bg-gray-800 transition ml-2">
                    <Moon size={18} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar;
