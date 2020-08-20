import React, { useState, useEffect } from 'react';
import Header from '../sub_page_header';
import address from './../utils/address';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';
import Preload from '../preload'
import AllMedia from './AllMedia'




const Volunteers =()=>{
  const [volunteers, setVolunteers] = useState([])
  const [volunteerMedia , setVolunteerMedia] = useState([])
  const {t} = useTranslation()
  const [loading , setLoading] = useState(true)


  
  useEffect(() => {
    
         async function fetchData() {
           const fetcher = await window.fetch(`${address()}voulenter-page`,{headers: {'accept-language': `${i18n.language}`}})
           const response = await fetcher.json()
           setVolunteers(response)
           console.log(response)
           setLoading(false)

           
         }
         fetchData()
        }, [i18n.language])


return(
  <React.Fragment>
    <div>
    <Header name={t('Volunteers')} coverImage = {'volunteer-bg-img'}/>
    <section>
 
          <div className="container mt-30 mb-30 pt-30 pb-30">
            <div class="row">
            {loading && 
                <Preload  loading = {loading}/>
            } 

              <div class="col-md-6">
                {(volunteers.images !== undefined & volunteers.video !== undefined )&&
                <AllMedia 
                images = {volunteers.images} 
                videos = {volunteers.video}/>
                }
                </div>
                    <div class={`${(volunteers.images !== undefined & volunteers.video !== undefined)?'col-md-6':'col-md-12'}`}>

                    <div class="entry-content">
                      <div class="entry-meta media no-bg no-border mt-15">
                        <div class="media-body pl-15">
                         

                      <div className="m-15 mt-0">
                      {i18n.language === 'ar'?
                        
                         volunteers.htmlPageAr:volunteers.htmlPageEn
                            
                          }
                      </div>
                      </div>
                      </div>
                   
                </div>
              </div>
            </div>
          </div>
        </section>  
        </div>
</React.Fragment>

)

}

export default Volunteers;