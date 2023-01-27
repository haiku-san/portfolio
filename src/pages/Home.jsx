import React from 'react'
import InfosCard from '../components/InfosCard/index'
import ProjectCard from '../components/ProjectCard/index'

function Home() {
    return (
        <div className="home-page">
            <section className="hero-section">
                <div>
                    <h1>Développeur web frontend</h1>
                    <h2>Basé en Haute-Savoie, France</h2>
                </div>

                <InfosCard />
                <div className="cta-section">
                    <button className="cta-primary">Voir mes projets</button>
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
                <h3>Mes projets</h3>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </section>
        </div>
    )
}

export default Home
