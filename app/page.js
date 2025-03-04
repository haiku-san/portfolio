'use client'

import React, { lazy, Suspense, useEffect, useState, useRef } from 'react'
import Image from 'next/image'
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

import sourceCodeIcon from './assets/images/icons/source_code_icon.png'
import chevronIcon from './assets/images/icons/chevron_right_icon.png'

import LoadingSpinner from './components/LoadingSpinner'

import ColorTransition from './components/ColorTransition'

const InfosCard = lazy(() => import('./components/InfosCard'))
const ProjectCard = lazy(() => import('./components/ProjectCard'))

function Home() {
    const [isColorTransition, setColorTransition] = useState(false)
    const homeRef = useRef(null)

    const projectsInfos = [
        {
            title: 'E-commerce website front-end made with Next.js and custom Shopify template made in liquid',
            date: '2023',
            projectName: "Rayz'Art",
            tagsList: ['next', 'node.js', 'react', 'tailwind', 'javascript'],
            previewImages: [rayzArtPreview1, rayzArtPreview2],
            projectLink: 'https://rayz-art.vercel.app/',
            aboutTexts: [
                {
                    text: `I've made a fully functional e-commerce website using Next.js and React for the frontend and the Shopify API for the backend. I've also helped design the UI and worked on making the user experience more intuitive.`,
                    minDelay: 1,
                    maxDelay: 16,
                },
            ],
        },
        {
            title: 'Clone of Netflix UI',
            date: '2023',
            projectName: 'Personal project',
            tagsList: ['react', 'javascript', 'sass', 'html'],
            previewImages: [netflixPreview1, netflixPreview2],
            repoLink: 'https://github.com/haiku-san/netflix-remake',
            aboutTexts: [
                {
                    text: `I've made a Netflix Clone using React.js to learn more about UI and frontend development. This project was so fun. Initially the website was uploaded on my personal server but I had to shut it down due to copyrights complains I've received from Netflix legal team.`,
                    minDelay: 1,
                    maxDelay: 15,
                },
            ],
        },
        {
            title: 'AI activities ideas generator',
            date: '2023',
            projectName: 'Personal project',
            tagsList: ['react', 'node.js', 'javascript', 'sass', 'html'],
            previewImages: [bestActivitiesPreview1, bestActivitiesPreview2],
            projectLink: 'https://best-activities.netsmartsites.com',
            aboutTexts: [
                {
                    text: `Following Chat GPT release, I got so excited about the world of possibilities these large language models offered. So I decided to try and build a website using openai API. I've designed and coded this amusing website that generates activities ideas based on your location, your personality and the current season. It works pretty well, you can try it for yourself!`,
                    minDelay: 1,
                    maxDelay: 15,
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
                        text="Fullstack Developer."
                        type="h1"
                        initialDelay={1000}
                        maxDelay={25}
                        cursorAlwaysBlinking
                    />
                    <h2>Student in Computer Science, University of Geneva</h2>
                </div>

                <RetroInterface />

                <InfosCard id="about-anchor" />
                <div className="cta-section">
                    <a href="#projects-anchor">
                        <button className="cta-primary">
                            <p>Visit site</p>
                            <Image
                                src={sourceCodeIcon}
                                alt="Icon"
                                className="icon"
                                onClick={() => window.location.reload()}
                                loading="lazy"
                            />
                            <Image
                                src={chevronIcon}
                                alt="Icon"
                                className="cta-icon"
                                onClick={() => window.location.reload()}
                                loading="lazy"
                            />
                        </button>
                    </a>

                    <a
                        href="mailto:elandaloussi.contact@gmail.com"
                        target="__blank"
                        rel="noreferrer noopener"
                    >
                        <button className="cta-secondary">Contact me</button>
                    </a>
                </div>
            </section>
            <section className="projects-section">
                <h2 id="projects-anchor">My projects</h2>

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
