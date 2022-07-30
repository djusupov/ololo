import React from 'react';
import './header.scss'
import { Link } from "react-router-dom";
import icon from '../header/photo1658659333.jpeg'
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
                    src={icon}
                    alt=""/>
            </div>
        </div>
    );
};

export default Header;