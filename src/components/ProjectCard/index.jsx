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
    projectLink = null,
    repoLink = null,
}) {
    return (
        <article className="project-card">
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
                className="project-card__preview"
                onClick={() =>
                    projectLink && window.open(`${projectLink}`, '_blank')
                }
            >
                <div className="project-card__buttons">
                    {projectLink && (
                        <a
                            href={projectLink}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <button className="cta-primary gradient">
                                Voir le projet
                            </button>
                        </a>
                    )}

                    {repoLink && (
                        <a
                            href={repoLink}
                            title="Voir le repository Github"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <button
                                className="icon-button"
                                onClick={() =>
                                    window.open(`${repoLink}`, '_blank')
                                }
                            >
                                <img src={githubIcon} alt="github icon" />
                            </button>
                        </a>
                    )}
                </div>
                <div className="project-card__background">
                    {previewImages.map((image, i) => (
                        <img
                            src={image}
                            alt={`preview ${i}`}
                            key={i}
                            className="preview-image"
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
