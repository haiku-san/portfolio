import React from 'react'

function LoadingSpinner({ fullPage = false }) {
    return <div className={`loader ${fullPage && 'full-page'}`}></div>
}

export default LoadingSpinner
