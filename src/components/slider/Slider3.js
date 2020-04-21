import React  from 'react';
import { Slide } from 'react-slideshow-image';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import education from "../images/education.jpg";
import group from "../images/group.jpg";
import accounts from "../images/accounts.jpg";



 class Slider3 extends React.Component{
     render(){

      const slider = (
        <AwesomeSlider>
          <div data-src = {education}>
              <h1>Donate
                for the poor Children.
                </h1>
          </div>
          <div data-src = {group}>2</div>
          <div data-src = {accounts}>3</div>
          
        </AwesomeSlider>
      )
         return(
          
          <div>
            {slider}
          </div>
         )
     }
 }
export default Slider3;