import React, { Component } from "react";
import address from "../utils/address";
import axios from "axios";
import i18n from "i18next";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { withTranslation } from "react-i18next";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {Link} from 'react-router-dom'
import work from "../images/work.jpg";


class SinglProject2 extends Component {
 
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
    const { project } = this.state;
    // console.log(project)
    const dProgress = project.donationProgress
    console.log(dProgress)
    return (
      <div className="container">
        <div className="row">
          <div className = 'section-content'>
          <div className="col-xs-12 col-sm-6 col-md-12">
              <h2 >

              </h2>

              <div className="border-bottom mt-5 mb-0 pt-10 pb-15">
                <div className="row">
                   
                      <div className="causes">
                        <div className="row-fluid">
                          <div className="col-md-6">
                          {/* <div class="owl-carousel-1col owl-dots-bottom-right">
                              <div class="causes">
                                <img
                              src={work}
                              alt="News"
                              // height="250px"
                              // width="250px"
                            />
                            </div>
                            </div> */}
                          <Carousel autoPlay={2000}  rtl>
                            <div className ="post-thumb thumb" style = {{mxaHeight:"600px"}}>
                            <img
                              src={project.imageUrl}
                              alt="project image"
                               width="500"
                              className= 'img-responsive'
                            />
                            </div>
                            {/* <div className ="post-thumb thumb" style = {{mxaHeight:"600px"}}>

                            <img
                              src={work}
                              alt="News"
                              // height="250px"
                              // width="250px"
                              className= 'img-responsive'
                            />
                            </div> */}
                            
                             </Carousel>
                             

               <div
                        style={{
                          width: "12%",
                          left: "10%",
                          right:'10%',
                          top: "3%",
                          position: "absolute",
                          rotation: 1 / 2 + 1 / 8,
                          overflow:'hidden',
                          marginButtom:'100px'
                        }}
                      >
                        <CircularProgressbar
                          value={project.projectProgress}
                          text={`${project.projectProgress}%`}
                          background
                          backgroundPadding={4}
                          styles={buildStyles({
                            // strokeLinecap: "butt",

                            rotation: 1,
                            textSize: "20",
                            pathTransitionDuration: 0.3,
                            backgroundColor: "#066993",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                           
                          })}
                        />
                      </div> 
                            

                          </div>
                          <div class="col-md-6">
                                
                                <h2 class="line-bottom mt-0">{project.name}</h2>
                                <h5 class="font-weight-600 text-gray-dimgray">
                                 
                                  <i className= "fa fa-map-marker m-5"></i>

                                  <span className = "">{project.locationName}</span></h5>

                                  {/* <span classNam = "font-weight-600 text-gray-dimgray">Khartoum</span> */}
                                  <p>{project.description}</p>
                                  <div className="progress-item mt-0">
                                      <div className="progress mb-0">
                                        <div
                                        className="progress-bar"
                                          data-percent={project.donationProgress}
                                          
                                          
                                        >
                                          <span className="percent">
                                          {project.donationProgress}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                <div class="mt-10 mb-20">
                                  <ul class="list-inline clearfix mt-10">
                                    <li class="pull-left flip pr-0"> {t("Raised")} <span class="font-weight-700 font-">{project.raised} SDG</span></li>
                                    <li class="text-theme-colored pull-right flip pr-0">{t("Goal")} <span class="font-weight-700">{project.goal} SDG</span></li>
                                  </ul>
                                </div>
                                <Link to= {'/projects/'+project.id} class="btn btn-theme-colored btn-sm">{t('Donate Now')}</Link>
                              </div>
           
                        </div>
                      </div>
              
                </div>
           
              </div>
            </div>

                 
        
            
          </div>
        
        </div>
      </div>
    );
  }
}
export default withTranslation()(SinglProject2);
