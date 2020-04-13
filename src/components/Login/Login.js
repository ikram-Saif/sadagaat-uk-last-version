import React,{Component} from 'react';
import { login } from '../../repository';
import Registration from './Registration'
import { Link } from 'react-router-dom';
import  {withTranslation}  from 'react-i18next'


class Login extends Component{

  constructor() {
    super();
    this.state = {
                  email: "",
                  password: "",
                  
                }                 

            }
   
   
   handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }


   
   handleSubmit = (e) => {
    e.preventDefault();
    
     login(this.state)
      .then(data => window.location = '/')
    //.then(token =>console.log(token))
    
    .catch(err =>{
      console.log(err.message)

        this.setState({
          errorMessage: err.message,
          email: "",
          password: "",

        })
      }
      );
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
                        <ul className="nav nav-tabs">
                          <li className="active"><a href="#login-tab" data-toggle="tab">{t('Login')}</a></li>
                          <li><a href="#register-tab" data-toggle="tab">{t('Register')}</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane fade in active p-15" id="login-tab">
                            <h4 className="text-gray mt-0 pt-5"> {t('Login')}</h4>
                            <hr />
                           
                                <p className="error-message">{t(this.state.errorMessage)}</p>
                            <form  
                                    data-toggle="validator"
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
                                     data-error="that email address is invalid"
                                      onChange = {this.handleChange} required 
                                      value = {this.state.email}
                                      />

                                    <div class="help-block with-errors"></div>
                                </div>
                               </div>
                                
                               
                              <div className="row">
                                <div className="form-group col-md-12">
                                    <label for="form_password">{t('password')}</label>
                                  <input id="form_password"
                                   name="password" 
                                   className="form-control" 
                                   type="password"
                                   data-minlength="6"
                                   value = {this.state.password}

                                    onChange = {this.handleChange}
                                     required/>
                                </div>

                              </div>
                              <div className="clear pull-right text-center pt-10">
                                <Link 
                                  className="text-theme-colored font-weight-600 font-12" 
                                  to="/forgot_password">
                                    {t('Forgot Your Password')}
                                  </Link>
                              </div>
                              <div className="form-group mt-10">
                                <button type="submit" 
                                className="btn btn-block text-white btn-theme-green btn-lg">
                                  {t('Login')}
                                  </button>
                              </div>
                            
                            </form>
                          </div>
                          <div className="tab-pane fade in p-15" id="register-tab">
                          <Registration />
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

export default withTranslation()(Login);
