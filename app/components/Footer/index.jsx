'use client'
import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

function Footer() {
    const [isVisible, setIsVisible] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0,
    })

    useEffect(() => {
        const handleVisibility = () => {
            if (inView) {
                setIsVisible(true)
            }
        }
        handleVisibility()
    })
    return (
        <footer className="footer">
            <ul>
                <div>
                    <a
                        href="https://github.com/haiku-san"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <li
                            ref={ref}
                            className={`cta-tertiary ${
                                isVisible ? 'visible' : 'invisible'
                            }`}
                        >
                            Github
                        </li>
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/brahim-elandaloussi/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <li
                            ref={ref}
                            className={`cta-tertiary ${
                                isVisible ? 'visible' : 'invisible'
                            }`}
                        >
                            Linkedin
                        </li>
                    </a>
                </div>
                <div>
                    <a
                        href="mailto:elandaloussi.contact@gmail.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <li
                            ref={ref}
                            className={`cta-tertiary ${
                                isVisible ? 'visible' : 'invisible'
                            }`}
                        >
                            elandaloussi.contact@gmail.com
                        </li>
                    </a>
                </div>
            </ul>
        </footer>
    )
}

export default Footer
