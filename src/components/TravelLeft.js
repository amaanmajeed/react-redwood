import React from 'react';
import BlogPost from './BlogPost';

export default function TravelLeft() {
    const BlogPostData = [
        {
            image: "images/first.jpg",
            link: "travel.html",
            category: "Travel",
            title: "SUMMER SOIREE INSPIRATION",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High…",
            date: "June 14, 2015",
            id: 1
        },
        {
            image: "images/postimg2.jpg",
            link: "travel.html",
            category: "Travel",
            title: "FRAGMENTS OF ICELAND",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High…",
            date: "June 14, 2015",
            id: 2
        },
        {
            image: "images/postimg3.jpg",
            link: "travel.html",
            category: "Travel",
            title: "EXPLORE THE PACIFIC NORTHWEST",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High…",
            date: "June 14, 2015",
            id: 3
        },
        {
            image: "images/postimg5.jpg",
            link: "travel.html",
            category: "Travel",
            title: "LYKKE LI – NO REST",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High…",
            date: "June 14, 2015",
            id: 4
        },
        {
            image: "images/postimg4.jpg",
            link: "travel.html",
            category: "Travel",
            title: "FAVORITE NEW YORK BARS",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High…",
            date: "June 14, 2015",
            id: 5
        },
        {
            image: "images/post21-520x400.jpg",
            link: "travel.html",
            category: "Travel",
            title: "MY LATEST ADVENTURE",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High…",
            date: "June 14, 2015",
            id: 6
        }
        
        
    ]

  return (
      <>
          {/* Left Section */}

        <div className="leftsection">

            <div className="browsing-category">
                <p className="b1">Browsing Category </p>
                <p className="b2"> Travel</p>
            </div>

        
        <div className="blog-list">
                  {BlogPostData.map(data => (
                <BlogPost key={data.id} image={data.image} link={data.link} category={data.category} title={data.title} text={data.text} date={data.date} />
            ))}

        </div>

            

        </div>
        {/* Left Section End */}
      </>
  );
}
