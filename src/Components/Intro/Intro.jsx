import React from 'react';
import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from 'react';


function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['learner !', ' Beginer !']
        });

    }, []);


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
                    <h3>Front-end Developer , <span ref={textRef}>Designer</span></h3>
                </div>
                <a href='#portfolio' >
                    <div className="downArrow">
                        <img src="Image/down.png" alt="" srcset="" />
                        {/* <span className="line1"></span>
                        <span className="line2"></span> */}
                    </div>
                </a>


            </div>


        </div>
    );
};

export default Intro;
