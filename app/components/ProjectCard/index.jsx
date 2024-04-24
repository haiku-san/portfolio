import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { useInView } from 'react-intersection-observer'

// Import project preview component
import ProjectCardContent from './ProjectCardContent/index'
import TypewritedText from '../TypewritedText'

function ProjectCard({
    contentIsOnLeft = true,
    tagsList = [],
    title = 'Titre',
    date = '2023',
    projectName = 'Nom du projet',
    previewImages = [],
    projectLink = null,
    repoLink = null,
    aboutTexts = [],
}) {
    const [isVisible, setIsVisible] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0,
    })
    const [isHovered, setIsHovered] = useState(false)
    const [isFirstHover, setIsFirstHover] = useState(true)

    useEffect(() => {
        if (isHovered) setIsFirstHover(false)
    }, [isHovered])

    useEffect(() => {
        const handleVisibility = () => {
            if (inView) {
                setIsVisible(true)
            }
        }
        handleVisibility()
    })
    return (
        <article
            className={`project-card ${isVisible ? 'visible' : 'invisible'}`}
            ref={ref}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {contentIsOnLeft && (
                <ProjectCardContent
                    title={title}
                    date={date}
                    projectName={projectName}
                    tagsList={tagsList}
                    projectLink={projectLink}
                    repoLink={repoLink}
                />
            )}
            <main
                className="relative project-card__preview"
                onClick={() =>
                    projectLink && window.open(`${projectLink}`, '_blank')
                }
            >
                {console.log(isFirstHover)}
                {!isFirstHover && (
                    <div
                        className={`absolute ${
                            isHovered ? 'visible' : 'invisible'
                        } top-0 left-0 w-full h-full px-12 py-10 flex flex-col gap-2 bg-darkMode-primary-700`}
                    >
                        {aboutTexts.map((aboutText, i) => (
                            <TypewritedText
                                text={aboutText.text}
                                minDelay={aboutText.minDelay}
                                maxDelay={aboutText.maxDelay}
                                initialDelay={aboutText.initialDelay}
                                key={i}
                            />
                        ))}
                    </div>
                )}
                {!isHovered && (
                    <div className="project-card__buttons">
                        <button className="cta-primary">En savoir plus</button>
                    </div>
                )}
                <div className="project-card__background">
                    {previewImages.map((image, i) => (
                        <Image
                            src={image}
                            alt={`preview ${i}`}
                            key={i}
                            className="preview-image"
                            loading="lazy"
                        />
                    ))}
                </div>
            </main>
            {contentIsOnLeft === false && (
                <ProjectCardContent
                    title={title}
                    date={date}
                    projectName={projectName}
                    tagsList={tagsList}
                    projectLink={projectLink}
                    repoLink={repoLink}
                />
            )}
        </article>
    )
}

export default ProjectCard
