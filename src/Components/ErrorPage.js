import React from 'react'

function ErrorPage() {
    return (
        <div className='bodyContainer'>
            <div id='errorContainer'>
                <div id='faceContainer'><div className='sadFace'></div></div>
                <div id='textContainer'>
                    <h2 id='errorTitle'>404</h2>
                    <p id='errorSubtitle'>PAGE COULD NOT BE FOUND</p>
                    <p id='errorText'>The page you were looking for has been moved, removed, does not exist, or is temporarily unavailable</p>
                    <p id='errorReload' onClick={() => {window.location.reload();}}>Back to Homepage</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
