import React from 'react';

export default function Footer() {
  return (
    <section className="footer-section">
        <div className="wrapper">
            <div className="footer">
                <div className="social-container">
                    <a className="orange" href="www.google.com"><i className="fa-brands fa-facebook-f"></i><span>Facebook</span></a>
                    <a className="orange" href="www.google.com"><i className="fa-brands fa-twitter"></i><span>Twitter</span></a>
                    <a className="orange" href="www.google.com"><i className="fa-brands fa-instagram"></i><span>Instagram</span></a>
                    <a className="orange" href="www.google.com"><i className="fa-brands fa-pinterest"></i><span>Pinterest</span></a>
                    <a className="orange" href="www.google.com"><i className="fa-solid fa-heart"></i><span>Bloglovin</span></a>
                    <a className="orange" href="www.google.com"><i className="fa-solid fa-rss"></i><span>RSS</span></a>
                </div>
                <hr/>
                <h6>© 2017 - Solo Pine. All Rights Reserved. Designed & Developed by <a href="www.google.com">SoloPine.com</a></h6>
            </div>
        </div>
    </section>
  );
}
