import React from 'react'
import "./message.css"

const Alert_messg = () => {
    return (
        <>
        <div className="block-msg">
            <div className="msg-cont-main">
                <div className="left-msg">
                    <div className="icons-msg">
                        <img src="./images/warning icon.png" alt="warning" className="icon-img" />
                    </div>

                    <div className="msg">
                        I am an Alert!
                    </div>
                </div>

                <div className="msg-cross">
                    <img src="./images/close.png" alt="close" className="icon-img" />
                </div>

            </div>
        </div>
        </>
    )
}

export default Alert_messg