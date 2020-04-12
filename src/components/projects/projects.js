import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link } from 'react-router-dom'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';




function Projects_(){
  const [hub,setHub] = useState([]);
  const [year,setYear] = useState([]);
  const [data, setData ] = useState([])
  const [edit, setEdit ] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const hub_name = sessionStorage.getItem("hub")

  const {t} = useTranslation()

  
  useEffect(() => {
    
         async function fetchData() {
           const fetcher = await window.fetch(`${address()}projects`,{headers: {'accept-language': `${i18n.language}`}})
           const response = await fetcher.json()
           console.log(response)
           setData(response)
           
         }
         fetchData()
        }, [])

      
        function handleChange(e){
          setYear(document.getElementById("year").value)
          setHub(document.getElementById("hub").value)
    };

function handleSubmit(event){

event.preventDefault();

console.log(data) 

const get = data.filter(pro => pro.id == hub || pro.id == year) 
console.log(get);
setEdit(get)

}
const lastPost = currentPage * postsPerPage;
const firstPost = lastPost - postsPerPage;
 if(edit == "")
var currentPosts = data.slice(firstPost,  lastPost);
else
  var currentPosts = edit.slice(firstPost,  lastPost)


  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  



return(
<div>

<Header name={t('Projects')}/>
<section>
  <div className="container">
    {/* <div className="row">
      <div className="col-md-12 ">
      <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <h4>Get it By</h4>
            </div>
            <div className="form-group col-md-2">
          <button className="form-control" type="submit">Get</button>
       </div>   
       
       <div className="form-group col-md-2 float-right">
              <select id="year" onChange={handleChange} className="form-control float-right">
                <option></option>
              <option value="1">2020</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <select id="hub" onChange={handleChange} className="form-control float-right">
                <option></option>
                <option value="Water">{t('Water Hub')}</option>
                    <option value="Health">{t('Health Hub')}</option>
                    <option value ="education">{t('Education Hub')}</option>
                    <option value ="feeding">{t('Feeding Hub')}</option>
              </select>
            </div>
          </div>
                 </form>
      </div>
    </div> */}
    <div className="row">
     
       
    {currentPosts.map(project => (        


<div className="col-md-4" key ={project.id}>
<div className="causes bg-white mb-30">
  <div className="thumb">
  <Link to={'/single-projects/'+project.id}><img src={project.imageUrl}  className="img-fullwidth" /></Link>
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
</div>
<div className="causes-details clearfix p-15 pt-15 pb-15">
    <ul className="list-inline font-18 font-weight-600 clearfix mb-5">
      <li className="pull-left font-weight-400 text-black-333 pr-0">{t('Raised')}:<span className="text-theme-colored font-weight-700">{project.raised} SDG</span></li>
      <li className="pull-right font-weight-400 text-black-333 pr-0">{t('Goal')}:<span className="text-theme-colored font-weight-700">{project.goal} SDG</span></li>
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
  
{/* <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/> */}

</div>
</div>    
      
            
</section>

  </div>
);

}

export default Projects_;