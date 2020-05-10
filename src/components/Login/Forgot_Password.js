import React,{Component} from 'react';
import Header from '../sub_page_header';
import { Link } from 'react-router-dom';
import { forgotPassword , resetPassword} from '../../repository'
import  {withTranslation}  from 'react-i18next'



class ForgotPassword extends Component{

  constructor() {
    super();
    this.state = {
                  email:"",
                }
    
}
   
 
   
   handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }


   
   handleSubmit = (e) => {
    e.preventDefault();
 
     forgotPassword(this.state)
     .then(response => this.setState({
                      message:'Please Check your Email to Complete Process',
                      styleClass:'success-msg',
                      iconClass:'fa fa-check fa-2x',
                       }))
     .catch(err => alert(err));
   // window.location = '/reset_password'
   


    
     

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
                          <p className = {this.state.styleClass}>{t(this.state.message)}</p>

                            <h4 className="text-gray mt-0 pt-5"> {t('Reset Password')}</h4>
                            <hr />

                            <form  id = 'form'
                                    //data-toggle="validator"
                                    role="form" name="login-form" 
                                    className="clearfix" 
                                    onSubmit ={this.handleSubmit}
                                    >

                              <div className="row">
                                <div className="form-group col-md-12">
                                  <label for="inputEmail">{t('Email Address')}</label>

                                  <input 
                                    id="inputEmail" 
                                    name="email" 
                                    className="form-control"
                                     type="email"
                                     data-error={t("that email address is invalid")}
                                      onChange = {this.handleChange} 
                                      required = 'true'
                                      onvalid="this.setCustomValidity('')"
                                      oninvalid="this.setCustomValidity('Enter User Name Here')"
                                      
                                      data-errormessage-value-missing="Please input something"
                                      />

                                    <div class="help-block with-errors"></div>
                                </div>
                               </div>
                              <div className="form-group mt-10">
                                
                                <button type="submit" className="btn btn-block text-white btn-theme-green btn-lg">{t('send')}
                                </button>
                                
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

export default withTranslation()(ForgotPassword);