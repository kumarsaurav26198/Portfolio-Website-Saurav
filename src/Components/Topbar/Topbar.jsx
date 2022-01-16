import React from 'react';
import "./Topbar.scss";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";

function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Saurav</a>
                    <div className="contact1">
                        <span><BsTelephoneForwardFill /></span>&nbsp;&nbsp;&nbsp;
                        <b>+91 620 2142 166</b>
                    </div>
                    <div className="itemContainer">
                        <div className="email">
                            <BiEnvelope />&nbsp;&nbsp;&nbsp;
                            <b><span>kumarsaurav26198@gmail.com</span></b>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="hambarger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
