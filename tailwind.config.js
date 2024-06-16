/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'custom-pattern': "url('https://st4.depositphotos.com/1008648/24505/i/450/depositphotos_245057116-stock-photo-colorful-blue-pink-purple-abstract.jpg')",
            },
        },
    },
    plugins: [],
};
