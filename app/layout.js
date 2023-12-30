import { Source_Code_Pro, Poppins } from 'next/font/google'
import './globals.css'
// import './assets/sass/index.scss'
import LoadingSpinner from './components/LoadingSpinner/index'
import Header from './components/Header'
import Footer from './components/Footer/index'

export const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
})
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>{`Brahim Elandaloussi - Portfolio`}</title>
                <meta
                    name="description"
                    content={`Développeur frontend junior, j'ai de solides bases en HTML, CSS, Javascript ainsi que React.js.`}
                />
                <meta name="theme-color" content={'black'} />
            </head>
            <body
                className={`${poppins.className} bg-lightMode-background dark:bg-darkMode-background`}
            >
                <div id="root">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
