import React from "react";
import {Link} from "react-router-dom";
import LandingImage from "../images/landingImage.png";
import "./LandingPage.css";
const LandingPage=()=>{
    return(
        <>
        <section className="container">
            <section className="img-container">
            <img src={LandingImage} alt="LandingImage"/>
            </section>
            <section className="text-btn-container">
                <h1 className="landing-text">10x Team 04</h1>
                <Link to="/PostView">
                <button className='landing-btn'>Enter</button>
                </Link>
            </section>
        </section>
        </>
    )
}
export default LandingPage;