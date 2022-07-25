import React from 'react';
import {Link} from "react-router-dom"
import './register.scss'

const Register = (props) => {
    const { setUsername, setNumber, setEmail, setPassword, handleSubmit, username, number, email, password } = props

    return (
        <div className='register'>
            <div className="register__form">
                <div className='form-bar'>
                    <h3>Register here</h3>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Name' />
                        <label htmlFor="number">Number</label>
                        <input value={number} onChange={(e) => setNumber(e.target.value)} type="number" placeholder='Phone number' />
                        <label htmlFor="Login">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
                        <label htmlFor="Password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="Password" placeholder='Password' />
                    </form>
                </div>
                <div className="register__form-buttons">
                   <Link to="/login"> <button className="content-button status-button">Sign in</button></Link>
                    <Link to="/register"> <button
                        onClick={handleSubmit}

                        className="content-button status-button">Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;