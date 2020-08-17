import React,{Suspense} from "react";
//import Slider from "../slider";
import Hubs from "../../components/base_hubs";
import About from "../../components/about";
import ProjectCarousel from "../../components/projects/projectCarousel";
import Numbers from "../../components/numbers";
import Photo from "../../components/photo_gallery";
import Video from "../../components/video";
import Events from "../../components/events";
import Parteners from "../parteners";
const Slider = React.lazy(() => import('../../components/slider'))



function Home() {
  return (
    <React.Fragment>
    <div className="main-content">
    <Suspense fallback={<div>Loading...</div>}>
      <Slider />
      </Suspense>
      <Hubs />
      <About />
      <ProjectCarousel />
      <Numbers />
      <Photo />
      <Video />
      <Events />
      <Parteners />
    </div>
    </React.Fragment>
  );
}

export default Home;
