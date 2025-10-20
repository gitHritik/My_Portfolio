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
        <section className="ml-[2rem] mr-6 px-10">
            {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className="mb-10">
                    <h3 className="text-lg font-semibold mb-5 flex items-center gap-2 text-gray-900 dark:text-white">
                        {category === "Full Stack" && "💻"}
                        {category === "AI" && "🧠"}
                        <span>{category}</span>
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-gray-200/30 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-800/50 hover:border-gray-400 dark:hover:border-gray-700 transition text-sm text-gray-900 dark:text-white"
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
