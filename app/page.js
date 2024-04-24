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

    const projectsInfos = [
        {
            title: "Création d'une boutique en ligne avec Next.js",
            date: '2023',
            projectName: "Rayz'Art",
            tagsList: ['next', 'node.js', 'react', 'tailwind', 'javascript'],
            previewImages: [rayzArtPreview1, rayzArtPreview2],
            projectLink: 'https://rayz-art.com',
            aboutTexts: [
                {
                    text: "J'ai créé une boutique en ligne entièrement sur-mesure avec Next.js et Liquid, le language de templating développé par Shopify. J'ai développé entièrement l'interface de la boutique de A à Z en veillant à la raccorder efficacement au backend de Shopify.",
                    minDelay: 1,
                    maxDelay: 15,
                },
                {
                    text: "J'ai également designé la maquette originale du site sur Figma, qui a été ensuite modifiée et perfectionnée par une UI designer, tout en restant fidèle à mon idée principale. J'ai voulu jouer avec le scroll de l'utilisateur pour animer les statues afin de retranscrire au mieux les oeuvres de Rayz'Art.",
                    minDelay: 1,
                    maxDelay: 15,
                    initialDelay: 3000,
                },
                {
                    text: "C'est le projet le plus conséquent sur lequel j'ai eu l'occasion de travailler et il m'a permis d'apprendre énormément sur la manière de rendre l'expérience utilisateur intuitive tout en permettant à mon client de pouvoir modifier les informations essentielles de son site sans devoir toucher une seule ligne de code.",
                    minDelay: 1,
                    maxDelay: 15,
                    initialDelay: 7000,
                },
            ],
        },
        {
            title: "Remake de l'interface de Netflix",
            date: '2023',
            projectName: 'Projet personnel',
            tagsList: ['react', 'javascript', 'sass', 'html'],
            previewImages: [netflixPreview1, netflixPreview2],
            repoLink: 'https://github.com/haiku-san/netflix-remake',
            aboutTexts: [
                {
                    text: "J'ai reproduit l'interface de Netflix en chargeant dynamiquement les films et séries affichées depuis l'API de TMDB.",
                    minDelay: 1,
                    maxDelay: 15,
                },
                {
                    text: "Ce projet m'a permis de développer une capacité à reproduire une interface à la quasi perfection ainsi que de porter une attention particulière au détail.",
                    minDelay: 1,
                    maxDelay: 15,
                    initialDelay: 2000,
                },
                {
                    text: "Fun fact : Le projet était initialement hébergé sur internet à des fins de démonstration, mais j'ai du le retirer à cause d'une plainte des avocats de Netflix qui pensaient que j'avais réalisé un site de phishing.",
                    minDelay: 1,
                    maxDelay: 15,
                    initialDelay: 5000,
                },
            ],
        },
        {
            title: "Création d'un générateur d'activités avec l'IA",
            date: '2023',
            projectName: 'Best Activities',
            tagsList: ['react', 'node.js', 'javascript', 'sass', 'html'],
            previewImages: [bestActivitiesPreview1, bestActivitiesPreview2],
            projectLink: 'https://best-activities.netsmartsites.com',
            aboutTexts: [
                {
                    text: "J'ai créé un générateur d'activités qui utilise l'API d'openai afin de générer une liste d'activités en fonction du lieu, de la saison et de la personnalité de l'utilisateur.",
                    minDelay: 1,
                    maxDelay: 15,
                },
                {
                    text: "J'ai également designé moi-même le site sur Figma. Ce projet m'a permis de m'exercer à développer et optimiser les requêtes entrantes et sortantes entre plusieurs API.",
                    minDelay: 1,
                    maxDelay: 15,
                    initialDelay: 3000,
                },
                {
                    text: "C'était très instructif de tester l'API d'openai et de prendre conscience de la puissance des nouveaux outils qui sont mis à notre disposition.",
                    minDelay: 1,
                    maxDelay: 15,
                    initialDelay: 5000,
                },
            ],
        },
    ]

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

                {projectsInfos.map((projectInfos, i) => (
                    <div className="project-card-container" key={i}>
                        <Suspense fallback={<LoadingSpinner />}>
                            <ProjectCard {...projectInfos} />
                        </Suspense>
                    </div>
                ))}
            </section>
            <ScrollToTop />
        </div>
    )
}

export default Home
