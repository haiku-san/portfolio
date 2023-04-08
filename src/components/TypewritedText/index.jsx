import React, { useState, useEffect, useCallback } from 'react'

function TypewritedText({
    text = '',
    type = 'p',
    cursor = true,
    cursorSize = 'L',
    minDelay = 50,
    maxDelay = 300,
    initialDelay = 0,
}) {
    const [newString, setNewString] = useState('')
    const [countTime, setCountTime] = useState(0)
    const [countIteration, setCountIteration] = useState(-1)

    useEffect(() => {
        const randomDelay =
            Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay
        const intervalId = setInterval(() => {
            const intervalId = setTimeout(() => {
                if (countTime < text.length) {
                    setCountTime((prevCountTime) => prevCountTime + 1)
                }
            }, initialDelay)
        }, randomDelay)
        return () => clearInterval(intervalId)

        return () => clearTimeout(intervalId)
    }, [text, countTime])

    useEffect(() => {
        function typewriteText() {
            const splitCharacters = text.split('')

            if (countIteration < text.length) {
                if (splitCharacters[countIteration]) {
                    setNewString((newString) =>
                        newString.concat(splitCharacters[countIteration])
                    )
                }

                setCountIteration(countIteration + 1)
            }
        }
        typewriteText()
    }, [countTime])

    return (
        <div className="typewrited-text">
            {type === 'h1' && (
                <h1>
                    {newString}
                    {cursor && (
                        <span
                            className={`typewrited-text__cursor ${cursorSize}`}
                        >
                            &#9144;
                        </span>
                    )}
                </h1>
            )}
            {type === 'h2' && (
                <h2>
                    {newString}
                    {cursor && (
                        <span
                            className={`typewrited-text__cursor ${cursorSize}`}
                        >
                            &#9144;
                        </span>
                    )}
                </h2>
            )}
            {type === 'h3' && (
                <h3>
                    {newString}
                    {cursor && (
                        <span
                            className={`typewrited-text__cursor ${cursorSize}`}
                        >
                            &#9144;
                        </span>
                    )}
                </h3>
            )}
            {type === 'h4' && (
                <h4>
                    {newString}
                    {cursor && (
                        <span
                            className={`typewrited-text__cursor ${cursorSize}`}
                        >
                            &#9144;
                        </span>
                    )}
                </h4>
            )}
            {type === 'h5' && (
                <h5>
                    {newString}
                    {cursor && (
                        <span
                            className={`typewrited-text__cursor ${cursorSize}`}
                        >
                            &#9144;
                        </span>
                    )}
                </h5>
            )}
            {type === 'h6' && (
                <h6>
                    {newString}
                    {cursor && (
                        <span
                            className={`typewrited-text__cursor ${cursorSize}`}
                        >
                            &#9144;
                        </span>
                    )}
                </h6>
            )}
            {type === 'p' && (
                <>
                    <p>
                        {newString}
                        {cursor && (
                            <span
                                className={`typewrited-text__cursor ${cursorSize}`}
                            >
                                {/* &#9144;
                                 */}
                                &#9144;
                            </span>
                        )}
                    </p>
                </>
            )}
            {/* {cursor && (
                <div className={`typewrited-text__cursor ${cursorSize}`}></div>
            )} */}
        </div>
    )
}

export default TypewritedText
