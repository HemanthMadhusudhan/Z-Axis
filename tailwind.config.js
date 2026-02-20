/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'gold': '#FFB800',
                'gold-hover': '#e0a300',
                'black': '#050505',
                'dark': '#1a1a1a',
            },
            fontFamily: {
                'heading': ['Montserrat', 'sans-serif'],
                'body': ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
