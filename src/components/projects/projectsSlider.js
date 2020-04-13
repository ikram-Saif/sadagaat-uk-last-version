import React, { Component } from "react";
import axios from "axios";
import i18n from "i18next";
import { address } from "../utils/address";
import image1 from "../../components/images/image1.jpg";
import image2 from "../../components/images/image2.jpg";
import image3 from "../../components/images/image3.jpg";
import image4 from "../../components/images/image4.jpg";

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
    const { projects } = this.state;
    const {t} = this.props
    return (
      <React.Fragment>
        <section id="causes" class="bg-silver-light">
          <div class="container">
            <div class="section-title text-center">
              <div class="row">
                <div class="col-md-10 col-md-offset-1">
                  <h2 class="text-uppercase line-bottom-center mt-0">
                    Our{" "}
                    <span class="text-theme-colored font-weight-600">
                      Projects
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
              <div class="owl-carousel-3col">
                {/* {projects.map((project) => ( */}
                <div class="item">
                  <div class="causes bg-white maxwidth500 mb-30">
                    <div class="thumb">
                      <img
                        src={image1}
                        alt="alt"
                        class="img-fullwidth"
                        width="320"
                        height="240"
                      />
                    </div>
                    <div class="donation-progress">83</div>
                    <div class="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                      <ul class="list-inline font-20 font-weight-600 clearfix mb-5">
                        <li class="pull-left font-weight-400 text-black-333 pr-0">
                          Raised:{" "}
                          <span class="text-theme-colored font-weight-700">
                            24000 SDG
                          </span>
                        </li>
                        <li class="pull-right font-weight-400 text-black-333 pr-0">
                          Goal:{" "}
                          <span class="text-theme-colored font-weight-700">
                            40000 SDG
                          </span>
                        </li>
                      </ul>
                      <h4 class="text-uppercase">
                        <a href="#">Water Well</a>
                      </h4>
                      <div class="progress-item mt-0">
                        <div class="progress mb-0">
                          <div data-percent="68" class="progress-bar">
                            <span class="percent">68</span>
                          </div>
                        </div>
                      </div>
                      <p class="mt-20">Kurdufan Water well to feed the poor</p>
                      <a
                        href="#"
                        class="btn btn-default btn-theme-colored btn-xs font-16 mt-10"
                      >
                        Donate
                      </a>
                    </div>
                  </div>
                </div>
                {/* ))} */}
                <div class="item">
                  <div class="causes bg-white maxwidth500 mb-30">
                    <div class="thumb">
                      <img
                        src={image2}
                        alt="alt"
                        class="img-fullwidth"
                        width="320"
                        height="240"
                      />
                    </div>
                    <div class="donation-progress">100</div>
                    <div class="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                      <ul class="list-inline font-20 font-weight-600 clearfix mb-5">
                        <li class="pull-left font-weight-400 text-black-333 pr-0">
                          Raised:{" "}
                          <span class="text-theme-colored font-weight-700">
                            56000 SDG
                          </span>
                        </li>
                        <li class="pull-right font-weight-400 text-black-333 pr-0">
                          Goal:{" "}
                          <span class="text-theme-colored font-weight-700">
                            56000 SDG
                          </span>
                        </li>
                      </ul>
                      <h4 class="text-uppercase">
                        <a href="#">Ramadan Bag</a>
                      </h4>
                      <div class="progress-item mt-0">
                        <div class="progress mb-0">
                          <div data-percent="100" class="progress-bar">
                            <span class="percent">100</span>
                          </div>
                        </div>
                      </div>
                      <p class="mt-20">
                        A bag of neccessary food and supplies for ramadan to be
                        distributed to poor families.
                      </p>
                      <a
                        href="#"
                        class="btn btn-default btn-theme-colored btn-xs font-16 mt-10"
                      >
                        Donate
                      </a>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div class="item">
                  <div class="causes bg-white maxwidth500 mb-30">
                    <div class="thumb">
                      <img
                        src={image3}
                        alt="alt"
                        class="img-fullwidth"
                        width="320"
                        height="240"
                      />
                    </div>
                    <div class="donation-progress">90</div>
                    <div class="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                      <ul class="list-inline font-20 font-weight-600 clearfix mb-5">
                        <li class="pull-left font-weight-400 text-black-333 pr-0">
                          Raised:{" "}
                          <span class="text-theme-colored font-weight-700">
                            45000 SDG
                          </span>
                        </li>
                        <li class="pull-right font-weight-400 text-black-333 pr-0">
                          Goal:{" "}
                          <span class="text-theme-colored font-weight-700">
                            83000 SDG
                          </span>
                        </li>
                      </ul>
                      <h4 class="text-uppercase">
                        <a href="#">omdurman city Garden</a>
                      </h4>
                      <div class="progress-item mt-0">
                        <div class="progress mb-0">
                          <div data-percent="74" class="progress-bar">
                            <span class="percent">74</span>
                          </div>
                        </div>
                      </div>
                      <p class="mt-20">Planting green gardens in Omdurman</p>
                      <a
                        href="#"
                        class="btn btn-default btn-theme-colored btn-xs font-16 mt-10"
                      >
                        Donate
                      </a>
                    </div>
                  </div>
                </div>

                {/*  */}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default  ProjectSlider;
