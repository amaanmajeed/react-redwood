import React from 'react';

export default function ContactLeft() {
  return (
      <>
      {/* Left Section */}

        <div className="leftsection">

            <div className="uppercontainer">
                <h2 className="second">Contact</h2>
                <hr/>
            </div>

            <div className="bigimg">
                <img src="images/post3.jpg" alt="Coffee"/>
                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth
                anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v
                chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack tempor duis single-origin
                coffee. Photo booth anim 8-bit hella, PBR 3 wolf moon.</p>

                <div className="contact">
                    <p>Your Name</p>
                    <input type="text" size="40"/>
                    
                    <p>Your Email</p>
                    <input type="text" size="40"/>
                    
                    <p>Your Message</p>
                    <textarea name="message" id="message" cols="30" rows="7"></textarea>

                    <p className="sendbtn"><a href="">Send</a></p>
                    {/* <p className="sendbtn">Send</p> */}
                </div>

            </div>

            <div className="post-share">
                <div className="about-share-box">
                    <i className="orange fa-brands fa-facebook-f"></i>
                    <i className="orange fa-brands fa-twitter"></i>
                    <i className="orange fa-brands fa-pinterest"></i>
                    <i className="orange fa-brands fa-google-plus-g"></i>
                </div>
            </div>

        </div>
        {/* Left Section End */}
      </>
  );
}
