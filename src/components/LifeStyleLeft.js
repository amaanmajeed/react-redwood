import React from 'react';
import BlogPost from './BlogPost';

export default function LifeStyleLeft() {
    const BlogPostData = [
        {
            image: "images/second.jpg",
            link: "lifestyle.html",
            category: "Lifestyle",
            title: "Fashion in the Country",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit…",
            date: "June 14, 2015",
            id: 1
        },
        {
            image: "images/third.jpg",
            link: "lifestyle.html",
            category: "Lifestyle",
            title: "BRIDAL PHOTOGRAPHY",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High…",
            date: "June 14, 2015",
            id: 2
        },
        {
            image: "images/post13-520x400.jpg",
            link: "lifestyle.html",
            category: "Lifestyle",
            title: "BRUNCH WITH FRIENDS",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High…",
            date: "June 14, 2015",
            id: 3
        },
        {
            image: "images/post7.jpg",
            link: "lifestyle.html",
            category: "Lifestyle",
            title: "FLOWERS & DECORATIONS",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High…",
            date: "June 14, 2015",
            id: 4
        },
        {
            image: "images/post7.jpg",
            link: "lifestyle.html",
            category: "Lifestyle",
            title: "10 AMAZING INTERIOR DESIGNERS",
            text: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High…",
            date: "June 14, 2015",
            id: 5
        },
        
        
    ]

  return (
      <>
          {/* Left Section */}

        <div className="leftsection">

            <div className="browsing-category">
                <p className="b1">Browsing Category </p>
                <p className="b2"> Lifestyle</p>
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
