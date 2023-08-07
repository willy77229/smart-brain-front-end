import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt>
                <div className="logo pa3 br2 shadow-2" style={{ height: 125, width: 125}}>
                    <img alt="brain" src={brain}/>
                </div>
            </Tilt>
         </div>
    );
}


export default Logo;