import React, { useState, useEffect } from 'react'

// Import du logo

import logoLightMode from '../../assets/images/logo/brahim_elandaloussi_logo.png'
import logoDarkMode from '../../assets/images/logo/brahim_elandaloussi_logo_dark_mode.png'

import sunIcon from '../../assets/images/icons/sun.png'
import moonIcon from '../../assets/images/icons/moon.png'

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const onSelectMode = (mode) => {
        setIsDarkMode(mode)
        if (mode === true) document.body.classList.add('dark-mode')
        else document.body.classList.remove('dark-mode')
    }

    useEffect(() => {
        // Add listener to update styles
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) =>
                onSelectMode(e.matches ? true : false)
            )

        // Setup dark/light mode for the first time
        onSelectMode(
            window.matchMedia('(prefers-color-scheme: dark)').matches
                ? true
                : false
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
                <img
                    src={isDarkMode ? logoDarkMode : logoLightMode}
                    alt="Logo"
                    className="logo"
                    onClick={() => window.location.reload()}
                />
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
                <img
                    onClick={() => onSelectMode(!isDarkMode)}
                    src={isDarkMode ? sunIcon : moonIcon}
                    alt="Dark mode switch button"
                    className="dark-mode-button"
                />
            </section>
        </header>
    )
}

export default Header
