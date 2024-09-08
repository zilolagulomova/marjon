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
                    DEFAULT: '#E7E5EA',
                    100: '#f6f5f7',
                    200: '#8c849a',
                },
                red: {
                    DEFAULT: '#FF334C'
                },
                dark: {
                    DEFAULT: '#190A35',
                    100: '#000000'
                },
            }
        },
    },
    plugins: [],
}