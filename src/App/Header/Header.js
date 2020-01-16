import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="container head">
                <div className="col-md-2">
                    <div className="logo">
                        <a href="">
                            <img src="images/logo.png"/>
                        </a>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">Reviews</a></li>
                        <li><a href="">Travel</a></li>
                        <li><a href="">About me</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <div className="social-link">
                        <div><a href="">
                            <img src="images/fb.png"/>
                        </a></div>
                        <div><a href="">
                            <img src="images/inst.png"/>
                        </a></div>
                        <div><a href="">
                            <img src="images/g+.png"/>
                        </a></div>
                        <div><a href="">
                            <img src="images/p.png"/>
                        </a></div>
                    </div>
                </div>
            </div>
	    </header>
    )
            }

export default Header