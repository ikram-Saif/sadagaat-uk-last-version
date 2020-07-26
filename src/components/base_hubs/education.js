import React, { useState, useEffect, useRef } from 'react';
import Header from '../sub_page_header';
import address from './../utils/address';
import{Link} from 'react-router-dom'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';
import Hub_Subhubs from './hub_subHubs'

/**
 * This function display Education Hub Information (with arabic and english) such as Image , name , discription , 
 * buton for donate to education hub and subHubs or (sub sectors) related to this hub
 * @component
 */
const Education =()=>{
  const [education, seteducation ] = useState([])
  /**function for translation */
  const {t} = useTranslation()

/**  useEffect call eduHub function when component mounted or  when swiches Language through props i18n.language  
 * i18n .language = en  Or ar 
*/

  useEffect(() => {

    eduHub()

    } , [i18n.language])


    /**
     * This function get education hub information from server  
     * http header 
     * accept Language: ar Or en 
     */
  async function eduHub() {

    const fetcher = await window.fetch(`${address()}hubs/1738`,{headers: {'accept-language': `${i18n.language}`}})
    const response = await fetcher.json()

    /** This function fill education array with response */
    seteducation(response)

  }

return(
    <div>
        <Header name={t('Education')}/>
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
                                        className= 'img-responsive'
                                        src={`${address()}hubs/${education.id}/image`}
                                        alt="education image"
                                        style= {{height:'400px',
                                        width:'500px'}}
                                        
                                      />
                                    </div>
                                  </div>
                                  <div class="causes-details col-md-6">
                                        
                                        <h2 class="line-bottom mt-0">
                                          {education.name}
                                        </h2>
                                          <p>
                                            {education.description}
                                          </p>
                                          
                                          <div class="mt-10 mb-20">
                                          <ul class="list-inline clearfix mt-10">
                                            <li class="text-theme-colored pull-right flip pr-0">
                                            </li>
                                          </ul>
                                        </div>
                                        <Link to= {'/hub/'+education.id} class="btn btn-theme-colored btn-sm">
                                          {t('Donate Now')}
                                        </Link>
                                  </div>
                  
                              </div>
                            </div>

                        </div>
                      </div>

                    </div> 
                  </div>
                
              
            
                </div>
            <br />
          {/** this component display all subhubs related to education hub */}
              <Hub_Subhubs  hubId = {education.id}  name = {t('Education Sub Sectors')}/>

            </div>
      </div>

)}
export default Education;