import React from "react";
import './Navbar.css'
import insta from './Images/instagram.png'
import menu from './Images/menu.png'

function Navbar(){


    return(
        <>
                    {/* <div className="circle"></div> */}

        <nav>
            <div className="Logo">
                <h1>S Sharma</h1>
            </div>
            <div className="menus">
                <ul>
                    <li><a className="a1" href="/">Home</a></li>
                    <li><a className="a2" href="/">Projects</a></li>
                    <li><a className="a3" href="/">Skills</a></li>
                    <li><a className="a4" href="/">Resume</a></li>
                </ul>
            </div>
            <div className="menubar">
                <img src={menu} alt="" />
            </div>
            <div className="social">
                <img src={insta} alt="" />
                <img src={insta} alt="" />
                <img src={insta} alt="" />
            </div>

        </nav>
            {/* <h1>Navbar</h1>/ */}
        </>
    );
};
export default Navbar;