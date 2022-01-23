import "./Work.scss";
import React, { useState } from 'react';


function Work() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "image/mobile1.png",
            title: "Projects",
            img: "Image/mobile1.png",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur vel, numquam quo maxime explicabo consectetur sunt",
        },
        {
            id: "2",
            icon: "image/mobile1.png",
            title: "Learning",
            img: "Image/mobile1.png",
            desc: "lorejhgwaedjv vhxdffmbndfgh cvjhtu dfgu vbyu xdbyh8",
        },
        {
            id: "3",
            icon: "image/mobile1.png",
            title: "Pratices",
            desc: "lorem Aspernatur distinctio accusantium nostrum doloremque cum accusamus quod eius, laborum ut quidem minus similiqu",
            img: "Image/mobile1.png"
        },

    ];
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className='work' id='work'>
            <div className="slider" style={{ transform: `translateX(-${ currentSlide * 100 }vw ` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imageContainer">
                                        <img src={d.img} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>{d.title}</span>
                                </div>

                            </div>
                            <div className="right">
                                <img src="Image/contant.jpg" alt="" />

                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            <img src="Image/down.png" className='arrow left' alt="" onClick={() => handleClick("left")} />
            <img src="Image/down.png" className='arrow right' alt="" onClick={() => handleClick("right")} />
        </div>
    );
}

export default Work;
