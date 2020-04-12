
import React ,{Component }  from 'react';
import address from '../utils/address';
import axios from 'axios';
import i18n from 'i18next'
import  {withTranslation}  from 'react-i18next'



class SinglProject extends Component {

  constructor() {
    super();
    this.state = 
    {
      project:[]
      }
}

componentDidMount=()=>{

    let id = this.props.match.params.project_id
    console.log(this.props.match.params.project_id) 
 

    axios.get(`${address()}projects/${id}`,{headers: {'accept-language': `${i18n.language}`}})

    .then(response => {

         const project = response.data
          this.setState({project})

    }).catch(error => {
        alert(error.message)
    })
  
}
render(){
  const {t} = this.props
   const project = this.state.project
return (

      <div className="container">
        <div className="row mtli-row-clearfix">
          <div className="col-sm-12 col-md-10 col-md-offset-1">
            <div className="causes bg-white maxwidth500 mb-30">
              <div className="thumb">
                <img src={project.imageUrl} alt="" className="img-fullwidth"/>
                <div className="donation-progress"></div>
              </div>
              <div className="progress-item mt-0">
                <div className="progress mb-0">
                  <div data-percent="84" className="progress-bar"><span className="percent">0</span></div>
                </div>
              </div>
              <div className="causes-details clearfix  border-bottom-theme-color-1px p-15 pt-10 pb-10">
                <h5 className="font-weight-600 font-16">{project.name}</h5>
                <p>{project.description}</p> 
                <ul className="list-inline project-conditions mt-20 text-center bg-theme-colored-transparent-1 m-0 p-10">
                  <li className="target-fund text-center text-theme-colored float-left"><strong>{t('Goal')} {project.goal}</strong></li>
                 {/* <li className="day text-theme-colored"><i className="flaticon-charity-hand-holding-a-heart font-30 "></i></li>  */}
                  <li className="raised text-center"><strong className="text-center">{t('Raised')} {project.DonationProgress}</strong></li>
                </ul>
              </div>
            </div>
            <div className="event-details">
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

            </div>
          </div> 
        </div>
      </div>)
}

    } export default withTranslation()(SinglProject)