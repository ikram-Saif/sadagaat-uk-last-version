import React,{Component} from 'react';
import Header from '../sub_page_header';
import { login } from '../../repository';
import Registration from './Registration'
import { Link } from 'react-router-dom';
import  {withTranslation}  from 'react-i18next'
import i18n from 'i18next'


class Login extends Component{

  constructor() {
    super();
    this.state = {
                  email: "",
                  password: "",
                  loading:false,
                  success_reset:''
                  
                }                 
            }
   
            // componentDidMount(props){
            //   console.log("property_id",this.props.location.state.property_id)
            // }
   
   handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }


   
   handleSubmit = (e) => {
    e.preventDefault();
    
     login(this.state)
      .then(data =>{ 

        
        this.setState({loading:true})
        setTimeout(() => {
          this.setState({ loading: false });
        }, 2000)
        window.location = '/'
    
    })
    
    
    .catch(err =>{
      console.log(err.message)
      let message;
        if (err.message === 'Request failed with status code 500')
          message = 'username or Password not correct'
          else if (err.message === 'Network Error')
           message = 'Network Error'
           else 
           message = 'something went wrong try again later'
        this.setState({
          
          loading:true

        })
        setTimeout(() => {
          this.setState({ loading: false,
            errorMessage: message,
            iconClass:'fa fa-times-circle',
            styleClass:'error-msg',
            // email: "",
             password: ""
           });
        }, 2000)
      }
      );
    }
   
  
 
   render(){
    const {t} = this.props 
    const folat = i18n.dir()==='rtl'?'right':'left'
    const loading  = this.state.loading
    const message = this.props.location.state
    console.log(message)
  
    return(

        <div id="wrapper" className="clearfix">

          <Header name={t('Login/Register')}/>


              <div className="main-content">
                <section>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2">
                        <ul className="nav nav-tabs">
                          <li className="active" style = {{ float:`${folat}`}}>
                            <a href="#login-tab" data-toggle="tab">{t('Login')}
                            </a>
                            </li>
                          <li style = {{ float:`${folat}`}}>
                            <a href="#register-tab" data-toggle="tab">
                              {t('Register')}
                              </a>
                              </li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane fade in active p-15" id="login-tab">
                            <h4 className="text-gray mt-0 pt-5"> {t('Login')}</h4>
                            <hr />
                               <div className={this.state.styleClass}>
                                 <i className ={this.state.iconClass} style = {{margin:'5px'}}></i> 
                                     {t(this.state.errorMessage)}
                                </div>
                            <form  
                                    // data-toggle="validator"
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
                                     type="text"
                                     data-error={t("that email address is invalid")}
                                     pattern = '^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,8})(\.[a-z]{2,8})?$'
                                     title = {t("that email address is invalid")}                                      onChange = {this.handleChange} required 
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
                                   data-minlength="8"
                                   minlength="8" 
                                   value = {this.state.password}

                                    onChange = {this.handleChange}
                                     required/>
                                </div>

                              </div>
                              
                              <div className="form-group mt-10">
                                <button type="submit" 
                                className="btn btn-block text-white btn-theme-green btn-lg">
                                     {loading && (
                                          <i
                                            className="fa fa-spinner fa-spin"
                                            style={{ margin: "5px" }}
                                          />
                                        )}
                                  {t('Login')}
                                  </button>
                              </div>
                              <div className={`form-group clear pull-${folat} text-center p-5`}>
                                <Link 
                                  className="text-theme-colored font-weight-600 font-12" 
                                  to="/forgot_password">
                                    {t('Forgot Your Password')}
                                  </Link>
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
