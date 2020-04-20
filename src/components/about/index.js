import React from 'react';
import { useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom'

function About(){
  const {t ,i18n} = useTranslation()
  const classParameter = i18n.dir() ==='rtl'?'pr-0':'pl-0'
  const buttonClass = i18n.dir() ==='rtl'?'mr-5':'ml-5'
  const show = window.location.pathname === '/about' ? 'none' : ''
  //console.log(window.location.pathname)
     
return(
    <section id="about">
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 mt-20">
              <div className="row">
                <div className={`col-md-6 col-sm-6 ${classParameter}`}>
                  <div className="img-hover-border mt-sm-40">
                    <img className="img-fullwidth" src='./images/about 350-300.jpg' alt=""  width="275" height ="335" />
                  </div>
                </div>
            <div className="col-md-6 col-sm-6 pl-0 pr-0">
              <div className="img-hover-border mt-sm-30">
                <img className="img-fullwidth" src="./images/about 325-177.jpg" alt = ""  width="250" height ="156"/>
              </div>
              <div className="img-hover-border mt-15 mt-sm-30">
                <img className="img-fullwidth" src="./images/x.jpg" alt = "" width="250" height ="156" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="about-details">
            <h2 className="font-28 text-uppercase mt-1">{t('About')} <span className="text-theme-colored">{t('Sadagaat')}</span></h2>
            <p>{t('about_message_1')}</p>
            <p>{t('about_message_2')}</p>
            <p>{t('about_message_1')}</p>
            <p>{t('about_message_2')}</p>
        
             
            <Link 
              to="/about" 
              className={`btn btn-flat btn-colored btn-theme-colored mt-15 ${buttonClass}`}
               style = {{display :show}}
              >
              {t('Read More')}
            </Link>
         
            <Link to="/donate" className={`btn btn-flat btn-colored btn-default btn-theme-colored mt-15 ${buttonClass}`}>{t('Donate')}</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}

export default About;