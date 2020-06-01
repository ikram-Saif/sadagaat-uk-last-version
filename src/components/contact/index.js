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
          alertClass:'',
          iconClass:''
        }
    }

    const {t} = this.props
  }

  // componentDidMount() {
  //   axios.get(`${address()}/contactUsInfos`, {headers: {'accept-language': `${i18n.language}`}})
  //       .then(response => {
  //         console.log(response.data);
  //         this.setState({
  //          contactInfo:{
  //           links: response.data,
  //          }

  //         });

  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  // }
   
   
   handleChange = (e)=> 
   {
      this.setState({
        form:{
          ...this.state.form,
        [e.target.name]: e.target.value
        }
      
      
    }
        )
      //console.log(e.target.value)
    }

   
   handleSubmit = (e) => 
   {
        e.preventDefault();
        //console.log(this.state.form)
    
       const {t} = this.props
      

         axios.post(`${address()}feedBacks`,

        { fullName:this.state.form.name,
          email:this.state.form.email,
          message:this.state.form.message
        })
        .then(response => {
            this.setState({
              response:{
                ...this.state.response,
                responseMessage :'your request submitted successfully',
                alertClass:"success-msg",
                iconClass:"fa fa-check",
              }
            });
            scroll.scrollTo();
            document.getElementById('contact_form').reset()

        }).catch(error => {
                this.setState({
                  response:{
                    ...this.state.response,
                    responseMessage : error.message,
                    alertClass:"error-msg",
                    iconClass:"fa fa-times-circle",
                  }
            });
            scroll.scrollTo();

    });

    }
   
   render(){
      const {t} = this.props
      const mapUrl = i18n.dir() ==='rtl'?
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1921.6539280914353!2d32.54498805807791!3d15.575192081993727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e91da784579c7%3A0x5c0c21eeb61695d5!2z2YXZhti42YXYqSDYtdiv2YLYp9iqINin2YTYrtmK2LHZitip!5e0!3m2!1sar!2s!4v1589980879108!5m2!1sar!2s"
      :
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.308792782386!2d32.542087414371004!3d15.57514198918783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e91da784579c7%3A0x5c0c21eeb61695d5!2z2YXZhti42YXYqSDYtdiv2YLYp9iqINin2YTYrtmK2LHZitip!5e0!3m2!1sen!2s!4v1590012628658!5m2!1sen!2s"
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
                  
                  <span  className="media-left pull-left flip"> 
                    <i className="pe-7s-map-2 text-theme-colored"></i>
                  </span>
                    <div className="media-body">
                      <h5 className="mt-0">{t('Our Office Location')}</h5>
                      <p>{t('Ammarat 27 st , Khartoum Sudan')}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="icon-box media bg-deep p-30 mb-20">
                     <span className="media-left pull-left flip"> 
                      <i className="pe-7s-call text-theme-colored"></i>
                     </span>
                    <div className="media-body">
                      <h5 className="mt-0">{t('Contact Number')}</h5>
                      <p>0910010077</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="icon-box media bg-deep p-30 mb-20">
                     <span className="media-left pull-left flip"> 
                      <i className="pe-7s-mail text-theme-colored"></i>
                     </span>
                    <div className="media-body">
                      <h5 className="mt-0">{t('Email Address')}</h5>
                      <p>info@sadagaat.com</p>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="icon-box media bg-deep p-30 mb-20"> 
                  <span className="media-left pull-left flip"> 
                    <i className="fa fa-globe text-theme-colored" ></i>
                  </span>
                    <div className="media-body">
                      <h5 className="mt-0">{t('Website')}</h5>
                      <p>www.sadagaat.com </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <h3 className="line-bottom mt-0 mb-30">{t('Get in Touch')}</h3>
              
              {/* Contact Form */}
              
              <form 
                  id="contact_form"
                  name="contact_form"
                  role="form"
                  onSubmit={this.handleSubmit}
                  >

        <div className ={`${this.state.response.alertClass}`}> 
        <i className = {this.state.response.iconClass}></i>
          {t(this.state.response.responseMessage)}</div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">

                      <label>{t('name')}<small>*</small></label>

                      <input 
                          name="name" 
                          className="form-control" 
                          type="text" 
                          placeholder={t("full_name" )}
                          onChange = {this.handleChange}
                          pattern = '^[^\s].+[^\s]$'
                          required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>{t('E-Mail')}<small>*</small></label>

                      <input 
                          name="email"
                          className="form-control required email"
                          type="email" 
                          placeholder={t("Enter Email" )}
                          onChange = {this.handleChange}
                          data-error={t("that email address is invalid")}
                          pattern = '^[^\s].+[^\s]$'
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
                          placeholder={t("Enter Subject")}
                          onChange = {this.handleChange}
                          pattern = '^[^\s].+[^\s]$'
                          required

                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>{t('Phone')}</label>

                      <input 
                        name="phone" 
                        className="form-control" 
                        type="tel" 
                        placeholder={t("Enter Phone" )}
                        pattern="[0-9]+"
                        onChange = {this.handleChange}
                        // title = ''
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
                    placeholder={t("contact_message" )}
                    defaultValue={""} 
                    onChange = {this.handleChange}
                    pattern = '^[^\s].+[^\s]$'
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
            <div className="mapouter"><div className="gmap_canvas">
              <iframe width={600} height={500} id="gmap_canvas"
                src={mapUrl}
                frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} ></iframe>
               {/* <a href="https://www.embedgooglemap.net">embedgooglemap.net</a> */}
               </div>
               {/* <style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:400px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:100%;}" }} /> */}
               </div>

            
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
  