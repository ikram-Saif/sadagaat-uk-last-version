import React from 'react';
import {Link , withRouter} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

/**
 * This component showing becom a volunteer section this section hide from volunteerForm page
 * @component
 * @param {object} props  PathName  of the page 
 * @see http://sadagaat-uk.org
 */


function Become(props){
  const {t , i18n} = useTranslation()
  const styleClass = i18n.dir() === 'rtl' ? '':''
  const show = props.history.location.pathname === '/volunteerForm' ? 'none' : ''

    return(
      <React.Fragment>
  <section className="bg-theme-colored-darker4">
  <div className="container pt-0 pb-0">
    <div className="row">
      <div className="col-md-12">
        <div className="call-to-action pt-30  pb-30">
          <div className="col-md-9">
            <h3 className="text-white">{t('join us now as a volunteer')}</h3>
          </div>
          <div className="col-md-3 text-right sm-text-center"> 

            <Link to = '/volunteerForm'>
                <button className="btn btn-transparent btn-border btn-circled btn-lg mt-15"
                style={{ display: show }}
                >
                  {t('Become a Volunteer')}
                </button> 
              </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</React.Fragment>


    );
} 

export default withRouter (Become);