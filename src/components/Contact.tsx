function Contact() {
    return (
        <section
            id="contact"
            className="ml-[2rem] mr-6 mt-2 px-10"
        >
            <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
                Contact
            </h2>

            <div className="bg-gray-100/30 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-800 rounded-xl px-4 py-5 hover:border-gray-400 dark:hover:border-gray-700 transition">
                <p className="text-gray-700 dark:text-gray-400">
                    Best way to reach me is through:{" "}
                    <a
                        href="mailto:hritikchouhan54@gmail.com"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                    >
                        hritikchouhan54@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Contact;
