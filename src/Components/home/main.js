import React from 'react'
import "./main.css"
import Card from './Card'
import DevCard from './DevCard'


const Home = () => {
    return (
        <>
             <div className="main-container">
                <div className="first-container">
                    <div className="first-container-content">
                        <h1 className="first-container--heading">Learn<br /> the art of <br /> investing for free!!</h1>
                        <a href="/login" className="first-container--getstarted">Get Started</a>
                    </div>
                    <img src="./images/Bitcoin _Flatline.png" alt="" className="first-container--img" />
                </div>
                <div className="second-container">
                    <img src="./images/tempupdate-01.jpg" alt="" className="second-container--img" />
                </div>
                <div className="third-container">
                    <h1 className="third-container--heading">What have we got for you?</h1>
                    <div className="third-container--card_container">
                        <Card name="Complete Guide to Stock Market investment from scratch" working="true" page="home"/>
                        <Card name="Complete Guide to Stock Market investment from scratch" working="false"/>
                        <Card name="Complete Guide to Stock Market investment from scratch" working="false"/>
                    </div>
                </div>
                <div className="fourth-container">
                    <div className="fourth-container-div1">
                        <h1 className="fourth-container--heading">Why Us?</h1>
                        <p className="fourth-container--para extra-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, aliquid sapiente officiis repudiandae ratione voluptas sequi delectus quasi, asperiores, quas maiores? Cum, modi optio? Atque, quaerat nostrum quam quidem omnis debitis mollitia? Accusamus natus, laudantium cum quis nulla dolores praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima quam provident neque eligendi, debitis culpa consequuntur alias iusto commodi ipsam. Optio, nisi? Voluptatum optio consectetur quis quidem in, eligendi a aliquid adipisci voluptatem nisi fugit omnis. Modi dolore, dignissimos repudiandae voluptas fuga corporis tempore sit, temporibus minima maiores est!.</p>
                    </div>
                    <div className="fourth-container-div2">
                        <h1 className="fourth-container--heading">Who is it for?</h1>
                        <p className="fourth-container--para extra-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae pariatur minima dolorum sequi eaque voluptate nulla error amet veritatis.</p>
                    </div>
                </div>

                <div className="fifth-container">
                    <div className="fifth-container--heading">
                        <h1 className="fifth-container--heading-h1">
                            Developer Section
                        </h1>
                    </div>
                    <div className="fifth-container--card_container">
                        <DevCard/>
                        <DevCard/>
                        <DevCard/>
                        <DevCard/>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Home
