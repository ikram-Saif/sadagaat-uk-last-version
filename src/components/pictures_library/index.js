import React, { useState, useEffect } from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';



function Pictures_library(){

  const [data, setData ] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const {t} = useTranslation()

  
  useEffect(() => {
    
          async function fetchData() {
            const fetcher = await window.fetch(`${address()}`,{headers: {'accept-language': `${i18n.language}`}})
            const response = await fetcher.json()
           setData(response)
          }
          fetchData()
         }, [])

   const lastPost = currentPage * postsPerPage;
   const firstPost = lastPost - postsPerPage;
   const currentPosts = data.slice(firstPost,  lastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)




return(
    <div>
        <Header name= {t('Pictures Library')} />
     <section>
  

     <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div id="grid" className="gallery-isotope grid-3 masonry gutter-10 clearfix">
           
          {currentPosts.map(picture => (

<div className="gallery-item breakfast" style={{float: 'left'}}>
              <div className="thumb">
                <img className="img-fullwidth" src={('http://placehold.it/370x270')} alt="project" />
                <div className="overlay-shade" />
                <div className="portfolio-upper-part">
                  <h4 className="font-22 mb-0">Title Place Here</h4>
                  <h5 className="font-14 text-gray-darkgray mt-0">   - Photo</h5>
                </div>
                <div className="portfolio-view">
                  <a className="image-popup-vertical-fit" title="Donate" href={('http://placehold.it/370x270')}>
                    <i className="fa fa-camera font-24 text-theme-colored" />
                  </a>
                </div>
              </div>
              </div>
          ))}
</div></div></div>

{/* <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/> */}

  </div></section></div>    
)
  }
export default Pictures_library;