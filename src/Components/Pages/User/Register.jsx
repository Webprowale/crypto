import React from "react";
import './User.css'
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="title">
        <h1>
          VELO<span>X</span>
        </h1>
      </div>
      <div className="heading">
        <h3>Create an account</h3>
        <h6>
          Already have an account?
          <span>
            <Link to='/login'> Sign in</Link>
          </span>
        </h6>
      </div>
      <form>
        <label htmlFor="email">First Name:</label>
        <input type="text" placeholder="Enter Your First Name" />
        <br />
        <label htmlFor="password">Surname:</label>
        <input type="text" placeholder="Enter Your Surname" /><br />
        <label htmlFor="email">Email Address:</label>
        <input type="email" placeholder="Enter Your Email" />
        <br />
        <label htmlFor="password">Your Password:</label>
        <input type="password" placeholder="password" /><br />
        <label htmlFor="password">Confirm Password:</label>
        <input type="password" placeholder="password" />
        
        <button className="butt" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
