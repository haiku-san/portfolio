import React, { useState, useEffect } from 'react'

function LoadingSpinner({ fullPage = false }) {
    const [className, setClassName] = useState('loader')

    useEffect(() => {
        if (fullPage) {
            setClassName(() => 'loader full-page')
        }
    }, [fullPage])

    return <div className={className}></div>
}

export default LoadingSpinner
