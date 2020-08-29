import React ,{ useState, useEffect, Component }  from 'react';
import Header from '../sub_page_header'
import address from './../utils/address';
import axios from 'axios';
import { render } from '@testing-library/react';
import i18n from 'i18next'
import  {withTranslation}  from 'react-i18next'
import DonationTable from './DonationTable'

/**
 * This component display donation page  when you click button on the home page 
 * @see http://sadagaat-uk.org/donate
 * @component
 */
class Donate extends Component {

  constructor(props) {
    super(props);
    this.state = 
    {
      id:null,        
      amount: "",
      currency:"SDG",
      message:'',
      iconClass:'',
      styleClass:'',
      loading: false,
      hubs:[],
      render: false,

    }
}
/**
 * Get hub list from API
 */
   async componentDidMount () {

     await axios.get(`${address()}hubs`, {headers: {'accept-language': `${i18n.language}`}})
        .then(response => {
          const hubs = response.data
          this.setState({hubs})

          })

      
        .catch(error => {
          console.log(error);
        })
        setTimeout(function() { 
          this.setState({render: true}) }.bind(this), 10)

  }
  /** 
   * Get hub when language cahangeed
   */
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

/**
 * 
 * @param {object} e event of input field
 * @param {String} message  message custom validation message 
 */
  handleFormErrorMessage =(e,message = '')=>{
    const {t} = this.props
  
    if (e.target.value === '' && message ==='')
    
    e.target.setCustomValidity(t('select a hub from the list'))
    else
    e.target.setCustomValidity(message)
      
    }

    handleChange=(e)=>{
    
      this.setState({
        [e.target.name]:e.target.value,
      })
  }

       handleSubmite =(e)=>{
            e.preventDefault()
            const id = this.state.id

          const data = {
              hid : id ,
              amount:this.state.amount,
              currency:this.state.currency
            }
            this.setState({loading:true})
          axios.post(`${address()}donate`,data)


     /** syber bay payment feedback */

          .then(response =>{

            if (response.data.responseCode === 1)
            {
                window.location = response.data.paymentUrl

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
                })
              } else
              {
                this.setState(
                  {
                    message :"something went wrong try again later",
                    iconClass:'fa fa-times-circle',
                    styleClass:'error-msg',
                    donateTo:'Sadagaat', 
                  })

              }
            
              }) .catch(err => {
                this.setState({loading:true })

                let message;

                if (err.message === 'Network Error')
                  message = 'Network Error'
                  else 
                  message = 'something went wrong try again later'
                  setTimeout(() => {
                        this.setState({ loading: false,
                                        message:message,
                                        iconClass:'fa fa-times-circle',
                                        styleClass:'error-msg'
                                      });
                      }, 2000)
                  })
   
  }
  

   render(){
    let renderContainer = false
     const{t}= this.props
     const loading  = this.state.loading;


    return (

    <div>
      <Header name={t('Donate')}/>

      <section>
        <div class="container">
          <div class="section-content">
            
                    <DonationTable />


            </div>
          </div>
        </section>

             </div>
    )
}
}

export default withTranslation()(Donate);
