import React, { Component } from "react";
import axios from "axios";
import i18n from "i18next";
import { address } from "../utils/address";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import image1 from "../../components/images/image1.jpg";
import  {withTranslation}  from 'react-i18next'
import {Link} from 'react-router-dom'


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
        .catch((res) => console.warn("Wrong Methos"));
    } catch (error) {
      console.log("Something went wrong");
    }
  }

  render() {
    const {t} = this.props
    const {projects} = this.state
    return (
      <React.Fragment>
        <section id="causes" class="bg-silver-light">
          <div class="container">
            <div class="section-title text-center">
              <div class="row">
                <div class="col-md-10 col-md-offset-1">
                  <h2 class="text-uppercase line-bottom-center mt-0">
                    {t('Our')}{" "}
                    <span class="text-theme-colored font-weight-600">
                      {t('Projects')}
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
                    arrows: true,
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
                  <div class="item" key={project.id}>
                    <div class="causes bg-white maxwidth500 mb-30">
                      <div class="thumb">
                        <img
                          src={project.imageUrl}
                          alt="alt"
                          class="img-fullwidth"
                          width="240"
                          height="240"
                        />
                      </div>
                      <div class="donation-progress mt-4 ml-4 text-center align-items">
                        {project.donationProgress}
                      </div>
                      <div class="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                        <ul class="list-inline font-20 font-weight-600 clearfix mb-5">
                          <li class="pull-left font-weight-400 text-black-333 pr-0">
                            Raised:{" "}
                            <span class="text-theme-colored font-weight-700">
                              {project.raised} SDG
                            </span>
                          </li>
                          <li class="pull-right font-weight-400 text-black-333 pr-0">
                            Goal:{" "}
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
                              data-percent={project.projectProgress}
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
                          to={"/project/"+project.id}
                          class="btn btn-default btn-theme-colored btn-xs font-16 mt-10"
                        >
                          {t('Donate')}
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
