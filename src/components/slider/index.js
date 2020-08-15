import React from "react";
import { Slide } from "react-slideshow-image";
import slide1 from "../images/slide 1.jpg";
import slide2 from "../images/slide 2.jpg";
import slide3 from "../images/slide 3.jpg";
//import work from "../images/work.jpg";
import slide4 from "../images/slide 4.jpg"
import slide5 from "../images/slide 5.jpg"
import {Link } from 'react-router-dom'



const slideImages = [
  slide1, 
  slide2,
  slide3,
  slide4,
  slide5
  
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
          {/* <div  className = "img-responsive" style={{ backgroundImage: `url(${slideImages[0]})`}}> */}
          <div>
            <Link to = '/single-projects/1911'>
          <img   className = 'img-responsive' src = {slideImages[0]} style ={{ height:'100%' , width:'100%'}} />
          </Link>
          </div>
          {/* </div> */}

     
          {/* <div  className = "img-responsive" style={{ backgroundImage: `url(${slideImages[1]})`, backgroundSize: 'auto'}}></div>
        </div> */}
        <div>
          <Link to = '/single-projects/2374'>
          <img  className = 'img-responsive' src = {slideImages[1]} 
          style ={{ height:'100%' , width:'100%'}} />
          </Link>
          </div>
    
           {/* <div style={{ backgroundImage: `url(${slideImages[2]})`}} ></div> */}
        <div>
          <Link to = '/single-projects/2710'>
          <img   className = 'img-responsive' src = {slideImages[2]} style ={{ height:'100%' , width:'100%'}} />
          </Link>
          </div>
          {/* <div  className = "img-responsive" style={{ backgroundImage: `url(${slideImages[3]})` }}></div> */}
          <div>
            <Link to = '/single-projects/2054'>
          <img   className = 'img-responsive' src = {slideImages[3]} style ={{ height:'100%' , width:'100%'}} />
          </Link>
          </div>
        
          {/* <div  className = "img-responsive" style={{ backgroundImage: `url(${slideImages[3]})` }}></div> */}
          <div>
            <Link to = '/single-projects/2042'>
              <img   className = 'img-responsive' src = {slideImages[4]} style ={{ height:'100%' , width:'100%'}} />
            </Link>
          </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
