import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
// import { useHistory } from 'react-router';
import './pred.css';
// import footer2 from '../footer2/footer2';
// import Navbar2 from '../navbar2/Navbar2';
import PredCard from './PredCard';


const Pred = () => {
    const url = "http://localhost:3001"
    const history = useHistory()
    const [userGoal, setuserGoal] = useState({
        goalName: "",
        goalTime: 0,
        goalReturns: 0,
        goalMInvest: 0
    })

    const setGoal = async (e) => {
        e.preventDefault()
        if (userGoal === {
            goalName: "",
            goalTime: 0,
            goalReturns: 0,
            goalMInvest: 0
        }) {
            console.log("Nikal chal")
        } else {
            const res = await fetch(`${url}/api/v1/goal/setgoal`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authToken": localStorage.getItem('token')
                },
                body: JSON.stringify(userGoal)
            })
            let json = await res.json()
            console.log(json)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token') == null) {
            history.push("/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onChange = (e) => {
        setuserGoal({ ...userGoal, [e.target.name]: e.target.value })
    }



    return (
        <>
            <div className="pred-main--container">
                <div className="pred-hero--container">
                    <h1 className="pred-hero--heading">Set Your Goals</h1>
                    <div className="pred-hero--form">
                        <form action="">
                            <div className="form__group">
                                <input type="text" className="form__input" id="name" placeholder="What do you wanna Achieve?" onChange={onChange} required="" name="goalName" />
                                <label htmlFor="name" className="form__label">What do you wanna Achieve?</label>
                            </div>
                            <div className="form__group">
                                <input type="text" className="form__input" id="name" onChange={onChange} placeholder="How much money you will be needing will to ahieve your goal?" required="" name="goalReturns" />
                                <label htmlFor="name" className="form__label">How much money you will be needing will to ahieve your goal?</label>
                            </div>
                            <div className="form__group">
                                <input type="text" className="form__input" id="name" onChange={onChange} placeholder="In How Much Time You Wanna Achieve That ??" required="" name="goalTime" />
                                <label htmlFor="name" className="form__label">In How Much Time You Wanna Achieve That ?? In Years</label>
                            </div>
                            <div className="form__group">
                                <input type="text" className="form__input" id="name" onChange={onChange} placeholder="How Much Can You Invest In Monthly" required name="goalMInvest" />
                                <label htmlFor="name" className="form__label">How Much Can You Invest In Monthly</label>
                            </div>
                        </form>

                        <div className="pred-hero--form-button-container">
                            <div className="buttonn">
                                <a href="/#" className="nav-button--grp3 primary--button3">Suggest me</a>
                            </div>
                            <div className="buttonn">
                                <a href="/#" className="nav-button--grp6 primary--button6" type="submit" onClick={setGoal}>Add this to goal</a>
                            </div>
                        </div>
                    </div>
                </div>
                {userGoal.goalReturns > 1000000 ?
                <div className="pred-second--container">
                    <h1 className="pred-second--heading">Our Suggestions: &nbsp;&nbsp;<span className="pred-second--span">Look's like you can acheve it</span></h1>
                    <div className="pred-second--card">

                        <div>
                            <PredCard name="Stock Market" img="" liquidity="High" risk="High" ari="23%" active="yes" />
                        </div>
                        <div>
                            <PredCard name="Cryptocurrency" img="" liquidity="Highly Liquid" risk="Very High" ari="20-30%" active="no" />
                        </div>
                        <div>
                            <PredCard name="Gold" img="" liquidity="Low" risk="Low" ari="10%" active="no" />
                        </div>
                        <div>
                            <PredCard name="FD/Bonds" img="" liquidity="Very High" risk="Very Low" ari="7%" active="no" />
                        </div>
                    </div>
                </div>
                :
                <div className="pred-second--container">
                    <h1 className="pred-second--heading">Our Suggestions: &nbsp;&nbsp;<span className="pred-second--span">Look's like you can acheve it</span></h1>
                    <div className="pred-second--card">
                        <div>
                            <PredCard name="Gold" img="" liquidity="Low" risk="Low" ari="10%" active="no" />
                        </div>
                        <div>
                            <PredCard name="FD/Bonds" img="" liquidity="Very High" risk="Very Low" ari="7%" active="no" />
                        </div>
                        <div>
                            <PredCard name="Stock Market" img="" liquidity="High" risk="High" ari="23%" active="yes" />
                        </div>
                        <div>
                            <PredCard name="Cryptocurrency" img="" liquidity="Highly Liquid" risk="Very High" ari="20-30%" active="no" />
                        </div>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default Pred
