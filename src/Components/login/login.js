import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import "./login.css"


const Login = () => {

    const [cred, setstate] = useState({ email: "", password: "" })
    const history = useHistory()
    const url="http://localhost:3001"

    useEffect(() => {
        if(localStorage.getItem('token')){
            history.push("/login/dashboard")
        }
        //eslint-disable-next-line
    }, [])

    const submit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${url}/api/v1/user/login`, {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cred)
        })
        let json = await res.json()
        console.log(json)
        localStorage.setItem('token',json.authToken)
        // setAlert({message:json.message,success:json.success})
        setstate({ email: "", password: "" })
        if(json.success){
            history.push("/login/dashboard")
        }
        // setTimeout(()=>{
        //     setAlert(null)
        // },2000)
    }

    const onChange = async(e) =>{
        setstate({...cred,[e.target.name]:e.target.value})
    }

  return (
    <>
        <div className="container">
            <div className="form-container">
                <div className="form-container--image">
                    <img src="./images/Outlay.png" alt="" className="form-container--image__logo" />
                </div>
                <label className="field field_v1">
                        <input className="field__input" onChange={onChange} name="email" value={cred.email} placeholder="e.g. steaveJ96@gmail.com" id="mail"/>
                        <span className="field__label-wrap">
                        <span className="field__label">Enter your E-mail</span>
                        </span>
                    </label>
                    <label className="field field_v1">
                        <input type ="password" className="field__input" onChange={onChange} name="password" value={cred.password} placeholder="e.g. Steave@96" id="pwd"/>
                        <span className="field__label-wrap">
                        <span className="field__label">Enter your Password</span>
                        </span>
                    </label>


                    <label className="field field_v3 mm">

                    &nbsp;&nbsp;Don't have an account? &nbsp;<a href="/signup">Sign Up </a>
                    <div className="nav-button2">
                        <a href ="/#" onClick={submit}  className="nav-button2--grp2 primary--button2">Login</a>
                    </div>     
                    </label>

            </div>
        </div>
    </>
  )
}

export default Login
