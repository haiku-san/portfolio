import React from 'react'
import Image from 'next/image'

// Importation des icones

import htmlIcon from '../../assets/images/icons/html_icon.png'
import cssIcon from '../../assets/images/icons/css_icon.png'
import responsiveIcon from '../../assets/images/icons/responsive_icon.png'
import sassIcon from '../../assets/images/icons/sass_icon.png'
import accessibilityIcon from '../../assets/images/icons/accessibility_icon.png'
import SEOIcon from '../../assets/images/icons/seo_icon.png'
import optimizationIcon from '../../assets/images/icons/optimization_icon.png'
import javascriptIcon from '../../assets/images/icons/javascript_icon.png'
import nodejsIcon from '../../assets/images/icons/nodejs_icon.png'
import mongoDBIcon from '../../assets/images/icons/mongodb_icon.png'
import reactIcon from '../../assets/images/icons/react_icon.png'
import reactRouterIcon from '../../assets/images/icons/react_router_icon.png'

// value peut prendre comme valeur les strings suivantes :
// html, css, sass, SEO, responsive, accessibility, optimization, javascript, node.js, mongodb, react, react router

function Tag({ value = 'html' }) {
    return (
        <div className="skill-tag">
            {value === 'html' && (
                <a
                    href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <li>
                        <Image loading="lazy" src={htmlIcon} alt="icone html" />
                        <p>HTML</p>
                    </li>
                </a>
            )}
            {value === 'css' && (
                <a
                    href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <li>
                        <Image loading="lazy" src={cssIcon} alt="icone css" />
                        <p>CSS</p>
                    </li>
                </a>
            )}
            {value === 'sass' && (
                <a
                    href="https://fr.wikipedia.org/wiki/Sass_(langage)"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <li>
                        <Image loading="lazy" src={sassIcon} alt="icone sass" />
                        <p>Sass</p>
                    </li>
                </a>
            )}
            {value === 'SEO' && (
                <a
                    href="https://fr.wikipedia.org/wiki/Optimisation_pour_les_moteurs_de_recherche"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <li>
                        <Image loading="lazy" src={SEOIcon} alt="icone SEO" />
                        <p>SEO</p>
                    </li>
                </a>
            )}
            {value === 'responsive' && (
                <a
                    href="https://fr.wikipedia.org/wiki/Site_web_r%C3%A9actif"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <li>
                        <Image
                            loading="lazy"
                            src={responsiveIcon}
                            alt="icone responsive"
                        />
                        <p>Responsive</p>
                    </li>
                </a>
            )}
            {value === 'accessibility' && (
                <a
                    href="https://fr.wikipedia.org/wiki/Accessibilit%C3%A9_du_web"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <li>
                        <Image
                            loading="lazy"
                            src={accessibilityIcon}
                            alt="icone accessibility"
                        />
                        <p>Accessibilité</p>
                    </li>
                </a>
            )}
            {value === 'optimization' && (
                <a
                    href="https://en.wikipedia.org/wiki/Web_performance"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <li>
                        <Image
                            loading="lazy"
                            src={optimizationIcon}
                            alt="icone optimisation"
                        />
                        <p>Optimisation</p>
                    </li>
                </a>
            )}
            {value === 'javascript' && (
                <a
                    href="https://fr.wikipedia.org/wiki/JavaScript"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <li>
                        <Image
                            loading="lazy"
                            src={javascriptIcon}
                            alt="icone javascript"
                        />
                        <p>Javascript</p>
                    </li>
                </a>
            )}
            {value === 'node.js' && (
                <a
                    href="https://fr.wikipedia.org/wiki/Node.js"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <li>
                        <Image
                            loading="lazy"
                            src={nodejsIcon}
                            alt="icone nodejs"
                        />
                        <p>Node.js</p>
                    </li>
                </a>
            )}
            {value === 'mongodb' && (
                <a
                    href="https://fr.wikipedia.org/wiki/MongoDB"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <li>
                        <Image
                            loading="lazy"
                            src={mongoDBIcon}
                            alt="icone mongoDB"
                        />
                        <p>MongoDB</p>
                    </li>
                </a>
            )}
            {value === 'react' && (
                <a
                    href="https://fr.wikipedia.org/wiki/React"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <li>
                        <Image loading="lazy" src={reactIcon} alt="icone react" />
                        <p>React</p>
                    </li>
                </a>
            )}
            {value === 'react router' && (
                <a
                    href="https://fr.wikipedia.org/wiki/React"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <li>
                        <Image
                            loading="lazy"
                            src={reactRouterIcon}
                            alt="icone react router"
                        />
                        <p>React router</p>
                    </li>
                </a>
            )}
        </div>
    )
}

export default Tag
