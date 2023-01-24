import React from 'react'

function Header() {
    return (
        <header className="header">
            <section className="header__left-section">
                <h2>Brahim Elandaloussi</h2>
            </section>
            <section className="header__middle-section">
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                    <li>Mes projets</li>
                </ul>
            </section>
            <section className="header__right-section">
                <h2>Contact</h2>
            </section>
        </header>
    )
}

export default Header
