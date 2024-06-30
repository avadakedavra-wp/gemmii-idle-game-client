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
            colors: {
                yellow: {
                    primary: '#FFC107',
                    dark: '#FFA000',
                    light: '#FFECB3',
                    accent: '#FFD740',
                },
                background: {
                    custom: 'linear-gradient(315deg, #fec84e 0%, #ffdea8 74%)',
                    card: '#c8aca4',
                    dark: '#121212',
                    light: '#fffcbc',
                },
                focus: {
                    primary: '#a08494',
                    secondary: '#FFA000',
                },
                noobTheme: {
                    background: '#FFECB3',
                },
                moonlightTheme: {
                    background: '#5A67D8',
                },
                crystalTheme: {
                    background: '#78D1FF',
                },
                eclipsePhoenixTheme: {
                    background: '#FF5722',
                },
                celestialTheme: {
                },
            },
        },
    },
    plugins: [],
};
