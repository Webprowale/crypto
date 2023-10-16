import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="login">
        <div className="title">
        <h1>VELO<span>X</span> </h1>
        </div>
        <div className="heading">
            <h3>Welcome back!</h3>
            <h6> New to velox? <span><Link to='/register'> Create an account</Link></span></h6>
        </div>
        <form>
            <label htmlFor="email">Email Address:</label>
            <input type="email" placeholder='Enter Your Email' /><br />
            <label htmlFor="password">Your Password:</label>
            <input type="password" placeholder='password' />
            <div className="no-password">
                <Link>Can't remember password?</Link>
            </div>
            <button className='butt' type='submit'>Sign in</button>
        </form>
    </div>
  )
}

export default Login