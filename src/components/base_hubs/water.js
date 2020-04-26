import React, { useState, useEffect , useRef} from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import{Link} from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';


function Water (props){

  const [water, setwater ] = useState([])
  const [project, setProject ] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const hub_name = props.match.path
  const {t} = useTranslation()
  const didMountRef = useRef(true)



  async function waterHub() {
    const fetcher = await window.fetch(`${address()}hubs/30`,{headers: {'accept-language': `${i18n.language}`}})
    const response = await fetcher.json()
    setwater(response)
  }

  async function waterProjects() {
    const fetcher = await window.fetch(`${address()}projects`,{headers: {'accept-language': `${i18n.language}`}})
    const response = await fetcher.json()
    setProject(response)
  }

  
  useEffect(() => {

  
      waterHub()
      waterProjects()

    
        } , [])

    
       
    

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = project.slice(firstPost,  lastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
 //const getwater = water.filter(hub => hub.id === 2)
 

return(
<div>
<Header name={t('Water')}/>
<section>
  <div className="container">
    <div className="row mtli-row-clearfix">
      <div className="col-sm-12 col-md-10 col-md-offset-1">
        <div className="causes bg-white maxwidth500 mb-30">

          <div className="thumb">
            
            {/* <img src={water.imageUrl}
                  alt className="img-fullwidth" 
                  width ='945' height ='630' 
                  /> */}
  <div style={{width: "10%", left:"18px", top:"15px", position: "absolute", rotation: 1 / 2 + 1 / 8}}>

{/* <CircularProgressbar

  value={water.projectProgress}
  text={`${water.projectProgress}%`}
  styles={buildStyles({
  rotation: 0.25,
  strokeLinecap: 'butt',
  textSize: '26',
  pathTransitionDuration: 0.5,
  pathColor: `${water.id / 1000})`,
  textColor: 'black',
  trailColor: '',
  backgroundColor: '', 

})}

/>  */}
</div>
          </div>
  
     </div>
        <div className="event-details">
          <p className="mb-20 mt-20">{water.description}</p>
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
           
     
     
     
          {currentPosts.map(waterPro => (        


  <div className="col-md-4" key = {waterPro.id}>
     <Link to = {'/single-projects/'+waterPro.id}>
        <div className="causes bg-white mb-30">
          <div className="thumb">
        
         <img  src={(waterPro.imageUrl)}  
          alt className="img-fullwidth" 
            height ="240" width = "360"
          /> 
     </div>
  
  <div style=
  {{
    width: "15%",
    left:"25px",
    top:"8px", 
    position: "absolute", 
    rotation: 1 / 2 + 1 / 8
    }}>

<CircularProgressbar

  value={waterPro.projectProgress}
  text={`${waterPro.projectProgress}%`}
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

      <li className="pull-left font-weight-400 text-black-333 pr-0">
        {t('Raised')} 
        <span className="text-theme-colored font-weight-700">
          {waterPro.raised} SDG</span>
        </li>
      <li className="pull-right font-weight-400 text-black-333 pr-0">
          {t('Goal')} <span className="text-theme-colored font-weight-700">
          {waterPro.goal} SDG</span>
      </li>
      </ul>
        <h4 className="text-uppercase"><a href="#">{waterPro.name}</a></h4>
        <div className="progress-item mt-0">

        <div className="progress mb-0">
          <div data-percent={waterPro.donationProgress} 
            className="progress-bar">
            <span className="percent">
              {waterPro.donationProgress}</span>
              </div>
        </div>
    </div>
    <p className="mt-20">{waterPro.description}.</p>
    <Link to={'/projects/'+waterPro.id} className="btn btn-default btn-theme-colored btn-xs font-16 mt-10">
      {t('Donate')}</Link>
  </div>
</div>
</Link>
</div>
))}
  


</div>

<Pagination postsPerPage={postsPerPage} totalPosts={project.length} paginate={paginate}/>
          </div>
     
      </div></section></div>

);

}
export default Water;