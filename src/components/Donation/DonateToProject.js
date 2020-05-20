import React ,{ useState, useEffect, Component }  from 'react';
import Header from '../sub_page_header'
import address from '../utils/address';
import axios from 'axios';
import { render } from '@testing-library/react';
import i18n from 'i18next'
import  {withTranslation}  from 'react-i18next'



class DonateToProject extends Component {

  constructor() {
    super();
    this.state = 
    {
                  
      project_id: null,
      amount: 0,
      message:'',
      iconClass:'',
      styleClass:'',
      loading: false,
      currency:"SDG",
      project:[]
      }
}

 async componentDidMount (){

    let id = this.props.match.params.project_id
    console.log(this.props.match.params.project_id) 

    this.setState({project_id:id})
 
  // console.log('*********',i18n)
    await axios.get(`${address()}projects/${id}`,{headers: {'accept-language': `${i18n.language}`}})

    .then(response => {

         const project = response.data
          this.setState({project})

    }).catch(error => {
        alert(error.message)
    })
  
}

async componentWillReceiveProps(){

  let id = this.state.project_id

  axios.get(`${address()}projects/${id}`,{headers: {'accept-language': `${i18n.language}`}})

  .then(response => {

       const project = response.data
        this.setState({project})

  }).catch(error => {
      alert(error.message)
  })

}


  handleChange=(e)=>{
          this.setState({
            [e.target.name]:e.target.value
          })

      }

  handleSubmite =(e)=>{

        e.preventDefault()
            let id = this.state.project_id
            const data = 
            {
              pid :id,
              amount:this.state.amount,
              currency:this.state.currency
            }
          console.log(data)

          axios.post(`${address()}donate`,data)

          .then(response =>{
                  response.data.responseCode !== 1 ?
                      this.setState(
                        {
                          message :"network erorr please try again later",
                          iconClass:'fa fa-times-circle',
                          styleClass:'error-msg',
                          amount:''
                        }) :

                        window.location = response.data.paymentUrl

                        this.setState({loading:true})
                        setTimeout(() => {
                         this.setState({ loading: false });
                       }, 2000)
              
         
                /** syber bay payment feedback */

              }) .catch(error => {
                this.setState({ loading:true })

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
                  data-toggle="validator"
                  role="form"
                  id="popup_paypal_donate_form_onetime_recurring"
                  onSubmit = {this.handleSubmite}
                  >

                  <div className="row">
                    <div className="col-sm-12">
                    <div className="form-group mb-20">

                        <input
                              name="name" 
                              className="form-control"
                              type="readOnly" 
                              value = {this.state.project.name}
                              style = {{fontSize:'16px'}}
                              readonly
                            />
                      </div>
                    </div>
                   </div>
                     
                    <div className="row">
                    <div className="col-sm-9">
                    <div className="form-group mb-20">
                        <label><strong>{t('How much do you want to donate?')}</strong></label>

                        <input
                              name="amount" 
                              className="form-control"
                              type="number" 
                              min="1"
                              onChange ={this.handleChange}
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

            <div class="col-xs-12 col-sm-12 col-md-7">
                <h3 class="mt-0 line-bottom">{t('Donate Through Banks')}</h3>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>{t('Bank')}</th>
                        <th>{t('Branch')}</th>
                        <th>{t('Account No')}</th>
                        <th>{t('Account Name')}</th>
                      </tr>
                    </thead>
                        <tbody>
                          <tr>
                            <th scope="row">{t('Khartoum')}</th>
                            <td>{t('Riadh')}</td>
                            <td>1228765</td>
                            <td>{t('Sadagaat')}</td>
                          </tr>
                          <tr>
                            <th scope="row">Khartoum</th>
                            <td>Riadh</td>
                            <td>1228765</td>
                            <td>Sadagaat</td>
                          </tr>
                          <tr>
                            <th scope="row">Khartoum</th>
                            <td>Riadh</td>
                            <td>1228765</td>
                            <td>Sadagaat</td>
                          </tr>
                          <tr>
                            <th scope="row">Khartoum</th>
                            <td>Riadh</td>
                            <td>1228765</td>
                            <td>Sadagaat</td>
                          </tr>
                        </tbody>
                  </table>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>


             </div>
    )
}
}

export default withTranslation()(DonateToProject);
