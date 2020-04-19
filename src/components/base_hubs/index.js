import React from 'react'
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'



function Hubs(){

  const {t} = useTranslation()

    return(
        <section>
  <div className="container pt-0 pb-0">
    <div className="section-content">
      <div className="row equal-height-inner home-boxes" data-margin-top="">
        <div className="col-sm-12 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay1">
          <div className="sm-height-auto bg-theme-colored-darker2">
            <div className="text-center pt-10 pb-30">
              <i className="flaticon-charity-responsible-use-of-water text-white font-64" />
              <h4 className="text-uppercase mt-0"><Link to="water" className="text-white">{t('Water')}</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay2">
          <div className="sm-height-auto bg-theme-colored-darker3">
            <div className="text-center pt-10 pb-30">
              <i className="flaticon-charity-health-insurance text-white font-64" />
              <h4 className="text-uppercase mt-0"><Link to="health" className="text-white">{t('Health')}</Link></h4>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay3">
          <div className="sm-height-auto bg-theme-colored-darker4">
            <div className="text-center pt-10 pb-30">
              <i className="flaticon-charity-food-donation text-white font-64" />
              <h4 className="text-uppercase mt-0"><Link to="feeding" className="text-white">{t('Feeding')}</Link></h4>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay4">
          <div className="sm-height-auto bg-theme-colored">
            <div className="text-center pt-10 pb-30">
              <i className="flaticon-charity-supportive-hands text-white font-64" />
              <h4 className="text-uppercase mt-0"><Link to ="/education" className="text-white">{t('Education')}</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )

} 
export default Hubs;