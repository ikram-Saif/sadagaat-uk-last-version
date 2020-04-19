import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Preload from "./components/preload";
import TopBar from "./components/top_bar";
import MenuBar from "./components/menu_bar";
import Footer from "./components/footer";
import Become from "./components/become_a_volunteer/index";
import Contact from "./components/contact";
import About from "./components/about/about.js";
import Projects_ from "./components/projects/projects";
import Sub_hubs from "./components/sub_hubs";
import Home from "./components/home";
import Calendar from "./components/calendar";
import Film from "./components/film";
import Pictures from "./components/pictures_library";
import Feeding from "./components/base_hubs/Feeding";
import Education from "./components/base_hubs/education";
import Health from "./components/base_hubs/health";
import Water from "./components/base_hubs/water";
import News from "./components/news/index";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/Login/Forgot_Password";
import Password_verfy_code from "./components/Login/Password_verfy_code";
import RestPassword from "./components/Login/Reset_password";
import Email_verification from "./components/Login/email_verfication";
import VolunteerForm from "./components/vlounteers/VolunteerForm";
import Donate from "./components/Donation/donate";
import DonateToProject from "./components/Donation/DonateToProject";
import DonateToSubhub from "./components/Donation/DonateToSubhub";
import SuccessDonate from "./components/Donation/successfullDonation";
import FaildDonate from "./components/Donation/faildDonation";
import SingleProject from "./components/projects/single-project";
import DemoProject from "./components/projects/testProjects";
import PrivateRoute from "./components/menu_bar/privateRoute";
import PubliceRoute from "./components/menu_bar/PublicRoute";
import SingleSubhub from "./components/sub_hubs/single-subhub";
import SingleEvent from "./components/events/single-event";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  document.getElementById("direction").dir = i18n.dir();

  useEffect(() => {
    if (i18n.dir() === "rtl") {
      document.getElementById("bootstrp-file").href =
        "./css/bootstrap-rtl.min.css";
      document.getElementById("main-rtl").href = "./css/style-main-rtl.css";
      document.getElementById("main-rtl-extra").href =
        "./css/style-main-rtl-extra.css";
    }
    if (i18n.dir() === "ltr") {
      document.getElementById("bootstrp-file").href = "";
      document.getElementById("main-rtl").href = "";
      document.getElementById("main-rtl-extra").href = "";
    }
  });

  return (
    <Switch>
      <div className="main-content">
        <Preload />
        <TopBar />
        <MenuBar />
        <Route exact path="/film">
          <Film />
        </Route>

        <Route exact path="/pictures">
          <Pictures />
        </Route>

        <Route exact path="/calendar">
          <Calendar />
        </Route>

        <Route exact path="/event/:event_id" component={SingleEvent} />

        <Route exact path="/water" component={Water} />
        <Route exact path="/feeding" component={Feeding} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/news" component={News} />
        <Route exact path="/sub_hubs" component={Sub_hubs} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects_} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/success-donate" component={SuccessDonate} />
        <Route exact path="/failed-donate" component={FaildDonate} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <PubliceRoute exact path="/login" component={Login} />
        <Route exact path="/forgot_password" component={ForgotPassword} />
        <Route
          exact
          path="/verify_password_code"
          component={Password_verfy_code}
        />
        <Route exact path="/reset_password" component={RestPassword} />
        <PrivateRoute exact path="/volunteerForm" component={VolunteerForm} />
        <Route exact path="/verify" component={Email_verification} />
        <Route exact path="/projects/:project_id" component={DonateToProject} />
        <Route exact path="/sub_hubs/:subhub_id" component={DonateToSubhub} />
        <Route
          exact
          path="/single-projects/:project_id"
          component={SingleProject}
        />
        <Route
          exact
          path="/single-subhub/:subhub_id"
          component={SingleSubhub}
        />
        <Route exact path="/projects/demo" component={DemoProject} />
        <Become />
        <Footer />
      </div>
    </Switch>
  );
}

export default App;
