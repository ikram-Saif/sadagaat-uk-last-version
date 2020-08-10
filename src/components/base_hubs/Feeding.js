import React, { useState, useEffect ,useRef } from 'react';

import Header from '../sub_page_header';
import address from './../utils/address';
import{Link} from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';
import Hub_Subhubs from './hub_subHubs'



const Feeding=()=>{

  const [Feeding, setFeeding ] = useState([])
  const {t} = useTranslation()



  async function feedingHub() {
    const fetcher = await window.fetch(`${address()}hubs/1744`,{headers: {'accept-language': `${i18n.language}`}})
    const response = await fetcher.json()
    setFeeding(response)
  }

  useEffect(() => {
         feedingHub()
    
        } , [i18n.language])
return(
<div>
<Header name={t('Feeding')}  coverImage = 'feeding-bg-img'/>

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
                              src = {`${address()}hubs/${Feeding.id}/image`}
                              alt="Feeding image"
                              className= 'img-responsive'
                              style= {{height:'400px',
                                        width:'500px'}}
                              
                            />
                            </div>
                       
                          </div>
                          <div class="causes-details col-md-6">
                                
                                <h2 class="line-bottom mt-0">{Feeding.name}</h2>
                                 

                                  <p>{Feeding.description}</p>
                                  
                                  <div class="mt-10 mb-20">
                                  <ul class="list-inline clearfix mt-10">
                                    {/* <li class="text-theme-colored pull-left flip pr-0 font-weight-700 font-14">
                                       {t("Total Donation")}:  <span> {Feeding.total_donation} SDG</span>
                                      </li> */}
                                    <li class="text-theme-colored pull-right flip pr-0">
                                      
                                    </li>
                                  </ul>
                                </div>
                                <Link to= {'/hub/'+Feeding.id} class="btn btn-theme-colored btn-sm">{t('Donate Now')}</Link>
                              </div>
           
                        </div>
                      </div>
              
                </div>
           
              </div>
            </div>

                 
        
            
          </div>
        
      
     
  </div>
   <br />
   <Hub_Subhubs  hubId = {Feeding.id} name = {t('Feeding Sub Sectors')} />

     
      </div>
      </div>

);

}
export default Feeding;