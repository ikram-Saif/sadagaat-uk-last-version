import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {resetPassword} from '../../repository'
import  {withTranslation}  from 'react-i18next'



class ResetPassword extends Component{

  constructor() {
    super();
    this.state = {
                  email: "",
                  password: ""
                }
    
}
   
 
   
   handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }


   
   handleSubmit = (e) => {
    e.preventDefault();

    resetPassword(this.state)
    .then(token => window.location = '/login')
    .catch(err => alert(err));

    
     

   }
   
  
 
   render(){
    const {t} = this.props 
  
    return(

        <div id="wrapper" className="clearfix">

              <div className="main-content">
              
                
                <section className="inner-header divider parallax layer-overlay overlay-dark-6" data-bg-img="./images/slide-1.jpg">
                  <div className="container pt-60 pb-60">
                
                    <div className="section-content">
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <h3 className="font-28 text-white">{t('Login/Register')}</h3>
                        </div>
                      </div>
                    </div>
                  </div>      
                </section>

                <section>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2">
                      
                        <div className="tab-content">
                          <div className="tab-pane fade in active p-15" id="login-tab">
                            <h4 className="text-gray mt-0 pt-5"> {t('Reset Password')} </h4>
                            <hr />

                            <form  
                                    data-toggle="validator"
                                    role="form" name="login-form" 
                                    className="clearfix" 
                                    onSubmit ={this.handleSubmit}>

                              <div className="row">
                                <div className="form-group col-md-12">
                                  <label for="inputEmail">{t('Email')}</label>

                                  <input 
                                    id="inputEmail" 
                                    name="email" 
                                    className="form-control"
                                     type="email"
                                     data-error="that email address is invalid"
                                      onChange = {this.handleChange} required />

                                    <div class="help-block with-errors"></div>
                                </div>
                               </div>

                               <div className="row">
                                <div className="form-group col-md-6">
                                <label for="form_choose_password"> {t('Password')}</label>
                                
                               
                                    <input
                                            id="inputPassword" 
                                            name="password" 
                                            className="form-control" 
                                            type="password"
                                            data-minlength="6"
                                        
                                            required
                                            onChange = {this.handleChange}/>
                                            

                                        <div class="help-block with-errors">{t('Minimum of 6 characters')}</div>
                                         </div>

                                        <div className="form-group col-md-6">
                                        <label>{t('Re-enter Password')}</label>

                                        <input 
                                                id="confirmPassword" 
                                                name="re_enter_password"  
                                                className="form-control"  
                                                type="password" 
                                                data-match="#inputPassword" 
                                                data-match-error="Not Matching " 
                                                placeholder="Confirm" required
                                        />
                                        

                                        <div class="help-block with-errors"></div>       
                                        </div>
                                        </div>

                              <div className="clear pull-right text-center pt-10">
                              </div>
                              <div className="form-group mt-10">
                                <button type="submit" className="btn btn-block text-white btn-theme-green btn-lg">{t('reset')}</button>
                              </div>
                            
                            </form>
                          </div>
                          <div className="tab-pane fade in p-15" id="register-tab">
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

export default withTranslation()(ResetPassword);