import { Calendar, Code2, Laptop, GraduationCap } from "lucide-react";

const Experience = () => {
    return (
        <section id="work" className="ml-[2rem] mr-6 px-10">
            <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
                Education & Work Experience
            </h2>

            <div className="bg-gray-100/30 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-800 rounded-2xl p-6 hover:border-gray-400 dark:hover:border-gray-700 transition">
                <div className="space-y-8">

                    {/* Merchant Navy Decoded */}
                    <div className="flex justify-between items-start border-b border-gray-300 dark:border-gray-700 pb-5">
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100/40 dark:bg-blue-900/40 p-2 rounded-lg border border-gray-300 dark:border-gray-700">
                                <Laptop className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                    App Developer
                                </h3>
                                <p className="text-[12px] text-gray-700 dark:text-gray-400 w-[282px]">
                                    Working as an App Developer at Merchant Navy Decoded (India)
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 border-gray-300 dark:border-gray-700 border-2 px-3 py-1 rounded-md text-[11px] text-gray-700 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>Oct 2025 – Present</span>
                        </div>
                    </div>

                    {/* Freelance Developer */}
                    <div className="flex justify-between items-start border-b border-gray-300 dark:border-gray-700 pb-5">
                        <div className="flex items-center space-x-4">
                            <div className="bg-purple-100/40 dark:bg-purple-900/40 p-2 rounded-lg border border-gray-300 dark:border-gray-700">
                                <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                    Freelance Developer
                                </h3>
                                <p className="text-[12px] text-gray-700 dark:text-gray-400 w-[282px]">
                                    Worked as a Full Stack Developer for multiple freelance clients (Remote)
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 border-gray-300 dark:border-gray-700 border-2 px-3 py-1 rounded-md text-[11px] text-gray-700 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>Feb 2024 – Sept 2025</span>
                        </div>
                    </div>

                    {/* Quantum University */}
                    <div className="flex justify-between items-start">
                        <div className="flex items-center space-x-4">
                            <div className="bg-green-100/40 dark:bg-green-900/40 p-2 rounded-lg border border-gray-300 dark:border-gray-700">
                                <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                    Quantum University
                                </h3>
                                <p className="text-[12px] text-gray-700 dark:text-gray-400 w-[282px]">
                                    Bachelor of Engineering in Computer Science
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 border-gray-300 dark:border-gray-700 border-2 px-3 py-1 rounded-md text-[11px] text-gray-700 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>July 2020 – June 2024</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
