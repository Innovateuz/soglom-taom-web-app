/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                lightnd: "#ADADAF",
                primary: '#FA4A0C',
                text: 'var(--tg-theme-text-color)'
            }
        },
    },
    plugins: [],
}

