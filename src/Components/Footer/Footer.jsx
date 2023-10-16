import React from "react";
import './Footer.css'

const Footer = () => {
    return ( 
        <div className="footer container">
            <h4>Contact</h4>
            <div className="row justify-content-center align-items-center mb-5">
                <div className="col-md-6">
                    <a href="#"><h6>Support@velox.com.ng</h6></a>
                    
                </div>
                <div className="col-md-6">
                    <h6>
                    <a href="#">Privacy Policy</a> </h6>
                    <h6>
                    <a href="#"> Terms and Conditions</a></h6>
                </div>
            </div>
            <div className="col-12 text-center pt-5 ">
               <h6>Copyright<span className="fw-bold"> &copy;</span> </h6>
            </div>
        </div>
     );
}
 
export default Footer;