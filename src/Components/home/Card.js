import React from 'react';
import "./card.css";
const Card = () => {
    return (
        <>
            <div className="third-container--card">
                <img src="./images/black.jpg" alt="" className="third-container--card-image" />
                <div className="third-container--card-content">
                    <h3 className="card-title">Complete Guide to Stock Market<br />investment from scratch</h3>
                    <p className="card-content">4 modules / 26 hours lecture</p><br /> <br />
                        <div className="points">
                            <p className="card-content--points">- Some valid points.</p><br />
                            <p className="card-content--points">- About Courses. </p><br />
                            <p className="card-content--points">- Yes...</p>
                        </div>
                </div>
                <div className="third-container--card-button">
                    <a href="/#">Get started</a>
                </div>
            </div>
        </>
    )
}

export default Card
