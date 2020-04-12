import React from 'react';
import Slider from '../../components/slider';
import Hubs from '../../components/base_hubs';
import About from '../../components/about';
import ProjectSlider from '../../components/projects/projectsSlider'
import Numbers from '../../components/numbers'
import Photo from '../../components/photo_gallery'
import Video from '../../components/video'
import Events from '../../components/events'
import Parteners from '../parteners';
import Projects from '../projects';


function Home() {

   return (
   
   <div className="main-content">

     <Slider/>
     <Hubs/>
     <About/>
     <ProjectSlider/>
     <Numbers/>
     <Photo/>
     <Video/>
     <Events/>
     <Parteners/>   
     </div>

);
}

export default Home;
