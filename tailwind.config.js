/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // make sure Tailwind scans all your components
    ],
    darkMode: 'class', // important for dark/light toggle
    theme: {
        extend: {},
    },
    plugins: [],
};
