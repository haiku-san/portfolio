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
            <ul className="project-card__tags-list">
                {tagsList.map((tag, i) => (
                    <Tag value={tag} key={i} />
                ))}
            </ul>
            <div className="project-card__mobile-controls">
                {projectLink && (
                    <button className="cta-secondary">Voir le projet</button>
                )}
                {repoLink && (
                    <button className="cta-secondary accent">Github</button>
                )}
            </div>
        </aside>
    )
}

export default ProjectCardContent
