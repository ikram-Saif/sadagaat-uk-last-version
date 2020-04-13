import React, { useState, useEffect } from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import{Link} from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';


function Education (props){

  const [health, setHealth ] = useState([])
  const [project, setProject ] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const hub_name = props.match.path
  const {t} = useTranslation()


  useEffect(() => {

    async function healthHub() {
      const fetcher = await window.fetch(`${address()}/hubs`,{headers: {'accept-language': `${i18n.language}`}})
      const response = await fetcher.json()
      setHealth(response)
    }
  
         async function eduProjects() {
           const fetcher = await window.fetch(`${address()}projects`,{headers: {'accept-language': `${i18n.language}`}})
           const response = await fetcher.json()
           setProject(response)
         }
         healthHub()
         eduProjects()
    
        },[])


  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = project.slice(firstPost,  lastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  const getHealth = health.filter(hub => hub.id === 2)
 

return(
<div>
<Header name={t('Education')}/>
<section>
  <div className="container">
    <div className="row mtli-row-clearfix">
      <div className="col-sm-12 col-md-10 col-md-offset-1">
        <div className="causes bg-white maxwidth500 mb-30">
   {getHealth.map(health => (
          <div className="thumb">
            <img src={('images/slide-1.jpg')} alt className="img-fullwidth" />
  <div style={{width: "10%", left:"18px", top:"15px", position: "absolute", rotation: 1 / 2 + 1 / 8}}>

<CircularProgressbar

  value={health.id}
  text={`${health.id}%`}
  styles={buildStyles({
  rotation: 0.25,
  strokeLinecap: 'butt',
  textSize: '26',
  pathTransitionDuration: 0.5,
  pathColor: `${health.id / 1000})`,
  textColor: 'black',
  trailColor: '',
  backgroundColor: '',

})}

/>  
</div>
          </div>
          ))}
     </div>
        <div className="event-details">
          <p className="mb-20 mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? Libero saepe perspiciatis accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupiditate. Repudiandae provident, consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut eum perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.</p>
          <p />
          <p className="mb-20 mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? Libero saepe perspiciatis accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupiditate. Repudiandae provident, consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut eum perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.</p>
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
           
     
     
     
          {currentPosts.map(healthPro => (        


<div className="col-md-4" key = {healthPro.id}>
<div className="causes bg-white mb-30">
  <div className="thumb">
    <img  src={(healthPro.imageUrl)}  alt className="img-fullwidth" />
  </div>
  
  <div style={{width: "15%", left:"25px", top:"8px", position: "absolute", rotation: 1 / 2 + 1 / 8}}>

<CircularProgressbar

  value={healthPro.donationProgress}
  text={`${healthPro.id}%`}
  styles={buildStyles({
  rotation: 0.25,
  strokeLinecap: 'butt', 
  textSize: '26',
  pathTransitionDuration: 0.5,
  pathColor: `${healthPro.id / 1000})`,
  textColor: 'black',
  trailColor: '',
  backgroundColor: '',

})}

/>  
</div><div className="causes-details clearfix border-bottom p-15 pt-15 pb-15">
    <ul className="list-inline font-18 font-weight-600 clearfix mb-5">
      <li className="pull-left font-weight-400 text-black-333 pr-0">{t('Raised')} <span className="text-theme-colored font-weight-700">{health.rasing} SDG</span></li>
      <li className="pull-right font-weight-400 text-black-333 pr-0">{t('Goal')} <span className="text-theme-colored font-weight-700">{health.goals} SDG</span></li>
    </ul>
      <h4 className="text-uppercase"><a href="#">{healthPro.title}</a></h4>
    <div className="progress-item mt-0">
      <div className="progress mb-0">
        <div data-percent={healthPro.id} className="progress-bar"><span className="percent">0</span></div>
      </div>
    </div>
    <p className="mt-20">{healthPro.description}.</p>
    <Link to={'/donate/'+healthPro.id} className="btn btn-default btn-theme-colored btn-xs font-16 mt-10">{t('Donate')}</Link>
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