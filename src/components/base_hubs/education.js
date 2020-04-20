import React, { useState, useEffect, useRef } from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import{Link} from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';


function Education (props){

  const [education, seteducation ] = useState([])
  const [project, setProject ] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const hub_name = props.match.path
  const {t} = useTranslation()
  //const didMountRef = useRef(true)



  async function eduHub() {
    const fetcher = await window.fetch(`${address()}hubs/36`,{headers: {'accept-language': `${i18n.language}`}})
    const response = await fetcher.json()
    seteducation(response)
    console.log(response)
  }

       async function eduProjects() {
         const fetcher = await window.fetch(`${address()}projects`,{headers: {'accept-language': `${i18n.language}`}})
         const response = await fetcher.json()
         //const filteredSubhubs = response.filter((subhub) => subhub.hubId === 36)
         //setProject(filteredSubhubs)
         //console.log(filteredSubhubs)
         setProject(response)
       }

  useEffect(() => {

   // if (didMountRef){
        eduHub()
        eduProjects()
    //  didMountRef.current = false

    //}
        } , [])


  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = project.slice(firstPost,  lastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
 //const getSubhub = project.filter(hub => hub.id === 2)
 

return(
<div>
<Header name={t('Education')}/>
<section>
  <div className="container">
    <div className="row mtli-row-clearfix">
      <div className="col-sm-12 col-md-10 col-md-offset-1">
        <div className="causes bg-white maxwidth500 mb-30">

          <div className="thumb">
          <img src={education.imageUrl}
             alt className="img-fullwidth"
             width = '945'
             height = '630'
              />
  <div style={{width: "10%", left:"18px", top:"15px", position: "absolute", rotation: 1 / 2 + 1 / 8}}>

 
</div>
          </div>
  
     </div>
        <div className="event-details">
          <p className="mb-20 mt-20">{education.description}</p>
          <p />
          <p />
        </div>
      </div>
    </div>
  </div>
</section>

    <section>
      <div className="container">
  
        <div className="row multi-row-clearfix">
          <div className="blog-posts">
           
     
     
     
 {currentPosts.map(educationPro => (        


<div className="col-md-4" key = {educationPro.id}>
<div className="causes bg-white mb-30">
  <div className="thumb">

  <Link to = {'/single-projects/'+educationPro.id}>

    <img  src={(educationPro.imageUrl)}  alt className="img-fullwidth" height ="240" width = "360" />
    </Link>
  </div>
  
  <div style={{width: "15%", left:"25px", top:"8px", position: "absolute", rotation: 1 / 2 + 1 / 8}}>

<CircularProgressbar

  value={educationPro.projectProgress}
  text={`${educationPro.projectProgress}%`}
  background
  backgroundPadding={6}
  styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: "butt",
    textSize: "26",
    pathTransitionDuration: 0.5,
    pathColor: `${project.id / 1000})`,
    //textColor: "white",
    backgroundColor: "#066993",
    textColor: "#fff",
    pathColor: "#fff",
    trailColor: "transparent"
    //trailColor: "",
    //backgroundColor: '',

})}

/>  
</div><div className="causes-details clearfix border-bottom p-15 pt-15 pb-15">
    <ul className="list-inline font-18 font-weight-600 clearfix mb-5">
      <li className="pull-left font-weight-400 text-black-333 pr-0">{t('Raised')} <span className="text-theme-colored font-weight-700">{educationPro.raised} SDG</span></li>
      <li className="pull-right font-weight-400 text-black-333 pr-0">{t('Goal')} <span className="text-theme-colored font-weight-700">{educationPro.goal} SDG</span></li>
    </ul>
      <h4 className="text-uppercase"><a href="#">{educationPro.name}</a></h4>
    <div className="progress-item mt-0">
      <div className="progress mb-0">
        <div data-percent={educationPro.donationProgress} className="progress-bar"><span className="percent">{educationPro.donationProgress}</span></div>
      </div>
    </div>
    <p className="mt-20">{educationPro.description}.</p>
    <Link to={'/projects/'+educationPro.id} className="btn btn-default btn-theme-colored btn-xs font-16 mt-10">{t('Donate')}</Link>
  </div>
</div>
</div>
))}
  


</div>

<Pagination postsPerPage={postsPerPage} totalPosts={project.length} paginate={paginate}/>
          </div>
     
      </div></section></div>

);

}
export default Education;