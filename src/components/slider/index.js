import React  from 'react';
import { Slide } from 'react-slideshow-image';


const slideImages = [
  'images/slider-1.jpg',
  'images/slide-11.jpg',
  'images/x.jpg',
  'images/slide-3.jpg'
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
  }
}
const Slideshow = () => {

  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
          </div>
        </div>
      </Slide>
    </div>
  )

}
export default Slideshow;