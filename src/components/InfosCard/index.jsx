import React, { useState } from 'react'
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
                        améliorer mes compétences et mes projets."
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
                        initialDelay={8000}
                    />
                    <TypewritedText
                        text="Si vous voulez en savoir plus sur moi et mes réalisations, n'hésitez pas à explorer mon portfolio ou à me contacter directement."
                        type="p"
                        cursorSize="S"
                        minDelay={15}
                        maxDelay={28}
                        initialDelay={14000}
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
                <img src={arrowDown} alt="" onClick={() => handleLeftArrow()} />{' '}
                {activeTab === 'whoAmI' && <p>1/3</p>}
                {activeTab === 'degrees' && <p>2/3</p>}
                {activeTab === 'skills' && <p>3/3</p>}
                <img
                    src={arrowDown}
                    alt=""
                    onClick={() => handleRightArrow()}
                />
            </footer>
        </article>
    )
}

export default InfosCard
