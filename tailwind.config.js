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
                'marquee': 'marquee 10s linear infinite',
                "slide-down": "slide-down 0.8s",
                "fade-in": "fade-in 0.8s",
                "open-mobile-menu": "slide-left 0.5s",
            },
            keyframes: {
                'marquee': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' }
                },
                "slide-left": {
                    "0%": {
                        transform: "translateX(300px)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
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
                light_blue: "#44699F",
                dark_blue: "#0E2146"
            }
        },
    },
    plugins: [
        require('tailwindcss-animated')
    ],
}

