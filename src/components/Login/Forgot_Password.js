import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword , resetPassword} from '../../repository'


class ForgotPassword extends Component{

  constructor() {
    super();
    this.state = {
                  email: "",
                }
    
}
   
 
   
   handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }


   
   handleSubmit = (e) => {
    e.preventDefault();

    forgotPassword(this.state)
    .then(response => window.location = '/verify_password_code')
    .catch(err => alert(err));

    
     

   }
   
  
 
   render(){

  
    return(

        <div id="wrapper" className="clearfix">

              <div className="main-content">
              
                
                <section className="inner-header divider parallax layer-overlay overlay-dark-6" data-bg-img="./images/slide-1.jpg">
                  <div className="container pt-60 pb-60">
                
                    <div className="section-content">
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <h3 className="font-28 text-white">Login/Register</h3>
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
                            <h4 className="text-gray mt-0 pt-5"> Reset Password </h4>
                            <hr />

                            <form  
                                    data-toggle="validator"
                                    role="form" name="login-form" 
                                    className="clearfix" 
                                    onSubmit ={this.handleSubmit}>

                              <div className="row">
                                <div className="form-group col-md-12">
                                  <label for="inputEmail">Email</label>

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
                              <div className="form-group mt-10">
                                <button type="submit" className="btn btn-block text-white btn-theme-green btn-lg">reset</button>
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

export default ForgotPassword;