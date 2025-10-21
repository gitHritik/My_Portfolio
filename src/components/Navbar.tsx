import { Home, Briefcase, Laptop, Mail, Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved ? saved === "true" : true;
    });
    const [isAtTop, setIsAtTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY <= 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = -80;
            const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setMenuOpen(false); // Close menu on navigation (for mobile)
        }
    };

    return (
        <nav
            className={`sticky transition-all duration-500 z-50 flex justify-between items-center px-6 md:px-8 py-3 
            bg-gray-200/30 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-300 dark:border-gray-800 
            ${isAtTop ? "top-10 mx-4 md:mx-8 rounded-2xl" : "top-0 mx-0 rounded-none shadow-md border-b"} `}
        >
            {/* Left - Name */}
            <a
                href="https://www.linkedin.com/in/hritik-chouhan-0522051b6"
                target="_blank"
                className="flex items-center gap-3"
            >
                <h1 className="text-sm md:text-base font-medium px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white hover:bg-gray-300/50 dark:hover:bg-gray-800/50 transition">
                    @hritik-chouhan
                </h1>
            </a>

            {/* Right Section */}
            <div className="flex items-center gap-2">
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    {[
                        { id: "home", label: "Home", icon: <Home size={18} /> },
                        { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
                        { id: "work", label: "Work", icon: <Laptop size={18} /> },
                        { id: "contact", label: "Contact", icon: <Mail size={18} /> },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-lg 
                            text-gray-900 dark:text-white hover:bg-gray-300/50 dark:hover:bg-gray-800/50 transition"
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>

                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 border border-gray-300 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white hover:bg-gray-300/50 dark:hover:bg-gray-800/50 transition ml-2"
                >
                    {darkMode ? <Moon size={18} /> : <Sun size={18} />}
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="ml-2 p-2 border border-gray-300 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white hover:bg-gray-300/50 dark:hover:bg-gray-800/50 transition md:hidden"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-200/95 dark:bg-gray-900/95 border-t border-gray-300 dark:border-gray-800 flex flex-col items-start gap-2 p-4 md:hidden z-40 backdrop-blur-sm">
                    {[
                        { id: "home", label: "Home", icon: <Home size={18} /> },
                        { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
                        { id: "work", label: "Work", icon: <Laptop size={18} /> },
                        { id: "contact", label: "Contact", icon: <Mail size={18} /> },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white hover:bg-gray-300/50 dark:hover:bg-gray-800/50 transition"
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
