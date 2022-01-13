import React from 'react';
import "./Person.scss";
import { FaBeer } from 'react-icons/fa';



function Person() {
    return (
        <div className='image' style={{ height: "30px", widht: "30px", marginTop: "10px" }}>
            {/* <img src="/Image/logo.png" alt="logo" /> */}
            <FaBeer />
        </div>
    );
}

export default Person;
