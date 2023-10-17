import React from "react";
import './WhatWeDo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield, faMobileButton, faMessage, faUserGroup } from '@fortawesome/free-solid-svg-icons'
const WhatWeDo = () => {
    return ( 
        <div className="section">
        <div className="what_we_do container">
            
        <div className="card_1">
        <FontAwesomeIcon icon={faShield} size="3x" color="#fcc200" />
            <h4>
                Safe and Secure
            </h4>
            <p>Your data is safe and secure with us. None of your data is a shared with a third party company</p>
        </div>
        <div className="card_2">
        <FontAwesomeIcon icon={faMobileButton} size="3x" color="#fcc200" />
            <h4>
                Easy to Use
            </h4>
            <p>The platform is designed to be as simple as possible so our users can trade with easy</p>
        </div>
        <div className="card_3">
        <FontAwesomeIcon icon={faMessage} size="3x" color="#fcc200" />
            <h4>
                24/7 Customer Service
            </h4>
            <p>Our customer representatives are always avaliable every minute of the day to make sure you are attended to</p>
        </div>
        <div className="card_4">
        <FontAwesomeIcon icon={faUserGroup} size="3x" color="#fcc200" />
            <h4>
                Customer Friendly Rates
            </h4>
            <p>You receive the best the market rates when ever you buy and sell your coins to feloz</p>
        </div>
        </div>
    </div>
     );
}
 
export default WhatWeDo;