import React from "react";
import Slider3 from "../../components/slider/Slider3";
//import Slider from "../../components/slider";
import Hubs from "../../components/base_hubs";
import About from "../../components/about";
import ProjectSlider from "../../components/projects/projectsSlider";
import ProjectCarousel from "../../components/projects/projectCarousel";
import Numbers from "../../components/numbers";
import Photo from "../../components/photo_gallery";
import Video from "../../components/video";
import Events from "../../components/events";
import Parteners from "../parteners";
import Projects from "../projects";
import Slider from "../slider";


function Home() {
  return (
    <div className="main-content">

      <Slider />
      {/* <Slider2 /> */}
      <Hubs />
      <About />
      <ProjectCarousel />
      <Numbers />
      <Photo />
      <Video />
      <Events />
      <Parteners />
    </div>
  );
}

export default Home;
