import React from 'react';
import {Link} from 'react-router-dom'
import  i18n from 'i18next'
import { useTranslation } from 'react-i18next';



function Become(){
  const {t , i18n} = useTranslation()
  const styleClass = i18n.dir() === 'rtl' ? '':''
  const show = window.location.pathname === '/volunteerForm' ? 'none' : 'show'
  console.log(window.location.pathname)


  const handleClick = (e)=> {
    e.preventDefault()
      window.location ='/volunteerForm'
    

  }

    return(
  <section className="bg-theme-colored">
  <div className="container pt-0 pb-0">
    <div className="row">
      <div className="col-md-12">
        <div className="call-to-action pt-30  pb-30">
          <div className="col-md-9">
            <h3 className="text-white">{t('join us now as a volunteer')}</h3>
          </div>
          <div className="col-md-3 text-right sm-text-center"> 
            <button className="btn btn-transparent btn-border btn-circled btn-lg mt-15" onClick={handleClick}>{t('Become a Volunteer')}</button> 
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    );
} 

export default Become;