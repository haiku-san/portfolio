// Import necessary libraries and components
import React, { useRef, useEffect, useState } from 'react'

// Import icons
import closeIcon from '../../assets/images/icons/close.png'
import collapseIcon from '../../assets/images/icons/collapse.png'
import imageIcon from '../../assets/images/icons/image.png'

// RetroInterface component
function RetroInterface({
    minLowestDelay = 200,
    maxLowestDelay = 400,
    minHighestDelay = 1000,
    maxHighestDelay = 2000,
}) {
    // Declare state variables and refs
    const interfaceRef = useRef()
    const collapseButtonRef = useRef()
    const [isOpen, setIsOpen] = useState(true)
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [openingCount, setOpeningCount] = useState(0)
    const [numberOfBars, setNumberOfBars] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadingBars, setLoadingBars] = useState([])

    // Function for making the interface draggable
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

    // Function for collapsing and expanding the interface
    const handleCollapse = (element) => {
        const interfaceLeftPadding = '2rem'
        if (element.classList.contains('collapse-button')) {
            if (
                element.parentElement.parentElement.parentElement.classList.contains(
                    'collapsed'
                )
            ) {
                setIsCollapsed(false)
                element.parentElement.parentElement.parentElement.style.bottom =
                    '40%'
                element.parentElement.parentElement.parentElement.style.left =
                    '60%'
                element.parentElement.parentElement.parentElement.style.top = ''
                element.parentElement.parentElement.parentElement.style.right =
                    ''
            } else {
                setIsCollapsed(true)
                const interfaceWidth = interfaceRef.current?.offsetWidth
                const interfaceHeight = interfaceRef.current?.offsetHeight

                element.parentElement.parentElement.parentElement.style.bottom =
                    '0px'
                element.parentElement.parentElement.parentElement.style.left = {
                    interfaceLeftPadding,
                }
                element.parentElement.parentElement.parentElement.style.top = ''
                element.parentElement.parentElement.parentElement.style.right =
                    ''

                element.parentElement.parentElement.parentElement.style.inset = `calc(100% - ${interfaceHeight}px - 2px) calc(100% - ${interfaceWidth}px - 4px) 0 ${interfaceLeftPadding} `
            }
        } else if (element.parentElement.classList.contains('collapsed')) {
            setIsCollapsed(false)

            element.parentElement.style.bottom = '40%'
            element.parentElement.style.left = '60%'
            element.parentElement.style.top = ''
            element.parentElement.style.right = ''
        }
    }

    // Loading bar animation effect
    useEffect(() => {
        if (numberOfBars < 8) {
            if (!isCollapsed) {
                let randomDelay = 0
                if (numberOfBars > 5) {
                    randomDelay =
                        Math.floor(
                            Math.random() *
                                (maxHighestDelay - minHighestDelay + 1)
                        ) + minHighestDelay
                } else {
                    randomDelay =
                        Math.floor(
                            Math.random() *
                                (maxLowestDelay - minLowestDelay + 1)
                        ) + minLowestDelay
                }

                const loadingBarsInterval = setInterval(() => {
                    setLoadingBars((prevBars) => [
                        ...prevBars,
                        <div key={prevBars.length}></div>,
                    ])
                    setNumberOfBars(numberOfBars + 1)
                }, randomDelay)

                return () => {
                    clearInterval(loadingBarsInterval)
                    setOpeningCount(openingCount + 1)
                }
            }
        } else {
            setIsLoading(false)
        }
    }, [
        isCollapsed,
        openingCount,
        numberOfBars,
        maxHighestDelay,
        maxLowestDelay,
        minHighestDelay,
        minLowestDelay,
    ])

    // Initialize drag functionality
    useEffect(() => {
        dragElement(interfaceRef.current)
    }, [])

    // Render RetroInterface component
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
                        <div className="retro-interface__title">
                            <img
                                src={imageIcon}
                                alt="Photography icon"
                                className="retro-interface__image-icon image-icon"
                            />
                            <h2>profile_picture.png</h2>
                        </div>
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
                                className="retro-interface__close-button close-button"
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
                                <h3>LOADING...</h3>
                            </section>
                        )}
                    </main>
                </article>
            )}
        </>
    )
}

export default RetroInterface
