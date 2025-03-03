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
                                <p>Overview</p>
                            </li>
                        </CSSTransition>

                        <CSSTransition
                            in={activeTab === 'skills'}
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
                                <p>Skills</p>
                            </li>
                        </CSSTransition>
                        <CSSTransition
                            in={activeTab === 'degrees'}
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
                                <p>Education</p>
                            </li>
                        </CSSTransition>
                    </ul>
                </menu>
            </header>
            <CSSTransition
                in={activeTab === 'whoAmI'}
                mountOnEnter
                appear
                timeout={0}
                classNames="content-is-active"
            >
                <div className="infos-card__content who-am-i">
                    <h2 className="text-2xl">Hi!</h2>
                    <TypewritedText
                        text={`Welcome on my website. My name is Brahim, I'm a fullstack developer and a Computer Science student at the University of Geneva. You can find here an preview of some of the projects I've had the chance to work on for the previous years.\n\nWhilst most of my visible work is in Javascript, I also code in Typescript, Python and C. You can find a full list of my skills on the tab "skills".\n\nI hope you'll have a great time visiting my website. If you have any question, don't hesitate to contact me`}
                        type="p"
                        cursorSize="S"
                        minDelay={5}
                        maxDelay={16}
                        initialDelay={2000}
                        cursorAlwaysBlinking
                    />
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeTab === 'degrees'}
                mountOnEnter
                timeout={0}
                classNames="content-is-active"
            >
                <div className="infos-card__content infos-card__content-degrees">
                    <section>
                        <TypewritedText
                            text={`2024 - Bachelor in Computer Science (on-going)\nUniversity of Geneva\n\n2022 - Web Developer Certificate\nOpenclassrooms\n\n2021 - Bachelor in Law\nUniversity of Rennes 1`}
                            type="h3"
                            initialDelay={500}
                            minDelay={5}
                            maxDelay={28}
                            cursorAlwaysBlinking
                        />
                    </section>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeTab === 'skills'}
                mountOnEnter
                timeout={0}
                classNames="content-is-active"
            >
                <div className="infos-card__content skills">
                    <div className="infos-card__content-skills">
                        <div className="skills-section">
                            <h3>Frontend</h3>
                            <div className="skills-section__list">
                                <Tag value="javascript" />
                                <Tag value="react" />
                                <Tag value="next" />
                                <Tag value="tailwind" />
                                <Tag value="uiux" />
                            </div>
                        </div>
                        <div className="skills-section">
                            <h3>Backend</h3>
                            <div className="skills-section__list">
                                <Tag value="python" />
                                <Tag value="node.js" />
                                <Tag value="c" />
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
