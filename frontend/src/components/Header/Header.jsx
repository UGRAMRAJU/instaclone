import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header=()=>{
    return(
        <>
        <section className="container">
            <section className="logo-container">
                <section className="logo">
                    <img src={require("../images/header-icon.png")} alt="logo"/>
                </section>
                <section className="logo-text"> Instaclone</section>
            </section>
            <section className="camera-container">
                <Link to="/Form">
            <img src={require("../images/camera-icon.png")} alt="camera"/>
            </Link>
            </section>
        </section>
        </>
    )
}
export default Header;