import React, { useState } from 'react'
import Tag from '../Tag/index'

// Importation des icones

import githubIcon from '../../assets/images/icons/github_icon.png'

// Importation des previews des projets

import ProjectCardContent from './ProjectCardContent/index'

function ProjectCard({
    contentIsOnLeft = true,
    tagsList = [],
    title = 'Titre',
    date = '2023',
    projectName = 'Nom du projet',
    previewImages = [],
    projectLink = 'https://booki.elandaloussi.fr',
    repoLink = 'https://github.com/haiku-san/OC-P2',
}) {
    return (
        <article className="project-card">
            {contentIsOnLeft && (
                <ProjectCardContent
                    title={title}
                    date={date}
                    projectName={projectName}
                    tagsList={tagsList}
                />
            )}
            <main
                className="project-card__preview"
                onClick={() => window.open(`${projectLink}`, '_blank')}
            >
                <div className="project-card__buttons">
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <button className="cta-secondary">
                            Voir le projet
                        </button>
                    </a>

                    <a
                        href={repoLink}
                        title="Voir le repository Github"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <button
                            className="icon-button"
                            onClick={() => window.open(`${repoLink}`, '_blank')}
                        >
                            <img src={githubIcon} alt="github icon" />
                        </button>
                    </a>
                </div>
                <div className="project-card__background">
                    {previewImages.map((image, i) => (
                        <img src={image} alt={`preview ${i}`} key={i} />
                    ))}
                </div>
            </main>
            {contentIsOnLeft === false && (
                <ProjectCardContent
                    title={title}
                    date={date}
                    projectName={projectName}
                    tagsList={tagsList}
                />
            )}
        </article>
    )
}

export default ProjectCard
