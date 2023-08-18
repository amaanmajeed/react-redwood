import React from 'react';

export default function MainRight() {
  return (
      <>
      {/* Right Side */}
      <div className="rightsection">
            <p className="long-black">About me</p>

            <img src="images/right top.jpg" alt="right Top Image" className="flowerimg"/>
            <div className="textcontainer">
                <h6>PHOTOGRAPHER & BLOGGER</h6>
                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache.</p>
            </div>
            <img src="images/signing.png" alt="" className="signimg"/>

            <p className="long-black">SUBSCRIBE & FOLLOW</p>

            <div className="short-socials">
                <i className="orange fa-brands fa-facebook-f"></i>
                <i className="orange fa-brands fa-twitter"></i>
                <i className="orange fa-brands fa-instagram"></i>
                <i className="orange fa-brands fa-pinterest"></i>
                <i className="orange fa-solid fa-heart"></i>
                <i className="orange fa-solid fa-rss"></i>
            </div>

            <img src="images/bannerspot1.png" alt="Bannerimg" className="bannerimg"/>

            <div className="subscribe-panel">
                <p>Subscribe to my Newsletter</p>
                <input type="text" placeholder="Your email address"/>
                <a href="">Subscribe</a>
            </div>

            
            <p className="long-black cuspadding">FOLLOW @ INSTAGRAM</p>

            <div className="articles">
                <p className="long-black">MUST-READ ARTICLES</p>

                <div className="article-single">
                    <span>1</span>
                    <div className="imghandle">
                        <img src="images/first.jpg" alt="Img"/>
                    </div>
                    <div className="righthandle">
                        <h6>Summer Soiree Inspiration</h6>
                        <p>June 14, 2015</p>
                    </div>
                </div>

                <div className="article-single">
                    <span>2</span>
                    <div className="imghandle">
                        <img src="images/second.jpg" alt="Img"/>
                    </div>
                    <div className="righthandle">
                        <h6>Summer Soiree Inspiration</h6>
                        <p>June 14, 2015</p>
                    </div>
                </div>

                <div className="article-single">
                    <span>3</span>
                    <div className="imghandle">
                        <img src="images/third.jpg" alt="Img"/>
                    </div>
                    <div className="righthandle">
                        <h6>Summer Soiree Inspiration</h6>
                        <p>June 14, 2015</p>
                    </div>
                </div>

            </div>

            <p className="long-black">CATEGORIES</p>
            
            <div className="categories">
                <p>Lifestyle <span>(5)</span></p>
                <hr/>
                <p>Travel <span>(6)</span></p>
            </div>

            
        </div>
          {/* Right Side End */}
          </>
  );
}
