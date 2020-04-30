import React, { useRef, useState, useEffect } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom";
import address from "./../utils/address";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import {getMonthName} from './getMonthName'

function Event() {
  const [news, setNews] = useState([]);
  const [events, setEvent] = useState([]);
  const didMountRef = useRef(true);
  const style = i18n.dir() === "rtl" ? "pl-0" : "pr-0"
  const styleMr = i18n.dir() === "rtl" ? " ml-5" : " mr-5"

  
 
  const { t } = useTranslation();

  useEffect(() => {
      fetchNews();
      fetcEvents();
  }
 , []);

  async function fetchNews() {
    const fetcher = await window.fetch(`${address()}news`, {
      headers: { "accept-language": `${i18n.language}` },
    });
    const response = await fetcher.json();
    setNews(response.slice(-3));
    console.log(response);
  }

  async function fetcEvents() {
    const fetcher = await window.fetch(`${address()}events`, {
      headers: { "accept-language": `${i18n.language}` },
    });
    const response = await fetcher.json();
    setEvent(response.slice(-3));
    console.log(response);
  }

  return (
    <section>
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3 className="text-uppercase title line-bottom mt-0 mb-30">
                {t("Upcoming")}{" "}
                <span className="text-theme-colored">{t("Events")}</span>
              </h3>

              {events.map((event) => (
                <div
                  className="event media sm-maxwidth400 border-bottom mt-5 mb-0 pt-10 pb-15"
                  key={event.id}
                >
                  <div className="row">
                    <div className = {`col-xs-2 col-md-3 ${style}`}>
                      <div className="event-date text-center bg-theme-colored border-1px p-0 pt-10 pb-10 sm-custom-style">
                        <ul>
                          <li className="font-28 text-white font-weight-700">
                            
                            {event.startDate.slice(8,10)}
                          </li>
                          <li className="font-18 text-white  font-weight-700 text-center text-uppercase">
                          {/* {event.startDate.slice(0,4)} */}
                            {getMonthName(event.startDate)}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Link to={"/event/" + event.id}>
                      <div className="col-xs-9 pr-10 pl-10">
                        <div className="event-content mt-10 p-5 pb-0 pt-0">
                          <h5 className="media-heading font-16 font-weight-600">
                            <p>{event.name}</p>
                          </h5>
                          <ul className="list-inline font-weight-600 text-gray-dimgray">
                            <li>
                              <i className={`fa fa-calendar ${styleMr} text-theme-colored`} />
                              {`${event.startDate}`}
                            </li>
                            <li>
                              {"  "}
                              <i className={`fa fa-map-marker text-theme-colored ${styleMr}`} />
                              {event.locationName}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-xs-12 col-sm-6 col-md-8">
              <h2 class="line-bottom border-bottom mt-0">
                {" "}
                {t("Latest")}
                <span className="text-theme-colored"> {t("News")} </span>
              </h2>

              <div className="event media sm-maxwidth400 border-bottom mt-5 mb-0 pt-10 pb-15">
                <div className="row">
                  <Carousel autoPlay={5000} stopAutoPlayOnHover rtl dots>
                    {news.map((news_) => (
                      <div className="causes" key={news_.id}>
                        <div className="row-fluid">
                          <div className="col-md-5">
                            <img
                              src={news_.imageUrl}
                              alt="News"
                              height="250px"
                              // width="250px"
                            />
                          </div>
                          <div className="col-md-7">
                            <h2 className="line-bottom mt-0">{news_.name}</h2>
                            <h4 className="mt-0 mb-0 text-theme-colored">
                              {news.imageUrl}
                            </h4>
                            <p>{news.description}</p>
                            <Link
                              className="btn btn-theme-colored btn-sm"
                              to="/news"
                            >
                              {t("Read More")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Event;
