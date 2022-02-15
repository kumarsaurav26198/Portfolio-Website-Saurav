// import React from 'react';
import "./Polkaevent.scss";


function Polkaevent() {
    return <div className="body">


        <div className="topbar">
            <div className="logo">
                <img src="image/PolkaEvent.png" alt="PolkaEvent" />
                {/* <h2>PolkaEvent</h2> */}
            </div>
            <div className="components">
                <ul>
                    <li>Home</li>
                    <li>Events</li>
                    <li>Blogs</li>
                    <li>Meet Up</li>
                    <li>Contacts Us</li>
                </ul>
            </div>
        </div>


        <div className="page">
            <>

                <div className="container">

                    <h2>Add Conference</h2>
                    <form action="">
                        <input type="text" placeholder="Conferance name" />
                        <input type="text" placeholder="A valid and working URL" /><br />
                        <div className="footer">


                            <div className="left">
                                <select name="cars" id="cars">
                                    <option value="volvo">Topic</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <br />
                                <input type="date" placeholder="Start Date" />
                                <input type="text" placeholder="CPF  URL" />
                                <input type="text" placeholder="Conference Twitter handle" />



                            </div>
                            <div className="right">
                                <select name="cars" id="cars">
                                    <option value="volvo">Location</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <input type="date" placeholder="Start Date" />
                                <input type="text " type="date" placeholder="CPF  URL" />
                                <input type="text" placeholder="Code of conduct URL" />


                            </div>
                        </div>
                        <div className="button">

                            <button className="btn">Add Conference</button>
                        </div>
                    </form>
                </div>
            </>

            <img src="Image/design.png" alt="" />
        </div>



    </div>;
}

export default Polkaevent;
