import React from 'react'

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
// html, css, sass, SEO, responsive, accessibility, optimization, javascript, nodejs, mongodb, react, react router

function Tag({ value = 'html' }) {
    return (
        <div>
            {value === 'html' && (
                <li>
                    <img src={htmlIcon} alt="icone html" />
                    <p>HTML</p>
                </li>
            )}
            {value === 'css' && (
                <li>
                    <img src={cssIcon} alt="icone css" />
                    <p>CSS</p>
                </li>
            )}
            {value === 'sass' && (
                <li>
                    <img src={sassIcon} alt="icone sass" />
                    <p>Sass</p>
                </li>
            )}
            {value === 'SEO' && (
                <li>
                    <img src={SEOIcon} alt="icone SEO" />
                    <p>SEO</p>
                </li>
            )}
            {value === 'responsive' && (
                <li>
                    <img src={responsiveIcon} alt="icone responsive" />
                    <p>Responsive</p>
                </li>
            )}
            {value === 'accessibility' && (
                <li>
                    <img src={accessibilityIcon} alt="icone accessibility" />
                    <p>Accessibility</p>
                </li>
            )}
            {value === 'optimization' && (
                <li>
                    <img src={optimizationIcon} alt="icone optimisation" />
                    <p>Optimisation</p>
                </li>
            )}
            {value === 'javascript' && (
                <li>
                    <img src={javascriptIcon} alt="icone javascript" />
                    <p>Javascript</p>
                </li>
            )}
            {value === 'node.js' && (
                <li>
                    <img src={nodejsIcon} alt="icone nodejs" />
                    <p>Node.js</p>
                </li>
            )}
            {value === 'mongodb' && (
                <li>
                    <img src={mongoDBIcon} alt="icone mongoDB" />
                    <p>MongoDB</p>
                </li>
            )}
            {value === 'react' && (
                <li>
                    <img src={reactIcon} alt="icone react" />
                    <p>React</p>
                </li>
            )}
            {value === 'react router' && (
                <li>
                    <img src={reactRouterIcon} alt="icone react router" />
                    <p>React router</p>
                </li>
            )}
        </div>
    )
}

export default Tag
