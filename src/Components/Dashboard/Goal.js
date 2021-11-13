import React from 'react'

const goal = (props) => {
    return (
        <div>
            <div className="dash-hero-details">
                <div className="dash-hero-detials--title">
                    <p className="dash-hero-detials--title_goals">{props.GoalName}</p>
                </div>
                <div>
                    <p className="dash-hero-detials--title_amount">{props.GoalAmount}</p>
                </div>
                <div className="dash-hero-details--content">
                    <p className="dash-hero-details--content_time">{props.GoalTime}</p>
                    <p className="dash-hero-details--content_time">{props.GoalInvest}</p>
                </div>
            </div>
        </div>
    )
}

export default goal
