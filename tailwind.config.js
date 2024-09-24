/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "bg-blue-600-dark": "#1d4ed8", // Darker shade of blue-600
                "bg-gray-600-dark": "#4b5563", // Darker shade of gray-600
                "bg-teal-600-dark": "#0d9488", // Darker shade of teal-600
                "bg-pink-600-dark": "#db2777", // Darker shade of pink-600
                "bg-purple-600-dark": "#6b21a8", // Darker shade of purple-600
                // Add more darker shades as needed
            },
        },
    },
    plugins: [],
};
