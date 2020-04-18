import React, { useState, useEffect , useRef } from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'



function Calendar(){

  const [data, setData ] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const {t} = useTranslation()
  const didMountRef = useRef(true)


  async function fetchData() {
    const fetcher = await window.fetch(`${address()}events`,{headers: {'accept-language': `${i18n.language}`}})
    const response = await fetcher.json()
    setData(response)
  }
  
  useEffect(() => {
      fetchData()
     
        },[])

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = data.slice(firstPost,  lastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return(
        <div>
<Header name={t("Event Calendar")}/>
<section>
  <div className="container pb-30">
    <div className="section-content">
      <div className="row">
        
      {currentPosts.map(event => (  
        <div className="col-sm-6 col-md-4 col-lg-4" key = {event.id}>
          <div className="schedule-box maxwidth500 bg-lighter mb-30">
            <div className="schedule-details border-bottom-theme-color-2px clearfix p-15 pt-10">
              <div className="text-center pull-left flip bg-theme-colored p-10 pt-5 pb-5 mr-10">
                <ul>
                  <li className="font-19 text-white font-weight-600 border-bottom ">28</li>
                  <li className="font-12 text-white text-uppercase">Feb</li>
                </ul>
              </div>
              <h4 className="title mt-5 mb-5">
                
                <Link to = {'/event/'+ event.id} > {event.name} </Link>
                
                </h4>
              <ul className="list-inline font-11 text-gray">
                <li><i className="fa fa-calendar mr-5" /> {event.startDate}</li>
                <li><i className="fa fa-map-marker mr-5" /> {event.locationName}</li>
              </ul>
              <div className="clearfix" />
              <p className="mt-10">{event.description}</p>
            </div>
          </div>
        </div>
      ))}

      </div>
      
<Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>

      
      </div></div></section></div>

    )
}
export default Calendar;