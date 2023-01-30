import React from 'react'
import InfosCard from '../components/InfosCard/index'
import ProjectCard from '../components/ProjectCard/index'

// Import des previews des projets

import bookiPreview1 from '../assets/images/projects_previews/booki/bookiPreview1.png'
import bookiPreview2 from '../assets/images/projects_previews/booki/bookiPreview2.png'

import laPantherePreview1 from '../assets/images/projects_previews/lapanthere/lapantherePreview1.png'
import laPantherePreview2 from '../assets/images/projects_previews/lapanthere/lapantherePreview2.png'

import ohmyfoodPreview1 from '../assets/images/projects_previews/ohmyfood/ohmyfoodPreview1.png'
import ohmyfoodPreview2 from '../assets/images/projects_previews/ohmyfood/ohmyfoodPreview2.png'

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

                {/* Optimisation du SEO et de l'accessibilité d'un site
                2022
              La Panthère */}
                <ProjectCard
                    title="Optimisation du SEO et de l'accessibilité d'un site"
                    date="2022"
                    projectName="La Panthère"
                    accessibilityTag
                    SEOTag
                    optimizationTag
                    tagsList={['accessibility', 'SEO', 'optimization']}
                    previewImages={[laPantherePreview1, laPantherePreview2]}
                    projectLink={'https://lapanthere.elandaloussi.fr'}
                    repoLink="https://github.com/haiku-san/OC-P4"
                />

                {/* Intégration & animation d'une maquette en HTML & CSS
                2022
                Ohmyfood */}
                <ProjectCard
                    title="Intégration & animation d'une maquette en HTML & CSS"
                    date="2022"
                    projectName="Ohmyfood"
                    htmlTag
                    cssTag
                    sassTag
                    responsiveTag
                    tagsList={['html', 'css', 'sass', 'reponsive']}
                    contentIsOnLeft={false}
                    previewImages={[ohmyfoodPreview2, ohmyfoodPreview1]}
                    projectLink={'https://ohmyfood.elandaloussi.fr'}
                    repoLink="https://github.com/haiku-san/OC-P3"
                />

                {/* Intégration d'une maquette en HTML & CSS
                2022
                Booki */}
                <ProjectCard
                    title="Intégration d'une maquette en HTML & CSS"
                    date="2022"
                    projectName="Booki"
                    htmlTag
                    cssTag
                    responsiveTag
                    tagsList={['html', 'css', 'responsive']}
                    previewImages={[bookiPreview1, bookiPreview2]}
                    projectLink={'https://booki.elandaloussi.fr'}
                    repoLink="https://github.com/haiku-san/OC-P2"
                />
            </section>
        </div>
    )
}

export default Home
