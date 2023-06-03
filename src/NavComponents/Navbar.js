import React from "react";
import { FaAirbnb, FaRegUserCircle, FaBars, FaSearch, FaFirefoxBrowser } from 'react-icons/fa';


const Navbar = () => {
    return (
        <div className="section">
            <div className="Nav-logo">
                <div className="icon-logo">
                    <div> <span className="Nav-logo"><FaAirbnb /></span></div>
                    <div className="air">  <p>airbnb</p></div>
                </div>
            </div>
            <div className="seardib1" >
                <div className="seardib2">
                    <div className="seardib3">
                        <button className="btn btn1"><span className="btnCon">Anywher</span></button>
                        <span className="btnspn"></span>
                        <button className="btn"><span className="btnCon">Any week</span></button>
                        <span className="btnspn"></span>
                        <button className="btn">
                            <div className="btnCon gest">Add guests</div>
                            <div className=" btnsear"> <span className="fasear"><FaSearch /></span></div>
                        </button>






                    </div>
                </div>
            </div>

            <div className="homediv">
                <nav className="nav-home">

                    <div className="nav-brwsr">
                        <span className="browser"> <span className="home">Airbnb your home</span></span>
                        <span  className="browser"><span className="home firfox"><FaFirefoxBrowser /></span></span>
                    </div>
                    <div className="menu">
                       <div className="menubar">
                       <span className="icon-bar"><FaBars /></span>
                        <span className="icon-bar icon-pro"><FaRegUserCircle /></span>
                       </div>
                    </div>

                </nav>
            </div>

        </div>
    )
}
export default Navbar