import React from 'react';
import "./Intro.scss";


function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imageContainer">
                    <img src="Image/Saurav.jpeg" alt="Profile pic" srcset="" />
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I`m</h2>
                    <h1>Saurav</h1>
                    <h3>Front-end Developer <span></span></h3>
                </div>
                <a href='#portfolio' >
                    <div className="downArrow">
                        <span className="line1"></span>
                        <span className="line2"></span>
                    </div>
                </a>


            </div>


        </div>
    );
}

export default Intro;
