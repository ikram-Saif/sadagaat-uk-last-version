import React,{Component} from 'react';
import { login , email_verify} from '../../repository';
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'




class Password_verfy_code extends Component{

  constructor() {
    super();
    this.state = {
                  code: "",
                  verify_code:true
                }
    
}
   
 
   
   handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }


   
   handleSubmit = (e) => {
    e.preventDefault();

    email_verify(this.state)
   // .then( token => window.location = '/login')
   .then(response => response.message == true? 
            this.setState({verify_code: true})
            :this.setState({verify_code: false})
            )
            this.state.verify_code?(window.location = '/reset_password'):(window.location = '/verify_password_code')
    
 
    .catch(err =>alert(err));
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
                          <h3 className="font-28 text-white">Register</h3>
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
                            <h4 className="text-gray mt-0 pt-5">{t('Enter Verification Code')}</h4>

                            <form  
                                    data-toggle="validator" role="form"
                                     name="login-form" 
                                    className="clearfix" 
                                    onSubmit ={this.handleSubmit}>

                              <div className="row">
                                <div className="form-group col-md-12">

                                  <input 
                                    id="inputCode" 
                                    name="code" 
                                    className= {this.state.verify_code?'form-control ':'form-control has-feedback '}
                                     type="text"
                                     data-error="code not match"
                                      onChange = {this.handleChange} required
                                      
                                      />

                                </div>
                                
                               </div>
                                
   
                              <div className="form-group mt-10">
                                <button type="submit" className="btn btn-block text-white btn-theme-green btn-lg">Verify</button>
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

export default withTranslation()(Password_verfy_code);