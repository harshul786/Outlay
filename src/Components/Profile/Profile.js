import React from 'react'
import "./Profile.css"

const Profile = () => {
    return (
        <>
            <div className="profile-Container">
                <h1 className="profile-heading">Your Profile</h1>
                <div className="profile-flex">
                    <div className="right-context">
                        <div>
                            <div class="form__group_Profile">
                                <div >
                                    <label for="name" class="form__label_Profile">Name</label>
                                </div>
                                <input type="text" class="form__input_Profile" id="name" placeholder="Harshul" required="" />
                            </div>
                        </div>
                        <div>
                            <div class="form__group_Profile">
                                <div >
                                    <label for="name" class="form__label_Profile">Email</label>
                                </div>
                                <input type="text" class="form__input_Profile" id="name" placeholder="harshul.n786@gmail.com" required="" />
                            </div>
                        </div>
                        <div>
                            <div class="form__group_Profile">
                                <div >
                                    <label for="name" class="form__label_Profile">Age&nbsp;&nbsp;&nbsp;</label>
                                </div>
                                <input type="text" class="form__input_Profile" id="name" placeholder="20" required="" />
                            </div>
                        </div>
                    </div>
                    <div className="button-Profile">
                        <a href="/#" className="nav-button--grp-Profile primary--button-Profile">Save Changes</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile