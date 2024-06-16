/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'custom-pattern': "url('https://wallpapercave.com/wp/rXs4oKL.png')",
            },
        },
    },
    plugins: [],
};
