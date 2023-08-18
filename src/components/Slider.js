import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderSingle(props) {
  return (
    <div className="myDiv">
      <img src={props.image} alt="Pic1" />
      <div className="innertext">
        <div className="centertext">
          <p className="first">{props.first}</p>
          <p className="second">{props.second}</p>
          <hr />
          <a href="https://www.google.com/">Read More</a>
        </div>
      </div>
    </div>
  );
}


const SimpleSlider = () => {
    const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
      arrows: true,
    ref: node => setSliderRef(node),
    };

    const handlePrevClick = () => {
    if (sliderRef) {
      sliderRef.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef) {
      sliderRef.slickNext();
    }
  };

    
    const SliderData = [
        {
            image: "images/redwood-post1.jpg",
            first: "LifeStyle",
            second: "Fashion in the country",
            id: 1
        },
        {
            image: "images/post6.jpg",
            first: "Lifestyle",
            second: "10 Best Interior Designers",
            id: 2
        },
        {
            image: "images/post7.jpg",
            first: "Travel",
            second: "Favourite New York Bars",
            id: 3
        }
    ]

  return (
      <div>
          <div className="main">
                <i className="fa fa-angle-left" onClick={handlePrevClick} id="prev-btn"></i>
                <i className="fa fa-angle-right" onClick={handleNextClick} id="next-btn"></i>
                <div className="slider-for">

                    <Slider {...settings}>
              {SliderData.map(data => (
                  <SliderSingle image={data.image} first={data.first} second={data.second} key={data.id} />
              ))}
              
      </Slider>

                </div>
            </div>
        
    </div>
  );
};

export default SimpleSlider;