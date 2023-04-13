import React, { useRef, useEffect, useState } from 'react'

import closeIcon from '../../assets/images/icons/close.png'
import collapseIcon from '../../assets/images/icons/collapse.png'

function RetroInterface() {
    const interfaceRef = useRef()
    const collapseButtonRef = useRef()
    const [isOpen, setIsOpen] = useState(true)
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [openingCount, setOpeningCount] = useState(0)
    const [numberOfBars, setNumberOfBars] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadingBars, setLoadingBars] = useState([])

    const dragElement = (element) => {
        if (!element.classList.contains('collapse-button')) {
            let pos1 = 0,
                pos2 = 0,
                pos3 = 0,
                pos4 = 0

            element.onmousedown = dragMouseDown

            function dragMouseDown(e) {
                e = e || window.event
                e.preventDefault()
                pos3 = e.clientX
                pos4 = e.clientY
                document.onmouseup = closeDragElement
                document.onmousemove = elementDrag
            }

            function elementDrag(e) {
                if (
                    interfaceRef.current.parentElement.classList.contains(
                        'open'
                    )
                ) {
                    setIsDragging(true)

                    e = e || window.event
                    e.preventDefault()
                    pos1 = pos3 - e.clientX
                    pos2 = pos4 - e.clientY
                    pos3 = e.clientX
                    pos4 = e.clientY
                    element.parentElement.style.top =
                        element.parentElement.offsetTop - pos2 + 'px'
                    element.parentElement.style.left =
                        element.parentElement.offsetLeft - pos1 + 'px'
                }
            }

            function closeDragElement() {
                setIsDragging(false)
                document.onmouseup = null
                document.onmousemove = null
            }
        }
    }

    const handleCollapse = (element) => {
        if (element.classList.contains('collapse-button')) {
            if (
                element.parentElement.parentElement.parentElement.classList.contains(
                    'collapsed'
                )
            ) {
                setIsCollapsed(false)
                element.parentElement.parentElement.parentElement.style.bottom =
                    '40%'
                element.parentElement.parentElement.parentElement.style.right =
                    '10%'
                element.parentElement.parentElement.parentElement.style.top = ''
                element.parentElement.parentElement.parentElement.style.left =
                    ''
            } else {
                setIsCollapsed(true)
                const interfaceWidth = interfaceRef.current?.offsetWidth
                const interfaceHeight = interfaceRef.current?.offsetHeight

                element.parentElement.parentElement.parentElement.style.bottom =
                    '0px'
                element.parentElement.parentElement.parentElement.style.right =
                    '0px'
                element.parentElement.parentElement.parentElement.style.top = ''
                element.parentElement.parentElement.parentElement.style.left =
                    ''

                element.parentElement.parentElement.parentElement.style.inset = `calc(100% - ${interfaceHeight}px - 2px) 0 0 calc(100% - ${interfaceWidth}px - 4px)`
            }
        } else if (element.parentElement.classList.contains('collapsed')) {
            setIsCollapsed(false)

            element.parentElement.style.bottom = '40%'
            element.parentElement.style.right = '10%'
            element.parentElement.style.top = ''
            element.parentElement.style.left = ''
        }
    }

    useEffect(() => {
        console.log(isCollapsed)
        if (numberOfBars < 8) {
            if (!isCollapsed) {
                let randomDelay = 0
                if (numberOfBars > 5) {
                    console.log('A')
                    randomDelay =
                        Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000
                } else {
                    console.log('B')

                    randomDelay =
                        Math.floor(Math.random() * (1000 - 300 + 1)) + 300
                }

                const interval = setInterval(() => {
                    setLoadingBars((prevBars) => [
                        ...prevBars,
                        <div key={prevBars.length}></div>,
                    ])
                    setNumberOfBars(numberOfBars + 1)
                }, randomDelay)
                return () => {
                    // clearTimeout(timeoutId)
                    clearInterval(interval)
                    setOpeningCount(openingCount + 1)
                }
            }
        } else {
            setIsLoading(false)
        }
    }, [isCollapsed, openingCount, numberOfBars])

    useEffect(() => {
        dragElement(interfaceRef.current)
    }, [])

    return (
        <>
            {isOpen && (
                <article
                    className={`retro-interface ${
                        isCollapsed ? 'collapsed' : 'open'
                    } ${isDragging ? 'dragging' : ''}`}
                >
                    <header
                        ref={interfaceRef}
                        onClick={() => handleCollapse(interfaceRef.current)}
                    >
                        <h2>profile_picture.png</h2>
                        <div className="retro-interface__controls">
                            <button
                                className="retro-interface__collapse-button collapse-button"
                                ref={collapseButtonRef}
                                onClick={() =>
                                    handleCollapse(collapseButtonRef.current)
                                }
                            >
                                <img src={collapseIcon} alt="Line icon" />
                            </button>
                            <button
                                className="retro-interface__close-button"
                                onClick={() => setIsOpen(false)}
                            >
                                <img src={closeIcon} alt="Cross icon" />
                            </button>
                        </div>
                    </header>
                    <main>
                        {isLoading && (
                            <section>
                                <div className="retro-interface__loading-bar">
                                    {loadingBars}
                                </div>
                                <h3>LOADING</h3>
                            </section>
                        )}
                    </main>
                </article>
            )}
        </>
    )
}

export default RetroInterface
