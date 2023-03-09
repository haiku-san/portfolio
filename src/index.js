import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
} from 'react-router-dom'
import './assets/sass/index.scss'
import Home from './pages/Home'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'

const PageLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<PageLayout />}>
                    <Route element={<Home />} path="/" />
                </Route>

                <Route element={<Navigate to="/" />} path="*" />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
