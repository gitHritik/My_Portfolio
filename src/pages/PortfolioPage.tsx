import Navbar from './../components/Navbar';
import Sidebar from './../components/Sidebar';
import Hero from './../components/Hero';
import Skils from './../components/Skils';

function PortfolioPage() {

    return (
        <div className="max-w-6xl mx-auto text-white pt-6">
            {/* Main content will be rendered here */}
            <Navbar />
            <Sidebar />
            <Hero />
            <Skils />
        </div>
    );
}

export default PortfolioPage;
