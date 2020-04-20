import React  from 'react';
import { Slide } from 'react-slideshow-image';
import AwesomeSlider from 'react-awesome-slider';
//import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';



 class Slider3 extends React.Component{
     render(){
        const slider = (
            <AwesomeSlider>
              <div data-src="./images/slide-1.jpg" />
              <div data-src="./images/slide-2.jpg" />
              <div data-src="./images/slide-3.jpg" />
            </AwesomeSlider>
          );
         return(
         <div>{slider}</div>
         )
     }
 }
export default Slider3;