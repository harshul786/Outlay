import React from 'react'
import "./pc.css";
const Pc = () => {
    return (
        <>
            <div className="pc-main--container">
                <div className="pc-main-heading--container">
                    <h1 className="pc-main--heading">Complete Guide to Stock Market Investment from Scratch</h1>
                </div>
                <div className="pc-second--container">
                    <div className="pc-second--overNotes">
                        <div className="pc-second-content--container">
                            <p className="pc-second-content"></p>
                        </div>
                        <div className="pc-second-button--container">
                            <a href="/#" className="pc-second-button">Overview</a>
                            <a href="/#" className="pc-second-button">Notes</a>
                        </div>
                    </div>
                    <div className="pc-second-about--container">
                        <h2 className="pc-second--about_heading">About the Author</h2>
                        <p className="pc-second--about_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit laudantium sapiente amet</p>
                    </div>
                </div>
                <div className="pc-difficulty--container">
                    <h1 className="pc-difficulty--heading">Difficulty Level: Begineer/ Intermediate/ Advanced</h1>
                </div>
                <div className="pc-aboutCourse--container">
                    <div className="pc-aboutCourse-heading--container">
                        <h1 className="pc-aboutCourse-heading">About This Course</h1>
                    </div>
                    <div className="pc-aboutCourse-para--container"></div>
                </div>
            </div>
        </>
    )
}

export default Pc
