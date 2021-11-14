import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import "./signup.css"


const Signup = () => {

    const url="http://localhost:3001"
    const [cred, setstate] = useState({name:"",age:"",email: "", password: ""})
    const history = useHistory()

    const submit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${url}/api/v1/user/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cred)
        })
        let json = await res.json()
        // setAlert({message:json.message,success:json.success})
        setstate({name:"",age:"",email: "", password: ""})
        if(json.success){
            history.push("/login")
        }
        // setTimeout(()=>{
        //     setAlert(null)
        //   },2000)
    }
    useEffect(() => {
        if(localStorage.getItem('token')){
            history.push("/")
        }
        //eslint-disable-next-line
    }, [])

    const onChange = (e) =>{
        setstate({...cred,[e.target.name]:e.target.value})
    }


    return (
        <>
            <div className="split-screen">
                <div className="left" >
                    <img className="imageresize" alt="imghere" src="./images/bitcoin.png"
                        height="25%" width="25%">
                    </img> &nbsp;
                </div>
                <div className="right">
                    <section className="signup">
                        <div className="container-mt-5">
                            <div className="signup-content">
                                <form action="">
                                    <div className="page">
                                        <label className="field field_v1">
                                            <input className="field__input" autoComplete="false" onChange={onChange} placeholder="e.g. Steave Rogers" name="name" />
                                            <span className="field__label-wrap">
                                                <span className="field__label">Full Name</span>
                                            </span>
                                        </label>
                                        <label className="field field_v1">
                                            <input className="field__input" onChange={onChange} placeholder="e.g. 19" name="age" />
                                            <span className="field__label-wrap">
                                                <span className="field__label">Age</span>
                                            </span>
                                        </label>
                                        <label className="field field_v1">
                                            <input className="field__input" onChange={onChange} placeholder="e.g. steaveJ96@gmail.com" name="email" />
                                            <span className="field__label-wrap">
                                                <span className="field__label">E-mail</span>
                                            </span>
                                        </label>
                                        <label className="field field_v1">
                                            <input type="password" className="field__input" onChange={onChange} placeholder="e.g. Ssshhhhhh" id="pwd" name="password" />
                                            <span className="field__label-wrap">
                                                <span className="field__label">Create a Password</span>
                                            </span>
                                        </label>
                                        {/* <label className="field field_v1">
                                            <input type="password" className="field__input" placeholder="Again Sssshhhh" id="cnfrmpwd" />
                                            <span className="field__label-wrap">
                                                <span className="field__label">Confirm Password</span>
                                            </span>
                                        </label> */}

                                        <label className="field field_v3">
                                            <p className="acct">
                                                Already have an account? &nbsp;<a href="/login">Login </a>
                                            </p>
                                            <div className="nav-buttonSignup">
                                                <a href="/#" onClick={submit} className="nav-button--grpSignup primary--buttonSignup">Sign Up</a>
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
