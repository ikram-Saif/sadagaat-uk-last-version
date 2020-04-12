import React, { useState, useEffect } from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';



function News(){

  const [data, setData ] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const {t} = useTranslation()
  
  useEffect(() => {
         async function fetchData() {
           const fetcher = await window.fetch(`${address()}news`,{headers: {'accept-language': `${i18n.language}`}})
           const response = await fetcher.json()
           setData(response)
           console.log(response)
         }
         fetchData()
        }, [])

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = data.slice(firstPost,  lastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return(
    
    <div>
      
      <Header name={t("News")}/>
    

<section>

   
  
      
         
          <div className="container mt-30 mb-30 pt-30 pb-30">  
          <div className="row">  
           <div className="col-md-10 col-md-offset-1">
              
                  {currentPosts.map(news => (  
                  <div className="blog-posts single-post">
                  <article className="post clearfix mb-0">
            <div className="entry-header">
              <div className="post-thumb thumb"> <img src={news.imageUrl} alt className="img-responsive img-fullwidth" /> </div>
            </div>
            <div className="entry-content">
              <div className="entry-meta media no-bg no-border mt-15 pb-20">
                {/* <div class="entry-date media-left text-center flip bg-theme-colored pt-5 pr-15 pb-5 pl-15">
                <ul>
                  <li class="font-16 text-white font-weight-600">28</li>
                  <li class="font-12 text-white text-uppercase">Feb</li>
                </ul>
              </div> */}
                <div className="media-body pl-15">
                  <div className="event-content pull-left flip">
            <h2 className="line-bottom mt-0">{news.name}</h2>
                    <h4 className="mt-0 mb-0 text-theme-colored">{news.startDate}</h4>
                    <h4 className="mt-0 mb-0 text-theme-colored">{news.endDate}</h4>
                  </div>
                </div>
              </div>
              <p className="mb-15">{news.description}.</p>
       
            </div>
          </article>
          </div>
          ))}
     </div>
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>

        </div>
       </section>    
    </div>
    
    );


}

export default News;