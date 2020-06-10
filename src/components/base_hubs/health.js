import React, { useState, useEffect ,useRef } from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import{Link} from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';


function Health (props){

  const [health, setHealth ] = useState([])
  const [subhub, setSubhubs] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const hub_name = props.match.path
  const {t} = useTranslation()
  const didMountRef = useRef(true)




  async function healthHub() {
    const fetcher = await window.fetch(`${address()}hubs/1695`,{headers: {'accept-language': `${i18n.language}`}})
    const response = await fetcher.json()
    console.log(response)
    setHealth(response)
  }

  async function healthSubHubs() {
    const fetcher = await window.fetch(`${address()}subHubs`,{headers: {'accept-language': `${i18n.language}`}})
    const response = await fetcher.json()
    const filteredSubhubs = response.filter((subhub) => subhub.hubId === 1695)
    setSubhubs(filteredSubhubs)
    console.log(subhub)
  
  }

  useEffect(() => {

    
      healthHub()
      healthSubHubs()
 
     },[i18n.language])



  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = subhub.slice(firstPost,  lastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  //const getHealth = health.filter(hub => hub.id === 2)
 

return(
<div>
<Header name={t('Health')}/>

      <div className="container">
    <div className="row multi-row-clearfix">
    <div className = 'section-content'>
          <div className="col-xs-12 col-sm-6 col-md-12">
              <h2 >

              </h2>

              <div className="event media sm-maxwidth400 border-bottom mt-5 mb-0 pt-10 pb-15">
                <div className="row">
                   
                      <div className="causes">
                        <div className="row-fluid">
                          <div className="col-md-6">
                      
                            <div className ="post-thumb thumb" style = {{mxaHeight:"600px"}}>
                            <img
                              src={health.imageUrl}
                              alt="health image"
                              className= 'img-responsive'
                              style= {{height:'400px',
                                        width:'500px'}}
                              
                            />
                            </div>
                       
                          </div>
                          <div class="causes-details col-md-6">
                                
                                <h2 class="line-bottom mt-0">{health.name}</h2>
                                 

                                  <p>{health.description}</p>
                                  
                                  <div class="mt-10 mb-20">
                                  <ul class="list-inline clearfix mt-10">
                                    <li class="text-theme-colored pull-left flip pr-0 font-weight-700 font-14"> {t("Total Donation")}:  <span> {health.total_donation} SDG</span></li>
                                    <li class="text-theme-colored pull-right flip pr-0">
                                      
                                    </li>
                                  </ul>
                                </div>
                                <Link to= {'/donate'} class="btn btn-theme-colored btn-sm">{t('Donate Now')}</Link>
                              </div>
           
                        </div>
                      </div>
              
                </div>
           
              </div>
            </div>

                 
        
            
          </div>
        
      
     
  </div>
   <br />
  
        <div className="row multi-row-clearfix">
          <div className="blog-posts">
          <h3 class="mt-0 line-bottom">{t('Health Sub Sectors')}</h3>
          <br/>


  {currentPosts.map(sub_hub => ( 

            <div className="col-md-4" key ={sub_hub.id}>
              <div class="causes bg-white mb-30">
              <Link to={'/single-subhub/'+sub_hub.id}>
                <div class="thumb">

                  
                      <img src={sub_hub.imageUrl}
                      alt 
                      className="img-fullwidth"
                      height="250px"

                        />
                            
                </div>
                <div class="causes-details clearfix border-bottom p-15 pt-15 pb-15">

                  <h4 class="text-uppercase"><a href="">
                    {sub_hub.name}
                    </a>
                  </h4>
                  
                <Link to={'/sub_hubs/'+sub_hub.id}
                className="btn btn-default btn-theme-colored btn-xs font-16 mt-10">
                  {t('Donate')}
                </Link>
              </div>
              </Link>
            </div>

            </div>
            ))}
           
     
 
</div>

<Pagination postsPerPage={postsPerPage} totalPosts={subhub.length} paginate={paginate}/>
          </div>
     
      </div>
      </div>

);

}
export default Health;