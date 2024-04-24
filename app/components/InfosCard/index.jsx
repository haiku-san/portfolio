import React, { useState } from 'react'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'
import Tag from '../Tag/index'

import arrowDown from '../../assets/images/icons/arrow-down.png'
import TypewritedText from '../TypewritedText/index.jsx'

function InfosCard({ id }) {
    const [activeTab, setActiveTab] = useState('whoAmI')

    function handleRightArrow() {
        if (activeTab === 'whoAmI') {
            setActiveTab('degrees')
        }
        if (activeTab === 'degrees') {
            setActiveTab('skills')
        }
        if (activeTab === 'skills') {
            setActiveTab('whoAmI')
        }
    }

    function handleLeftArrow() {
        if (activeTab === 'whoAmI') {
            setActiveTab('skills')
        }
        if (activeTab === 'degrees') {
            setActiveTab('whoAmI')
        }
        if (activeTab === 'skills') {
            setActiveTab('degrees')
        }
    }

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
                                <p>Compétences</p>
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
                                <p>Formation</p>
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
                    <h2 className="text-2xl">Hello!</h2>
                    <TypewritedText
                        text="Bienvenue sur mon portfolio. Je m'appelle Brahim et je suis un développeur web passionné. Vous pourrez trouver ci-dessous un aperçu des projets récents sur lesquels j'ai eu l'occasion de travailler."
                        type="p"
                        cursorSize="S"
                        minDelay={1}
                        maxDelay={15}
                        initialDelay={2000}
                    />
                    <TypewritedText
                        text={`Je développe principalement en Javascript. Vous pouvez trouver une liste complète de mes technos préférées en cliquant sur l'onglet "Compétences".`}
                        type="p"
                        cursorSize="S"
                        minDelay={1}
                        maxDelay={15}
                        initialDelay={5000}
                    />
                    <TypewritedText
                        text="Si vous avez la moindre question, n'hésitez pas à explorer mon portfolio ou à me contacter directement."
                        type="p"
                        cursorSize="S"
                        minDelay={1}
                        maxDelay={15}
                        initialDelay={7000}
                    />
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeTab === 'degrees'}
                // unmountOnExit
                mountOnEnter
                timeout={0}
                classNames="content-is-active"
            >
                <div className="infos-card__content infos-card__content-degrees">
                    <section>
                        <TypewritedText
                            text="2022 - Développeur integrateur web - Openclassrooms"
                            type="h3"
                            initialDelay={300}
                            minDelay={1}
                            maxDelay={25}
                        />
                        <TypewritedText
                            text="Titre RNCP de niveau 5 (Bac + 2)"
                            type="h4"
                            initialDelay={2000}
                            minDelay={1}
                            maxDelay={25}
                        />
                    </section>

                    <section>
                        <TypewritedText
                            text="2021 - Licence de droit - Université de Rennes 1"
                            type="h3"
                            initialDelay={3500}
                            minDelay={1}
                            maxDelay={25}
                        />
                        <TypewritedText
                            text="Licence (Bac + 3)"
                            type="h4"
                            initialDelay={5000}
                            minDelay={1}
                            maxDelay={25}
                        />
                    </section>
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
                            <h3>Frontend</h3>
                            <div className="skills-section__list">
                                <Tag value="next" />
                                <Tag value="react" />
                                <Tag value="javascript" />
                                <Tag value="tailwind" />
                                <Tag value="sass" />
                                <Tag value="html" />
                                <Tag value="css" />
                            </div>
                        </div>
                        <div className="skills-section">
                            <h3>Backend</h3>
                            <div className="skills-section__list">
                                <Tag value="next" />
                                <Tag value="node.js" />
                                <Tag value="mongodb" />
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <footer className="infos-card__mobile-controls">
                <Image
                    src={arrowDown}
                    alt=""
                    onClick={() => handleLeftArrow()}
                />{' '}
                {activeTab === 'whoAmI' && <p>1/3</p>}
                {activeTab === 'degrees' && <p>2/3</p>}
                {activeTab === 'skills' && <p>3/3</p>}
                <Image
                    src={arrowDown}
                    alt=""
                    onClick={() => handleRightArrow()}
                />
            </footer>
        </article>
    )
}

export default InfosCard
