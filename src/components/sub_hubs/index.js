import React, {useCallback, useState, useEffect ,useRef } from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import { Link } from 'react-router-dom';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate'


  function Sub_hub() {

    const {t} = useTranslation()

    const [data, setData ] = useState([])
    const [hubs, setHubs ] = useState([])
    const [offset ,setOffset]= useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const styleMenu = i18n.dir() ==='rtl'? 'folat-left':'float-right'


    async function fetchData() {
      const fetcher = await window.fetch(`${address()}subHubs`,{headers: {'accept-language': `${i18n.language}`}})
      const response = await fetcher.json()
      setData(response)
    }
    async function fetchHubsMenu() {
      const fetcher = await window.fetch(`${address()}hubs`,{headers: {'accept-language': `${i18n.language}`}})
      const response = await fetcher.json()
      setHubs(response)
    }

    useEffect(() => {
    
           fetchData()
           fetchHubsMenu()
    
          },[i18n.language])
          
   
    // Get current posts
const currentPosts = data.slice(offset , offset + postsPerPage);

// Change page
const paginate = (e) => {
  setCurrentPage(e.selected)
  setOffset(e.selected * postsPerPage)
}

  
  return(
  

<div>
<Header name={t("Sub Sectors")}/>

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
                <Link to={'/single-subhub/'+sub_hub.id}>
                  <div class="thumb">

                     
                        <img src={`${address()}subHubs/${sub_hub.id}/image`}
                        alt 
                        className="img-fullwidth img-responsive"
                        width="240px" 
                        height="320px"
                          />
                              
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
                </Link>
              </div>
             
            </div>
               ))}

{data.length > postsPerPage &&(
      <div style = {{position:'relative',bottom:'0%'}}>

    <ReactPaginate
                        previousLabel={t('prev')}
                        nextLabel={t('next')}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={Math.ceil(data.length / postsPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={paginate}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
            </div>
      )}

            </div>
       
        </div>
      </div>
    </section>
  </div>

 
           
        

//  <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/> 
        

) }
export default Sub_hub;