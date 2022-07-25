import React from 'react';
import './header.scss'
import { Link } from "react-router-dom";

const Header = (props) => {
    const { handleSearch, setInput, setHome, home, input } = props
    const keyPress = (e) => (e.key == "Enter" ? handleSearch() : "");
    return (
        <div className='header'>
            <div className="header__control-center">
                <div className="control">
                </div>
            </div>
            <div className="header__menu">
                <Link to="/" className='menu-links' onClick={() => setHome(!home)}>Home</Link>

            </div>
            <div className="search-bar">
                <input value={input} type="text" placeholder='Search'
                    onKeyPress={(e) => keyPress(e)}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div className="header__profile">
                <div className="notification">
                    <Link  to='/login' className='menu-links' >Sign in</Link>
                    <Link  to='/register' className='menu-links' >Sign up</Link>
                </div>
                
                <img class="profile-img"
                    src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt=""></img>
            </div>
        </div>
    );
};

export default Header;