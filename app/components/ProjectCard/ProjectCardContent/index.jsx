import React from 'react'
import Tag from '../../Tag/index'
import CTA from '../../CTA'

import sourceCodeIcon from '../../../assets/images/icons/source_code_icon.png'
import chevronIcon from '../../../assets/images/icons/chevron_right_icon.png'
import externalLinkIcon from '../../../assets/images/icons/external_link_icon.png'

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
            <div className="flex w-full justify-between gap-2 max-lg:hidden">
                {projectLink && (
                    <CTA
                        title="Visit website"
                        link={projectLink}
                        idleIcon={externalLinkIcon}
                        hoverIcon={chevronIcon}
                        classNames="cta-secondary whitespace-nowrap w-full"
                        openInNewTab
                    />
                )}
                {repoLink && (
                    <CTA
                        title="View code"
                        link={repoLink}
                        idleIcon={sourceCodeIcon}
                        hoverIcon={chevronIcon}
                        classNames="cta-secondary accent whitespace-nowrap w-full"
                        openInNewTab
                    />
                )}
            </div>
            <div className="project-card__mobile-controls">
                {projectLink && (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <button className="cta-secondary">Visit website</button>
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
