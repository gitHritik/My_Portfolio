function Hero() {
    return (
        <section className="ml-[25rem] mr-6 mt-8 px-10 py-12">
            {/* Main Heading */}
            <h1 className="text-5xl font-bold mb-5 leading-tight">
                Building the Future of Web, Mobile & AI
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl text-gray-400 mb-6 font-medium">
                Full-Stack Developer | React Native Developer | AI Enthusiast
            </h2>

            {/* Bio */}
            <p className="text-gray-400 text-base mb-10 max-w-4xl leading-relaxed">
                👋 Hi, I'm Hritik Chouhan, a passionate developer from India. I specialize in crafting modern,
                scalable web and mobile applications, while exploring the limitless possibilities of AI.
                Though I don't have formal work experience yet, I've worked as a freelancer and built 10+
                real-world projects that sharpened my skills and creativity.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 max-w-6xl border-t border-gray-800 pt-3">
                <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-lg font-semibold">India</p>
                </div >
                <div className="border-l border-gray-800 pl-8">
                    <p className="text-sm text-gray-500 mb-1">Experience</p>
                    <p className="text-lg font-semibold">Freelance</p>
                </div>
                <div className="border-l border-gray-800 pl-8">
                    <p className="text-sm text-gray-500 mb-1">Projects</p>
                    <p className="text-lg font-semibold">10+ projects done</p>
                </div>
            </div >

            <div className="grid grid-cols-3 gap-8 max-w-4xl border-t border-gray-800 mt-3" />
        </section >
    )
}

export default Hero
