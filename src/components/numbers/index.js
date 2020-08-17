import React, { useState, useEffect } from 'react';
import address from './../utils/address'
import CountUp from 'react-countup';
import {Link} from 'react-router-dom'
import i18n from "i18next";
import { useTranslation } from 'react-i18next';

function Numbers(){
  
  const [notDoneProjects, setNotDoneProjects ] = useState([])
  const [dooners, setDooners] = useState([])
  const [volunteer, setVolunteer] = useState([])
  const [doneProjects, setDoneProjects] = useState([])
  const [planedProjects, setPlanedProjects] = useState([])
  const {t} = useTranslation()

  useEffect(() => {
    
         async function fetchNotDoneProjects() {
           const fetcher = await window.fetch(`${address()}projects/notFinished`)
           const response = await fetcher.json()
           setNotDoneProjects(response)
         }
         fetchNotDoneProjects()
        

        async function fetchDooner(){
          const fetcher = await window.fetch(`${address()}donors`)
          const response = await fetcher.json()
          setDooners(response)
        }
        fetchDooner()
      
       async function fetchVolunteers() {
        const fetcher = await window.fetch(`${address()}totalMembers`)
        const response = await fetcher.json()
        setVolunteer(response)
      }

      fetchVolunteers()
    
     async function fetchDoneProjects() {
      const fetcher = await window.fetch(`${address()}projects/finished`)
      const response = await fetcher.json()
      setDoneProjects(response)
    }
    fetchDoneProjects()

    async function fetchPlanedProjects() {
      const fetcher = await window.fetch(`${address()}projects/plan`)
      const response = await fetcher.json()
      setPlanedProjects(response)
    }
    fetchPlanedProjects()
   }, [i18n.language])




    return(
      <React.Fragment>
   <section className=" bg-img divider parallax layer-overlay overlay-dark-9" data-bg-img ={require("../images/x.jpg")} data-parallax-ratio="0.7">
  <div className="container pt-80 pb-80">
    <div className="row" 
    // style = {{display:'flex'}}
    >

    <Link to = '/complete-projects'>
      <div className="col-xs-12 col-sm-6 col-md-2 mb-md-50">
        <div className="funfact text-center">
          <i className="pe-7s-rocket mt-5 text-white" />
          <h2 className="text-white font-42 font-weight-500 mt-0 mb-0"><CountUp end={doneProjects} duration={5}/></h2>
          <h5 className="text-white text-uppercase font-weight-600">{t('Completed Projects')}</h5>
        </div>
      </div>
      </Link>

    <Link to = '/projects'>
      <div className="col-xs-12 col-sm-6 col-md-4 mb-md-50">
          <div className="funfact text-center">
            <i className="pe-7s-rocket mt-5 text-white" />
            <h2 className="text-white font-42 font-weight-500 mt-0 mb-0"><CountUp end={notDoneProjects} duration={5}/></h2>
            <h5 className="text-white text-uppercase font-weight-600">{t('Ongoing Projects')}</h5>
          </div>
        </div>
      </Link>

      <Link to = '/planned-projects'>
      <div className="col-xs-12 col-sm-6 col-md-2 mb-md-50">
        <div className="funfact text-center">
          <i className="pe-7s-rocket mt-5 text-white" />
          <h2 className="text-white font-42 font-weight-500 mt-0 mb-0"><CountUp end={planedProjects} duration={5}/></h2>
          <h5 className="text-white text-uppercase font-weight-600">{t('Planned Projects')}</h5>
        </div>
      </div>
      </Link>

      

      <Link to = '/donate'>
      <div className="col-xs-12 col-sm-6 col-md-2 mb-md-50">
        <div className="funfact text-center">
          <i className="pe-7s-rocket mt-5 text-white" />
          <h2 className="text-white font-42 font-weight-500 mt-0 mb-0"><CountUp end={dooners} duration={5}/></h2>
          <h5 className="text-white text-uppercase font-weight-600">{t('Donors')}</h5>
        </div>
      </div>
      </Link>

      <Link to = '/volunteerForm'>
      <div className="col-xs-12 col-sm-6 col-md-2 mb-md-50">
        <div className="funfact text-center">
          <i className="pe-7s-rocket mt-5 text-white" />
          <h2 className="text-white font-42 font-weight-500 mt-0 mb-0"><CountUp end={volunteer} duration={5}/></h2>
          <h5 className="text-white text-uppercase font-weight-600">{t('Volunteer')}</h5>
        </div>
      </div>
      </Link>
    </div>
  </div>
</section>
</React.Fragment>
    )
}
export default Numbers;