/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
        screens: {
            lg: '1920px',
            md: '1440px',
            sm: '1024px',
            tb: '768px'
        },
        extend: {
            animation: {
                "slide-down": "slide-down 0.8s",
                "fade-in": "fade-in 0.8s",
            },
            keyframes: {
                right: {
                    '0%, 100%': {transform: 'translateX(-25%)'},
                    '50%': {transform: 'none'}
                },
                "slide-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-50px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "fade-in": {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
            },
            colors: {
            }
        },
    },
    plugins: [
        require('tailwindcss-animated')
    ],
}

