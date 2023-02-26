import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Tag from '../Tag/index'

function InfosCard({ id }) {
    const [activeTab, setActiveTab] = useState('whoAmI')

    return (
        <article className="infos-card" id={id}>
            <header className="infos-card__header">
                <menu className="infos-card__menu">
                    <ul>
                        <CSSTransition
                            in={activeTab === 'whoAmI'}
                            // unmountOnExit
                            timeout={50}
                            classNames="tab-is-active"
                        >
                            <li
                                className={
                                    activeTab === 'whoAmI'
                                        ? 'infos-card__menu-tab active'
                                        : 'infos-card__menu-tab'
                                }
                                onClick={() => setActiveTab('whoAmI')}
                            >
                                <p>Qui suis-je ?</p>
                            </li>
                        </CSSTransition>
                        <CSSTransition
                            in={activeTab === 'degrees'}
                            // unmountOnExit
                            timeout={50}
                            classNames="tab-is-active"
                        >
                            <li
                                className={
                                    activeTab === 'degrees'
                                        ? 'infos-card__menu-tab active'
                                        : 'infos-card__menu-tab'
                                }
                                onClick={() => setActiveTab('degrees')}
                            >
                                <p>Ma formation</p>
                            </li>
                        </CSSTransition>
                        <CSSTransition
                            in={activeTab === 'skills'}
                            // unmountOnExit
                            timeout={50}
                            classNames="tab-is-active"
                        >
                            <li
                                className={
                                    activeTab === 'skills'
                                        ? 'infos-card__menu-tab active'
                                        : 'infos-card__menu-tab'
                                }
                                onClick={() => setActiveTab('skills')}
                            >
                                <p>Mes compétences</p>
                            </li>
                        </CSSTransition>
                    </ul>
                </menu>
            </header>
            <CSSTransition
                in={activeTab === 'whoAmI'}
                // unmountOnExit
                mountOnEnter
                appear
                timeout={0}
                classNames="content-is-active"
            >
                <div className="infos-card__content who-am-i">
                    <h2>Brahim Elandaloussi</h2>
                    <p className="typewrited-text">
                        Développeur frontend junior, j'ai de solides bases dans
                        l'utilisation de technologies telles que HTML, CSS,
                        SASS, Javascript ainsi que React. Fort de mon expérience
                        accumulée à travers la réalisation de différents projets
                        professionnels, je suis capable de produire du code sur
                        mesure adapté à vos besoins.
                    </p>
                    <p>
                        Diplomé d'un BAC+2 en développement web chez
                        Openclassrooms, j'ai avant tout la soif d'apprendre et
                        de me perfectionner sur les technologies du web.
                    </p>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeTab === 'degrees'}
                // unmountOnExit
                mountOnEnter
                timeout={0}
                classNames="content-is-active"
            >
                <div className="infos-card__content degrees">
                    <h3>2022 - Développeur web - Openclassrooms</h3>
                    <h4>Titre RNCP de niveau 5 (Bac + 2)</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec luctus a felis at sodales.{' '}
                    </p>
                    <h3>2021 - Licence de droit - Université de Rennes</h3>
                    <h4>Licence (Bac + 3)</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec luctus a felis at sodales.{' '}
                    </p>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeTab === 'skills'}
                // unmountOnExit
                mountOnEnter
                timeout={0}
                classNames="content-is-active"
            >
                <div className="infos-card__content skills">
                    <div className="infos-card__content-skills">
                        <div className="skills-section">
                            <h3>Hard skills</h3>
                            <div className="skills-section__list">
                                <Tag value="html" />
                                <Tag value="css" />
                                <Tag value="sass" />
                                <Tag value="SEO" />
                                <Tag value="responsive" />
                                <Tag value="accessibility" />
                                <Tag value="optimization" />
                                <Tag value="javascript" />
                                <Tag value="node.js" />
                                <Tag value="mongodb" />
                                <Tag value="react" />
                                <Tag value="react router" />
                            </div>
                        </div>
                        <div className="skills-section">
                            <h3>Soft skills</h3>
                            <div className="skills-section__list">
                                <Tag value="html" />
                                <Tag value="css" />
                                <Tag value="sass" />
                                <Tag value="SEO" />
                                <Tag value="responsive" />
                                <Tag value="accessibility" />
                                <Tag value="optimization" />
                                <Tag value="javascript" />
                                <Tag value="node.js" />
                                <Tag value="mongodb" />
                                <Tag value="react" />
                                <Tag value="react router" />
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </article>
    )
}

export default InfosCard
