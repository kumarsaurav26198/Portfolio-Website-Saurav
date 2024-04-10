import React, { useState, useEffect, useRef } from 'react';
import "./Intro.scss";
import { init } from "ityped";

function Intro() {

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imageContainer">
                    <img src="Image/Saurav.jpeg" alt="Profile pic" srcSet="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I`m</h2>
                    <h1>Saurav</h1>
                    <h4>I am a React Native developer with a passion for creating innovative and user-friendly mobile applications. With a bachelor's degree in computer science from Guru Kashi University, I have a strong foundation in JavaScript and React, which enables me to quickly adapt to the React Native framework and develop high-quality apps for both iOS and Android platforms. </h4>
                </div>
                <a href='#portfolio' >
                    <div className="downArrow">
                        <img src="Image/down.png" alt="" srcSet="" />
                        <span className="line1"></span>
                        <span className="line2"></span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Intro;
