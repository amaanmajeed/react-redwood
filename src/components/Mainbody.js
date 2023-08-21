import React from 'react';
import SimpleSlider from './Slider';

function PromoItem(props) {
  return (
    <>
          {/* Post Start */}
            <div className="promo-item">
                <a href="www.google.com" className='promo-a'>
                    <div className="promo-img" style={{backgroundImage: `url(${props.image})`}}>
                        <div className="promo-inner">
                        <h3>{props.name}</h3>
                        </div>
                    </div>
                </a>
            </div>
          {/* Post End */}
          
    </>
  );
}



export default function Mainbody() {
    const arryData = [
        {
            image: "images/promo14.jpg",
            name: "About us 1",
            id: 1
        },
        {
            image: "images/promo16.jpg",
            name: "About us 2",
            id: 2
        },
        {
            image: "images/promo18.jpg",
            name: "About us 3",
            id: 3
        }
    ]
    
  return (
      <>
          {/* Main Body */}

        <div className="main-body">
        <div className="wrapper">
            <div className="width">
                <img className="logo-img" src="images/logo.png" alt="logo"/>
            </div>

            <SimpleSlider/>

            {/* about me */}

            <div className="mycontainer">
                {arryData.map(data => (
                    <PromoItem image={data.image} name={data.name} key={data.id} />
                ))}  
                
            </div>

            {/* about me END */}

        </div>
    </div>
    {/* Main Body End */}
      </>
  );
}
