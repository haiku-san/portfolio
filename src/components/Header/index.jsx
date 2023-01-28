import React from 'react'

function Header() {
    return (
        <header className="header">
            <section className="header__left-section">
                <a href="#home-anchor">
                    <h2>Brahim Elandaloussi</h2>
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
                    <h2>Contact</h2>
                </a>
            </section>
        </header>
    )
}

export default Header
