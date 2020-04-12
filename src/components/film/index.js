import React, { useState, useEffect } from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';



function Film(){

  const [data, setData ] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const {t} = useTranslation()
  
  useEffect(() => {
    
         async function fetchData() {
           const fetcher = await window.fetch(`${address()}/film`, {headers: {'accept-language': `${i18n.language}`}})
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
        <Header name={t('Film Library')}/>
 
  
  <section>
    <div className="container">
      <div className="section-content">
        <div className="row">
          <div className="col-md-12">
          <div id="grid" className="gallery-isotope grid-3 gutter clearfix">
            
{currentPosts.map(film => (
              <div className="gallery-item photography" style={{float: 'left'}}>
                <div className="thumb">
                  <img className="img-fullwidth" src={('http://placehold.it/540x370')} alt="project" />
                  <div className="overlay-shade" />
                  <div className="icons-holder">
                    <div className="icons-holder-inner">
                      <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                        <a className="popup-youtube" href="http://www.youtube.com/watch?v=0O2aH4XLbto"><i className="fa fa-youtube-play" /></a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          

))}
      
      </div>        </div>
            


<Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
          </div>

          </div>     
      </div></section></div>



)
}
export default Film;