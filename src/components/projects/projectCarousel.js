import React, { Component } from "react";
import axios from "axios";
import i18n from "i18next";
import { address } from "../utils/address";
import Carousel from "@brainhubeu/react-carousel";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {getNumberWithComma, getNumber,Precision} from '../events/getMonthName'
import parse from 'html-react-parser';



class ProjectSlider extends Component {
  constructor() {
    super();
    this.state = {
      projects:[],
    };
  }

  async componentDidMount() {
    try {
      const { data: projects } = await axios.get(`${address()}projects/home`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      this.setState({ projects });
    } catch (error) {
      console.log("can not load project for the home page slider");
    }
  }

  async componentWillReceiveProps(propos) {
    try {
      axios
        .get(`${address()}projects/home`, {
          headers: { "accept-language": `${i18n.language}` },
        })
        .then((response) => this.setState({ projects: response.data }))
        .catch((res) =>
          console.warn("execution failed with status " + res.status)
        );
    } catch (error) {
      console.log("Something went wrong");
    }
  }

  render() {
    const { t } = this.props;
    const { projects } = this.state;
    const projectProgressAlign = i18n.dir()==='rtl'?'right':'left'

    return (
      <React.Fragment>
        <section id="causes" className="bg-silver-light">
          <div className="container">
            <div className="section-title text-center">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <h2 className="text-uppercase line-bottom-center mt-0">
                    {t("Our")}{" "}
                    <span className="text-theme-colored font-weight-600">
                      {t("Projects")}
                    </span>
                  </h2>
               
                </div>
              </div>
            </div>
            <div className="row-fluid">
              <Carousel
              
                slidesPerPage={3}
                slidesPerScroll={1}
                autoPlay={6000}
                margin={10}
                rtl
                arrowLeft={
                  <i
                    className="fa fa-chevron-right fa-2x"
                    style={{ margin:"10px" }}
                  />
                }
                arrowRight={
                  <i
                    className="fa fa-chevron-left fa-2x"
                    style={{ margin: "10px" }}
                  />
                }
                addArrowClickHandler
                // animationSpeed={1000}
                infinite
                clickToChange
                centered
                breakpoints={{
                  1000: {
                    // these props will be applied when screen width is less than 1000px
                    slidesPerPage: 2,
                    clickToChange: false,
                    centered: false,

                    infinite: false,
                  },
                  500: {
                    slidesPerPage: 1,
                    slidesPerScroll: 1,
                    clickToChange: false,
                    centered: false,
                    animationSpeed: 2000,
                    infinite: false,
                  },
                }}
              >
                {projects.map((project) => (
                  <div className="item ml-5" key={project.id} >

                      <div className="causes bg-white mb-30" key={project.id}>
                      <Link to={'/single-projects/'+project.id}>
                        <div className="thumb" 
                        //style = {{ width:"500px"}}
                        >
                            <img
                              src={`${address()}projects/${project.id}/image`}
                              // alt="project picture"
                              className="img-fullwidth"
                              width="240"
                              height="320"
                            />
                        
                      </div>
                
                      {/* <div
                        style={{
                          width: "15%",
                          left: "25px",
                          right: "25px",
                          top: "8px",
                          position: "absolute",
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
                      </div> */}

                      <div className="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                        <ul className="list-inline font-16 font-weight-600 clearfix mb-5">
                          <li className="pull-left font-weight-700 text-black-333 pr-0">
                            {t("Raised")}
                            <span className="text-theme-colored font-weight-700">
                              { getNumber(project.raised)}
                            </span>
                          </li>
                          <li className="pull-right font-weight-700 text-black-333 pr-0">
                            {t("Goal")}
                            <span className="text-theme-colored font-weight-700">
                              { getNumber(project.goal)}
                            </span>
                          </li>
                        </ul>
                        <div className="progress-item mt-0">
                          <div className="progress">
                            <div
                              data-percent={Precision(project.donationProgress)}
                              className="progress-bar"
                            >
                                <span className="percent">
                                          {Precision(project.donationProgress)}%
                                          </span>
                            </div>
                          </div>
                        </div>
                       
                        <div className="progress-item mt-0">
                        <p className = "" style = {{textAlign:projectProgressAlign}}>{t('Project Progress')}</p>
                                <div className="progress">
                                  <div data-percent={Precision(project.projectProgress)} className="progress-bar">  
                                  <span className="percent">
                                      {Precision(project.projectProgress)}%
                                    </span>
                                  </div>
                                </div>
                              </div>
                        <h4 className="text-uppercase">
                          <a href="">{project.name}</a>
                        </h4>
                        
                        <p className="mt-20 project-discription">
                          {parse(project.description)}</p>

                        
                        <Link
                          to={"/projects/" + project.id}
                          className="btn btn-default btn-theme-colored btn-xs font-16 mt-10"
                          style = {{display:`
                            ${project.projectProgress === 100 || project.donationProgress >= 100?'none':''}`
                          }}
                        >
                          {t("Donate")}
                        </Link>
                      </div>
                      </Link>
                    </div>
                    
                  </div>
                ))}
              </Carousel>
              {/* </div> */}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ProjectSlider);
