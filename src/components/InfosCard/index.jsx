import React, { useState } from 'react'

function InfosCard() {
    const [activeTab, setActiveTab] = useState('whoAmI')

    return (
        <article className="infos-card">
            <header className="infos-card__header">
                <menu className="infos-card__menu">
                    <ul>
                        <li
                            className={
                                activeTab === 'whoAmI'
                                    ? 'infos-card__menu-tab active'
                                    : 'infos-card__menu-tab'
                            }
                            onClick={() => setActiveTab('whoAmI')}
                        >
                            Qui suis-je ?
                        </li>
                        <li
                            className={
                                activeTab === 'degrees'
                                    ? 'infos-card__menu-tab active'
                                    : 'infos-card__menu-tab'
                            }
                            onClick={() => setActiveTab('degrees')}
                        >
                            Ma formation
                        </li>
                        <li
                            className={
                                activeTab === 'skills'
                                    ? 'infos-card__menu-tab active'
                                    : 'infos-card__menu-tab'
                            }
                            onClick={() => setActiveTab('skills')}
                        >
                            Mes compétences
                        </li>
                    </ul>
                </menu>
            </header>
            {activeTab === 'whoAmI' && (
                <div className="infos-card__content who-am-i">
                    <h2>Brahim Elandaloussi</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec luctus a felis at sodales. Maecenas sagittis,
                        risus et dapibus consequat, ligula mauris feugiat risus,
                        quis sollicitudin magna nulla vel lorem. Donec cursus mi
                        quis metus rhoncus, sit amet dignissim augue dictum. In
                        turpis erat, vulputate vulputate auctor dictum, cursus
                        ac est.
                    </p>
                </div>
            )}
            {activeTab === 'degrees' && (
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
            )}
            {activeTab === 'skills' && (
                <div className="infos-card__content skills">
                    <div>
                        <h3>Hard skills</h3>
                        <div className="skills-section__list">
                            <div className="skills-section__box">
                                <h4>Frontend</h4>
                                <ul>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                </ul>
                            </div>
                            <div className="skills-section__box">
                                <h4>Backend</h4>
                                <ul>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                </ul>
                            </div>
                            <div className="skills-section__box">
                                <h4>Général</h4>
                                <ul>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>Soft skills</h3>
                        <div className="skills-section__list">
                            <div className="skills-section__box">
                                <h4>Frontend</h4>
                                <ul>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                </ul>
                            </div>
                            <div className="skills-section__box">
                                <h4>Backend</h4>
                                <ul>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                </ul>
                            </div>
                            <div className="skills-section__box">
                                <h4>Général</h4>
                                <ul>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                    <li>Lorem</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </article>
    )
}

export default InfosCard
