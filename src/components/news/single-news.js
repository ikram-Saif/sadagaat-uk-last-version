import React, { Component } from "react";
import address from "../utils/address";
import axios from "axios";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Header from "../sub_page_header";
import SocialMedia from "../social media/social-media";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";


class SinglNews extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      newsImages : [],
    };
  }

  async componentDidMount() {
    let id = this.props.match.params.news_id;

    try {
      const { data: news } = await axios.get(`${address()}news/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      this.setState({ news,newsImages:news.images });
    } catch (error) {
      console.log("can not load news for the home page slider");
    }
  }
  async componentWillReceiveProps() {
    let id = this.props.match.params.news_id;

    try {
      const { data: news } = await axios.get(`${address()}news/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      this.setState({ news });
    } catch (error) {
      console.log("can not load news for the home page slider");
    }
  }

  render() {
    const { t } = this.props;
    const { news } = this.state;
    const news_images = this.state.newsImages
    const newsHasImages = news_images.length > 0? true : false
    console.log(newsHasImages)


    return (
      <div>
        <Header name={t("News")} />

        <section>
          <div className="container mt-30 mb-30 pt-30 pb-30">
            <div class="row">
              <div class="col-md-6">
                <div class="blog-posts single-post">
                  <article class="post clearfix mb-0">
                    <div class="entry-header">
                     {newsHasImages? 
                     (<Carousel  
                          slidesPerScroll={1}
                          autoPlay={6000}
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
                          }} >

                  {news_images.map((image) =>(
                            <div
                              class="post-thumb thumb"
                              style={{ mxaHeight: "500px" }} >
                              <img
                                src={`${address()}news/${image.name}/image`}
                                className="img-fullwidth img-responsive"
                                alt=""
                                style = {{height:'400px'}}
                              />
                            </div>
                        ))
                  }
                        
                            </Carousel>):
                            (
                               <div
                                class="post-thumb thumb"
                                style={{ mxaHeight: "500px" }} >
                                <img
                                  src={`${address()}news/${news.id}/image`}
                                  className="img-fullwidth img-responsive"
                                  alt=""
                                  style = {{height:'400px'}}
                                />
                              </div>
                            )
                      } 
                    

                    </div>
                    </article>
                    </div>
                    </div>
                    <div class="col-md-6">

                    <div class="entry-content">
                      <div class="entry-meta media no-bg no-border mt-15 pb-20">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h2 class="line-bottom mt-0">{news.name}</h2>

                            <h4 className="mt-0 mb-0 text-theme-colored">
                              {news.startDate}
                            </h4>
                          </div>
                        </div>
                      </div>

                      <p className="mb-15">{news.description}.</p>

                        {/* <SocialMedia /> */}
                   
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default withTranslation()(SinglNews);
