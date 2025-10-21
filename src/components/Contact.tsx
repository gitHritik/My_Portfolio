function Contact() {
    return (
        <section
            id="contact"
            className="ml-4 mr-4 sm:ml-6 sm:mr-6 md:ml-10 md:mr-10 mt-2 px-2 sm:px-6 md:px-10"
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-gray-900 dark:text-white">
                Contact
            </h2>

            <div className="bg-gray-100/30 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-800 rounded-xl px-3 sm:px-4 py-4 sm:py-5 hover:border-gray-400 dark:hover:border-gray-700 transition">
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400">
                    Best way to reach me is through:{" "}
                    <a
                        href="mailto:hritikchouhan54@gmail.com"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors break-words"
                    >
                        hritikchouhan54@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Contact;
