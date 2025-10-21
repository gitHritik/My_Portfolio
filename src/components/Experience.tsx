import { Calendar, Code2, Laptop, GraduationCap } from "lucide-react";

const Experience = () => {
    return (
        <section id="work" className=" sm:ml-6 sm:mr-6 md:ml-10 md:mr-10 px-2 sm:px-6 md:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-gray-900 dark:text-white">
                Education & Work Experience
            </h2>

            <div className="bg-gray-100/30 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-800 rounded-2xl p-3 sm:p-6 hover:border-gray-400 dark:hover:border-gray-700 transition space-y-4 sm:space-y-8">

                {/* Merchant Navy Decoded */}
                <div className="flex flex-col sm:flex-row justify-between items-start border-b border-gray-300 dark:border-gray-700 pb-4 sm:pb-5">
                    <div className="flex items-start sm:items-center space-x-4 mb-2 sm:mb-0">
                        <div className="bg-blue-100/40 dark:bg-blue-900/40 p-2 rounded-lg border border-gray-300 dark:border-gray-700">
                            <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                                App Developer
                            </h3>
                            <p className="text-[10px] sm:text-[12px] text-gray-700 dark:text-gray-400 w-full sm:w-[282px]">
                                Working as an App Developer at Merchant Navy Decoded (India)
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 border-gray-300 dark:border-gray-700 border-2 px-2 sm:px-3 py-1 rounded-md text-[9px] sm:text-[11px] text-gray-700 dark:text-gray-400">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>Oct 2025 – Present</span>
                    </div>
                </div>

                {/* Freelance Developer */}
                <div className="flex flex-col sm:flex-row justify-between items-start border-b border-gray-300 dark:border-gray-700 pb-4 sm:pb-5">
                    <div className="flex items-start sm:items-center space-x-4 mb-2 sm:mb-0">
                        <div className="bg-purple-100/40 dark:bg-purple-900/40 p-2 rounded-lg border border-gray-300 dark:border-gray-700">
                            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                                Freelance Developer
                            </h3>
                            <p className="text-[10px] sm:text-[12px] text-gray-700 dark:text-gray-400 w-full sm:w-[282px]">
                                Worked as a Full Stack Developer for multiple freelance clients (Remote)
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 border-gray-300 dark:border-gray-700 border-2 px-2 sm:px-3 py-1 rounded-md text-[9px] sm:text-[11px] text-gray-700 dark:text-gray-400">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>Feb 2024 – Sept 2025</span>
                    </div>
                </div>

                {/* Quantum University */}
                <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div className="flex items-start sm:items-center space-x-4 mb-2 sm:mb-0">
                        <div className="bg-green-100/40 dark:bg-green-900/40 p-2 rounded-lg border border-gray-300 dark:border-gray-700">
                            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                                Quantum University
                            </h3>
                            <p className="text-[10px] sm:text-[12px] text-gray-700 dark:text-gray-400 w-full sm:w-[282px]">
                                Bachelor of Engineering in Computer Science
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 border-gray-300 dark:border-gray-700 border-2 px-2 sm:px-3 py-1 rounded-md text-[9px] sm:text-[11px] text-gray-700 dark:text-gray-400">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>July 2020 – June 2024</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
