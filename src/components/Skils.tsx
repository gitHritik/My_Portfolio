const Skills = () => {
    const skillCategories = {
        "Full Stack": [
            "React.js", "React Native", "Tailwind CSS", "Node.js",
            "MySQL", "MongoDB", "NativeWind", "Expo",
            "Chrome Extension", "Vercel", "Stripe", "Express",
            "HTML", "CSS", "JavaScript", "TypeScript"
        ],
        "AI": [
            "ChatGPT", "Claude", "Gemini"
        ]
    };

    return (
        <section className="ml-4 mr-4 sm:ml-6 sm:mr-6 md:ml-8 md:mr-10 px-2 sm:px-6 md:px-10">
            {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className="mb-8 sm:mb-10">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                        {category === "Full Stack" && "💻"}
                        {category === "AI" && "🧠"}
                        <span>{category}</span>
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-start sm:justify-start md:justify-start">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-200/30 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-800/50 hover:border-gray-400 dark:hover:border-gray-700 transition text-sm sm:text-base text-gray-900 dark:text-white"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
