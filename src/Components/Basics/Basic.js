import React from 'react';
import './Basic.css';

const Basic = () => {
    return (
        <>
            <div className="basic-main--container">
                <div className="basic-main-heading--container">
                    <h1 className="basic-main--heading">Basics</h1>
                </div>
                <div className="basic-main-para--container1">
                    <p className="basic-main--para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="basic-main--block"></div>
                <div className="basic-main-para--container2">
                    <p className="basic-main--para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="basic-main-para--container3">
                    <p className="basic-main--para extra">This is just an Example Course To give you an idea of the UI. We Hope that you enjoyed it 
                    </p>
                </div>
                <div className="basic-main--button">
                    <a href="/course-1-pg1" className="basic-main--link">Go Back</a>
                    <a href="/login" className="basic-main--link">Hey You Just completed the course</a>
                </div>
            </div>
        </>
    )
}

export default Basic
