
import React ,{Component }  from 'react';
import address from '../utils/address';
import axios from 'axios';
import i18n from 'i18next'
import  {withTranslation}  from 'react-i18next'



class SingleSubhub extends Component {

  constructor() {
    super();
    this.state = 
    {
      subhub:[]
      }
}

async componentDidMount(){

    let id = this.props.match.params.subhub_id

    await axios.get(`${address()}subHubs/${id}`,{headers: {'accept-language': `${i18n.language}`}})

    .then(response => {

         const subhub = response.data
          this.setState({subhub})

    }).catch(error => {
        alert(error.message)
    })
  
}
async componentWillReceiveProps(){

  let id = this.props.match.params.subhub_id

  await axios.get(`${address()}subHubs/${id}`,{headers: {'accept-language': `${i18n.language}`}})

  .then(response => {

       const subhub = response.data
        this.setState({subhub})

  }).catch(error => {
      alert(error.message)
  })

}

render(){
  const {t} = this.props
  const {subhub} = this.state
    return (

          <div className="container">
            <div className="row mtli-row-clearfix">
              <div className="col-sm-12 col-md-10 col-md-offset-1">
                <div className="causes bg-white maxwidth500 mb-30">
                  <div className="thumb" style={{width :'945px' , height :'600px' , border:'1px solid gray'}}>
                    <img src={subhub.imageUrl} alt="" className="img-fullwidth"/>
                  </div>
                  {/* <div className="progress-item mt-0">
                    <div className="progress mb-0">
                      <div data-percent="84" className="progress-bar"><span className="percent">0</span></div>
                    </div>
                  </div> */}
                  <div className="causes-details clearfix p-15 pt-10 pb-10">
                    <h5 className="font-weight-600 font-16">{subhub.name}</h5>
                      <p>{subhub.description}</p> 
                    {/* <ul className="list-inline project-conditions mt-20 text-center bg-theme-colored-transparent-1 m-0 p-10">
                      <li className="target-fund text-center text-theme-colored float-left"><strong>Target: $120,000</strong></li>
                    <li className="day text-theme-colored"><i className="flaticon-charity-hand-holding-a-heart font-30 "></i></li> 
                      <li className="raised text-center"><strong className="text-center">Raised: $65,000</strong></li>
                    </ul> */}
                  </div>
                </div>
                {/* <div className="event-details">
                  <p className="mb-20 mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? Libero saepe perspiciatis accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupiditate. Repudiandae provident, consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut eum perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.</p>
                  <div className="pull-left flip mr-15">
                    <img alt="" src="http://placehold.it/370x235"/>
                  </div>
                  <div className="">
                    <p className="font-14 text-black-light"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nequep aliquid suscipit voluptas ab temporibus, animi impedit ipsum, sunt rem sed ut quod quas earum inventore expedita consectetur.</em></p>
                    <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? Libero saepe perspic reiciendis iusto et cupiditate. Repudiandae provident, consectetur, sapiente, libero iure necessitatibus corporis nulla sit voluptate, quisquam aut eum perspiciatis? Fugiat labore aspernatur </p>
                  </div>
                  <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? Libero saepe perspiciatis accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupiditate. Repudiandae provident, consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut eum perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem tempora omnis optio odio autem asperiores quae maiores ea eveniet cupiditate aut repellendus? Quo iure explicabo quam reprehenderit ipsam sequi. Perferendis esse iure ullam, illum, quibusdam corporis nobis dolores unde dolorem ipsa quaerat suscipit. 
                  </p>
                </div>
                <div className="event-details">
                  <p className="mb-20 mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? Libero saepe perspiciatis accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupiditate. Repudiandae provident, consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut eum perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.</p>
                  <div className="pull-left flip mr-15">
                    <img alt="Some alt" src="http://placehold.it/370x235"/>
                  </div>
                  <div className="">
                    <p className="font-14 text-black-light"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nequep aliquid suscipit voluptas ab temporibus, animi impedit ipsum, sunt rem sed ut quod quas earum inventore expedita consectetur.</em></p>
                    <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? Libero saepe perspic reiciendis iusto et cupiditate. Repudiandae provident, consectetur, sapiente, libero iure necessitatibus corporis nulla sit voluptate, quisquam aut eum perspiciatis? Fugiat labore aspernatur </p>
                  </div>
                  <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? Libero saepe perspiciatis accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupiditate. Repudiandae provident, consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut eum perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem tempora omnis optio odio autem asperiores quae maiores ea eveniet cupiditate aut repellendus? Quo iure explicabo quam reprehenderit ipsam sequi. Perferendis esse iure ullam, illum, quibusdam corporis nobis dolores unde dolorem ipsa quaerat suscipit. 
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="sidebar sidebar-right mt-sm-30">

                </div> */}
              </div> 
            </div>
          </div>)
}

    } export default withTranslation()(SingleSubhub)