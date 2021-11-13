import React from 'react'
import './dashboard.css'
// import DashCard from './DashCard'
// import ToDo from './todo'
import Card from './Card.js'
import ContinueNothing from './continueNothing.js'

const Dashboard = () => {
    return (
        <>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&display=swap" rel="stylesheet"></link>
            <div className="dash-main">
                <div className="dash-hero">
                    <div className="dash-hero--heading">
                        <div className="goalsnav">
                        {/* <h1 className="dash-hero--heading_content"> */}
                           <p className="headinggoals"> Your Goals</p>
                        {/* </h1> */}
                        </div>
                        <div className="goalsnav">
                        <a href ="/#" className="nav-button--grp2 primary--button2">Add Goals</a>
                        </div>
                    </div>
                    <div className="Border">
                    <div className="dash-hero-details">
                        <div className="dash-hero-detials--title">
                            <p className="dash-hero-detials--title_goals">Mere Goals</p>
                        </div>
                        <div>
                            <p className="dash-hero-detials--title_amount">$4,000</p>
                        </div>
                        <div className="dash-hero-details--content">
                            <p className="dash-hero-details--content_time">10 Years</p>
                            <p className="dash-hero-details--content_time">$1000/ Per month</p>
                         </div>
                    </div>
                    <div className="dash-hero-details">
                        <div className="dash-hero-detials--title">
                            <p className="dash-hero-detials--title_goals">Mere Goals</p>
                        </div>
                        <div>
                            <p className="dash-hero-detials--title_amount">$4,000</p>
                        </div>
                        <div className="dash-hero-details--content">
                            <p className="dash-hero-details--content_time">10 Years</p>
                            <p className="dash-hero-details--content_time">$1000/ Per month</p>
                         </div>
                    </div>
                    <div className="dash-hero-details">
                        <div className="dash-hero-detials--title">
                            <p className="dash-hero-detials--title_goals">Mere Goals</p>
                        </div>
                        <div>
                            <p className="dash-hero-detials--title_amount">$4,000</p>
                        </div>
                        <div className="dash-hero-details--content">
                            <p className="dash-hero-details--content_time">10 Years</p>
                            <p className="dash-hero-details--content_time">$1000/ Per month</p>
                         </div>
                    </div>
                    </div>
                </div>

                <br></br>
                <div className="dash-section2">
                    <div className="dash-section2-heading">
                        <h2 className="dash-section2-heading--text">Continue Learning...</h2>
                    </div>
                        <div className="visiblity-continue-learning--nothing">
                            <div className="dash-section2-content">
                                <div className = "immg"><img src="../images/learning.png" alt="" className="dash-section2-content--img" />
                                </div><div className = "sec2-text">
                                <p className="dash-section2-content--heading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sed ipsam quo velit rerum dolore.</p>
                                
                                <p className="dash-section2-content--text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sed ipsam quo velit rerum dolore.</p>
                                </div> 
                                  
                            </div>   

                        </div>
                    
                        <div>
                            <ContinueNothing/>
                        </div>
                </div>
                <div className="dash-section3">
                    <div className="dash-section3-head">
                        <h1 className="dash-section3--heading">Courses you might be intrested in...</h1>
                    </div>
                    <div className="dash-section3--img--content">
                        <div className="dash-section3-img-content">
                            <img src="../images/stocklearn-01.png" alt="" className="dash-section3--img" />
                            <p className="dash-section3-content">Stocks</p>
                        </div>
                        <div className="dash-section3-img-content">
                            <img src="../images/bitcoin.png" alt="" className="dash-section3--img" />
                            <p className="dash-section3-content">Cryptocurrency</p>
                        </div>
                        <div className="dash-section3-img-content">
                            <img src="../images/mutual funds vector.png" alt="" className="dash-section3--img" />
                            <p className="dash-section3-content">Mutual Funds</p>
                        </div>
                    </div>
                </div>
                <div className="dash-section4-head">
                        <h1 className="deash-section4--heading">Must Read</h1>
                    </div>
                <div className="dash-section4">
                    
                <div className="third-container--card_container">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <br></br>
                </div>
            </div>
        </>
    )
}

export default Dashboard
