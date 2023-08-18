import React from 'react';

export default function BlogPost(props) {
  return (
    <>
        {/* Blog Post */}
            <div className="single-blog">
                <div className="blog-img">
                    <img src={props.image} alt="Blog Image"/>
                </div>
                <div className="blog-text">
                    <a href={props.link}>{props.category}</a>
                    <h4 className="hovergrey">{props.title}</h4>
                    <hr className="smhr"/>
                    <p className="hid">{props.text}</p>
                    
                    <p className="greytext">{props.date}</p>
                </div>
            </div>
            
            <hr className="blog-hr"/>

            {/* Blog Post End */}
        </>
  );
}