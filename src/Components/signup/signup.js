import React from 'react'
import "./signup.css"

const Signup = () => {
    return (
        <>
            <div class="split-screen">
                <div class="left" >
                    <img class="imageresize" alt="imghere" src="./images/bitcoin.png"
                        height="25%" width="25%">
                    </img> &nbsp;
                </div>
                <div class="right">
                    <section class="signup">
                        <div class="container-mt-5">
                            <div className="signup-content">
                                <form action="">
                                    <div class="page">
                                        <label class="field field_v1">
                                            <input class="field__input" placeholder="e.g. Steave" />
                                            <span class="field__label-wrap">
                                                <span class="field__label">First name</span>
                                            </span>
                                        </label>
                                        <label class="field field_v1">
                                            <input class="field__input" placeholder="e.g. Jobs" />
                                            <span class="field__label-wrap">
                                                <span class="field__label">Last name</span>
                                            </span>
                                        </label>
                                        <label class="field field_v1">
                                            <input class="field__input" placeholder="e.g. steaveJ96@gmail.com" />
                                            <span class="field__label-wrap">
                                                <span class="field__label">E-mail</span>
                                            </span>
                                        </label>
                                        <label class="field field_v1">
                                            <input type="password" class="field__input" placeholder="e.g. Steave@96" id="pwd" />
                                            <span class="field__label-wrap">
                                                <span class="field__label">Create a Password</span>
                                            </span>
                                        </label>
                                        <label class="field field_v1">
                                            <input type="password" class="field__input" placeholder=" CP " id="cnfrmpwd" />
                                            <span class="field__label-wrap">
                                                <span class="field__label">Confirm Password</span>
                                            </span>
                                        </label>

                                        <label class="field field_v3">
                                            <p className="acct">
                                                Already have an account? &nbsp;<a href="/#">Login </a>
                                            </p>
                                            <div className="nav-buttonSignup">
                                                <a href="/#" className="nav-button--grpSignup primary--buttonSignup">Sign Up</a>
                                            </div>
                                        </label>
                                    </div></form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

export default Signup
