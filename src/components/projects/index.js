import React, { useState, useEffect } from 'react';
//import axios from 'axios'
import address from './../utils/address';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"; 
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';


function Projects(){
  const {t} =useTranslation()
  const percentage = 85;
  const [data, setData ] = useState([])
  
  useEffect(() => {
    
         async function fetchData() {
           const fetcher = await window.fetch(`${address()}projects`,{headers: {'accept-language': `${i18n.language}`}})
           const response = await fetcher.json()
           setData(response.slice(-6))
         }
         fetchData()
        }, [])
        
        
        return(
<div>
<section id="causes" className="bg-silver-light">
  <div className="container">
    <div className="section-title text-center">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <h2 className="text-uppercase line-bottom-center mt-0">{t('Our')} <span className="text-theme-colored font-weight-600">{t('Projects')}</span></h2>
        
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati! <br />ipsum
            dolor sit Rem autem voluptatem obcaecati</p>
        </div>
      </div>
    </div>

  <div className="container">
    <div className="row">
 



{data.map(project  =>  (  <div className="col-md-4" key ={project.id}>
<div className="causes bg-white mb-30">
  <div className="thumb">
    <Link to={'/single-projects/'+project.id}>
    <img src={project.imageUrl}  className="img-fullwidth" />
    </Link>
  </div>
  
  <div style={{width: "15%", left:"25px", top:"8px", position: "absolute", rotation: 1 / 2 + 1 / 8}}>

<CircularProgressbar

  value={project.projectProgress}
  text={`${project.projectProgress}%`} 
  styles={buildStyles({
  rotation: 0.25,
  strokeLinecap: 'butt',
  textSize: '26',
  pathTransitionDuration: 0.5,
  pathColor: `${project.id / 1000})`,
  textColor: 'black',
  trailColor: '',
  backgroundColor: '',
})}

/>  
</div><div className="causes-details clearfix border-bottom p-15 pt-15 pb-15">
    <ul className="list-inline font-18 font-weight-600 clearfix mb-5">
      <li className="pull-left font-weight-400 text-black-333 pr-0"><span className="text-theme-colored font-weight-700">{t(project.raised)} SDG</span></li>
      <li className="pull-right font-weight-400 text-black-333 pr-0"> <span className="text-theme-colored font-weight-700">{t(project.goal)} SDG</span></li>
    </ul>
      <h4 className="text-uppercase">{project.title}</h4>
    <div className="progress-item mt-0">
      <div className="progress mb-0">
        <div data-percent={project.donationProgress} className="progress-bar"><span className="percent"></span></div>
      </div>
    </div>
    <p className="mt-20">{project.description}</p>

    <Link to={'/projects/'+project.id} className="btn btn-default btn-theme-colored btn-xs font-16 mt-10">{t('Donate')}</Link>
  </div>
</div>
</div>
))}

       </div>
       </div></div></section></div>
)
}
export default Projects;