import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Tag from '../Tag/index'

import arrowDown from '../../assets/images/icons/arrow-down.png'

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
                    <h2>Hey there!</h2>
                    <p>
                        Je suis <strong>Brahim</strong>, un{' '}
                        <strong>développeur frontend</strong> passionné,
                        toujours à l'affût de nouvelles tendances et idées pour
                        améliorer mes compétences et mes projets. J'aime créer
                        des projets <strong>innovants</strong> et laisser libre
                        cours à ma <strong>curiosité</strong> et ma{' '}
                        <strong>créativité</strong>.
                    </p>
                    <p>
                        En plus d'être compétent en{' '}
                        <strong>
                            HTML, CSS, JavaScript, React, Node.js et Express
                        </strong>
                        , j'ai une <strong>formation en droit</strong> et de
                        solides aptitudes rédactionnelles et relationnelles.
                        J'ai acquis ces compétences en étudiant à l'université,
                        mais aussi en travaillant en restauration en parallèle
                        de ma <strong>formation en développement web</strong>.
                    </p>{' '}
                    <p>
                        Je suis convaincu que la{' '}
                        <strong>formation continue</strong> est essentielle pour
                        rester à jour avec les{' '}
                        <strong>dernières tendances</strong> et les{' '}
                        <strong>nouvelles technologies</strong> dans le domaine
                        du web. C'est pourquoi je suis toujours en train d'
                        apprendre et de me perfectionner.
                    </p>{' '}
                    <p>
                        Si vous voulez en savoir plus sur moi et mes
                        réalisations, n'hésitez pas à{' '}
                        <strong>explorer mon portfolio</strong> ou à{' '}
                        <strong>me contacter</strong> directement.
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
                    <p></p>
                    <h3>2021 - Licence de droit - Université de Rennes</h3>
                    <h4>Licence (Bac + 3)</h4>
                    <p></p>
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
                                        Travail d'équipe
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
