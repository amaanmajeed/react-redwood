import React from 'react';
import { Link } from 'react-router-dom';

function SinglePost(props) {
    return (
        <>
           <div className="col-sm-6 single-post">
                <img src={props.image} alt="PostImg"/>
                <Link to='/lifestyle'>{props.category}</Link>
                <h4 className="hovergrey">{props.heading}</h4>
                <hr/>
                <p>{props.text}</p>
                <p className="greytext">{props.date}</p>
            </div> 
        </>
    );
}

export default function MainLeft() {
    const SinglePostData = [
        {
            image: "images/postimg6.jpg",
            category: "Lifestyle",
            heading: "Fashion in the club",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art…",
            date: "June 14, 2015",
            id: 1
        },
        {
            image: "images/postimg1.jpg",
            category: "Lifestyle",
            heading: "Bridal Photography",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art…",
            date: "June 14, 2015",
            id: 2
        },
        {
            image: "images/postimg2.jpg",
            category: "Travel",
            heading: "Fragments of Iceland",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art…",
            date: "June 14, 2015",
            id: 3
        },
        {
            image: "images/postimg3.jpg",
            category: "Travel",
            heading: "Explore the Pacific NorthWest",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art…",
            date: "June 14, 2015",
            id: 4
        },
        {
            image: "images/postimg4.jpg",
            category: "Travel",
            heading: "LYKKE LI – NO REST",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art…",
            date: "June 14, 2015",
            id: 5
        },
        {
            image: "images/postimg5.jpg",
            category: "Travel",
            heading: "FAVORITE NEW YORK BARS",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art…",
            date: "June 14, 2015",
            id: 6
        }
        
    ]
  return (
          <>
      {/* Left Section */}

        <div className="leftsection">

            <div className="uppercontainer">
                <Link to='/travel'>Travel</Link>
                <h2 className="second">SUMMER SOIREE INSIRATION</h2>
                <hr/>
                  <p className="greytext" style={{ textAlign: "center" }}>Posted on June 14, 2015</p>

            </div>
            
            <div className="bigimg">
                <img src="images/redwood-post1.jpg" alt="Some"/>
                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth
                anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v
                chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art
                party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep
                v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko.</p>
                
                <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation,
                photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in
                do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean.</p>
            </div>
            <div className="reading">
                <a className="orange" href="www.google.com">Continue Reading</a>
                <hr/>
            </div>

            <div className="post-share">

                <div className="post-share-box">
                    <p>2 Comments</p>
                </div>

                <div className="post-share-box">
                    <i className="orange fa-brands fa-facebook-f"></i>
                    <i className="orange fa-brands fa-twitter"></i>
                    <i className="orange fa-brands fa-pinterest"></i>
                    <i className="orange fa-brands fa-google-plus-g"></i>
                    
                </div>

                <div className="post-share-box">
                    <p>By SOLOPINE</p>
                </div>
            </div>

             {/* Single-post */}
            <div className="row single-post-section">
                
                  {SinglePostData.map(data => (
                    <SinglePost
                        key={data.id}
                        image={data.image}
                        category={data.category}
                        heading={data.heading}
                        text={data.text}
                        date={data.date}
                    />
                ))}



                <div className="older-container">
                    <div className="older-posts">
                        <a className="hovergrey" href="www.google.com">Older Posts <i className="fa fa-angle-double-right"></i></a>
                        <hr/>
                    </div>
                </div>

            </div>

              
              {/* Single-post End */}

        </div>
        {/* Left Section End */}
          </>
  );
}
