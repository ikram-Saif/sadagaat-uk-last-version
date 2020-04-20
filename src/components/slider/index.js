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
  // work,
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
