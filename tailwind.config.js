/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'medical-blue': '#0ea5e9', // Sky 500
                'medical-slate': '#f8fafc',
            }
        },
    },
    plugins: [],
}
