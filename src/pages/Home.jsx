import React, { lazy, Suspense, useEffect, useState, useRef } from 'react'
import TypewritedText from '../components/TypewritedText/index'
import RetroInterface from '../components/RetroInterface/index'
import ScrollToTop from '../components/ScrollToTop/index'

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

import netflixPreview1 from '../assets/images/projects_previews/optimized/netflixPreview1.webp'
import netflixPreview2 from '../assets/images/projects_previews/optimized/netflixPreview2.webp'

import LoadingSpinner from '../components/LoadingSpinner/index'

import ColorTransition from '../components/ColorTransition/index'

const InfosCard = lazy(() => import('../components/InfosCard/index'))
const ProjectCard = lazy(() => import('../components/ProjectCard/index'))

function Home() {
    const [isColorTransition, setColorTransition] = useState(false)
    const homeRef = useRef(null)

    useEffect(() => {
        const colorTransitionDelayInMs = getComputedStyle(
            document.body
        ).getPropertyValue('--color-transition-delay')
        console.log(colorTransitionDelayInMs)
        const colorTransitionDelay = parseInt(colorTransitionDelayInMs, 10)

        const observer = new MutationObserver(() => {
            if (document.body.classList.contains('color-transition')) {
                setColorTransition(true)
                setTimeout(() => {
                    setColorTransition(false)
                }, colorTransitionDelay)
            }
        })

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class'],
        })

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div className="home-page" id="home-anchor" ref={homeRef}>
            {isColorTransition && <ColorTransition />}
            <section className="hero-section">
                <div className="hero-section__titles">
                    <TypewritedText
                        text="Développeur web frontend."
                        type="h1"
                        initialDelay={1000}
                        maxDelay={100}
                        cursorAlwaysBlinking
                    />
                    <h2>Basé en Haute-Savoie, France</h2>
                </div>

                <RetroInterface />

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
                    {/* Remake du frontend de Netflix
                                  Projet personnel */}
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProjectCard
                            title="Remake de l'interface de Netflix"
                            date="2023"
                            projectName="Projet personnel"
                            tagsList={[
                                'html',
                                'sass',
                                'react',
                                'javascript',
                                'responsive',
                            ]}
                            previewImages={[netflixPreview1, netflixPreview2]}
                            repoLink={
                                'https://github.com/haiku-san/netflix-remake'
                            }
                        />
                    </Suspense>
                </div>

                <div className="project-card-container">
                    {/* Création d'un site web intéractif avec React
                                  Best Activities */}
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProjectCard
                            title="Création d'un site web intéractif avec React"
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
                    </Suspense>
                </div>

                <div className="project-card-container">
                    {/* Création d’une application web dynamique avec React
                    2022
                                  Kasa */}
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProjectCard
                            title="Création d'une application web dynamique avec React"
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
                    </Suspense>
                </div>

                <div className="project-card-container">
                    {/* Construction d’une API sécurisée
                    2022
                                  Piiquante */}
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProjectCard
                            title="Construction d'une API sécurisée"
                            date="2022"
                            projectName="Piiquante"
                            tagsList={['node.js', 'mongodb']}
                            previewImages={[
                                piiquantePreview1,
                                piiquantePreview2,
                            ]}
                            repoLink="https://github.com/haiku-san/OC-P6"
                        />
                    </Suspense>
                </div>

                <div className="project-card-container">
                    {/* Construction d’un site de e-commerce en javascript
                    2022
                                  Kanap */}
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProjectCard
                            title="Construction d'un site de e-commerce en javascript"
                            date="2022"
                            projectName="Kanap"
                            tagsList={['html', 'css', 'javascript']}
                            previewImages={[kanapPreview1, kanapPreview2]}
                            projectLink={'https://kanap.elandaloussi.fr/'}
                            repoLink="https://github.com/haiku-san/OC-P5"
                        />
                    </Suspense>
                </div>

                <div className="project-card-container">
                    {/* Optimisation du SEO et de l'accessibilité d'un site
                    2022
                                  La Panthère */}
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProjectCard
                            title="Optimisation du SEO et de l'accessibilité d'un site"
                            date="2022"
                            projectName="La Panthère"
                            tagsList={['accessibility', 'SEO', 'optimization']}
                            previewImages={[
                                laPantherePreview1,
                                laPantherePreview2,
                            ]}
                            projectLink={'https://lapanthere.elandaloussi.fr'}
                            repoLink="https://github.com/haiku-san/OC-P4"
                        />
                    </Suspense>
                </div>
                <div className="project-card-container">
                    {/* Intégration & animation d'une maquette en HTML & CSS
                    2022
                    Ohmyfood */}
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProjectCard
                            title="Intégration & animation d'une maquette en HTML & CSS"
                            date="2022"
                            projectName="Ohmyfood"
                            tagsList={['html', 'css', 'sass', 'reponsive']}
                            previewImages={[ohmyfoodPreview2, ohmyfoodPreview1]}
                            projectLink={'https://ohmyfood.elandaloussi.fr'}
                            repoLink="https://github.com/haiku-san/OC-P3"
                        />
                    </Suspense>
                </div>

                <div className="project-card-container">
                    {/* Intégration d'une maquette en HTML & CSS
                    2022
                    Booki */}
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProjectCard
                            title="Intégration d'une maquette en HTML & CSS"
                            date="2022"
                            projectName="Booki"
                            tagsList={['html', 'css', 'responsive']}
                            previewImages={[bookiPreview1, bookiPreview2]}
                            projectLink={'https://booki.elandaloussi.fr'}
                            repoLink="https://github.com/haiku-san/OC-P2"
                        />
                    </Suspense>
                </div>
            </section>
            <ScrollToTop />
        </div>
    )
}

export default Home
