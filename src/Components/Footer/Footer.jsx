import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return ( 
        <div className="footer container">
            <h4>Contact</h4>
            <div className="row justify-content-center align-items-center mb-5">
                <div className="col-md-6">
                    <a href="#"><h6>Support@velox.com.ng</h6></a>
                    <div className="social">
                   <a href="#"> <FontAwesomeIcon icon={faInstagram} size="3x" color="#FF0060" className="mx-2" /></a>
                   <a href="#"><FontAwesomeIcon icon={faTwitter}  size="3x" color="#FF0060" className="mx-2"/></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <h6>
                    <a href="#">Privacy Policy</a> </h6>
                    <h6>
                    <a href="#"> Terms and Conditions</a></h6>
                </div>
            </div>
            <div className="col-12 text-center pt-5 ">
               <h6>Copyright<span className="fw-bold"> &copy;</span>2023 </h6>
            </div>
        </div>
     );
}
 
export default Footer;