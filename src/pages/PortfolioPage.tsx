import Navbar from './../components/Navbar';
import Sidebar from './../components/Sidebar';
import Hero from './../components/Hero';
import Projects from '../components/Projects';
import Skills from './../components/Skils';
import Experience from './../components/Experience';
import Contact from './../components/Contact';

function PortfolioPage() {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Main layout */}
            <div className="max-w-6xl mx-auto px-6 flex gap-10 pt-6">
                {/* Sidebar */}
                <aside className="w-80 sticky top-24 self-start h-fit">
                    <Sidebar />
                </aside>

                {/* Main content */}
                <main className="flex-1 flex flex-col gap-16">
                    <Hero />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Contact />
                </main>
            </div>
        </>
    );
}

export default PortfolioPage;
