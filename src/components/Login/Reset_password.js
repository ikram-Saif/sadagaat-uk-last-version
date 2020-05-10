import React,{Component} from 'react';
import Header from '../sub_page_header';
import { Link } from 'react-router-dom';
import {resetPassword} from '../../repository'
import  {withTranslation}  from 'react-i18next'



class ResetPassword extends Component{

  constructor() {
    super();
    this.state = {
                  email: "",
                  password: "",
                  message:''
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
   // window.location = '/verify_password_code'
  
    
     

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
                            <h4 className="text-gray mt-0 pt-5"> {t('Reset Password')} </h4>
                            <hr />

                            <form  
                                    data-toggle="validator"
                                    role="form" name="login-form" 
                                    className="clearfix" 
                                    onSubmit ={this.handleSubmit}>

                              {/* <div className="row">
                                <div className="form-group col-md-12">
                                  <label for="inputEmail">{t('Email')}</label>

                                  <input 
                                    id="inputEmail" 
                                    name="email" 
                                    className="form-control"
                                     type="email"
                                     data-error={t("that email address is invalid")}
                                      onChange = {this.handleChange} required />

                                    <div class="help-block with-errors"></div>
                                </div>
                               </div> */}

                               <div className="row">
                                <div className="form-group col-md-6">
                                <label for="form_choose_password"> {t('password')}</label>
                                
                               
                                    <input
                                            id="inputPassword" 
                                            name="password" 
                                            className="form-control" 
                                            type="password"
                                            data-minlength="8"
                                        
                                            required
                                            onChange = {this.handleChange}/>
                                            

                                        <div class="help-block with-errors">{t('Minimum of 8 characters')}</div>
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
                                                placeholder={t("Confirm")} 
                                                required
                                        />
                                        

                                        <div class="help-block with-errors"></div>       
                                        </div>
                                        </div>

                              <div className="clear pull-right text-center pt-10">
                              </div>
                              <div className="form-group mt-10">
                                <button type="submit" 
                                className="btn btn-block text-white btn-theme-green btn-lg">{t('Reset Password')}</button>
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