import React ,{ useState, useEffect, Component }  from 'react';
import Header from '../sub_page_header'
import axios from 'axios';
import { render } from '@testing-library/react';
import  {withTranslation}  from 'react-i18next'
import{Link} from 'react-router-dom'

class FaildDonate extends Component {


   render(){
     const{t}= this.props

    return (

    <div>
      <Header name={t('Donate')}/>

      <section>
        <div className="container">
          <div className="section-content">
           
          <div className="jumbotron text-center ">
          <div><h1><i class="fa fa-close-circle"></i></h1></div>
              <h1 className="display-3">Ooops!</h1>
              <div className=""><h3>Donation process failed </h3></div>
              <hr />
              <p>
                Having trouble? <Link to="/contact">{t('Contact us')}</Link>
              </p>
              <p className="lead">
                <Link className="btn btn-primary" to="/donate" role="button">{t('retry donation')}</Link>
              </p>
            </div>


            </div>
          </div>
        </section>

             </div>
    )
}
}

export default withTranslation()(FaildDonate);