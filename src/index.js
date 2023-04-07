import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
} from 'react-router-dom'
import './assets/sass/index.scss'

const Home = lazy(() => import('./pages/Home'))
const Header = lazy(() => import('./components/Header/index'))
const Footer = lazy(() => import('./components/Footer/index.jsx'))

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
        <Suspense fallback="loading...">
            <BrowserRouter>
                <Routes>
                    <Route element={<PageLayout />}>
                        <Route element={<Home />} path="/" />
                    </Route>

                    <Route element={<Navigate to="/" />} path="*" />
                </Routes>
            </BrowserRouter>
        </Suspense>
    </React.StrictMode>
)
