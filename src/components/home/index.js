import React from "react";
import Hubs from "../../components/base_hubs";
import About from "../../components/about";
import ProjectCarousel from "../../components/projects/projectCarousel";
import Numbers from "../../components/numbers";
import Photo from "../../components/photo_gallery";
import Video from "../../components/video";
import Events from "../../components/events";
import Parteners from "../parteners";
import Slider from "../slider";


function Home() {
  return (
    <div className="main-content">

      <Slider />
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
