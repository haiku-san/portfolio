import React from 'react'
import Tag from '../../Tag/index'

function ProjectCardContent({
    tagsList = [],
    title = 'Titre',
    date = '2023',
    projectName = 'Nom du projet',
    projectLink = null,
    repoLink = null,
}) {
    return (
        <aside className="project-card__content">
            <div className="project-card__content-text">
                <h2>{title}</h2>
                <h3>{date}</h3>
                <p>{projectName}</p>
            </div>
            <div className="flex w-full justify-between gap-2">
                {projectLink && (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="w-full"
                    >
                        <button className="cta-secondary whitespace-nowrap w-full">
                            Visiter le site
                        </button>
                    </a>
                )}
                {repoLink && (
                    <a
                        href={repoLink}
                        title="Voir le repository Github"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="w-full"
                    >
                        <button className="cta-secondary accent whitespace-nowrap w-full">
                            Github
                        </button>
                    </a>
                )}
            </div>
            <ul className="project-card__tags-list">
                {tagsList.map((tag, i) => (
                    <Tag value={tag} key={i} />
                ))}
            </ul>
            <div className="project-card__mobile-controls">
                {projectLink && (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <button className="cta-secondary">
                            Voir le projet
                        </button>
                    </a>
                )}
                {repoLink && (
                    <a
                        href={repoLink}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <button className="cta-secondary accent">Github</button>
                    </a>
                )}
            </div>
        </aside>
    )
}

export default ProjectCardContent
