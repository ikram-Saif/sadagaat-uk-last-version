import React, {Component} from 'react';
import Header from '../sub_page_header'
import axios from 'axios'
import address from '../utils/address'
import {Link} from 'react-router-dom'
import {animateScroll as scroll } from "react-scroll";
import i18n from 'i18next'
import  {withTranslation}  from 'react-i18next'


class Contact extends Component{

  constructor(props) {
    super(props);
    this.state = { 

        form:{
              name:'',
              email:'',
              phone: '',
              subject: '',
              message:'',
        },
        contactInfo:{

        },
        response:{
          responseMessage:'',
          alertClass:''
        }
    }

    const {t} = this.props
  }

  componentDidMount() {
    axios.get(`${address()}/contactUsInfos`, {headers: {'accept-language': `${i18n.language}`}})
        .then(response => {
          console.log(response.data);
          this.setState({
           contactInfo:{
            links: response.data,
           }

          });

        })
        .catch(error => {
          console.log(error);
        });
  }
   
   
   handleChange = (e)=> 
   {
      this.setState({
        
      [e.target.name]: e.target.value
      
      
    }
        )
      console.log(e.target.value)
    }

   
   handleSubmit = (e) => 
   {
        e.preventDefault();
        console.log(this.state.form)
    
       const {t} = this.props
      

        axios.post(`${address()}feedBacks`,

        { fullName:this.state.form.name,
          email:this.state.form.email,
          message:this.state.form.message
        })
        .then(response => {
            this.setState({
              response:{
                responseMessage :'your request submitted successfully',
                alertClass:"success-message",
              }
            });
            scroll.scrollTo();

        }).catch(error => {
                this.setState({
                  response:{
                    responseMessage : error.message,
                  alertClass:"error-message",
                  }
            });
            scroll.scrollTo();

    });

    }
   
   render(){
      const {t} = this.props
    return (
      <div>
      <Header name={t("Contact Us")}/>

      <section className="divider">
        <div className="container">
          <div className="row pt-30">
            <div className="col-md-7">
              <div className="row">
                <h3 className="line-bottom mt-0 mb-50 ml-15">{t("Contact Us")}</h3>
              
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="icon-box media bg-deep p-30 mb-20"> 
                  
                  <Link  className="media-left pull-left flip" to="/"> 
                    <i className="pe-7s-map-2 text-theme-colored"></i>
                  </Link>
                    <div className="media-body">
                      <h5 className="mt-0">{t('Our Office Location')}</h5>
                      <p>#405, Lan Streen, USA</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="icon-box media bg-deep p-30 mb-20">
                     <Link className="media-left pull-left flip" to="/"> 
                      <i className="pe-7s-call text-theme-colored"></i>
                     </Link>
                    <div className="media-body">
                      <h5 className="mt-0">{t('Contact Number')}</h5>
                      <p>+325 12345 65478</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="icon-box media bg-deep p-30 mb-20">
                     <Link className="media-left pull-left flip" to="/"> 
                      <i className="pe-7s-mail text-theme-colored"></i>
                     </Link>
                    <div className="media-body">
                      <h5 className="mt-0">{t('Email Address')}</h5>
                      <p>info@sadagaat.ory</p>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="icon-box media bg-deep p-30 mb-20"> 
                  <Link className="media-left pull-left flip" to="/"> 
                    <i className="fa fa-skype text-theme-colored" ></i>
                  </Link>
                    <div className="media-body">
                      <h5 className="mt-0">{t('Make a Video Call')}</h5>
                      <p>ThemeMascotSkype</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <h3 className="line-bottom mt-0 mb-30">{t('Get in Touch')}</h3>
              <h5 className ={`${this.state.response.alertClass}`}> {t(this.state.response.responseMessage)}</h5>
              
              {/* Contact Form */}
              
              <form 
                  id="contact_form"
                  name="contact_form"
                  role="form"
                  data-toggle="validator"
                  onSubmit={this.handleSubmit}
                  >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">

                      <label>{t('name')}<small>*</small></label>

                      <input 
                          name="name" 
                          className="form-control" 
                          type="text" 
                          placeholder="Enter Name" 
                          onChange = {this.handleChange}
                          required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>{t('E-Mail')}<small>*</small></label>

                      <input 
                          name="email"
                          className="form-control required email"
                          type="email" 
                          placeholder="Enter Email" 
                          onChange = {this.handleChange}
                          required
                          
                        />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>{t('Subject')}<small>*</small></label>

                      <input 
                          name="subject" 
                          className="form-control required" 
                          type="text"
                          placeholder="Enter Subject"
                          onChange = {this.handleChange}

                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>{t('phone')}</label>

                      <input 
                        name="phone" 
                        className="form-control" 
                        type="tel" 
                        placeholder="Enter Phone" 
                       // pattern="[0-9]{14}"
                        onChange = {this.handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>{t('Message')}</label>

                  <textarea 
                    name="message"
                    className="form-control required" 
                    rows={5} 
                    placeholder="Enter Message" 
                    defaultValue={""} 
                    onChange = {this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input name="form_botcheck" className="form-control" type="hidden" defaultValue />
                  
                  <button type="submit" 
                  className="btn btn-dark btn-theme-colored btn-flat mr-5 ">
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    {t('Send your message')}
                 </button>
                </div>
              </form>
              {/* Contact Form Validation*/}
            </div>
          </div>
        </div>
      </section><section>
        <div className="container-fluid pt-0 pb-0">
          <div className="row">
            <div className="mapouter"><div className="gmap_canvas"><iframe width={600} height={500} id="gmap_canvas" src="https://maps.google.com/maps?q=khartoum&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:400px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:100%;}" }} /></div>
            {/* <div 
            id="map-canvas-multipointer"
            data-mapstyle="default"
            data-height="500"
            data-zoom="15"
            data-marker="images/map-marker.png">
          </div>
          
          */}
          </div>
        </div>
      </section>

      </div>  
  );
  }
}
  
  export default withTranslation()(Contact);
  