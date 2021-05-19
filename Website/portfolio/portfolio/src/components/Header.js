import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1 className="p-2">Web Design and Mobile Application Development</h1>
                <Typed
                    className="typed-text"
                    strings={['Web Design', 'Web Development', 'Mobile App Development', 'Graphic Design']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" type="submit" className="btn-contact mt-4 p-3">CONTACT US</a>
            </div>
        </div>
    )
}

export default Header
