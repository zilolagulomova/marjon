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
                    DEFAULT: '#59DEBE',
                    100: '#19CC81'
                },
                gray: {
                    DEFAULT: '#E7E5EA',
                    100: '#8C849A',
                    200: '#f6f5f7',
                },
                red: {
                    DEFAULT: '#FF334C'
                },
                dark: {
                    DEFAULT: '#190A35',
                    100: '#000000'
                },
                white: {
                    DEFAULT: '#FFFFFF',
                    100: '#F4F3F5'
                }
            }
        },
    },
    plugins: [],
}