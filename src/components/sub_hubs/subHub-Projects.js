import React, { useState, useEffect, useRef } from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import{Link} from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate'
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import {getNumberWithComma  , Precision} from '../events/getMonthName'


const SubhubProjects = (props)=>{

    const [projects, setProjects] = useState([])
  const [offset ,setOffset]= useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const {t} = useTranslation()

  useEffect(() => {
    setProjects(props.projects)

   },[props])
   

 // Get current posts
 const currentPosts = projects.slice(offset , offset + postsPerPage)

 // Change page
 const paginate = (e) => {
   setCurrentPage(e.selected)
   setOffset(e.selected * postsPerPage)
 }


return(
<div className="row multi-row-clearfix">
          <div className="blog-posts">
          <h3 class="mt-10 line-bottom">{t('Projects')}</h3>
          <br/>
  {currentPosts.map(project => (        


  <div className="col-md-4" key ={project.id} style = {{width:'400px'}}>

  <Link to={'/single-projects/'+project.id}>
      <div className="causes bg-white mb-30" style = {{height:'500px'}}>
        <div 
            className="thumb" 
            style = {{ maxHeight: '260px'}}>
            <img src={`${address()}projects/${project.id}/image`} 
            className="img-fullwidth img-responsive" 
            />
        </div>
    
    <div style={{maxWidth: "15%", left:"25px", top:"8px", position: "absolute", rotation: 1 / 2 + 1 / 8}}>

    <CircularProgressbar
      value={project.projectProgress}
      text={`${project.projectProgress}%`}
      background
      backgroundPadding={6}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "26",
            pathTransitionDuration: 0.5,
            backgroundColor: "#066993",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"

          })}
    />  
  </div>

  <div className="causes-details clearfix p-10 pt-15 pb-15">
      <ul className="list-inline font-14 font-weight-600 clearfix mb-5">
        <li className="pull-left font-weight-400 text-black-333 pr-0">
          <span className="text-theme-colored font-weight-700">
            {t('Raised')}{getNumberWithComma(project.raised)}
          </span>
        </li>
        <li className="pull-right font-weight-400 text-black-333 pr-0">
          <span className="text-theme-colored font-weight-700">
            {t('Goal')}{getNumberWithComma(project.goal)}
            </span>
        </li>
      </ul>
        <h4 className="text-uppercase">{project.name}</h4>
      <div className="progress-item mt-0">
        <div className="progress mb-0">
          <div projects-percent={Precision(project.donationProgress)} className="progress-bar">
            <span className="percent">
                {Precision(project.donationProgress)}%
              </span>
            </div>
        </div>
      </div>
      <p className="mt-20 project-discription">{project.description}</p>

      <Link to={'/projects/'+project.id} className="btn btn-default btn-theme-colored btn-xs font-16 mt-10">{t('Donate')}</Link>
    </div>
    
  </div>
  </Link>
  </div>
  ))
 }
 {projects.length < postsPerPage &&(
      <div style = {{position:'relative',bottom:'0%'}}>

    <ReactPaginate
                        previousLabel={t('prev')}
                        nextLabel={t('next')}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={Math.ceil(projects.length / postsPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={paginate}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
            </div>
      )}
   </div>
   
   </div>



);

}
export default SubhubProjects;