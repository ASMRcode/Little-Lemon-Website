import React from "react";
import logo from "../assets/Asset 7@4x.png";
import './Footer.css'

const Footer = () => {
    return (
       <div className="footerContainer">
            <div className="iconBox">
                <img src={logo}></img>
            </div>
        <div className="LinkContainer">
                <div className="containerContent">
                    <p className="linkGroupTitle">Contact Info</p>
                    <a href="#">Call</a>
                    <a href="#">Email</a>
                    <a href="#">Directions</a>
                </div>
            </div><div className="LinkContainer">
                <div className="containerContent">
                    <p className="linkGroupTitle">Social Media</p>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">Tiktok</a>
                </div>
            </div><div className="LinkContainer">
                <div className="containerContent">
                    <p className="linkGroupTitle">Useful Links</p>
                    <a href="#">Home</a>
                    <a href="#">Menu</a>
                    <a href="#">Order Online</a>
                    <a href="#">About</a>
                    <a href="#">Login</a>
                </div>
            </div>
            </div>
    );
}

export default Footer;