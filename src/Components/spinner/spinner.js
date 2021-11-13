import React from 'react'
import "./spinner.css"

const Spinner = () => {
    return (
        <>
            <div className="spinner-container">
                    <div className = "spinner-gif"><img src="./images/loading-23.gif" alt="Loading" className="spinner-content-img" />
                    </div>
            </div>


        </>
    )
}

export default Spinner