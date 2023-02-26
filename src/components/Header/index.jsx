import React, { useState, useEffect } from 'react'

// Import du logo

import logoLightMode from '../../assets/images/logo/brahim_elandaloussi_logo.png'
import logoDarkMode from '../../assets/images/logo/brahim_elandaloussi_logo_dark_mode.png'

function Header() {
    const [mode, setMode] = useState('light')

    useEffect(() => {
        // Add listener to update styles
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) =>
                setMode(e.matches ? 'dark' : 'light')
            )

        // Setup dark/light mode for the first time
        setMode(
            window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
        )

        // Remove listener
        return () => {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', () => {})
        }
    }, [])
    return (
        <header className="header">
            <section className="header__left-section">
                <a href="#home-anchor">
                    <img
                        src={mode === 'light' ? logoLightMode : logoDarkMode}
                        alt="Logo"
                        className="logo"
                    />
                </a>
            </section>
            {/* <section className="header__middle-section">
                <ul>
                    <a href="#home-anchor">
                        <li>Accueil</li>
                    </a>
                    <a href="#about-anchor">
                        <li>A propos</li>
                    </a>
                    <a href="#projects-anchor">
                        <li>Mes projets</li>
                    </a>
                </ul>
            </section> */}
            <section className="header__right-section">
                <a
                    href="mailto:elandaloussi.contact@gmail.com"
                    target="__blank"
                    rel="noreferrer noopener"
                >
                    <h2 className="cta-tertiary">Contact</h2>
                </a>
            </section>
        </header>
    )
}

export default Header
