import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss'

const Login = (props) => {
    const { setLoginname, setLoginpassword, loginname, loginpassword, handleSignin } = props

    return (
        <div className='register'>
            <div className="register__form">
                <div className='form-bar'>
                    <h3>Login here</h3>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input value={loginname}  onChange={(e)=>setLoginname(e.target.value)} type="email" placeholder='Name' />
                        <label htmlFor="Password">Password</label>
                        <input value={loginpassword} onChange={(e)=>setLoginpassword(e.target.value)} type="Password" placeholder='Password' />
                    </form>
                </div>
                <div className="register__form-buttons">
                    <Link to="/login">  <button onClick={handleSignin} className="content-button status-button">Sign in</button></Link>
                    <Link to="/register"><button
                        className="content-button status-button">Sign up</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;