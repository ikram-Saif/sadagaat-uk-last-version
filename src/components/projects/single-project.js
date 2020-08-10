import React, { Component } from "react";
import address from "../utils/address";
import axios from "axios";
import i18n from "i18next";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { withTranslation } from "react-i18next";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {Link} from 'react-router-dom'
  import {getNumberWithComma , Precision} from '../events/getMonthName'


class SinglProject extends Component {
 
  constructor() {
    super();
    this.state = {
      project: [],
    };
  }

  async componentDidMount (){
    let id = this.props.match.params.project_id;

    try {
      const { data: project } = await axios.get(`${address()}projects/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      this.setState({ project });
    } catch (error) {
      console.log("can not load project for the home page slider");
    }
  }
  async componentWillReceiveProps(){
    let id = this.props.match.params.project_id;


    try {
      const { data: project } = await axios.get(`${address()}projects/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      this.setState({ project });
    } catch (error) {
      console.log("can not load project for the home page slider");
    }
  }

  render() {
    const { t } = this.props;
    const {project} = this.state;
    console.log(project)
    const dProgress = project.donationProgress
    
    return (
      <div className="container">
        <div className="row mtli-row-clearfix">

                 
          <div className="col-sm-12 col-md-10 col-md-offset-1">
            <div className="causes bg-white maxwidth500 mb-30">
            {/* <Carousel 
                  autoPlay={5000}
                  stopAutoPlayOnHover
                    rtl 
                    dots
                    arrowLeft={
                      <i
                        className="fa fa-chevron-right fa-2x"
                        style={{ margin: "5px" }}
                      />
                    }
                    arrowRight={
                      <i
                        className="fa fa-chevron-left fa-2x"
                        style={{ margin: "5px" }}
                      />
                    }
                    addArrowClickHandler
            > */}

              <div className="thumb">
                <img src={`${address()}projects/${project.id}/image`} alt="" className="img-fullwidth" width='945'height='532' />

              </div>
              {/* <div className="thumb" style = {{width:'900px', height:'500px'}}>
                <img src={project.secondImageUrl} alt="" className="img-fullwidth"  width='900px'height='500px'/>

              </div>
              <div className="thumb" style = {{width:'900px', height:'500px'}}>
                <img src={project.thirdImageUrl} alt="" className="img-fullwidth" />

              </div>
              </Carousel> */}


              <div
                        style={{
                          width: "7%",
                          left: "8%",
                          top: "8px",
                          position: "absolute",
                          overflow:'hidden',
                          rotation: 1 / 2 + 1 / 8,
                        }}
                      >
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
                            //textColor: "white",
                            backgroundColor: "#066993",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                            //trailColor: "",
                            //backgroundColor: '',
                          })}
                        />
                      </div>
              <div className="progress-item mt-0">
                <div className="progress mb-0">
                  <div data-percent = {project.donationProgress} 
                        className="progress-bar">
                          
                    <span className="percent">{project.donationProgress}</span>
                    </div>
                </div>
              </div>
              <div className="causes-details clearfix  border-bottom-theme-color-1px p-15 pt-10 pb-10">
                <h5 className="font-weight-600 font-16">{project.name}</h5>
                <p>{project.description}</p>
               
                <div>
                <strong classNam = "font-weight-600"><i className= "fa fa-map-marker  m-5"></i> </strong>
                <span classNam = "font-weight-600 text-gray-dimgray">{project.locationName}</span>
               
                </div>
                <ul className="list-inline project-conditions mt-20 text-center bg-theme-colored-transparent-1 m-0 p-10">
                  <li className="target-fund text-center text-theme-colored float-left">
                    <strong>
                      {t("Goal:")} { getNumberWithComma(project.goal)}
                    </strong>
                    
                  </li>
                  {/* <li className="day text-theme-colored"><i className="flaticon-charity-hand-holding-a-heart font-30 "></i></li>  */}
                  <li className="raised text-center">
                    <strong className="text-center">
                      {t("Raised")} { getNumberWithComma(project.raised)}
                    </strong>
                  </li>
                  
                  <Link
                      className="btn btn-default btn-theme-colored btn-xs font-16 mt-10"
                      style  = {{alignItems:'center'}}
                      to= {'/projects/'+project.id}
                      >
                        {t('donate')}
               
                </Link> 
                </ul>
                
            
                {/* <div className = 'text-center'>
              <Link
               className="btn btn-default btn-theme-colored btn-s  font-16 mt-10"
               style  = {{alignItems:'center'}}
               to= {'/projects/'+project.id}
               >
                {t('donate')}
               
                </Link>
                </div> */}
              </div>
            </div>
    
            
          </div>
        
        </div>
      </div>
    );
  }
}
export default withTranslation()(SinglProject);
