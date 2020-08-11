import React from "react";
import { Slide } from "react-slideshow-image";
import water2Slider from "../images/water2Slider.jpg";
import healthSlider from "../images/healthSlider.JPG";
import covid19 from "../images/Covid-19Slid.JPG";
//import work from "../images/work.jpg";
import ALPSlide from "../images/ALP.JPG"
import waterSlider from "../images/waterSlider.jpg"
import {Link } from 'react-router-dom'



const slideImages = [
  waterSlider,
  water2Slider,
  healthSlider,
  covid19,
  ALPSlide,
  
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  // onChange: (oldIndex, newIndex) => {
  //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  // },
};
  const Slideshow = ()=>{
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          {/* <div  className = "img-responsive" style={{ backgroundImage: `url(${slideImages[0]})`}}> */}
          <div>
            <Link to = '/single-projects/1911'>
          <img   className = 'img-responsive' src = {slideImages[0]} style ={{ height:'100%' , width:'100%'}} />
          </Link>
          </div>
          {/* </div> */}

     
        </div>
        <div className="each-slide">
          {/* <div  className = "img-responsive" style={{ backgroundImage: `url(${slideImages[1]})`, backgroundSize: 'auto'}}></div>
        </div> */}
        <div>
          <Link to = '/single-projects/2374'>
          <img  className = 'img-responsive' src = {slideImages[1]} 
          style ={{ height:'100%' , width:'100%'}} />
          </Link>
          </div>
          </div>
        <div className="each-slide">
           {/* <div style={{ backgroundImage: `url(${slideImages[2]})`}} ></div> */}
        <div>
          <Link to = '/single-projects/2710'>
          <img   className = 'img-responsive' src = {slideImages[2]} style ={{ height:'100%' , width:'100%'}} />
          </Link>
          </div>
          </div>
        <div className="each-slide">
          {/* <div  className = "img-responsive" style={{ backgroundImage: `url(${slideImages[3]})` }}></div> */}
          <div>
            <Link to = '/single-projects/2054'>
          <img   className = 'img-responsive' src = {slideImages[3]} style ={{ height:'100%' , width:'100%'}} />
          </Link>
          </div>
        </div>
        <div className="each-slide">
          {/* <div  className = "img-responsive" style={{ backgroundImage: `url(${slideImages[3]})` }}></div> */}
          <div>
            <Link to = '/single-projects/2042'>
              <img   className = 'img-responsive' src = {slideImages[4]} style ={{ height:'100%' , width:'100%'}} />
            </Link>
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
