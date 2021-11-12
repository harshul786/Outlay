import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <>
        <div className="container">
            <div className="form-container">
                <div className="form-container--image">
                    <img src="./images/Outlay.png" alt="" className="form-container--image__logo" />
                </div>
                <label class="field field_v1">
                        <input class="field__input" placeholder="e.g. steaveJ96@gmail.com" id="mail"/>
                        <span class="field__label-wrap">
                        <span class="field__label">Enter your E-mail</span>
                        </span>
                    </label>
                    <label class="field field_v1">
                        <input type ="password" class="field__input" placeholder="e.g. Steave@96" id="pwd"/>
                        <span class="field__label-wrap">
                        <span class="field__label">Enter your Password</span>
                        </span>
                    </label>


                    <label class="field field_v3 mm">

                    &nbsp;&nbsp;Don't have an account? &nbsp;<a href="/#">Sign Up </a>
                    <div className="nav-button2">
                        <a href ="/#" className="nav-button2--grp2 primary--button2">Login</a>
                    </div>     
                    </label>

            </div>
        </div>
    </>
  )
}

export default Login
