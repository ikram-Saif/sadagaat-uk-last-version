import React,{Component} from 'react';
import { login , register} from '../../repository';
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'




class Registration extends Component{


  constructor() {
    super();
    this.state = { 
              firstName:'',
              lastName:'',
              userName: '',
              password: '',
              phoneNumber:'',
              gender:'MALE',
              dateOfBirth:'',

    };
  }

   
   handleChange = (e)=> 
   {
      this.setState({[e.target.name]: e.target.value})
      console.log(e.target.value)
    }

   
   handleSubmit=(e) => 
   {

        e.preventDefault();

       register(this.state)
       .then(token => window.location = '/verify')
       
       .catch(err => {
        console.log(err.message)

            this.setState({
              errorMessage: err.message,
                firstName:'',
                lastName:'',
                userName: '',
                password: '',
                phoneNumber:'',
                gender:'MALE',
                dateOfBirth:'',
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
                                  role="form"
                                  data-toggle="validator"
                                  onSubmit={this.handleSubmit}
                                  
                                
                              >
                              <div className="icon-box mb-0 p-0">
                                <a href="#" className={`icon icon-bordered icon-rounded icon-sm ${styleClass} mb-0`}>
                                  <i className="pe-7s-users"></i>
                                </a> 
                                  <h4 className="text-gray pt-10 mt-0 mb-30">{t('Register Now')}</h4>
                              </div>
                             

                              <p className="error-message"> {t(this.state.errorMessage)} </p>                             
                             
                              <div className="row">
                                <div className="form-group col-md-6">
                                  <label for="firs-name">{t('First Name')}</label>

                                  <input
                                      id="firs-name" 
                                      name="firstName" 
                                      className="form-control" 
                                      type="text"
                                      required
                                      onChange = {this.handleChange}
                                      value = {this.state.firstName}
                                      
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
                                        value = {this.state.lastName}
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
                                      value = {this.state.userName}
                                      
                                      required 
                                      
                                    />
                                   <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group col-md-6">
                                                <label for="" className="float-left">{t('Gender')}</label>
                                                <select 
                                                className="form-control float-right" 
                                                name ="gender" 
                                                value ={this.state.gender} 
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
                                      onChange = {this.handleChange}
                                      value ={this.state.phoneNumber} 
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
                                      value ={this.state.dateOfBirth} 
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
                                      value ={this.state.password}
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
                                        placeholder="Confirm"
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
