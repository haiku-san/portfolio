/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                content: ['Poppins', 'sans-serif'],
                retro: ['Source Code Pro', 'sans-serif'],
            },
            fontSize: {
                '2xs': '0.7rem',
                xs: '0.8rem',
                s: '0.9rem',
                m: '1rem',
                l: '1.1rem',
                xl: '1.2rem',
                '3xl': '2rem',
                '4xl': '2.5rem',
                '7xl': '5rem',
            },
            colors: {
                white: '#fff',
                black: '#000',
                lightMode: {
                    primary: {
                        500: '#344a53',
                        600: '#00141c',
                        700: '#000914',
                    },
                    secondary: '#efc8cb',
                    tertiary: '#f2faff',
                    accent: '#775562',
                    background: '#eaeef0',
                },
                darkMode: {
                    primary: {
                        500: '#4c2e91',
                        600: '#1e0261',
                        700: '#0d0a10',
                    },
                    secondary: '#efc8cb',
                    tertiary: '#161226',
                    accent: '#775562',
                    background: '#121212',
                },
                accents: {
                    1: '#0d1820',
                    transparent: 'rgba(13, 24, 32, 0.8)',
                    2: '#b7bec4',
                    3: '#dde7ec',
                },
                backgrounds: {
                    1: '#ffffff',
                    2: '#eaeef0',
                    3: '#ffffff',
                    4: '#f0ece9',
                    5: 'rgba(42, 52, 59, 0.9)',
                    6: 'rgba(13, 24, 32, 0.9)',
                    7: '#0d1820',
                    8: '#152633',
                },
                gradients: {
                    1: 'linear-gradient(87.59deg, #00141c 1.2%, #243242 31.81%, #4d5269 62.42%, #7f728f 93.03%)',
                    2: 'linear-gradient(305.32deg, #ffc185 4.79%, #ffdb74 49.4%, #f9f871 94%)',
                    3: 'linear-gradient(180deg, rgba(183, 190, 196, 0.1) 0%, rgba(13, 24, 32, 0.3) 100%)',
                },
            },
            shadows: {
                1: '0px 4px 16px rgba(22, 22, 22, 0.1)',
                2: '0px 4px 4px rgba(22, 22, 22, 0.1)',
                3: '0px 4px 4px rgba(22, 22, 22, 0.05)',
                4: '4px 8px 16px rgba(22, 22, 22, 0.2)',
                retroInterface:
                    '3px 2px 0.5px 0px var(--retro-interface-shadow-color)',
            },
            borderRadius: {
                1: '0.3rem',
                2: '0.5rem',
            },
        },
    },
    plugins: [],
}
