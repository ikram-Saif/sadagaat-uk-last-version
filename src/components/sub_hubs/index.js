import React, {useCallback, useState, useEffect ,useRef } from 'react';

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
    const [hubs, setHubs ] = useState([])
    const [edit, setEdit ] = useState([])
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [framework,setFramework] = useState([]);
    const didMountRef = useRef(true)
    const styleMenu = i18n.dir() ==='rtl'? 'folat-left':'float-right'


    async function fetchData() {
      const fetcher = await window.fetch(`${address()}subHubs`,{headers: {'accept-language': `${i18n.language}`}})
      const response = await fetcher.json()
      setData(response)
      console.log(response)
      console.log(response)
    }
    async function fetchHubsMenu() {
      const fetcher = await window.fetch(`${address()}hubs`,{headers: {'accept-language': `${i18n.language}`}})
      const response = await fetcher.json()
      setHubs(response)
      console.log(response)
      console.log(response)
    }

    useEffect(() => {
    
           fetchData()
           fetchHubsMenu()
    
          },[])
          
        
   
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
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form action="">
              <div class="row">
                <div class="col-md-10">
                </div>
                <div class="form-group col-md-2">

                  {/* <select 
                  class={`form-control ${styleMenu}`}
                  >
                    {hubs.map(hubs => 
                    <option>{hubs.name}</option>
                    )}
                      
                    </select> */}
               </div>
              </div>
          
            </form>
          </div>
        </div>
        <div class="row multi-row-clearfix">
          <div class="blog-posts">

          {currentPosts.map(sub_hub => ( 

              <div className="col-md-4" key ={sub_hub.id}>
                <div class="causes bg-white mb-30">
                  <div class="thumb">

                      <Link to={'/single-subhub/'+sub_hub.id}>
                        <img src={sub_hub.imageUrl}
                        alt 
                        className="img-fullwidth"
                        width="240px" 
                        height="320px"
                          />
                    </Link>               
                  </div>
                  <div class="causes-details clearfix border-bottom p-15 pt-15 pb-15">

                    <h4 class="text-uppercase"><a href="#">
                      {sub_hub.name}
                      </a>
                    </h4>
                  <Link to={'/sub_hubs/'+sub_hub.id}
                   className="btn btn-default btn-theme-colored btn-xs font-16 mt-10">
                     {t('Donate')}
                  </Link>
                </div>
              </div>
            </div>
               ))}

               <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/> 
            </div>
       
        </div>
      </div>
    </section>
  </div>

 
           
        

//  <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/> 
        

) }
export default Sub_hub;