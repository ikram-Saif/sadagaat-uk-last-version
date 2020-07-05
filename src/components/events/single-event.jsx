import React, { Component } from "react";
import Header from '../sub_page_header';
import address from "../utils/address";
import axios from "axios";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import SocialMedia from '../social media/social-media'


class SinglEvent extends Component {
  constructor() {
    super();
    this.state = {
      event: [],
    };
  }

  async componentDidMount () {
    let id = this.props.match.params.event_id;
    console.log(this.props.match.params.event_id);

    await axios
      .get(`${address()}events/${id}`, {
        headers: { "accept-language": `${i18n.language}` }
      })

      .then((response) => {
        const event = response.data;
        console.log(event)
        this.setState({ event });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  async componentWillReceiveProps(){
    let id = this.state.event.id

    axios
      .get(`${address()}events/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      })

      .then((response) => {
        const event = response.data;
        this.setState({ event });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    const { t } = this.props;
    const event = this.state.event;
    return (

 <div class="main-content">

    <Header name={t("Events")}/>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
              <h2 class="text-theme-colored ">{event.name}</h2>


                <p>{event.description}</p>
          </div>
          <div class="col-md-4">
            <ul>
              <li>
                <h4>{t('Topic')}:</h4>
                <p>{event.name}</p>
              </li>
              <li>
                <h4>{t('Start Date')}:</h4>
                    <p>{event.startDate}</p>
              </li>
              <li>
                <h4>{t('End Date')}:</h4>
                    <p>{event.endDate}</p>
              </li>
              <li>
                <h4>{t('Location')}:</h4>
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
     
    )
  }
}
export default withTranslation()(SinglEvent);
