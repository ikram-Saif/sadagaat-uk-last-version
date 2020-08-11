import React, { Component } from "react";
import Header from "../sub_page_header";
import address from "../utils/address";
import axios from "axios";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import SocialMedia from "../social media/social-media";
import testVideo from "../news/ROI Calculator for UX Solutions.mp4";
import ReactPlayer from 'react-player'



class SinglEvent extends Component {
  constructor() {
    super();
    this.state = {
      event: [],
      // eventImages: [],
      // eventVideos: [
      // ],
      allMedia: [],
    };
  }

  async componentDidMount() {
    let id = this.props.match.params.event_id;
    console.log(this.props.match.params.event_id);

    await axios
      .get(`${address()}events/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      })

      .then((response) => {
        const event = response.data;
        console.log(event);
        this.setState({ event });
        console.log(this.state.event.images);
        this.fillMediaArray();
      })
      .catch((error) => {
        console.log(error.message);
      });
   
  }

  async componentWillReceiveProps() {
    let id = this.state.event.id;

    axios
      .get(`${address()}events/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      })

      .then((response) => {
        const event = response.data;
        this.setState({ event });
        this.fillMediaArray();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  fillMediaArray = () => {
    const event_images = this.state.event.images;
    const event_videos = this.state.event.video;
    const allMedia = [];
    /**fill array with default Image  if event has image*/

  //   if (this.state.event.imageUrl !== null)
  //   {
  //     allMedia.push({
  //       type: "image",
  //       id: this.state.event.id,
  //       name: this.state.event.id,
  //     });
  // }

    if (event_images.length > 0) {
      event_images.map((image) => {
        allMedia.push({
          type: "image",
          id: image.id,
          name: image.name,
        });
      });
    }

    if (event_videos.length > 0) {
      event_videos.map((video) => {
        allMedia.push({
          type: "video",
          id: video.id,
          name: video.name,
        });
      });
    }
    this.setState({ allMedia });
    console.log(allMedia);
  };

  render() {
    const { t } = this.props;
    const event = this.state.event;
    const allMedia = this.state.allMedia;
    return (
      <div class="main-content">
        <Header name={t("Events")}  coverImage = 'events-bg-img'/>

        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-7">
                <h2 class="text-theme-colored ">{event.name}</h2>
                <div class="entry-header">
                  {allMedia.length > 0 ? (
                    <Carousel
                      slidesPerScroll={1}
                      rtl
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
                      {allMedia.map((media) =>
                        media.type === "image" ? (
                          <div
                            class="post-thumb thumb"
                            style={{ mxaHeight: "500px" }}
                          >
                            <img
                              src={`${address()}events/${media.name}/image`}
                              className="img-fullwidth img-responsive"
                              alt=""
                              style={{ height: "400px" }}
                            />
                          </div>
                        ) : (
                          <div>
                            <ReactPlayer 
                                      controls = {true}
                                      playIcon
                                      className="img-fullwidth img-responsive"
                                      //height='400px'
                                      //width = '500px'
                                      url = {`${address()}events/${media.name}/video`}
                                       />
                        </div>
                        )
                      )}
                    </Carousel>
                  ) : (
                    <div
                      class="post-thumb thumb"
                      style={{ mxaHeight: "500px" }}
                    >
                      <img
                        src={`${address()}events/${event.id}/image`}
                        className="img-fullwidth img-responsive"
                        alt=""
                        style={{ height: "400px" }}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div class="col-md-5">
                <ul>
                  <li>
                    <h4>{t("Topic")}:</h4>
                    <p>{event.name}</p>
                  </li>
                  <li>
                    <h4>{t("Description")}:</h4>
                    <p>{event.description}</p>
                  </li>
                  <li>
                    <h4>{t("Start Date")}:</h4>
                    <p>{event.startDate}</p>
                  </li>
                  <li>
                    <h4>{t("End Date")}:</h4>
                    <p>{event.endDate}</p>
                  </li>
                  <li>
                    <h4>{t("Location")}:</h4>
                    <p>{event.locationName}</p>
                  </li>

                  <li>
                    <h5></h5>
                    {/* < SocialMedia /> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default withTranslation()(SinglEvent);
