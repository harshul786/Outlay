import React from 'react'
import { useHistory } from 'react-router';
import './Navbar2.css'
const Navbar2 = () => {
    const history = useHistory()
    const openDropDown = () => {
        document.getElementById("myDropdown").style.display = "flex";
    };

    const closemenu = () => {
        var menu_ham = document.getElementById("hamburger-menu");
        var open_menu = document.getElementById("open");
        menu_ham.style.top = "-100vh";
        open_menu.style.width = "2rem";
        open_menu.style.transition = "1s linear"
    }
    const openmenu = () => {
        var menu_ham = document.getElementById("hamburger-menu");
        var open_menu = document.getElementById("open");
        menu_ham.style.top = "0vh";
        open_menu.style.width = "0vw";
        open_menu.style.transition = "1s linear"
    }
    const handleLogout =() =>{
        localStorage.removeItem('token')
        history.push("/login")
    }



    return (
        <>
            <div className="nav-bar">
                <div className="nav-links">
                    <div className="nav-logo">
                        <img src="../images/Outlay.png" alt="" className="nav-logo--img" />
                    </div>
                    <a href="/login/dashboard" className="nav-links--text">Home</a>
                    <a href="/login/prediction" className="nav-links--text">Goals</a>
                    <a href="/course-overview" className="nav-links--text">Courses</a>
                </div>
                <div className="nav-buttons">
                    <a href="/#" onClick={handleLogout} className="nav-button-in --logout">Logout</a>
                    <div className="drop-down--nav">
                        <a className="nav-button-in --dropdown" onClick={openDropDown}>Username<i className="fas fa-sort-down"></i></a>
                        <div id="myDropdown" className="nav--dropdown-item">
                            <a href="/login/profile" className="nav--dropdown-links">Profile</a>
                            {/* <a href="/#" className="nav--dropdown-links">Contact Us</a>
                            <a href="/#" className="nav--dropdown-links">About us</a> */}
                        </div>
                    </div>

                </div>
                <div className="action-nav-bar">
                    <img src="../images/menu.png" alt="" onClick={openmenu} id="open" className="menu-icon" />
                </div>
                <div className="hamburger-menu" id="hamburger-menu">
                    <ul>
                        <li><a href="/login/profile">Edit Profile</a></li>
                        {/* <li><a href="">Change Password</a></li>
                        <li><a href="">Help</a></li> */}
                        <li><a href="/#" onClick={handleLogout}>Log Out</a></li>
                    </ul>
                    <img src="../images/cross.png" alt="" className="close" id="close" onClick={closemenu} />
                </div>
            </div>
        </>
    )
}

export default Navbar2