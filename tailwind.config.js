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
                'rotate_full': 'full_circle 60s linear infinite',
                "move" : "move 2s ease-in-out infinite",
                'marquee': 'marquee 8s linear infinite',
                "slide-down": "slide-down 0.8s",
                "fade-in": "fade-in 0.8s",
                "open-mobile-menu": "slide-left 0.5s",
                'key-slide-up': 'slide_up 0.5s ease-in-out',
                'key-appear' : 'key-appear 0.3s ease-in-out',
                'key-disappear' : 'key-disappear 0.3s ease-in-out',
                'key-slide-text' : 'key-slide-text 0.3s ease-in-out',
                'key-slide-down-text' : 'key-slide-down-text 0.3s ease-in-out',
                'link-hover' : 'link-hover 0.3s ease-in-out',
                'mobile_cube_zoom' : 'mobile_cube_zoom 0.9s ease-in-out',
                'hover_joke' : 'joke 5s linear infinite'
            },
            keyframes: {
                'joke' : {
                    '0%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '5%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '10%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '15%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '20%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '25%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '30%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '35%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '40%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '45%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '50%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '55%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '60%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '65%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '70%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '75%': {transform: 'translateY(-25px) translateX(-25px)'},
                    '80%': {transform: 'translateY(-30px) translateX(-30px)'},
                    '85%': {transform: 'translateY(-60px) translateX(-60px)'},
                    '90%': {transform: 'translateY(-70px) translateX(-70px)'},
                    '95%': {transform: 'translateY(-100px) translateX(-100px)'},
                    '100%': {transform: 'translateY(-100px) translateX(-100px)'},
                },
                'mobile_cube_zoom' : {
                    '0%': {transform: 'rotate(0)', scale: 0},
                    '100%': {transform: 'rotate(360deg)', scale: 100}
                },
                'link-hover' : {
                    '0%': {transform: 'translateY(-10px)'},
                    '100%': {transform: 'translateY(10px)'}
                },
                'key-slide-text' : {
                    '0%': {opacity: 0, transform: 'translateY(100px)'},
                    '100%': {opacity: 1, transform: 'translateY(0px)'}
                },
                'key-slide-down-text' : {
                    '0%': {opacity: 1, transform: 'translateY(0px)'},
                    '100%': {opacity: 0, transform: 'translateY(200px)'}
                },
                'key-appear' : {
                    '0%': {opacity: 1, transform: 'translateY(200px)'},
                    '100%': {opacity: 1, transform: 'translateY(0px)'}
                },
                'key-disappear' : {
                    '0%': {opacity: 1, transform: 'translateY(-200px)'},
                    '100%': {opacity: 1, transform: 'translateY(0)'}
                },
                'slide_up' : {
                    '0%': {transform: 'translateY(0)'},
                    '100%': {transform: 'translateY(-200px)'}
                },
                'full_circle': {
                    '0%': {transform: 'rotate(0)'},
                    '25%': {transform: 'rotate(90deg)'},
                    '50%': {transform: 'rotate(180deg)'},
                    '75%': {transform: 'rotate(270deg)'},
                    '100%': {transform: 'rotate(360deg)'}
                },
                "move": {
                    '0%, 100%': {transform: 'translate(0, 0)'},
                    '25%': {transform: 'translate(50px, 0)'},
                    '50%': {transform: 'translate(50px, 50px)'},
                    '75%': {transform: 'translate(0, 50px)'},
                },
                'marquee': {
                    '0%': {transform: 'translateX(0)'},
                    '100%': {transform: 'translateX(-50%)'}
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

