import { Email } from '@material-ui/icons';
import React from 'react';
import Person from '../Icons/Person';
import "./Topbar.scss";


function Topbar() {
    return (
        <div className='topbar' id='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>genius.</a>
                </div>
                <div className="itemContainer">
                    {/* <Person /> */}
                    <img src="/Image/logo.png" alt="logo" style={{ height: "44px", border: "1px solid black" }} />
                </div>
                <span>+91 620 2142 166</span>
                <div className="itemContainer">
                    <b>
                        <Email></Email>
                    </b>
                    <span>magnetsurav77@gmail.com</span>
                </div>
                <div className="hambargur">

                </div>


            </div>

        </div>
    );
};

export default Topbar;
