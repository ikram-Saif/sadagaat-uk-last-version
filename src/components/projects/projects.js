import React, { useState, useEffect } from 'react';
import Header from '../sub_page_header';
import address from './../utils/address';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link } from 'react-router-dom'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';
import {getNumberWithComma, getNumber} from '../events/getMonthName'
import parse from 'html-react-parser';






function Projects_(){
  const [data, setData ] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  //const parse = require('html-react-parser');
  const {t} = useTranslation()

  
  useEffect(() => {
    
         async function fetchData() {
           const fetcher = await window.fetch(`${address()}projects`,{headers: {'accept-language': `${i18n.language}`}})
           const response = await fetcher.json()
           console.log(response)
           const Projects = response.filter(project => project.status === 'ongoing' )
           setData(Projects)
           
         }
         fetchData()
        }, [i18n.language])
     

      
const lastPost = currentPage * postsPerPage;
const firstPost = lastPost - postsPerPage;
var currentPosts = data.slice(firstPost,  lastPost);



  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  



return(
<section>
<Header name={t('Ongoing Projects')}/>

  <div className="container">

    <div className="row">
     
       
    {currentPosts.length > 0 ? data.map(project => (        


<div className="col-md-4" key ={project.id} >
<Link to={'/single-projects/'+project.id}>
    <div className="causes bg-white mb-30">
      <div className="thumb">
      <img src={`${address()}projects/${project.id}/image`}  className="img-fullwidth"  width = '390' height = '260'/>
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
<div className="causes-details clearfix p-15 pt-15 pb-15">
    <ul className="list-inline font-16 font-weight-600 clearfix mb-5">
      <li className="pull-left font-weight-400 text-black-333 pr-0">{t('Raised')}
      <span className="text-theme-colored font-weight-700">
        { getNumber(project.raised)}
      </span>
      </li>
      <li className="pull-right font-weight-400 text-black-333 pr-0">
        {t('Goal')}
        <span className="text-theme-colored font-weight-700">
          { getNumber(project.goal)}
        </span>
      </li>
    </ul>
     <div className="progress-item mt-0">
      <div className="progress mb-0">
        <div data-percent={project.donationProgress} className="progress-bar"><span className="percent"></span></div>
      </div>
    </div>
      <h4 className="text-uppercase">{project.name}</h4>
   
    <p className="mt-20 project-discription">{parse(project.description)}</p>

    <Link to={'/projects/'+project.id} 
      className="btn btn-default btn-theme-colored btn-xs font-16 mt-10"
      style = {{display:`
      ${project.status ==='completed'|| project.donationProgress === '100'?'none':''}`
    }}
    >
      {t('Donate')}</Link>
  </div>
  
</div>
</Link>
</div>
))
:
""}
  
{/* <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/> */}

</div>
</div>    
      
            
</section>

)

}

export default Projects_;