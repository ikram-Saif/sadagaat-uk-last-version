import React, { useState, useEffect, useRef } from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import{Link} from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';


const Hub_Subhubs = (props)=>{

  const [subhub, setSubhubs] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const hubId = props.hubId
  const {t} = useTranslation()

  useEffect(() => {
    
    SubHubs()
 
      } , [props])


       async function SubHubs() {
         const fetcher = await window.fetch(`${address()}subHubs`,{headers: {'accept-language': `${i18n.language}`}})
         const response = await fetcher.json()
         const filteredSubhubs = response.filter((subhub) => subhub.hubId === hubId)
         setSubhubs(filteredSubhubs)
         console.log(filteredSubhubs)
       }

  

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = subhub.slice(firstPost,  lastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
 //const getSubhub = project.filter(hub => hub.id === 2)
 

return(
<div>
      
        <div className="row multi-row-clearfix">
          <div className="blog-posts">
          <h3 class="mt-10 line-bottom">{t('Education Sub Sectors')}</h3>
          <br/>


  {currentPosts.map(sub_hub => ( 

            <div className="col-md-4" key ={sub_hub.id}>
              <div class="causes bg-white mb-30" style = {{height:'400px'}}>
              <Link to={'/single-subhub/'+sub_hub.id}>
                <div class="thumb">

                  
                      <img src={`${address()}subHubs/${sub_hub.id}/image`}
                      alt 
                      className="img-fullwidth"
                      height="250px"
                        />
                            
                </div>
                <div class="causes-details clearfix border-bottom p-15 pt-15 pb-15">

                  <h4 class="text-uppercase">
                    {sub_hub.name}
                   
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

);

}
export default Hub_Subhubs;