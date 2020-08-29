import React, { useEffect , Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import TopBar from "./components/top_bar";
import MenuBar from "./components/menu_bar";
import Footer from "./components/footer";
import Become from "./components/become_a_volunteer/index";
import Contact from "./components/contact";
import About from "./components/about/about.js";
import Projects_ from "./components/projects/projects";
import Home from "./components/home";
import Calendar from "./components/events/eventsCalender";
import Feeding from "./components/base_hubs/Feeding";
import Education from "./components/base_hubs/education";
import Health from "./components/base_hubs/health";
import Water from "./components/base_hubs/water";
import News from "./components/news/index";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/Login/Forgot_Password";
import RestPassword from "./components/Login/Reset_password";
import VolunteerForm from "./components/vlounteers/VolunteerForm";
import Donate from "./components/Donation/donate";
import DonateToProject from "./components/Donation/DonateToProject";
import DonateToSubhub from "./components/Donation/DonateToSubhub";
import DonateToHub from "./components/Donation/donateToHub";
import SuccessDonate from "./components/Donation/successfullDonation";
import FaildDonate from "./components/Donation/faildDonation";
import SingleProject2 from "./components/projects/single-withSlider";
import PrivateRoute from "./components/menu_bar/privateRoute";
import PubliceRoute from "./components/menu_bar/PublicRoute";
import SingleSubhub from "./components/sub_hubs/single-subhub";
import SingleEvent from "./components/events/single-event";
import PlannedProjects from "./components/projects/plannedProjects";
import FinishedProjects from"./components/projects/finished-project";
import singleNews from "./components/news/single-news";
import Volunteers  from './components/vlounteers/volunteersPage';
import Registration  from "./components/Login/Registration";

import { useTranslation } from "react-i18next";




function App (){
   
  const { i18n } = useTranslation();
  document.getElementById("direction").dir = i18n.dir();


    useEffect(() => {
      if (i18n.dir() === "rtl") 
      {
        document.getElementById("bootstrp-file").href =
        "css/bootstrap-rtl.min.css";
  
        document.getElementById("main-rtl").href = "css/style-main-rtl.css";
        
        document.getElementById("main-rtl-extra").href =
          "css/style-main-rtl-extra.css";
          
      }
      else if (i18n.dir() === "ltr") {
        document.getElementById("bootstrp-file").href = "";
        document.getElementById("main-rtl").href = "";
        document.getElementById("main-rtl-extra").href = "";
      }
    },i18n.language);

  return (
    <React.Fragment>
    <Switch>
      <div className="main-content">
        <TopBar />
        <MenuBar />
        
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects_} />
        <Route exact path="/water" component={Water} />
        <Route exact path="/feeding" component={Feeding} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/donate/" component={Donate} />
        <Route exact path="/calendar">
          <Calendar />
        </Route>
        <Route exact path="/volunteers" component={Volunteers} />
        <Route
          exact
          path="/complete-projects"
          component={FinishedProjects}
        />
        <Route
          exact
          path="/planned-projects"
          component={PlannedProjects}
        />

        <Route
          exact
          path="/event/:event_id"
          component={SingleEvent}
        />
        <Route
          exact
          path="/news/:news_id"
          component={singleNews}
        />

        
        <Route exact path="/projects/:project_id" component={DonateToProject} />
        <Route exact path="/sub_hubs/:subhub_id" component={DonateToSubhub} />
        <Route exact path="/hub/:hubId" component={DonateToHub} />
        <Route exact path="/success-donate" component={SuccessDonate} />
        <Route exact path="/failed-donate" component={FaildDonate} />
        <PrivateRoute exact path="/volunteerForm" component={VolunteerForm} />
        <PubliceRoute exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/forgot_password" component={ForgotPassword} />
        <Route exact path="/reset-password/:token" component={RestPassword} />
       
        <Route
          exact
          path="/single-projects/:project_id"
          component={SingleProject2}
        />
        <Route
          exact
          path="/single-subhub/:subhub_id"
          component={SingleSubhub}
        />
        <Become />
        <Footer />
     
      </div>
    </Switch>
    </React.Fragment>
  );
}

export default App;
