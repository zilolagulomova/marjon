// tailwind.config.js
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                purple: {
                    DEFAULT: '#230F4B'
                },
                green: {
                    DEFAULT: '#59DEBE'
                },
                gray: {
                    DEFAULT: '#E7E5EA'
                },
                red: {
                    DEFAULT: '#FF334C'
                }
            }
        },
    },
    plugins: [],
}