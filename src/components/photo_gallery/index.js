import React, { useState, useEffect } from 'react';
import axios from 'axios'
import address from './../utils/address';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';



function Photo(){

  const [data, setData ] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const {t}= useTranslation()
  
  useEffect(() => {
    
         async function fetchData() {
           const fetcher = await window.fetch(`${address()}/photos`,{headers: {'accept-language': `${i18n.language}`}})
           const response = await fetcher.json()
           setData(response)
         }
         fetchData()
        }, [])


  return(
  <section>
    <div className="container">
      <div className="section-title text-center">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <h2 className="text-uppercase line-bottom-center mt-0">{t('Photo')} <span className="text-theme-colored font-weight-600">{t('Gallery')}</span></h2>
            {/* <div class="title-icon">
            <i class="flaticon-charity-hand-holding-a-heart"></i>
          </div> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati! <br />ipsum
              dolor sit Rem autem voluptatem obcaecati</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        <div id="grid" className="gallery-isotope grid-3 masonry gutter-10 clearfix">
          

        {data.map(photo => (

<div className="gallery-item breakfast" style={{float: 'left'}}>
              <div className="thumb">
                <img className="img-fullwidth" src="http://placehold.it/370x270" alt="project" />
                <div className="overlay-shade" />
                <div className="portfolio-upper-part">
        <h4 className="font-22 mb-0">{photo.title}</h4>
                </div>
                <div className="portfolio-view">
                  <a className="image-popup-vertical-fit" title="Donate" href="http://placehold.it/370x270">
                    <i className="fa fa-camera font-24 text-theme-colored" />
                  </a>
                </div>
              </div>
              </div>
          ))}
</div>

</div></div></div></section>
);
}

  export default Photo;
