import React, { Component } from "react";
import address from "../utils/address";
import axios from "axios";
import i18n from "i18next";
import { withTranslation } from "react-i18next";

class SinglEvent extends Component {
  constructor() {
    super();
    this.state = {
      event: [],
    };
  }

  componentDidMount = () => {
    let id = this.props.match.params.project_id;
    console.log(this.props.match.params.project_id);

    axios
      .get(`${address()}events/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      })

      .then((response) => {
        const {event} = response.data;
        this.setState({ event });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

//   componentDidMount = () => {
//     let id = this.state.event.id

//     axios
//       .get(`${address()}events/${id}`, {
//         headers: { "accept-language": `${i18n.language}` },
//       })

//       .then((response) => {
//         const event = response.data;
//         this.setState({ event });
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }

  render() {
    const { t } = this.props;
    const {event} = this.state.event;
    return (

        <div class="main-content">

    <section class="inner-header divider parallax layer-overlay overlay-dark-6" data-bg-img="images/slide-1.jpg">
      <div class="container pt-60 pb-60">
      
        <div class="section-content">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="font-28 text-white">{event.name}</h3>
            </div>
          </div>
        </div>
      </div>      
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
              <h2 class="text-theme-colored">{event.name}</h2>

              <img 
              src={event.imageUrl}
              alt="" 
               />
          </div>
          <div class="col-md-4 mt-60">
            <ul>
              <li>
                <h4>{t('Topic')}:</h4>
                <p>{event.name}</p>
              </li>
              <li>
                <h4>{t('Event Date')}:</h4>
                    <p>{event.startDate}</p>
              </li>
              <li>
                <h4>{('Host')}:</h4>
                    <p>{event.endDate}</p>
              </li>
              <li>
                <h4>{('Location')}:</h4>
                <p>{event.location}</p>
              </li>
              <li>
                <h4>{t('Event Time:')}</h4>
                {/* <p>6 pm - 8 pm</p> */}
              </li>
              <li>
                <h5></h5>
                <div class="styled-icons icon-dark icon-theme-colored icon-sm icon-circled">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-60">
          <div class="col-md-8">
            <h3 class="mt-0 text-theme-colored">{t('Event Description')}</h3>
                <p>{event.descreption}</p>
          </div>
         
        </div>
        
      </div>
    </section>


  </div>
     
    )
  }
}
export default withTranslation()(SinglEvent);
