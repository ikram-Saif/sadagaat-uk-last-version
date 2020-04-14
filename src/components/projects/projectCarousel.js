import React, { Component } from "react";
import axios from "axios";
import i18n from "i18next";
import { address } from "../utils/address";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import image1 from "../../components/images/image1.jpg";
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
      axios
        .get(`${address()}projects`, {
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

  async componentDidUpdate() {
    try {
      axios
        .get(`${address()}projects`, {
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
    return (
      <React.Fragment>
        <section id="causes" class="bg-silver-light">
          <div class="container">
            <div class="section-title text-center">
              <div class="row">
                <div class="col-md-10 col-md-offset-1">
                  <h2 class="text-uppercase line-bottom-center mt-0">
                    {t("Our")}{" "}
                    <span class="text-theme-colored font-weight-600">
                      {t("Projects")}
                    </span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem autem voluptatem obcaecati! <br />
                    ipsum dolor sit Rem autem voluptatem obcaecati
                  </p>
                </div>
              </div>
            </div>
            <div class="row multi-row-clearfix">
              {/* <div class="owl-carousel-3col"> */}
              <Carousel
                slidesPerPage={3}
                slidesPerScroll={1}
                autoPlay={3000}
                margin={10}
                rtl
                arrows
                // animationSpeed={1000}
                infinite
                stopAutoPlayOnHover
                breakpoints={{
                  1000: {
                    // these props will be applied when screen width is less than 1000px
                    slidesPerPage: 1,
                    clickToChange: false,
                    centered: false,
                    arrows: true,
                    infinite: true,
                  },
                  500: {
                    slidesPerPage: 1,
                    slidesPerScroll: 1,
                    clickToChange: false,
                    centered: false,
                    animationSpeed: 2000,
                    infinite: true,
                  },
                }}
              >
                {projects.map((project) => (
                  <div class="item ml-5" key={project.id}>
                    <div class="causes bg-white maxwidth500 mb-30">
                      <div class="thumb">
                        <Link to = {'/single-projects/'+project.id}>
                        <img
                          src={project.imageUrl}
                          alt="alt"
                          class="img-fullwidth"
                          width="240"
                          height="320"
                        />
                        </Link>
                      </div>
                      {/* <div class="donation-progress mt-5 ml-5 text-center">
                        {project.donationProgress}
                      </div> */}
                    </div>

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

                    <div class="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                      <ul class="list-inline font-20 font-weight-600 clearfix mb-5">
                        <li class="pull-left font-weight-400 text-black-333 pr-0">
                          {t("Raised")}{" "}
                          <span class="text-theme-colored font-weight-700">
                            {project.raised}
                          </span>
                        </li>
                        <li class="pull-right font-weight-400 text-black-333 pr-0">
                          {t("Goal")}{" "}
                          <span class="text-theme-colored font-weight-700">
                            {project.goal} SDG
                          </span>
                        </li>
                      </ul>
                      <h4 class="text-uppercase">
                        <a href="">{project.name}</a>
                      </h4>
                      <div class="progress-item mt-0">
                        <div class="progress mb-0">
                          <div
                            data-percent={project.donationProgress}
                            class="progress-bar"
                          >
                            <span class="percent">
                              {project.projectProgress}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p class="mt-20">{project.description}</p>
                      <Link
                        to={'/projects/'+project.id}
                        class="btn btn-default btn-theme-colored btn-xs font-16 mt-10"
                      >
                        {t("Donate")}
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
