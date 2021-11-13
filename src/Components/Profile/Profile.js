import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router'
import "./Profile.css"

const Profile = () => {
    const [state, setstate] = useState({})
    const url="http://localhost:3001"
    const history = useHistory()
    const getUser= async() =>{
        const res = await fetch(`${url}/api/v1/user/getuser`, {
            method : "GET",
            headers: {
                "Content-Type": "application/json",
                "authToken":localStorage.getItem('token')
            }
        })
        let json = await res.json()
        setstate(json)
    }

    useEffect(() => {
        if(localStorage.getItem('token') != null){
            getUser()
        }else{
            history.push("/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onChange = async(e) =>{
        setstate({...state,[e.target.name]:e.target.value})
    }


    return (
        <>
            <div className="profile-Container">
                <h1 className="profile-heading">Your Profile</h1>
                <div className="profile-flex">
                    <div className="right-context">
                        <div>
                            <div class="form__group_Profile">
                                <div >
                                    <label for="name" class="form__label_Profile">Name :</label>
                                </div>
                                <input type="text" class="form__input_Profile" value={state.name}  onChange={onChange} name="name" id="name" placeholder="Harshul" required="" />
                            </div>
                        </div>
                        <div>
                            <div class="form__group_Profile">
                                <div >
                                    <label for="name" class="form__label_Profile">Email :</label>
                                </div>
                                <input type="text" class="form__input_Profile" id="name" value={state.email} onChange={onChange} name="email" placeholder="harshul.n786@gmail.com" required="" />
                            </div>
                        </div>
                        <div>
                            <div class="form__group_Profile">
                                <div >
                                    <label for="name" class="form__label_Profile">Age :&nbsp;&nbsp;&nbsp;</label>
                                </div>
                                <input type="text" class="form__input_Profile" value={state.age} onChange={onChange} name="age" id="name" placeholder="20" required="" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-end">
                        <div className="profile-space">
                            &nbsp;
                        </div>
                        <div className="button-Profile">
                            <a href="/#" className="nav-button--grp-Profile primary--button-Profile">Save Changes</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile