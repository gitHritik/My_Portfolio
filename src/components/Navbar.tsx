import { Home, Briefcase, Laptop, Mail, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    // Load saved mode from localStorage or default to dark
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved ? saved === "true" : true;
    });

    // Apply dark/light mode globally and save to localStorage
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        const navbarHeight = 80;
        if (section) {
            const yOffset = -navbarHeight;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <nav className="sticky top-0 flex justify-between items-center px-8 py-3 bg-gray-200/30 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-300 dark:border-gray-800 z-50 rounded-2xl mx-31">
            <a
                href="https://www.linkedin.com/in/hritik-chouhan-0522051b6"
                target="_blank"
                className="flex items-center gap-3"
            >
                <h1 className="text-base font-medium px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white hover:bg-gray-300/50 dark:hover:bg-gray-800/50 transition">
                    @hritik-chouhan
                </h1>
            </a>

            <div className="flex items-center gap-2">
                {[
                    { id: "home", label: "Home", icon: <Home size={18} /> },
                    { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
                    { id: "work", label: "Work", icon: <Laptop size={18} /> },
                    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleScroll(item.id)}
                        className="flex items-center border border-gray-300 dark:border-gray-800 gap-2 px-4 py-2 rounded-lg text-gray-900 dark:text-white hover:bg-gray-300/50 dark:hover:bg-gray-800/50 transition"
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 border border-gray-300 cursor-pointer dark:border-gray-800 rounded-lg text-gray-900 dark:text-white hover:bg-gray-300/50 dark:hover:bg-gray-800/50 transition ml-2"
                >
                    {darkMode ? <Moon size={18} /> : <Sun size={18} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
