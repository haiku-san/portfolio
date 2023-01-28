import React from 'react'
import InfosCard from '../components/InfosCard/index'
import ProjectCard from '../components/ProjectCard/index'

function Home() {
    return (
        <div className="home-page" id="home-anchor">
            <section className="hero-section">
                <div className="hero-section__titles">
                    <h1>Développeur web frontend</h1>
                    <h2>Basé en Haute-Savoie, France</h2>
                </div>

                <InfosCard id="about-anchor" />
                <div className="cta-section">
                    <a href="#projects-anchor">
                        <button className="cta-primary">
                            Voir mes projets
                        </button>
                    </a>

                    <a
                        href="mailto:elandaloussi.contact@gmail.com"
                        target="__blank"
                        rel="noreferrer noopener"
                    >
                        <button className="cta-secondary">Me contacter</button>
                    </a>
                </div>
            </section>
            <section className="projects-section">
                <h2 id="projects-anchor">Mes projets</h2>

                {/* Optimisation du SEO et de l’accessibilité d’un site
                2022
              La Panthère */}
                <ProjectCard
                    accessibilityTag
                    SEOTag
                    optimizationTag
                    tagsList={['accessibility', 'SEO', 'optimization']}
                />

                {/* Intégration & animation d’une maquette en HTML & CSS
                2022
                Ohmyfood */}
                <ProjectCard
                    htmlTag
                    cssTag
                    sassTag
                    responsiveTag
                    tagsList={['html', 'css', 'sass', 'reponsive']}
                />

                {/* Intégration d’une maquette en HTML & CSS
                2022
                Booki */}
                <ProjectCard
                    htmlTag
                    cssTag
                    responsiveTag
                    tagsList={['html', 'css', 'responsive']}
                />
            </section>
        </div>
    )
}

export default Home
