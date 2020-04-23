import React,{Component} from 'react';
import Header from '../sub_page_header';
import { login , email_verify} from '../../repository';
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'



class Email_verification extends Component{

  constructor() {
    super();
    this.state = {
                  code: "",
                }
    
}
   
 
   
   handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }


   
   handleSubmit = (e) => {
    e.preventDefault();

    email_verify(this.state)
   // .then( token => window.location = '/login')
   .then(token => window.location = '/login')
 
    .catch(err =>alert(err));
    }
   
  
 
   render(){
    
    const {t} = this.props
  
    return(

        <div id="wrapper" className="clearfix">

              <div className="main-content">
              
              <Header name={t('Login/Register')}/>
                <section>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2">
                       
                        <div className="tab-content">
                          <div className="tab-pane fade in active p-15" id="login-tab">
                            <h4 className="text-gray mt-0 pt-5"> {t('Enter Verification Code')}</h4>

                            <form  
                                    data-toggle="validator"
                                    role="form" name="login-form" 
                                    className="clearfix" 
                                    onSubmit ={this.handleSubmit}>

                              <div className="row">
                                <div className="form-group col-md-12">

                                  <input 
                                    id="inputCode" 
                                    name="code" 
                                    className="form-control"
                                     type="text"
                                      onChange = {this.handleChange} required />

                                </div>
                               </div>
                                
   
                              <div className="form-group mt-10">
                                <button type="submit" className="btn btn-block text-white btn-theme-green btn-lg">{t('Verify')}</button>
                              </div>
                            
                            </form>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              </div>
              
              


                  
                    
                    

    )
   }
}

export default withTranslation()(Email_verification);