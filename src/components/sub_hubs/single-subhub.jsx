
import React ,{Component }  from 'react';
import address from '../utils/address';
import axios from 'axios';
import i18n from 'i18next'
import  {withTranslation}  from 'react-i18next'
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link } from 'react-router-dom'



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
    return (

          <div className="container">
            <div className="row mtli-row-clearfix">
              <div className="col-sm-12 col-md-10 col-md-offset-1">
                <div className="causes bg-white maxwidth500 mb-30">
                  <div className="thumb" style={{maxWidth :'945px' , maxHeight :'500px' , border:'1px solid lightgray'}}>
                    <img src={subhub.imageUrl} alt="" className="img-responsive"/>
                  </div>
               
                  <div className="causes-details clearfix p-15 pt-10 pb-10">
                    <h5 className="font-weight-600 font-16">{subhub.name}</h5>
                      <p>{subhub.description}</p> 
                  </div>
                </div>
                <h3 class="mt-0 line-bottom">{t('Projects')}</h3>
                   <br/>
              
              
                
              
        <div className="row">
            {projects.map(project => (        


            <div className="col-md-4" key ={project.id}>
            <Link to={'/single-projects/'+project.id}>
                <div className="causes bg-white mb-30">
                  <div className="thumb" style = {{width: '390px', height: '260px'}}>
                  <img src={project.imageUrl}  className="img-fullwidth img-responsive"  />
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
            <div className="causes-details clearfix p-15 pt-15 pb-15">
                <ul className="list-inline font-18 font-weight-600 clearfix mb-5">
                  <li className="pull-left font-weight-400 text-black-333 pr-0"><span className="text-theme-colored font-weight-700">{t('Raised')}{project.raised} SDG</span></li>
                  <li className="pull-right font-weight-400 text-black-333 pr-0"><span className="text-theme-colored font-weight-700">{t('Goal')}{project.goal} SDG</span></li>
                </ul>
                  <h4 className="text-uppercase">{project.name}</h4>
                <div className="progress-item mt-0">
                  <div className="progress mb-0">
                    <div data-percent={project.donationProgress} className="progress-bar"><span className="percent"></span></div>
                  </div>
                </div>
                <p className="mt-20">{project.description}</p>

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
           </div>

         )
}

    } export default withTranslation()(SingleSubhub)