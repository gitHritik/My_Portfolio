function Hero() {
    return (
        <section id="home" className="ml-4 mr-4 mt-4 px-4 sm:px-6 md:px-10 py-4">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-5 leading-tight text-gray-900 dark:text-white">
                Building the Future of Web, Mobile & AI
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-5 md:mb-6 font-medium">
                Full-Stack Developer | React Native Developer | AI Enthusiast
            </h2>

            {/* Bio */}
            <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base mb-8 md:mb-10 max-w-4xl leading-relaxed">
                👋 Hi, I'm <span className="font-semibold">Hritik Chouhan</span>, a passionate developer from India.
                I specialize in crafting modern, scalable web and mobile applications while exploring
                the limitless possibilities of AI. Though I don't have formal work experience yet,
                I've worked as a freelancer and built <span className="font-semibold">10+ real-world projects</span>
                that sharpened my skills and creativity.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl border-t border-gray-300 dark:border-gray-700 pt-4">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">India</p>
                </div>
                <div className="sm:border-l border-gray-300 dark:border-gray-700 sm:pl-6 md:pl-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Experience</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Freelance</p>
                </div>
                <div className="sm:border-l border-gray-300 dark:border-gray-700 sm:pl-6 md:pl-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Projects</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">10+ projects done</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
