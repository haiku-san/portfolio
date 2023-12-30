import React, { useState } from 'react'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'
import Tag from '../Tag/index'

import arrowDown from '../../assets/images/icons/arrow-down.png'
import TypewritedText from '../TypewritedText/index'

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
                    <h2>Hello!</h2>
                    <TypewritedText
                        text="Je suis Brahim, un
                        développeur frontend passionné,
                        toujours à l'affût de nouvelles tendances et idées pour
                        améliorer mes compétences et mes projets. J'aime créer
                        des projets innovants et laisser libre
                        cours à ma curiosité et ma
                        créativité."
                        type="p"
                        cursorSize="S"
                        minDelay={15}
                        maxDelay={28}
                        initialDelay={4000}
                    />
                    <TypewritedText
                        text="Je développe principalement en
                        Javascript. Mes frameworks de
                        prédilection sont React.js pour le
                        front et Node.js pour le back. Vous
                        pouvez trouver une sélection de mes projets ci-dessous."
                        type="p"
                        cursorSize="S"
                        minDelay={15}
                        maxDelay={28}
                        initialDelay={11000}
                    />
                    <TypewritedText
                        text="Si vous voulez en savoir plus sur moi et mes réalisations, n'hésitez pas à explorer mon portfolio ou à me contacter directement."
                        type="p"
                        cursorSize="S"
                        minDelay={15}
                        maxDelay={28}
                        initialDelay={17000}
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
                            minDelay={30}
                            maxDelay={50}
                        />
                        <TypewritedText
                            text="Titre RNCP de niveau 5 (Bac + 2)"
                            type="h4"
                            initialDelay={4000}
                            minDelay={40}
                            maxDelay={70}
                        />
                    </section>

                    <section>
                        <TypewritedText
                            text="2021 - Licence de droit - Université de Rennes 1"
                            type="h3"
                            initialDelay={7000}
                            minDelay={40}
                            maxDelay={70}
                        />
                        <TypewritedText
                            text="Licence (Bac + 3)"
                            type="h4"
                            initialDelay={10000}
                            minDelay={40}
                            maxDelay={70}
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
                                <ul>
                                    <li className="soft-skill-tag">
                                        Curiosité
                                    </li>
                                    <li className="soft-skill-tag">
                                        Créativité
                                    </li>
                                    <li className="soft-skill-tag">
                                        Travail d&apos;équipe
                                    </li>
                                    <li className="soft-skill-tag">Rigueur</li>
                                    <li className="soft-skill-tag">
                                        Adaptabilité
                                    </li>
                                </ul>
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
                />
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
