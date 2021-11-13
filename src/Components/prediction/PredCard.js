import React from 'react';
import './PredCard.css';

const PredCard = () => {
  return (
    <>
    <div className="cont">
        <div className="pred-card--container">
            <div className="leftcontainer">
              <div>
              <img src="./images/black.jpg" alt="" className="pred-card--img"/>
              </div>
              
              <div className="topic">
              Stocks <br></br>Investment
              </div>
            </div>
            <div className="columncard">
              <div>
                Average Rate of Interest : 24%
              </div>
              <div>
                Liquidity : High
              </div>
              <div>
                Risk : High
              </div>
              
            </div>
            
        </div>
        <div className="borderbutton">
          <div className="buttoncard">
              <a href ="/#" className="nav-button--grp5 primary--button5">Learn About it</a>
          </div>
        </div>
        </div>
    </>
  )
}

export default PredCard
