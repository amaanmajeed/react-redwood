import React from 'react';

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
                            <li id="barbtn"><a href="javascript:;"><i className="fa-solid fa-bars"></i></a></li>
                            {/* Mobile-menu */}
                            <div className="fullwidth">
                            
                                <div className="mobile-menu">
                                    <ul className="mobile-ul">
                                        <li><a href="index.html">Home <i className="fa-solid fa-chevron-down"></i></a></li>
                                        <li><a href="">Features <i className="fa-solid fa-chevron-down"></i></a></li>
                                        <li><a href="lifestyle.html">Lifestyle</a></li>
                                        <li><a href="travel.html">Travel</a></li>
                                        <li><a href="">Shop <i className="fa-solid fa-chevron-down"></i></a></li>
                                        <li><a href="about-me.html">About me</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Mobile-menu End */}
                        </div>
                        
                        <div className="drop-home">
                            <li id="nbtn"><a href="index.html">Home <i className="fa-solid fa-chevron-down"></i></a></li>
                            <div className="content-home">
                                <a href="">Item 1</a>
                                <a href="">Item 1</a>
                                <a href="">Item 1</a>
                                <a href="">Item 1</a>
                                <a href="">Item 1</a>
                                <a href="">Item 1</a>
                            </div>
                        </div>

                        <div className="drop-features">
                            <li id="nbtn"><a href="">Features <i className="fa-solid fa-chevron-down"></i></a></li>
                            <div className="content-features">
                                <a href="">Item 2</a>
                                <a href="">Item 2</a>
                                <a href="">Item 2</a>
                                <a href="">Item 2</a>
                                <a href="">Item 2</a>
                            </div>
                        </div>
                        <li id="nbtn"><a href="lifestyle.html">Lifestyle</a></li>
                        <li id="nbtn"><a href="travel.html">Travel</a></li>
                        <div className="drop-shop">
                            <li id="nbtn"><a href="">Shop <i className="fa-solid fa-chevron-down"></i></a></li>
                            <div className="content-shop">
                                <a href="">Cart</a>
                                <a href="">Checkout</a>
                            </div>
                        </div>
                        <li id="nbtn"><a href="about-me.html">About me</a></li>
                        <li id="nbtn"><a href="contact.html">Contact</a></li>
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
