'use client'

import React, { lazy, Suspense, useEffect, useState, useRef } from 'react'
import TypewritedText from './components/TypewritedText/index.jsx'
import RetroInterface from './components/RetroInterface'
import ScrollToTop from './components/ScrollToTop'
import { sourceCodePro } from './layout'

// Import des previews des projets

import rayzArtPreview1 from './assets/images/projects_previews/rayzArtPreview1.png'
import rayzArtPreview2 from './assets/images/projects_previews/rayzArtPreview2.png'

import bestActivitiesPreview1 from './assets/images/projects_previews/optimized/bestActivitiesPreview1.webp'
import bestActivitiesPreview2 from './assets/images/projects_previews/optimized/bestActivitiesPreview2.webp'

import netflixPreview1 from './assets/images/projects_previews/optimized/netflixPreview1.webp'
import netflixPreview2 from './assets/images/projects_previews/optimized/netflixPreview2.webp'

import LoadingSpinner from './components/LoadingSpinner'

import ColorTransition from './components/ColorTransition'

const InfosCard = lazy(() => import('./components/InfosCard'))
const ProjectCard = lazy(() => import('./components/ProjectCard'))

function Home() {
    const [isColorTransition, setColorTransition] = useState(false)
    const homeRef = useRef(null)

    useEffect(() => {
        const colorTransitionDelayInMs = getComputedStyle(
            document.body
        ).getPropertyValue('--color-transition-delay')
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
                        maxDelay={25}
                        cursorAlwaysBlinking
                    />
                    <h2>Basé à Genève, Suisse</h2>
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
                    {/* Création du site de Rayz'Art
                                  Rayz'Art */}
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProjectCard
                            title="Création d'une boutique en ligne avec Next.js"
                            date="2023"
                            projectName="Projet personnel"
                            tagsList={[
                                'next',
                                'node.js',
                                'react',
                                'tailwind',
                                'javascript',
                            ]}
                            previewImages={[rayzArtPreview1, rayzArtPreview2]}
                            projectLink={'https://rayz-art.com'}
                        />
                    </Suspense>
                </div>

                <div className="project-card-container">
                    {/* Remake du frontend de Netflix
                                  Projet personnel */}
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProjectCard
                            title="Remake de l'interface de Netflix"
                            date="2023"
                            projectName="Projet personnel"
                            tagsList={['react', 'javascript', 'sass', 'html']}
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
                                'react',
                                'node.js',
                                'javascript',
                                'sass',
                                'html',
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
            </section>
            <ScrollToTop />
        </div>
    )
}

export default Home
