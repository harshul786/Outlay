import React from 'react';
import "./card.css";
const Card = (props) => {
    return (
        <>
            <div className="third-container--card">
                <img src="../images/black.jpg" alt="" className="third-container--card-image" />
                <div className="third-container--card-content">
                    <h3 className="card-title">{props.heading}{props.name}</h3>
                    <p className="card-content">4 modules / 26 hours lecture</p><br/> <br/>
                        <div className="points">
                            <p className="card-content--points">- Some valid points.</p><br />
                            <p className="card-content--points">- About Courses. </p><br />
                            <p className="card-content--points">- Yes...</p>
                        </div>
                </div>
                <div className={`third-container--card-button ${props.working === "false" && "inactiveLink"}`} >
                    <a href={props.page === "home" ? "/login"  :"/course-1-pg1"}>{props.working === "false" ? "Coming Soon" : "Get Started"}</a>
                </div>
            </div>
        </>
    )
}

export default Card
