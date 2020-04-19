import React,{Component} from 'react';
import { login , register} from '../../repository';
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'




class Registration extends Component{


  constructor() {
    super();
    this.state = { 
      form:{
   
              firstName:'',
              lastName:'',
              userName: '',
              password: '',
              phoneNumber:'',
              gender:'MALE',
              dateOfBirth:'',
      },
      response:{
        errorMessage:null,
        sccessfullRegistration:``,
        styleClass:'',
        iconClass:'',
        loginLink:''
        
      }

    };
  }

   
   handleChange = (e)=> 
   {
      this.setState({
        form:{
          ...this.state.form,
        [e.target.name]: e.target.value
        }
      })
      console.log(e.target.value)
    }

   
   handleSubmit=(e) => 
   {

        e.preventDefault();

       register(this.state.form)
       
       .then(token => 
         this.setState({
           response:{
             ...this.state.response,
           sccessfullRegistration:'Registerd Successfully. Please   ',
           styleClass:'success-msg',
           iconClass:'fa fa-check fa-2x',
           loginLink:'Login ...!'
           }
         })
        )

        // .then(token => 
        //  window.location = '/verify'
        //  )
       
       .catch(err => {
        console.log(err.message)

            this.setState({
              form:{
                ...this.state.form,
                firstName:'',
                lastName:'',
                userName: '',
                password: '',
                phoneNumber:'',
                gender:'MALE',
                dateOfBirth:'',
              },
              response:{
                ...this.state.response,
                errorMessage: err.message,
                iconClass:'fa fa-times-circle',
                styleClass:'error-msg'
              }
           })
          }
        )
   
          
    }
   
   render(){
      const {t} = this.props
      const styleClass = i18n.dir() ==='rtl'?'pull-right ml-10':'pull-left mr-10'

  
    return(
      
            <div>

                            <form 
                                  name="reg-form" 
                                  className="register-form" 
                                  data-toggle="validator"
                                  role="form"
                                  onSubmit={this.handleSubmit}
                                  
                                
                              >
                              <div className="icon-box mb-0 p-0">
                                <span className={`icon icon-bordered icon-rounded icon-sm ${styleClass} mb-0`}>
                                  <i className="pe-7s-users"></i>
                                </span> 
                                  <h4 className="text-gray pt-10 mt-0 mb-30">{t('Register Now')}</h4>
                              </div>
                             
                                {this.state.response.errorMessage === null?

                                  (<div className = {this.state.response.styleClass}>
                                      <i className = {this.state.response.iconClass} style = {{margin:'5px'}} />
                                      {this.state.response.sccessfullRegistration}
                                      <a href = '/login'>{this.state.response.loginLink}</a>
                                       
                                      </div>) :

                                    (<div className = {this.state.response.styleClass}>
                                    <i className = {this.state.response.iconClass} style = {{margin:'5px'}}/>
                                    {t(this.state.response.errorMessage)}
                                    
                                    </div>) 
                                }

                                                          
                             
                              <div className="row">
                                <div className="form-group col-md-6">
                                  <label for="first-name">{t('First Name')}</label>

                                  <input
                                      id="firs-name" 
                                      name="firstName" 
                                      className="form-control" 
                                      type="text"
                                      required
                                      onChange = {this.handleChange}
                                      value = {this.state.form.firstName}
                                      
                                  />
                                </div>
                                <div className="form-group col-md-6">
                                  <label>{t('Last Name')}</label>

                                  <input 
                                        id="last-Mame" 
                                        name="lastName"  
                                        className="form-control"  
                                        type="text" 
                                        onChange = {this.handleChange}
                                        value = {this.state.form.lastName}
                                        required
                                   />
                                       
                                </div>

                                
                              </div>
                              <div className="row">
                                
                                <div className="form-group col-md-6">
                                  <label>{t('Email Address')}</label>

                                  <input 
                                      name="userName" 
                                      className="form-control" 
                                      type="email" id="inputEmail"
                                      onChange = {this.handleChange}
                                      value = {this.state.form.userName}
                                      
                                      required 
                                      
                                    />
                                   <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group col-md-6">
                                                <label for="" className="float-left">{t('Gender')}</label>
                                                <select 
                                                className="form-control float-right" 
                                                name ="gender" 
                                                value ={this.state.form.gender} 
                                                onChange = {this.handleChange}
                                                >
                                                    <option>{t('FEMALE')}</option>
                                                    <option>{t('MALE')}</option>
                                                </select>
                                            </div>
                                      </div>
                              <div className="row">
                                
                                <div className="form-group col-md-6">
                                  <label>{t('Phone')}</label>

                                  <input 
                                      name="phoneNumber" 
                                      className="form-control" 
                                      type="tel" 
                                      pattern="[0-9]{10}|[0-9]{12}|[0-9]{14}"
                                      onChange = {this.handleChange}
                                      value ={this.state.form.phoneNumber} 
                                      required 
                                      
                                    />
                                   <div className="help-block with-errors">{t('')}</div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>{t('Date Of Birth')}</label>

                                  <input 
                                      name="dateOfBirth" 
                                      className="form-control" 
                                      type="date" 
                                      onChange ={this.handleChange}
                                      required 
                                      value ={this.state.form.dateOfBirth} 
                                    />
                                   <div className="help-block with-errors"></div>
                                </div>

                              
                                            </div>

                              <div className="row">
                                <div className="form-group col-md-6  has-feedback">
                                  <label for="form_choose_password"> {t('password')}</label>

                                  <input
                                      id="inputPassword" 
                                      name="password" 
                                      className="form-control" 
                                      type="password"
                                      data-minlength="8"
                                      data-error={t('Minimum of 8 characters')}
                                      required
                                      onChange = {this.handleChange}
                                      value ={this.state.form.password}
                                      /> 

                                <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group col-md-6  has-feedback" >
                                  <label>{t('Re-enter Password')}</label>

                                  <input 
                                        id="confirmPassword" 
                                        name="re_enter_password"  
                                        className="form-control"  
                                        type="password" 
                                        data-match="#inputPassword" 
                                        data-match-error={t('Not Matching')} 
                                        placeholder={t("Confirm")}
                                         required
                                   />

                                  
                                  <div className="help-block with-errors">

                                    </div>   
                                    <span className="glyphicon form-control-feedback" aria-hidden="true"></span>

                                </div>

                                
                              
                                <div className="form-group">
                                <button className="btn text-white btn-theme-green btn-lg btn-block mt-15" type="submit">{t('Register')}</button>
                              </div>
                              </div>
                             
                            </form>
              
                       
            </div>
                  
                    
                    

    )
   }
}

export default withTranslation()(Registration);
