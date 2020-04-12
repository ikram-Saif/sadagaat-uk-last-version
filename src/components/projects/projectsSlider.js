// import React from 'react'



// function ProjectSlider({projects}){
//     return(

//     )
// }
// export default ProjectSlider



import React,{Component} from 'react';
import axios from "axios"
import i18n from 'i18next'
import {address} from '../utils/address'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { withTranslation } from 'react-i18next';


class ProjectSlider extends Component{

  constructor() {
    super();
    this.state = {
                  projects: [],
                }
    
}
   
async componentDidMount() {
    axios.get(`${address()}projects`,{headers: {'accept-language': `${i18n.language}`}}).then((response)=> (this.setState({projects : response.data}))).catch((res)=>(console.warn("Wrong Methos")))
}

  
 
   render(){

    const {projects } = this.state
    const {t} = this.props
    return(

        <React.Fragment>
        <section id="causes" class="bg-silver-light">
        <div class="container">
          <div class="section-title text-center">
            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                <h2 class="text-uppercase line-bottom-center mt-0">Our <span
                    class="text-theme-colored font-weight-600">Projects</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati! <br/>ipsum
                  dolor sit Rem autem voluptatem obcaecati</p>
              </div>
            </div>
          </div>
          <div class="row multi-row-clearfix">
            <div class="owl-carousel-3col">


{projects.map(project => (
 <div class="item" >
                <div class="causes bg-white maxwidth500 mb-30">
                  <div class="thumb">
                    <img src={project.imageUrl} alt="" class="img-fullwidth" width="320" height="240"/>
                  </div>
                  <div class="donation-progress">
                    
                  </div>
                  <div class="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                    <ul class="list-inline font-20 font-weight-600 clearfix mb-5">
                      <li class="pull-left font-weight-400 text-black-333 pr-0">{t('Raised')}:<span
                          class="text-theme-colored font-weight-700">SDG</span></li>
                      <li class="pull-right font-weight-400 text-black-333 pr-0">{t("Goal")}: <span
                          class="text-theme-colored font-weight-700">876 SDG</span></li>
                    </ul>
                    <h4 class="text-uppercase"><a href="#">98</a></h4>
                    <div class="progress-item mt-0">
                      <div class="progress mb-0">
                      <div data-percent="84" class="progress-bar"><span class="percent">87</span></div>
                      </div>
                    </div>
                    <p class="mt-20">kjkh</p>
                    <a href="#" class="btn btn-default btn-theme-colored btn-xs font-16 mt-10">{t('Donate')}</a>
                  </div>
                </div>
        </div>

))}
          
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>)
    
   }
}

export default withTranslation()(ProjectSlider);