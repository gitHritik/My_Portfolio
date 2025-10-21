import ticketless from '../assets/images/tickeless.png';
import social from '../assets/images/social.png';
import vibe1 from '../assets/images/vibe1.jpg';
import vibe2 from '../assets/images/vibe2.jpg';
import vibe3 from '../assets/images/vibe3.jpg';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Ticketless",
            description:
                "Ticketless is a full-stack ticket booking web application for museums and monuments in India. I developed a seamless booking experience with secure payment integration using Stripe, implemented both Google OAuth and traditional authentication with JWT tokens, and deployed the application on Vercel with comprehensive API testing via Postman.",
            image: ticketless,
            link: "https://github.com/gitHritik/TicketLess",
            techStack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "Stripe", "JWT", "Vercel"],
        },
        {
            id: 2,
            title: "IamSocial",
            description:
                "A social media web application similar to Instagram where users can post and upload pictures, follow people, and interact with content. I built this full-featured platform with TypeScript for type safety, implemented file storage using Multer, created a MySQL database architecture, and added both dark and light mode themes for better user experience.",
            image: social,
            link: "https://github.com/gitHritik/IamSocial",
            techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "TypeScript", "Multer"],
        },
        {
            id: 3,
            title: "VibeOn",
            description:
                "VibeOne is a full-fledged music player app built with React Native and Expo. The app features complete playback controls, favorite songs management, custom playlists, and a smooth user experience. I used Context API for state management and AsyncStorage for persistent data storage across sessions.",
            images: [vibe1, vibe2, vibe3],
            link: "https://github.com/gitHritik/VibeOn-",
            techStack: ["React Native", "Expo", "StyleSheet", "useContext", "AsyncStorage"],
        },
    ];

    return (
        <section id="projects" className="mr-4 sm:ml-6 sm:mr-6 md:ml-10 md:mr-10 px-2 sm:px-6 md:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-gray-900 dark:text-white">
                Notable Projects
            </h2>

            <div className="space-y-4 sm:space-y-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gray-100/30 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-800 rounded-2xl p-3 sm:p-6 hover:border-gray-400 dark:hover:border-gray-700 transition"
                    >
                        {/* Project Images */}
                        <div className="mb-3 sm:mb-6">
                            {project.images ? (
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                                    {project.images.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`${project.title} ${idx + 1}`}
                                            className="w-full h-28 sm:h-48 object-cover rounded-lg"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 sm:h-64 object-cover rounded-lg"
                                />
                            )}
                        </div>

                        {/* Project Title */}
                        <h3 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                            {project.title}
                            <a
                                href={project.link}
                                target="_blank"
                                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
                            >
                                <span className="text-base sm:text-lg">🔗</span>
                            </a>
                        </h3>

                        {/* Project Description */}
                        <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base mb-3 sm:mb-5 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-950 border border-gray-300 dark:border-gray-800 rounded-lg text-xs sm:text-sm text-gray-900 dark:text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
