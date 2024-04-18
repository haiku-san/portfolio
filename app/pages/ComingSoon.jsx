import React from 'react'

function ComingSoon() {
    return (
        <div className="coming-soon">
            <h1>En construction</h1>
            <h2>
                Ce site est en cours de création. Pour l'instant vous pouvez
                accéder à mon Github ainsi que mon Linkedin en cliquant sur les
                boutons ci-dessous..
            </h2>
            <div className="cta-section">
                <a
                    href="https://github.com/haiku-san"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="cta-primary">Github</button>
                </a>
                <a
                    href="https://www.linkedin.com/in/brahim-elandaloussi/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="cta-secondary">Linkedin</button>
                </a>
            </div>
        </div>
    )
}

export default ComingSoon
