
import React from 'react'
import './continueNothing.css'


const ContinueNothing = () => {
    return (
        <>
            <div className="cl-main">
                <div className="cl-border">
                    <div className="cl-content">
                        <div className="cl-img">
                            <img src="../images/stock-market-img.jpg" alt="" className="cl-content-img">
                            </img>
                        </div>
                        <div className="cl-text">
                            <div className="pointfiveremgap">
                                <p className="cl-text-heading">
                                Complete Guide to Stock Market investment from scratch
                                </p>
                                <p className="cl-text-completion">
                                    Course Status: 68% Completed 
                                </p>
                            </div>
                            <div className="goalsnav">
                            <a href ="/#" className="nav-button--grp2 primary--button2 bb">Continue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContinueNothing