import React from "react";
import { Slide } from "react-slideshow-image";
import education from "../images/education.jpg";
import group from "../images/group.jpg";
import accounts from "../images/accounts.jpg";
import work from "../images/work.jpg";

const slideImages = [
  "images/slider-1.jpg",
  // "images/slide-11.jpg",
  // "images/x.jpg",
  // "images/slide-3.jpg",
  education,
  group,
  accounts,
  work,
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
          <img   className = 'img-responsive' src = {slideImages[0]} style ={{ height:'100%' , width:'100%'}} />
          </div>
          {/* </div> */}

     
        </div>
        <div className="each-slide">
          {/* <div  className = "img-responsive" style={{ backgroundImage: `url(${slideImages[1]})`, backgroundSize: 'auto'}}></div>
        </div> */}
        <div>
          <img  className = 'img-responsive' src = {slideImages[1]} style ={{ height:'100%' , width:'100%'}} />
          </div>
          </div>
        <div className="each-slide">
           {/* <div  className = "img-responsive" style={{ backgroundImage: `url(${slideImages[2]})` }}></div> */}
        <div>
          <img   className = 'img-responsive' src = {slideImages[2]} style ={{ height:'100%' , width:'100%'}} />
          </div>
          </div>
        <div className="each-slide">
          {/* <div  className = "img-responsive" style={{ backgroundImage: `url(${slideImages[3]})` }}></div> */}
          <div>
          <img   className = 'img-responsive' src = {slideImages[3]} style ={{ height:'100%' , width:'100%'}} />
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
