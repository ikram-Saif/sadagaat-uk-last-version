import React from 'react';
import Contact from '../contact';
import About from '../about/about.js';
import Projects_ from '../projects/projects';
import Sub_hubs from '../sub_hubs';
import Home from '../home';
import Calendar from '../calendar';
import Film from '../film';
import Pictures from '../pictures_library';
import Feeding from '../base_hubs/Feeding';
import Education from '../base_hubs/education';
import Health from '../base_hubs/health';
import Water from '../base_hubs/water';
import News from '../news/index';
import Login from '../Login/Login'
import ForgotPassword from '../Login/Forgot_Password'
import Password_verfy_code from '../Login/Password_verfy_code'
import RestPassword from '../Login/Reset_password'
import Email_verification from '../Login/email_verfication'
import VolunteerForm from '../vlounteers/VolunteerForm'
import Donate from '../Donation/donate';
import DonateToProject from '../Donation/DonateToProject'
import DonateToSubhub from '../Donation/DonateToSubhub'
import SuccessDonate from '../Donation/successfullDonation'
import FaildDonate from '../Donation/faildDonation'
import LanguageSelector from '../../i18next/LanguageSelector'
import SingleProject from '../projects/single-project'
import DemoProject from "../projects/testProjects"


import {
  BrowserRouter as Router,
  Switch,HashRouter,
  Route,
  Link,NavLink
} from "react-router-dom";
import PrivateRoute from './privateRoute';
import PubliceRoute from './PublicRoute'
import { useTranslation} from 'react-i18next';
import SingleSubhub from '../sub_hubs/single-subhub';

function MenuBar(){
  const {t} = useTranslation()
  return(
        <Router basename={process.env.PUBLIC_URL}>
      <div className="header-nav">
      
        
      
         <div className="header-nav-wrapper navbar-scrolltofixed bg-silver-light">
                <div className="container">
                  <nav id="menuzord-right" className="menuzord default no-bg">
                    <a className="menuzord-brand pull-left flip" to="#"><img src="./images/logo.png" alt="" /></a>
                    <ul className="menuzord-menu">
                    <li><NavLink className="nav-link" activeclassName="active" exact to="/">{t('Home')}</NavLink></li>
                                            
                      <li><a>{t('Hubs')}</a>
                        <ul className="dropdown">
                          <li><NavLink to="/water">{t('Water Hub')}</NavLink></li>
                          <li><NavLink to="/education">{t('Education Hub')}</NavLink></li>
                          <li><NavLink to="/health">{t('Health Hub')}</NavLink></li>
                          <li><NavLink to="/feeding">{t('Feeding Hub')}</NavLink></li>
                           </ul>
                      </li>
                      <li><NavLink to="/sub_hubs">{t('Sub Hubs')}</NavLink></li>
                        <li> <NavLink to="/projects">{t('Projects')}</NavLink></li>
                      <li><a href="#">{t('Media Center')}</a>
                        <ul className="dropdown">
                        <li><NavLink to="/film">{t('Film Library')}</NavLink></li>
                          <li><NavLink to="pictures">{t('Pictures Library')}</NavLink></li>
                          <li><NavLink to="/news">{t('News')}</NavLink></li>
                          <li><NavLink to="/calendar">{t('Event Calendar')}</NavLink></li>
                        </ul>
                      </li>
                      <li><NavLink to="/about">{t('About Us')}</NavLink></li>
                      <li><NavLink className="nav-link" activeclassName="active" to="/contact">{t('Contact')}</NavLink></li>
                      <li> <LanguageSelector/>  </li>
                      <li><NavLink className="btn btn-colored btn-flat btn-theme-green" to="/donate">{t('Donate')}</NavLink></li>
                    </ul>
                  </nav>
                  </div>
                  </div>
                  </div>
                  
                  <Switch>
      
                  {/**<Route path="/donate/:id" component={Donate} />*/}
                   
                    <Route exact path="/film">
                    <Film/>
                    </Route>   
      
                    <Route exact path="/pictures">
                    <Pictures/>
                    </Route>     
      
                    <Route exact path="/calendar">
                    <Calendar/>
                    </Route>   
      
                    <Route exact path="/water" component ={Water} />
      
                    <Route exact path="/feeding" component ={Feeding} />
      
                    <Route exact path="/health" component ={Health} />
      
                    <Route exact path="/education" component ={Education} />
        
                                  
                                              
                    <Route exact path="/news" component= {News}/>
                               
                          
                    <Route exact path="/sub_hubs" component ={Sub_hubs}/>
                       
                    <Route  path="/contact" component={Contact} />       
      
                    <Route exact path="/projects" component ={Projects_} />
      
                    <Route exact path="/donate" component ={Donate} />
      
                    <Route exact path="/success-donate" component ={SuccessDonate} />
                    <Route exact path="/failed-donate" component ={FaildDonate} />
                   
                  <Route  path="/about" component={About} />
      
                  <Route exact path="/" component={Home}/>
      
                         
                  <PubliceRoute  exact path ='/login' component ={Login} />
                   
      
                  <Route  exact path ='/forgot_password'>
                      <ForgotPassword />
                  </Route>
      
                  <Route  exact path ='/verify_password_code'>
                    <Password_verfy_code />
                  </Route>      
      
                  <Route  exact path ='/reset_password'>
                      <RestPassword />
                  </Route>
                    
                 <PrivateRoute exact path ='/volunteerForm' component = {VolunteerForm} />
      
                  <Route  exact path ='/verify'>
                    <Email_verification />
                  </Route>
      
                  <Route exact path ='/projects/:project_id' component={DonateToProject} />
      
                  <Route exact path ='/sub_hubs/:subhub_id' component={DonateToSubhub} />
      
                  <Route exact path = '/single-projects/:project_id' component ={SingleProject} />
      
                  <Route exact path = '/single-subhub/:subhub_id' component ={SingleSubhub} />
                  
                  <Route exact path ='/projects/demo' component={DemoProject} />
      
                 </Switch>
      
      </Router>
      
                 
             
          )

}
export default MenuBar;