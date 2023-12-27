import { Source_Code_Pro, Poppins } from 'next/font/google'
import './globals.css'
import './assets/sass/index.scss'
import LoadingSpinner from './components/LoadingSpinner/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

export const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    weight: ['200', '400', '600', '800'],
})
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '400', '600', '800'],
})

export const metadata = {
    title: 'Brahim Elandaloussi - Portfolio',
    description: `Développeur frontend junior, j'ai de solides bases en HTML, CSS, Javascript ainsi que React.js.`,
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
