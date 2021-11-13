import React from 'react';
import './pred.css';
// import footer2 from '../footer2/footer2';
// import Navbar2 from '../navbar2/Navbar2';
import PredCard from './PredCard';

const Pred = () => {
  return (
    <>
        <div className="pred-main--container">
            <div className="pred-hero--container">
                <h1 className="pred-hero--heading">Set Your Goals</h1>
                <div className="pred-hero--form">
                    {/* <form action="" className="pred-form">
                        <input type="text" className="pred-form--input" placeholder="What do you wanna Achieve?" />   
                        <input type="text" className="pred-form--input" placeholder="How much money you will be needing will to ahieve your goal?" />   
                        <input type="text" className="pred-form--input" placeholder="In How Much Time You Wanna Achieve That ??" />   
                        <input type="text" className="pred-form--input" placeholder="How Much Can You Invest In Monthly" />   
                    </form> */}
                    <div class="form__group">
                    <input type="text" class="form__input" id="name" placeholder="What do you wanna Achieve?" required="" />
                    <label for="name" class="form__label">What do you wanna Achieve?</label>
                    </div>
                    <div class="form__group">
                    <input type="text" class="form__input" id="name" placeholder="How much money you will be needing will to ahieve your goal?" required="" />
                    <label for="name" class="form__label">How much money you will be needing will to ahieve your goal?</label>
                    </div>
                    <div class="form__group">
                    <input type="text" class="form__input" id="name" placeholder="In How Much Time You Wanna Achieve That ??" required="" />
                    <label for="name" class="form__label">In How Much Time You Wanna Achieve That ??</label>
                    </div>
                    <div class="form__group">
                    <input type="text" class="form__input" id="name" placeholder="How Much Can You Invest In Monthly" required="" />
                    <label for="name" class="form__label">How Much Can You Invest In Monthly</label>
                    </div>

                    <div className="pred-hero--form-button-container">
                        <div className="buttonn">
                        <a href ="/#" className="nav-button--grp3 primary--button3">Suggest me</a>
                        </div>
                        <div className="buttonn">
                        <a href ="/#" className="nav-button--grp6 primary--button6">Add this to goal</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pred-second--container">
                <h1 className="pred-second--heading">Our Suggestions: &nbsp;&nbsp;<span className="pred-second--span">Look's like you can acheve it</span></h1> 
                <div className="pred-second--card">
                    
                    <div>
                        <PredCard/>
                    </div>
                    <div>
                        <PredCard/>
                    </div>
                    <div>
                        <PredCard/>
                    </div>
                    <div>
                        <PredCard/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Pred
