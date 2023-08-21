import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
    <>
        {/* NavBar */}
    <div className="navbar">
        <div className="navwrapper">
            <div className="nav">
                <div className="left-menu">
                    <ul className="left-ul">
                        <div className="mobile-drop">
                            <li id="barbtn"><a href="className="><i className="fa-solid fa-bars"></i></a></li>
                            {/* Mobile-menu */}
                            <div className="fullwidth">
                            
                                <div className="mobile-menu">
                                    <ul className="mobile-ul">
                                        <li><Link to='/'>Home <i className="fa-solid fa-chevron-down"></i></Link></li>
                                        <li><a href="/">Features <i className="fa-solid fa-chevron-down"></i></a></li>
                                        <li><Link to='/lifestyle'>Lifestyle</Link></li>
                                        <li><Link to='/travel'>Travel</Link></li>
                                        <li><a href="/">Shop <i className="fa-solid fa-chevron-down"></i></a></li>
                                        <li><Link to='/aboutus'>About me</Link></li>
                                        <li><Link to='/contact'>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Mobile-menu End */}
                        </div>
                        
                        <div className="drop-home">
                            <li id="nbtn"><Link to='/'>Home <i className="fa-solid fa-chevron-down"></i></Link></li>
                            <div className="content-home">
                                <a href="/">Item 1</a>
                                <a href="/">Item 1</a>
                                <a href="/">Item 1</a>
                                <a href="/">Item 1</a>
                                <a href="/">Item 1</a>
                                <a href="/">Item 1</a>
                            </div>
                        </div>

                        <div className="drop-features">
                            <li id="nbtn"><a href="/">Features <i className="fa-solid fa-chevron-down"></i></a></li>
                            <div className="content-features">
                                <a href="/">Item 2</a>
                                <a href="/">Item 2</a>
                                <a href="/">Item 2</a>
                                <a href="/">Item 2</a>
                                <a href="/">Item 2</a>
                            </div>
                        </div>
                        <li id="nbtn"><Link to='/lifestyle'>Lifestyle</Link></li>
                        <li id="nbtn"><Link to='/travel'>Travel</Link></li>
                        <div className="drop-shop">
                            <li id="nbtn"><a href="/">Shop <i className="fa-solid fa-chevron-down"></i></a></li>
                            <div className="content-shop">
                                <a href="/">Cart</a>
                                <a href="/">Checkout</a>
                            </div>
                        </div>
                        <li id="nbtn"><Link to='/aboutus'>About me</Link></li>
                        <li id="nbtn"><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                
                <div className="right-menu">
                    <i className="orange fa-brands fa-facebook-f"></i>
                    <i className="orange fa-brands fa-twitter"></i>
                    <i className="orange fa-brands fa-instagram"></i>
                    <i className="orange fa-brands fa-pinterest"></i>
                    <i className="orange fa-solid fa-heart"></i>
                    <i className="orange fa-solid fa-rss"></i>

                    <div className="cart">
                        <i className="fa-solid fa-cart-shopping">
                            <span className="orders">0</span>
                        </i>
                    </div>

                    <i className="fa fa-search hovergrey"></i>
                </div>
            </div>
        </div>
    </div>

    {/* Navbar End */}    
    </>

  );
}
