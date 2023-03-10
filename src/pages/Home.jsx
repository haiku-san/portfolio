import React, { useState, useEffect } from 'react'
import InfosCard from '../components/InfosCard/index'
import ProjectCard from '../components/ProjectCard/index'

// Import des previews des projets

import bookiPreview1 from '../assets/images/projects_previews/optimized/bookiPreview1.webp'
import bookiPreview2 from '../assets/images/projects_previews/optimized/bookiPreview2.webp'

import laPantherePreview1 from '../assets/images/projects_previews/optimized/lapantherePreview1.webp'
import laPantherePreview2 from '../assets/images/projects_previews/optimized/lapantherePreview2.webp'

import ohmyfoodPreview1 from '../assets/images/projects_previews/optimized/ohmyfoodPreview1.webp'
import ohmyfoodPreview2 from '../assets/images/projects_previews/optimized/ohmyfoodPreview2.webp'

import kanapPreview1 from '../assets/images/projects_previews/optimized/kanapPreview1.webp'
import kanapPreview2 from '../assets/images/projects_previews/optimized/kanapPreview2.webp'

import piiquantePreview1 from '../assets/images/projects_previews/optimized/piiquantePreview1.webp'
import piiquantePreview2 from '../assets/images/projects_previews/optimized/piiquantePreview2.webp'

import kasaPreview1 from '../assets/images/projects_previews/optimized/kasaPreview1.webp'
import kasaPreview2 from '../assets/images/projects_previews/optimized/kasaPreview2.webp'

import bestActivitiesPreview1 from '../assets/images/projects_previews/optimized/bestActivitiesPreview1.webp'
import bestActivitiesPreview2 from '../assets/images/projects_previews/optimized/bestActivitiesPreview2.webp'

function Home() {
    // const [mode, setMode] = useState('light')

    // const onSelectMode = (mode) => {
    //     setMode(mode)
    //     if (mode === 'dark') document.body.classList.add('dark-mode')
    //     else document.body.classList.remove('dark-mode')
    // }

    // useEffect(() => {
    //     // Add listener to update styles
    //     window
    //         .matchMedia('(prefers-color-scheme: dark)')
    //         .addEventListener('change', (e) =>
    //             onSelectMode(e.matches ? 'dark' : 'light')
    //         )

    //     // Setup dark/light mode for the first time
    //     onSelectMode(
    //         window.matchMedia('(prefers-color-scheme: dark)').matches
    //             ? 'dark'
    //             : 'light'
    //     )

    //     // Remove listener
    //     return () => {
    //         window
    //             .matchMedia('(prefers-color-scheme: dark)')
    //             .removeEventListener('change', () => {})
    //     }
    // }, [])
    return (
        <div className="home-page" id="home-anchor">
            <section className="hero-section">
                <div className="hero-section__titles">
                    <h1>D??veloppeur web frontend</h1>
                    <h2>Bas?? en Haute-Savoie, France</h2>
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

                <div className="project-card-container">
                    {/* Cr??ation d'un site web int??ractif avec React
                                  Best Activities */}
                    <ProjectCard
                        title="Cr??ation d'un site web int??ractif avec React"
                        date="2023"
                        projectName="Best Activities"
                        tagsList={[
                            'html',
                            'sass',
                            'react',
                            'javascript',
                            'node.js',
                        ]}
                        previewImages={[
                            bestActivitiesPreview1,
                            bestActivitiesPreview2,
                        ]}
                        projectLink={
                            'https://best-activities.netsmartsites.com'
                        }
                    />
                </div>

                <div className="project-card-container">
                    {/* Cr??ation d???une application web dynamique avec React
                    2022
                                  Kasa */}
                    <ProjectCard
                        title="Cr??ation d'une application web dynamique avec React"
                        date="2022"
                        projectName="Kasa"
                        tagsList={[
                            'html',
                            'sass',
                            'react',
                            'javascript',
                            'react router',
                        ]}
                        previewImages={[kasaPreview1, kasaPreview2]}
                        projectLink={'https://kasa.elandaloussi.fr'}
                        repoLink="https://github.com/haiku-san/OC-P7"
                    />
                </div>

                <div className="project-card-container">
                    {/* Construction d???une API s??curis??e
                    2022
                                  Piiquante */}
                    <ProjectCard
                        title="Construction d'une API s??curis??e"
                        date="2022"
                        projectName="Piiquante"
                        tagsList={['node.js', 'mongodb']}
                        previewImages={[piiquantePreview1, piiquantePreview2]}
                        repoLink="https://github.com/haiku-san/OC-P6"
                    />
                </div>

                <div className="project-card-container">
                    {/* Construction d???un site de e-commerce en javascript
                    2022
                                  Kanap */}
                    <ProjectCard
                        title="Construction d'un site de e-commerce en javascript"
                        date="2022"
                        projectName="Kanap"
                        tagsList={['html', 'css', 'javascript']}
                        previewImages={[kanapPreview1, kanapPreview2]}
                        projectLink={'https://kanap.elandaloussi.fr/'}
                        repoLink="https://github.com/haiku-san/OC-P5"
                    />
                </div>

                <div className="project-card-container">
                    {/* Optimisation du SEO et de l'accessibilit?? d'un site
                    2022
                                  La Panth??re */}
                    <ProjectCard
                        title="Optimisation du SEO et de l'accessibilit?? d'un site"
                        date="2022"
                        projectName="La Panth??re"
                        tagsList={['accessibility', 'SEO', 'optimization']}
                        previewImages={[laPantherePreview1, laPantherePreview2]}
                        projectLink={'https://lapanthere.elandaloussi.fr'}
                        repoLink="https://github.com/haiku-san/OC-P4"
                    />
                </div>
                <div className="project-card-container">
                    {/* Int??gration & animation d'une maquette en HTML & CSS
                    2022
                    Ohmyfood */}
                    <ProjectCard
                        title="Int??gration & animation d'une maquette en HTML & CSS"
                        date="2022"
                        projectName="Ohmyfood"
                        tagsList={['html', 'css', 'sass', 'reponsive']}
                        previewImages={[ohmyfoodPreview2, ohmyfoodPreview1]}
                        projectLink={'https://ohmyfood.elandaloussi.fr'}
                        repoLink="https://github.com/haiku-san/OC-P3"
                    />
                </div>

                <div className="project-card-container">
                    {/* Int??gration d'une maquette en HTML & CSS
                    2022
                    Booki */}
                    <ProjectCard
                        title="Int??gration d'une maquette en HTML & CSS"
                        date="2022"
                        projectName="Booki"
                        tagsList={['html', 'css', 'responsive']}
                        previewImages={[bookiPreview1, bookiPreview2]}
                        projectLink={'https://booki.elandaloussi.fr'}
                        repoLink="https://github.com/haiku-san/OC-P2"
                    />
                </div>
            </section>
        </div>
    )
}

export default Home
