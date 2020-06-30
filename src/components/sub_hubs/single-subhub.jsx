
import React ,{Component }  from 'react';
import address from '../utils/address';
import axios from 'axios';
import i18n from 'i18next'
import  {withTranslation}  from 'react-i18next'
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link } from 'react-router-dom'
import {getNumberWithComma} from '../events/getMonthName'



class SingleSubhub extends Component {

  constructor() {
    super();
    this.state = 
    {
      subhub:[],
      projects:[]
      }
}

async componentDidMount(){

    let id = this.props.match.params.subhub_id

    await axios.get(`${address()}subHubs/${id}`,{headers: {'accept-language': `${i18n.language}`}})

    .then(response => {

         const subhub = response.data
          this.setState({subhub})

    }).catch(error => {
        // alert(error.message)
    })

    await axios.get(`${address()}subHubs/${id}/projects`,{headers: {'accept-language': `${i18n.language}`}})

    .then(response => {

         const projects = response.data
          this.setState({projects})

    }).catch(error => {
        // alert(error.message)
    })
  
}

  async componentWillReceiveProps(){

  let id = this.props.match.params.subhub_id

    await axios.get(`${address()}subHubs/${id}`,{headers: {'accept-language': `${i18n.language}`}})

    .then(response => {

         const subhub = response.data
          this.setState({subhub})

    }).catch(error => {
        // alert(error.message)
    })

    await axios.get(`${address()}subHubs/${id}/projects`,{headers: {'accept-language': `${i18n.language}`}})

    .then(response => {

         const projects = response.data
          this.setState({projects})

    }).catch(error => {
        // alert(error.message)
    })

}

render(){
  const {t} = this.props
  const {subhub} = this.state
  const {projects} = this.state
  const totalDonation = subhub.total_donation
  console.log(totalDonation)
    return (

      <div className="container">
      <div className="row multi-row-clearfix">
      <div className = 'section-content'>
            <div className="col-xs-12 col-sm-6 col-md-12">
                <h2 >
  
                </h2>
  
                <div className="event media sm-maxwidth400 border-bottom mt-5 mb-0 pt-10 pb-15">
                  <div className="row">
                     
                        <div className="causes">
                          <div className="row-fluid">
                            <div className="col-md-6">
                        
                              <div className ="post-thumb thumb" style = {{mxaHeight:"600px"}}>
                              <img
                                className= 'img-responsive'
                                src={subhub.imageUrl}
                                alt="subhub image"
                                 style= {{height:'400px',
                                width:'500px'}}
                                
                              />
                              </div>
                         
                               
                              
  
                            </div>
                            <div class="causes-details col-md-6">
                                  
                                  <h2 class="line-bottom mt-0">{subhub.name}</h2>
                                   
  
                                    <p>{subhub.description}</p>
                                    
                                    <div class="mt-10 mb-20">
                                    <ul class="list-inline clearfix mt-10">
                                      {/* <li class="text-theme-colored pull-left flip pr-0 font-weight-700 font-14"> 
                                      {t("Total Donation")}: 
                                       <span> {subhub.total_donation}</span></li> */}
                                      <li class="text-theme-colored pull-right flip pr-0">
                                        
                                      </li>
                                    </ul>
                                  </div>
                                  <Link to= {'/sub_hubs/'+subhub.id}
                                   class="btn btn-theme-colored btn-sm">{t('Donate Now')}</Link>
                                </div>
             
                          </div>
                        </div>
                
                  </div>
             
                </div>
              </div>
  
                   
          
              
            </div>
          
        
       
    </div>
     <br />
              
                
              
     <div className="row multi-row-clearfix">
          <div className="blog-posts">
          <h3 class="mt-10 line-bottom">{t('Projects')}</h3>
          <br/>

            {projects.map(project => (        


            <div className="col-md-4" key ={project.id} style = {{width:'400px'}}>
            <Link to={'/single-projects/'+project.id}>
                <div className="causes bg-white mb-30">
                  <div className="thumb" 
                  style = {{ maxHeight: '260px'}}>
                  <img src={`${address()}projects/${project.id}/image`}  className="img-fullwidth img-responsive"  />
                  </div>
              
              <div style={{maxWidth: "15%", left:"25px", top:"8px", position: "absolute", rotation: 1 / 2 + 1 / 8}}>

              <CircularProgressbar
                value={project.projectProgress}
                text={`${project.projectProgress}%`}
                background
                backgroundPadding={6}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "butt",
                      textSize: "26",
                      pathTransitionDuration: 0.5,
                      backgroundColor: "#066993",
                      textColor: "#fff",
                      pathColor: "#fff",
                      trailColor: "transparent"

                    })}
              />  
              
            </div>
            <div className="causes-details clearfix p-10 pt-15 pb-15">
                <ul className="list-inline font-14 font-weight-600 clearfix mb-5">
                  <li className="pull-left font-weight-400 text-black-333 pr-0">
                    <span className="text-theme-colored font-weight-700">
                      {t('Raised')}{ getNumberWithComma(project.raised)}
                    </span>
                  </li>
                  <li className="pull-right font-weight-400 text-black-333 pr-0">
                    <span className="text-theme-colored font-weight-700">
                      {t('Goal')}{ getNumberWithComma(project.goal)}
                      </span>
                  </li>
                </ul>
                  <h4 className="text-uppercase">{project.name}</h4>
                <div className="progress-item mt-0">
                  <div className="progress mb-0">
                    <div data-percent={project.donationProgress} className="progress-bar"><span className="percent"></span></div>
                  </div>
                </div>
                <p className="mt-20 project-discription">{project.description}</p>

                <Link to={'/projects/'+project.id} className="btn btn-default btn-theme-colored btn-xs font-16 mt-10">{t('Donate')}</Link>
              </div>
              
            </div>
            </Link>
            </div>
            ))
           }
             </div>
             </div> 
             </div>

         )
}

    } export default withTranslation()(SingleSubhub)