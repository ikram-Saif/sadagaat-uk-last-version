import React, { Component } from "react";
import axios from "axios";
import i18n from "i18next";
import { address } from "../utils/address";
import Carousel from "@brainhubeu/react-carousel";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

class ProjectSlider extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  async componentDidMount() {
    try {
      const { data: projects } = await axios.get(`${address()}projects/home`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      this.setState({ projects });
    } catch (error) {
      console.log("Something went wrong");
    }
  }

  // async componentDidUpdate() {
  //   try {
  //     axios
  //       .get(`${address()}projects`, {
  //         headers: { "accept-language": `${i18n.language}` },
  //       })
  //       .then((response) => this.setState({ projects: response.data }))
  //       .catch((res) =>
  //         console.warn("execution failed with status " + res.status)
  //       );
  //   } catch (error) {
  //     console.log("Something went wrong");
  //   }
  // }

  render() {
    const { t } = this.props;
    const { projects } = this.state;
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
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem autem voluptatem obcaecati! <br />
                    ipsum dolor sit Rem autem voluptatem obcaecati
                  </p> */}
                </div>
              </div>
            </div>
            <div className="row multi-row-clearfix">
              {/* <div className="owl-carousel-3col"> */}
              <Carousel
                slidesPerPage={3}
                slidesPerScroll={1}
                autoPlay={6000}
                margin={10}
                rtl
                // arrows = {<i style = {{backgroundColor :'red'}} /> }
                arrowLeft={
                  <i
                    className="fa fa-chevron-right fa-2x"
                    style={{ margin: "10px" }}
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
                  <div className="item ml-5" key={project.id}>
                    <div className="causes bg-white maxwidth500 mb-30">
                      <div className="thumb">
                        <Link to={"/single-projects/" + project.id}>
                          <img
                            src={project.imageUrl}
                            alt="alt"
                            className="img-fullwidth"
                            width="240"
                            height="320"
                          />
                        </Link>
                      </div>
                      {/* <div className="donation-progress mt-5 ml-5 text-center">
                        {project.donationProgress}
                      </div> */}

                      <div
                        style={{
                          width: "15%",
                          left: "25px",
                          top: "8px",
                          position: "absolute",
                          rotation: 1 / 2 + 1 / 8,
                        }}
                      >
                        <CircularProgressbar
                          value={project.projectProgress}
                          text={`${project.projectProgress}%`}
                          styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: "butt",
                            textSize: "26",
                            pathTransitionDuration: 0.5,
                            pathColor: `${project.id / 1000})`,
                            textColor: "white",
                            trailColor: "",
                            backgroundColor: "",
                          })}
                        />
                      </div>

                      <div className="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                        <ul className="list-inline font-20 font-weight-600 clearfix mb-5">
                          <li className="pull-left font-weight-400 text-black-333 pr-0">
                            {t("Raised")}{" "}
                            <span className="text-theme-colored font-weight-700">
                              {project.raised}
                            </span>
                          </li>
                          <li className="pull-right font-weight-400 text-black-333 pr-0">
                            {t("Goal")}{" "}
                            <span className="text-theme-colored font-weight-700">
                              {project.goal} SDG
                            </span>
                          </li>
                        </ul>
                        <h4 className="text-uppercase">
                          <a href="">{project.name}</a>
                        </h4>
                        <div className="progress-item mt-0">
                          <div className="progress mb-0">
                            <div
                              data-percent={project.donationProgress}
                              className="progress-bar"
                            >
                              <span className="percent">
                                {project.donationProgress}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="mt-20">{project.description}</p>
                        <Link
                          to={"/projects/" + project.id}
                          className="btn btn-default btn-theme-colored btn-xs font-16 mt-10"
                        >
                          {t("Donate")}
                        </Link>
                      </div>
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
