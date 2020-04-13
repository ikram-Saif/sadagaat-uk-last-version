import React, { Component } from "react";
import axios from "axios";
import i18n from "i18next";
import { address } from "../utils/address";


class EventSlider extends Component {
  state = { events: [] };
  async componentDidMount() {
    try {
      axios
        .get(`${address()}events`, {
          headers: { "accept-language": `${i18n.language}` },
        })
        .then((response) => this.setState({ events: response.data }));
    } catch (error) {
      console.log("Something went wrong");
    }
  }
  render() {
    return (
      <div class="owl-carousel-1col owl-dots-bottom-right">
        <div class="causes">
          <div class="row-fluid">
            <div class="col-md-6">
              <img src="http://placehold.it/450x500" alt="Event Name" />
            </div>
            <div class="col-md-6">
              <h2 class="line-bottom mt-0">Sadagaat event 2</h2>
              <h4 class="mt-0 mb-0 text-theme-colored">27 FEB 2020</h4>
              <p>
                A solid event aimed to educate children on the haazards of
                dangerous animals
              </p>
              {/* <a class="btn btn-theme-colored btn-sm" href="#">
                Read More
              </a> */}
            </div>
          </div>
        </div>
        <div class="causes">
          <div class="row-fluid">
            <div class="col-md-5">
              <img src="http://placehold.it/450x500" alt="Event Name" />
            </div>
            <div class="col-md-7">
              <h2 class="line-bottom mt-0">First Event</h2>
              <h4 class="mt-0 mb-0 text-theme-colored">14 AUG 2020</h4>
              <p>
                Highlighting the common misconsiptions about sadagaat
                organization and it's it role in the society
              </p>
              {/* <a class="btn btn-theme-colored btn-sm" href="#">
                Read More
              </a> */}
            </div>
          </div>
        </div>
        <div class="causes">
          <div class="row-fluid">
            <div class="col-md-5">
              <img src="http://placehold.it/450x500" alt="Event Name" />
            </div>
            <div class="col-md-7">
              <h2 class="line-bottom mt-0">Third Event</h2>
              <h4 class="mt-0 mb-0 text-theme-colored">14 AUG 2020</h4>
              <p>
                Demonstrating the right way of protecting yourself and your
                loved ones from the COVID-19 virus
              </p>
              {/* <a class="btn btn-theme-colored btn-sm" href="#">
                Read More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventSlider;
