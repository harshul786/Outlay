import React from 'react'
import './404.css'

const Error = () => {
  return (
    <>
        <div className="error-container">
            <h1 className="error-heading--one">Oops! Looks like page doesn't exist!</h1>
            <img src="./images/error.png" alt="" className="error"/>
            <h1 className="error-heading--two">Seems like a server error or this feature is still beign worked upon.</h1>
        </div>
    </>
  )
}

export default Error
