'use client'
// Import necessary libraries and components
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

// Import logo images for light and dark mode
import logoLightMode from '../../assets/images/logo/brahim_elandaloussi_logo.png'
import logoDarkMode from '../../assets/images/logo/brahim_elandaloussi_logo_dark_mode.png'

// Import sun and moon icons for light and dark mode toggle
import sunIcon from '../../assets/images/icons/sun.png'
import moonIcon from '../../assets/images/icons/moon.png'

// Header component
function Header() {
    // State variables for dark mode, color switch, and visibility
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isColorSwitch, setIsColorSwitch] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    // Intersection observer for visibility
    const { ref, inView } = useInView({
        threshold: 0,
    })

    // Set visibility based on intersection observer's inView
    useEffect(() => {
        const handleVisibility = () => {
            if (inView) {
                setIsVisible(true)
            }
        }
        handleVisibility()
    })

    // Get color transition delay value from CSS
    const colorTransitionDelayInMs = getComputedStyle(
        document.body
    ).getPropertyValue('--color-transition-delay')
    const colorTransitionDelay = parseInt(colorTransitionDelayInMs, 10)

    // Handle color switch animation
    const onColorSwitch = () => {
        if (!document.body.classList.contains('color-transition')) {
            document.body.classList.add('color-transition')
            setIsColorSwitch(true)
            setTimeout(() => {
                document.body.classList.remove('color-transition')
                setIsColorSwitch(false)
            }, colorTransitionDelay * 2.5)
        }
    }

    // Change between dark and light mode
    const onSelectMode = (mode) => {
        if (document.body.classList.contains('color-transition')) {
            setTimeout(() => {
                setIsDarkMode(mode)
                if (mode === true) document.body.classList.add('dark-mode')
                else document.body.classList.remove('dark-mode')
            }, colorTransitionDelay * 0.75)
        } else {
            setIsDarkMode(mode)
            if (mode === true) document.body.classList.add('dark-mode')
            else document.body.classList.remove('dark-mode')
        }
    }

    // Setup dark/light mode based on user's preferences
    useEffect(() => {
        // Add listener to update styles
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) =>
                onSelectMode(e.matches ? true : false)
            )

        // Setup dark/light mode for the first time
        onSelectMode(
            window.matchMedia('(prefers-color-scheme: dark)').matches
                ? true
                : false
        )

        // Remove listener
        return () => {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', () => {})
        }
    }, [])

    // Render header component
    return (
        <header className="flex w-full justify-between items-center px-8 py-4 md:px-14 md:py-5 bg-transparent">
            <section className="">
                <Image
                    src={isDarkMode ? logoDarkMode : logoLightMode}
                    alt="Logo"
                    className="w-7 h-7 object-contain cursor-pointer dark:grayscale"
                    onClick={() => window.location.reload()}
                    loading="lazy"
                />
            </section>
            <section className="flex items-center gap-8">
                <a
                    href="mailto:elandaloussi.contact@gmail.com"
                    target="__blank"
                    rel="noreferrer noopener"
                >
                    <h2
                        ref={ref}
                        className={`cta-tertiary text-2xs md:text-l cursor-pointer ${
                            isVisible ? 'visible' : 'invisible'
                        }`}
                    >
                        elandaloussi.contact@gmail.com
                    </h2>
                </a>
                <Image
                    onClick={() => {
                        onColorSwitch()
                        onSelectMode(!isDarkMode)
                    }}
                    src={isDarkMode ? sunIcon : moonIcon}
                    alt="Dark mode switch button"
                    className={`dark-mode-button ${
                        isColorSwitch && 'disabled'
                    } w-5 h-5 object-contain max-md:hidden cursor-pointer dark:grayscale`}
                    loading="lazy"
                />
            </section>
        </header>
    )
}

export default Header
