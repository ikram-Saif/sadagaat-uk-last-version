import React, { useState, useEffect , useRef} from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import Pagination from './../pagination';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import{Link} from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';


function Water (props){

  const [water, setwater ] = useState([])
  const [subhub, setSubhubs] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const hub_name = props.match.path
  const {t} = useTranslation()



  async function waterHub() {
    const fetcher = await window.fetch(`${address()}hubs/30`,{headers: {'accept-language': `${i18n.language}`}})
    const response = await fetcher.json()
    setwater(response)
  }

  async function waterSubHubs() {
    const fetcher = await window.fetch(`${address()}subHubs`,{headers: {'accept-language': `${i18n.language}`}})
    const response = await fetcher.json()
    const filteredSubhubs = response.filter((subhub) => subhub.hubId === 30)
    setSubhubs(filteredSubhubs)
    console.log(subhub)
  
  }

  
  useEffect(() => {

  
      waterHub()
      waterSubHubs()

    
        } , [i18n.language])

    
       
    

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = subhub.slice(firstPost,  lastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
 //const getwater = water.filter(hub => hub.id === 2)
 

return(
<div>
<Header name={t('Water')}/>
{/* <section>
  <div className="container">
    <div className="row mtli-row-clearfix">
      <div className="col-sm-12 col-md-10 col-md-offset-1">
        <div className="causes bg-white maxwidth500 mb-30">

          <div className="thumb"> */}
            
            {/* <img src={water.imageUrl}
                  alt className="img-fullwidth" 
                  width ='945' height ='630' 
                  /> */}
  {/* <div style={{width: "10%", left:"18px", top:"15px", position: "absolute", rotation: 1 / 2 + 1 / 8}}> */}

{/* <CircularProgressbar

  value={water.projectProgress}
  text={`${water.projectProgress}%`}
  styles={buildStyles({
  rotation: 0.25,
  strokeLinecap: 'butt',
  textSize: '26',
  pathTransitionDuration: 0.5,
  pathColor: `${water.id / 1000})`,
  textColor: 'black',
  trailColor: '',
  backgroundColor: '', 

})}

/>  */}
{/* </div>
          </div>
  
     </div>
        <div className="event-details">
          <p className="mb-20 mt-20">{water.description}</p>
          <p />
          <p />
        </div>
      </div>
    </div>
  </div>
</section> */}

    <section>
      <div className="container">
  
        <div className="row multi-row-clearfix">
          <div className="blog-posts">
          <h3 class="mt-0 line-bottom">{t('Water Sub Sectors')}</h3>
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
           



</div>

<Pagination postsPerPage={postsPerPage} totalPosts={subhub.length} paginate={paginate}/>
          </div>
     
      </div></section></div>

);

}
export default Water;