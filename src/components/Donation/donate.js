import React ,{ useState, useEffect, Component }  from 'react';
import Header from '../sub_page_header'
import address from './../utils/address';
import axios from 'axios';
import { render } from '@testing-library/react';
import i18n from 'i18next'
import  {withTranslation}  from 'react-i18next'
import { donateTo } from '../../repository';
import DonationTable from './DonationTable'


class Donate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id:null,        
      donateTo: "Sadagaat",
      amount: "",
      currency:"SDG",
      message:'',
      iconClass:'',
      styleClass:'',
      loading: false,
      hubs:[],
                }
}

   async componentDidMount () {

     await axios.get(`${address()}hubs`, {headers: {'accept-language': `${i18n.language}`}})
        .then(response => {
          const hubs = response.data
          this.setState({hubs})
          })

      
        .catch(error => {
          console.log(error);
        })

    //     const {t} = this.props
    //     var htmlInput = document.getElementById("id");
    //     htmlInput.oninvalid = function(e) {
    //       e.target.setCustomValidity(t('Enter a valid amount'))
    // };
  }
  async componentWillReceiveProps(){

    axios.get(`${address()}hubs`, {headers: {'accept-language': `${i18n.language}`}})
        .then(response => {
          const hubs = response.data
          this.setState({hubs})
          })

      
        .catch(error => {
          console.log(error);
        })
  }



       handleChange=(e)=>{
       
          this.setState({
            [e.target.name]:e.target.value,
          })
      }
      
       handleSubmite =(e)=>{
            e.preventDefault()
            const id = this.state.id
            console.log(id)

          const data = {
              hid : id ,
              amount:this.state.amount,
              currency:this.state.currency
            }
            console.log(data)
            
          axios.post(`${address()}donate`,data)

     /** syber bay payment feedback */

          .then(response =>{

            if (response.data.responseCode === 1)
            {
                window.location = response.data.paymentUrl

                this.setState({loading:true})
                setTimeout(() => {
                  this.setState({ loading: false });
                }, 2000)

            } else if(response.data.responseCode === 2)
            {
              this.setState({

                  message :"Please Enter Valid Amount",
                  iconClass:'fa fa-times-circle',
                  styleClass:'error-msg',
                  donateTo:'Sadagaat', 
                  amount:'',
                })
              } else
              {
                this.setState(
                  {
                    message :"something went wrong try again later",
                    iconClass:'fa fa-times-circle',
                    styleClass:'error-msg',
                    donateTo:'Sadagaat', 
                    amount:'',
                  })

              }
            
              }) .catch(error => {
                this.setState({loading:true })
                  setTimeout(() => {
                        this.setState({ loading: false,
                                        message:error.message,
                                        iconClass:'fa fa-times-circle',
                                        styleClass:'error-msg'
                                      });
                      }, 2000)
                  })
   
  }
  

   render(){
     const{t}= this.props
     const loading  = this.state.loading;


    return (

    <div>
      <Header name={t('Donate')}/>

      <section>
        <div class="container">
          <div class="section-content">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-5">
               
                <h3 class="mt-0 line-bottom">{t('Donate Through Syber Pay')}<span class="font-weight-300"></span></h3>
                   <p className={this.state.styleClass}>
                     <i className ={this.state.iconClass} style = {{margin:'5px'}}>
                     </i>
                    {t(this.state.message)}
                   </p>
                  <form
                       //data-toggle="validator"
                        role="form"
                       id="popup_paypal_donate_form_onetime_recurring"
                       onSubmit = {this.handleSubmite}
                    >

                      <div className="row">
                       <div className="col-sm-12">
                        <div className="form-group mb-20">
                          <label><strong>{t('I Want to Donate for')}</strong></label>

                          <select    
                              name="id"
                              className="form-control"
                              onChange ={this.handleChange} 
                              required>

                              {this.state.hubs.map(hub =>
                              <option key={hub.id} value = {hub.id} >

                                {hub.name}
                                </option>
                              )}
                          </select>
                        </div>
                      </div>
                      </div>

                      <div className="row">
                   
                      <div className="col-sm-9">
                       <div className="form-group mb-20">
                          <label><strong>{t('How much do you want to donate?')}</strong></label>

                           <input
                               id = 'id'
                                name="amount" 
                                className="form-control"
                                type="number" 
                                min="1"
                                onChange ={this.handleChange}
                                onInvalid = {function(e) {
                                        e.target.setCustomValidity(t('Enter a valid amount'))}}
                                onInput={function(e) {
                                    e.target.setCustomValidity(t(''))}}
                                required
                               />
                               
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                     
                        <div className="col-sm-3">
                         <div className="form-group mb-20">
                              <label><strong> <br/> </strong></label>

                           <select
                                name="currency" 
                                className="form-control"
                                onChange ={this.handleChange}
                               >
                                 <option name ="currency">SDG</option>
                            </select>
                          </div>
                        </div>
                        </div>
                      

                      <div className="col-sm-12">
                        <div className="form-group">

                          <button type="submit" 
                            className="btn btn-flat btn-dark btn-theme-colored mt-10 pl-30 pr-30"
                            data-loading-text="Please wait...">
                               {loading && (
                                          <i
                                            className="fa fa-spinner fa-spin"
                                            style={{ margin: "5px" }}
                                          />
                                        )}
                              {t('Donate')} {t('Now!')}
                          </button>
                        </div>
                      </div>
                  </form>     
                </div>
                
                    <DonationTable />


              </div>
            </div>
          </div>
        </section>

             </div>
    )
}
}

export default withTranslation()(Donate);
