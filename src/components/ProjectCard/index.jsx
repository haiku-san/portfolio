import React, { useState } from 'react'
import htmlIcon from '../../assets/images/icons/html_icon.png'
import cssIcon from '../../assets/images/icons/css_icon.png'
import responsiveIcon from '../../assets/images/icons/responsive_icon.png'
import githubIcon from '../../assets/images/icons/github_icon.png'

import bookiPreview1 from '../../assets/images/projects_previews/booki/bookiPreview1.png'
import bookiPreview2 from '../../assets/images/projects_previews/booki/bookiPreview2.png'

function ProjectCard({ contentIsOnLeft = true }) {
    return (
        <article className="project-card">
            {contentIsOnLeft && (
                <aside className="project-card__content">
                    <div className="project-card__content-text">
                        <h2>
                            Remake du frontend de l'application web de Netflix
                        </h2>
                        <h3>2023</h3>
                        <p>Projet personnel</p>
                    </div>
                    <ul className="project-card__tags-list">
                        <li>
                            <img src={htmlIcon} alt="icone html" />
                            <p>HTML</p>
                        </li>
                        <li>
                            <img src={cssIcon} alt="icone css" />
                            <p>CSS</p>
                        </li>
                        <li>
                            <img src={responsiveIcon} alt="icone responsive" />

                            <p>Responsive</p>
                        </li>
                    </ul>
                </aside>
            )}
            <main
                className="project-card__preview"
                onClick={() =>
                    window.open('https://github.com/haiku-san/OC-P7', '_blank')
                }
            >
                <div className="project-card__buttons">
                    <a
                        href="https://github.com/haiku-san/OC-P7"
                        title="Voir le repository Github"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <button className="cta-secondary">
                            Voir le projet
                        </button>
                    </a>

                    <a
                        href="https://github.com/haiku-san/OC-P7"
                        title="Voir le repository Github"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <button className="icon-button">
                            <img src={githubIcon} alt="github icon" />
                        </button>
                    </a>
                </div>
                <div className="project-card__background">
                    <img src={bookiPreview1} alt="booki preview" />
                    <img src={bookiPreview2} alt="booki preview" />
                </div>
            </main>
            {contentIsOnLeft === false && (
                <aside className="project-card__content">
                    <div className="project-card__content-text">
                        <h2>
                            Remake du frontend de l'application web de Netflix
                        </h2>
                        <h3>2023</h3>
                        <p>Projet personnel</p>
                    </div>
                    <ul className="project-card__tags-list">
                        <li>
                            <img src={htmlIcon} alt="icone html" />
                            <p>HTML</p>
                        </li>
                        <li>
                            <img src={cssIcon} alt="icone css" />
                            <p>CSS</p>
                        </li>
                        <li>
                            <img src={responsiveIcon} alt="icone responsive" />

                            <p>Responsive</p>
                        </li>
                    </ul>
                </aside>
            )}
        </article>
    )
}

export default ProjectCard
