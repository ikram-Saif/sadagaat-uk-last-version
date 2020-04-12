import React, { useState, useEffect } from 'react';
import address from './../utils/address';
import {isAuthenticated} from '../../repository'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';


import {
  BrowserRouter as Router,
  Switch,HashRouter,
  Route,
  Link,NavLink
} from 'react-router-dom'

function Footer(){
const {t} = useTranslation()

  const handleClick =(e)=>{
    isAuthenticated() ? window.location ='local/volunteerForm' : window.location = 'local/login'
  }
  const [data, setData ] = useState([])
  
  useEffect(() => {
    
         async function fetchData() {
           const fetcher = await window.fetch(`${address()}/footer`,{headers: {'accept-language': `${i18n.language}`}})
           const response = await fetcher.json()
           setData(response.slice(-1))
         }
         fetchData()
        }, [])


    return(
  
<div>
<Router basename={process.env.PUBLIC_URL}>
  <footer id="footer" className="footer" data-bg-img="images/Sadgaat-Pattern.png" data-bg-color="#25272e">
    <div className="container pt-70 pb-40">
      <div className="row border-bottom-black">
        <div className="col-sm-6 col-md-3">
          <div className="widget dark">
            {/* <img class="mt-10 mb-20" alt="" src="images/logo.png"> */}
            <h2 className="text-white">{t('SADAGAAT')}</h2>
            <span className="text-white">{t('Community of Charity')}</span>
            <p>{t('Nonprofit Organization Located in Sudan.')}</p>
            <ul className="styled-icons icon-dark icon-theme-colored icon-circled icon-sm">
             
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-youtube" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>  
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="widget dark">
            <h5 className="widget-title line-bottom">{t('Hubs')}</h5>
            <ul className="list angle-double-right list-border">

              <li><Link to='/water'>{t('Water Hub')}</Link></li>
              <li><Link to='/health'>{t('Health Hub')}</Link></li>
              <li><Link to='/feeding'>{t('Feeding Hub')}</Link></li>
              <li><Link to='/education'>{t('Education Hub')}</Link></li>
           
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="widget dark">
            <h5 className="widget-title line-bottom">{t('Quick Links')}</h5>
            <ul className="list angle-double-right list-border">
              <li><Link to ="/about">{t('About Us')}</Link></li>
              <li><Link to ="/projects">{t('Projects')}</Link></li>
              <li><Link to ='/donate'>{t('Donate')}</Link></li>
              <li><Link to ='/volunteerForm'>{t('Become a Volunteer')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="widget dark">
            <h5 className="widget-title line-bottom">{t('Contact Us')}</h5>
            <ul className="list angle-double-right list-border">
              <li> <i className="fa fa-phone text-theme-colored" />
                123-456-789</li>
              <li> <i className="fa fa-phone text-theme-colored" /> 123-456-789</li>
              <li> <i className="fa fa-envelope-o text-theme-colored" /> contact@yourdomain.com</li>
              <li> <i className="fa fa-globe text-theme-colored" /> www.yourdomain.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom bg-theme-colored">
      <div className="container pt-15 pb-10">
        <div className="row">
          <div className="col-md-12">
            <p className="font-12 text-white text-center m-0">{t('All Rights Reserved © Sadagaat Community of Charity - 2020')}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
<a className="scrollToTop" href="#"><i className="fa fa-angle-up" /></a>
</Router>
</div>



    )
} 

export default Footer;