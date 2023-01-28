import React, { useState } from 'react'
import Tag from '../Tag/index'

// Importation des icones

import htmlIcon from '../../assets/images/icons/html_icon.png'
import cssIcon from '../../assets/images/icons/css_icon.png'
import responsiveIcon from '../../assets/images/icons/responsive_icon.png'
import githubIcon from '../../assets/images/icons/github_icon.png'
import sassIcon from '../../assets/images/icons/sass_icon.png'
import accessibilityIcon from '../../assets/images/icons/accessibility_icon.png'
import SEOIcon from '../../assets/images/icons/seo_icon.png'
import optimizationIcon from '../../assets/images/icons/optimization_icon.png'
import javascriptIcon from '../../assets/images/icons/javascript_icon.png'
import nodejsIcon from '../../assets/images/icons/nodejs_icon.png'
import mongoDBIcon from '../../assets/images/icons/mongodb_icon.png'
import reactIcon from '../../assets/images/icons/react_icon.png'
import reactRouterIcon from '../../assets/images/icons/react_router_icon.png'

// Importation des previews des projets

import bookiPreview1 from '../../assets/images/projects_previews/booki/bookiPreview1.png'
import bookiPreview2 from '../../assets/images/projects_previews/booki/bookiPreview2.png'

function ProjectCard({ contentIsOnLeft = true, tagsList = [] }) {
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
                        {tagsList.includes('html') && <Tag value="html" />}
                        {tagsList.includes('css') && <Tag value="css" />}

                        {tagsList.includes('sass') && <Tag value="sass" />}

                        {tagsList.includes('SEO') && <Tag value="SEO" />}
                        {tagsList.includes('responsive') && (
                            <Tag value="responsive" />
                        )}
                        {tagsList.includes('accessibility') && (
                            <Tag value="accessibility" />
                        )}
                        {tagsList.includes('optimization') && (
                            <Tag value="optimization" />
                        )}
                        {tagsList.includes('javascript') && (
                            <Tag value="javascript" />
                        )}
                        {tagsList.includes('node.js') && (
                            <Tag value="node.js" />
                        )}
                        {tagsList.includes('mongoDB') && (
                            <Tag value="mongoDB" />
                        )}
                        {tagsList.includes('react') && <Tag value="react" />}
                        {tagsList.includes('react router') && (
                            <Tag value="react router" />
                        )}
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
                        {tagsList.includes('html') && <Tag value="html" />}
                        {tagsList.includes('css') && <Tag value="css" />}

                        {tagsList.includes('sass') && <Tag value="sass" />}

                        {tagsList.includes('SEO') && <Tag value="SEO" />}
                        {tagsList.includes('responsive') && (
                            <Tag value="responsive" />
                        )}
                        {tagsList.includes('accessibility') && (
                            <Tag value="accessibility" />
                        )}
                        {tagsList.includes('optimization') && (
                            <Tag value="optimization" />
                        )}
                        {tagsList.includes('javascript') && (
                            <Tag value="javascript" />
                        )}
                        {tagsList.includes('node.js') && (
                            <Tag value="node.js" />
                        )}
                        {tagsList.includes('mongoDB') && (
                            <Tag value="mongoDB" />
                        )}
                        {tagsList.includes('react') && <Tag value="react" />}
                        {tagsList.includes('react router') && (
                            <Tag value="react router" />
                        )}
                    </ul>
                </aside>
            )}
        </article>
    )
}

export default ProjectCard
