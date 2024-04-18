import React, { useState, useEffect } from 'react'
import { sourceSans3 } from '@/app/layout'

function TypewritedText({
    text = '',
    type = 'p',
    cursor = true,
    cursorSize = 'L',
    minDelay = 50,
    maxDelay = 300,
    initialDelay = 0,
    cursorAlwaysBlinking = false,
}) {
    const [newString, setNewString] = useState('')
    const [countTime, setCountTime] = useState(0)
    const [typingDelay, setTypingDelay] = useState(initialDelay)

    useEffect(() => {
        const typeCharacter = () => {
            if (countTime < text.length) {
                setNewString((prevNewString) => prevNewString + text[countTime])
                setCountTime((prevCountTime) => prevCountTime + 1)

                // Set the random delay for the next character
                const randomDelay =
                    Math.floor(Math.random() * (maxDelay - minDelay + 1)) +
                    minDelay
                setTypingDelay(randomDelay)
            }
        }
        const timeoutId = setTimeout(typeCharacter, typingDelay)
        return () => clearTimeout(timeoutId)
    }, [text, countTime, typingDelay, minDelay, maxDelay])

    return (
        <div className="typewrited-text">
            {type === 'h1' && (
                <h1 className={`${sourceSans3.className}`}>
                    {newString}
                    {cursor && (
                        <span
                            className={` typewrited-text__cursor ${cursorSize} ${
                                cursorAlwaysBlinking ||
                                (countTime > 0 && countTime < text.length)
                                    ? 'on'
                                    : 'off'
                            } `}
                        >
                            &#9144;
                        </span>
                    )}
                </h1>
            )}
            {type === 'h2' && (
                <h2 className={`${sourceSans3.className}`}>
                    {newString}
                    {cursor && (
                        <span
                            className={` typewrited-text__cursor ${cursorSize} ${
                                cursorAlwaysBlinking ||
                                (countTime > 0 && countTime < text.length)
                                    ? 'on'
                                    : 'off'
                            }`}
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
                            className={`typewrited-text__cursor ${cursorSize} ${
                                cursorAlwaysBlinking ||
                                (countTime > 0 && countTime < text.length)
                                    ? 'on'
                                    : 'off'
                            }`}
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
                            className={`typewrited-text__cursor ${cursorSize} ${
                                cursorAlwaysBlinking ||
                                (countTime > 0 && countTime < text.length)
                                    ? 'on'
                                    : 'off'
                            }`}
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
                            className={`typewrited-text__cursor ${cursorSize} ${
                                cursorAlwaysBlinking ||
                                (countTime > 0 && countTime < text.length)
                                    ? 'on'
                                    : 'off'
                            }`}
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
                            className={`typewrited-text__cursor ${cursorSize} ${
                                cursorAlwaysBlinking ||
                                (countTime > 0 && countTime < text.length)
                                    ? 'on'
                                    : 'off'
                            }`}
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
                                className={`typewrited-text__cursor ${cursorSize} ${
                                    cursorAlwaysBlinking ||
                                    (countTime > 0 && countTime < text.length)
                                        ? 'on'
                                        : 'off'
                                }`}
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
                <div className={`typewrited-text__cursor ${cursorSize} ${cursorAlwaysBlinking || (countTime > 0 || countTime < text.length) ? "on" : "off"}`}></div>
            )} */}
        </div>
    )
}

export default TypewritedText
