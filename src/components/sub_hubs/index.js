import React, {useCallback, useState, useEffect } from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import { get } from 'react-scroll/modules/mixins/scroller';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';



//function Sub_hub(){
  
  function Sub_hub() {

    const {t} = useTranslation()

    const Hub = sessionStorage.getItem("hub")     
    const [data, setData ] = useState([])
    const [edit, setEdit ] = useState([])
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [framework,setFramework] = useState([]);


    
    useEffect(() => {
      //alert(selectA)
    async function fetchData() {
             const fetcher = await window.fetch(`${address()}subHubs`,{headers: {'accept-language': `${i18n.language}`}})
             const response = await fetcher.json()
             setData(response)
             console.log(response)
           }
           fetchData()
          }, [])
  
  
          function handleChange(e){
                     setFramework(document.getElementById("x").value)
               };
   
     function handleSubmit(event){

       event.preventDefault();

       console.log(framework);
       console.log(data) 
       const get = data.filter(pro => pro.id == framework) 
       console.log(get);
       setEdit(get)
   
      }
   
     // const currentPosts;
   
  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
   if(edit == "")
  var currentPosts = data.slice(firstPost,  lastPost);
  else
    var currentPosts = edit.slice(firstPost,  lastPost)
  
 
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  
  return(
  

<div>
<Header name={t("Sub Hubs")}/>

 <section>
    <div className="container">
        {/* <div className="row">
          <div className="col-md-12">
          <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-8">
              <h4>Get it By</h4>
            </div>
            <div className="form-group col-md-2">
          <button className="form-control" type="submit">Get</button>
       </div>   
       
            <div className="form-group col-md-2">
                
                <select id="x" onChange={handleChange} className="form-control float-right">
                <option></option>
                <option value="1">Water Hub</option>
                <option value="2">Education Hub</option>
      
              </select>
            </div>
          </div>
                 </form>
      </div>
        </div> */}
        

        <div className="row multi-row-clearfix">
          <div className="blog-posts">
           
          {currentPosts.map(sub_hub => (        
            <div className="col-md-4" key ={sub_hub.id}>
              <div className="causes bg-white mb-30">
                <div className="thumb">
                  <Link to={'/single-subhub/'+sub_hub.id}>
                  <img src={sub_hub.imageUrl}alt className="img-fullwidth" width="240px" height="320px" />
               </Link>
                </div>
               
                  
  {/* <div style={{width: "15%", left:"25px", top:"8px", position: "absolute", rotation: 1 / 2 + 1 / 8}}>

<CircularProgressbar

  value={sub_hub.userId}
  text={`${sub_hub.userId}%`}
  styles={buildStyles({
  rotation: 0.25,
  strokeLinecap: 'butt',
  textSize: '26',
  pathTransitionDuration: 0.5,
  pathColor: `${sub_hub.userId / 1000})`,
  textColor: 'black',
  trailColor: '',
  backgroundColor: '',

})}

/>  
</div>  */}
  <div className="causes-details clearfix p-15 pt-15 pb-15">
          <h4 className="text-uppercase"><a href="#">{sub_hub.name}</a></h4>
            <Link to={'/sub_hubs/'+sub_hub.id} className="btn btn-default btn-theme-colored btn-xs font-16 mt-10">{t('Donate')}</Link>
          </div>
    </div>
</div>
))}
</div>

{/* <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/> */}
          </div>
     
      </div></section></div>

); }
export default Sub_hub;