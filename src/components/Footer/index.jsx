import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <div>
                    <a
                        href="https://github.com/haiku-san"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <li className="cta-tertiary">Github</li>
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/brahim-elandaloussi/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <li className="cta-tertiary">Linkedin</li>
                    </a>
                </div>
                <div>
                    <a
                        href="mailto:elandaloussi.contact@gmail.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <li className="cta-tertiary">
                            elandaloussi.contact@gmail.com
                        </li>
                    </a>
                </div>
            </ul>
        </footer>
    )
}

export default Footer
