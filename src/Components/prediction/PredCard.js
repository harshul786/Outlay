import React from 'react';
import './PredCard.css';

const PredCard = (props) => {
  return (
    <>
    <div className="cont">
        <div className="pred-card--container">
            <div className="leftcontainer">
              <div>
              <img src="../images/black.jpg" alt="" className="pred-card--img"/>
              </div>
              
              <div className="topic">
              {props.name}
              </div>
            </div>
            <div className="columncard">
              <div>
                Average Rate of Interest : {props.ari}
              </div>
              <div>
                Liquidity : {props.liquidity}
              </div>
              <div>
                Risk : {props.risk}
              </div>
              
            </div>
            
        </div>
        <div className="borderbutton">
          <div className="buttoncard ">
              <a href ="/course-info" className={`nav-button--grp5 primary--button5 ${ props.active === "no" ? "inactiveLink" : ""}`}>{ props.active === "no" ? "Coming Soon" : "Learn About it"}</a>
          </div>
        </div>
        </div>
    </>
  )
}

export default PredCard
