import React, { useState, useEffect } from 'react'

import arrowUpIcon from '../../assets/images/icons/arrow-up.png'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            if (scrollPosition > 400) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'visible' : 'invisible'}`}
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
        >
            <img src={arrowUpIcon} alt="Arrow up icon" />{' '}
        </button>
    )
}

export default ScrollToTop
