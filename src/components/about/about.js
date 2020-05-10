import React from "react";
import Header from "../sub_page_header";
import Parteners from "../parteners";
import About_ from "../about/";
import donate from "../images/donate.jpg";
import i18n from 'i18next'


/*** translation backage */
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const pullStyle = i18n.dir() === 'rtl'? 'pull-right':'pull-left'
  const marginStyle = i18n.dir() === 'rtl'? 'mr-120':'ml-120'
  return (
    <div>
      <Header name={t("About Sadagaat")} />
      <About_ />
      <div>
        <section
          className="bg-img divider parallax layer-overlay overlay-theme-colored-8"
          // data-bg-img="images/slide-2.jpg"
        >
          <div className="container">
            <div className="row text-justify">
              <div className="col-md-6">
                <h2 className="text-white">{t("Our Vision")}</h2>
                <p className="text-white">{t("vision_message_1")}</p>
              </div>
              <div className="col-md-6">
                <h2 className="text-white">{t("Our Mission")}</h2>
                <p className="text-white">{t("mission_message_1")}</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-md-9">
                  <h3 className="text-uppercase font-28 letter-space-3">
                    {t("Our")}{" "}
                    <span className="text-theme-colored">
                      {t("Objectives")}
                    </span>
                  </h3>
                  <div className="row">
                    <div className="col-md-12">
                      <p>{t("objective_message_1")}</p>
                      <p>{t("objective_message_2")}</p>
                      <p>{t("objective_message_3")}</p>
                      <p>{t("objective_message_4")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumb">
                    <img
                      src={donate}
                      className="img-fullwidth img-responsive"
                      alt="objectives"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="facts bg-silver-light">
          <div className="container pt-0 pb-0">
            <div className="section-title text-center">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <h2 className="text-uppercase line-bottom-center mt-0">
                    {t("Facts")}{" "}
                    <span className="text-theme-colored font-weight-600">
                      {t("and")}{" "}
                    </span>
                    {t("Figuers")}
                  </h2>
                  {/* <div class="title-icon">
                    <i class="flaticon-charity-hand-holding-a-heart"></i>
                  </div> */}
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem autem voluptatem obcaecati! <br />
                    ipsum dolor sit Rem autem voluptatem obcaecati
                  </p> */}
                </div>
              </div>
            </div>
            <div className="row mt-40">
              <div className="col-md-3">
                <div className="icon-box p-0">
                  <span className= {`icon icon-circled mb-0 mr-0 ${pullStyle} icon-lg`} style = {{width:0 , hieght: 0}}>
                    <i className="flaticon-charity-responsible-use-of-water  text-theme-colored font-54" />
                  </span>
                  <div className={marginStyle}>
                    <h5 className="icon-box-title mt-15 mb-10 text-uppercase">
                      {t("Water")}
                    </h5>
                    <p className="text-gray">2000.000.000 SDG</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="icon-box p-0">
                  <span className={`icon icon-circled mb-0 mr-0 ${pullStyle} icon-lg`}  style = {{width:0 , hieght: 0}}>
                    <i className="flaticon-charity-food-donation text-theme-colored font-54" />
                  </span>
                  <div className={marginStyle}>
                    <h5 className="icon-box-title mt-15 mb-10 text-uppercase">
                      {t("Feeding")}
                    </h5>
                    <p className="text-gray">2000.000.000 SDG</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="icon-box p-0">
                  <span className={`icon icon-circled mb-0 mr-0 ${pullStyle} icon-lg`}  style = {{width:0 , hieght: 0}}>
                    <i className="flaticon-charity-person-inside-a-heart text-theme-colored font-54" />
                  </span>
                  <div className={marginStyle}>
                    <h5 className="icon-box-title mt-15 mb-10 text-uppercase">
                      {t("Health")}
                    </h5>
                    <p className="text-gray">2000.000.000 SDG</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="icon-box p-0">
                  <span className={`icon icon-circled mb-0 mr-0 ${pullStyle} icon-lg`}  style = {{width:0 , hieght: 0}}> 
                    <i className="flaticon-charity-shelter text-theme-colored font-54" />
                  </span>
                  <div className={marginStyle}>
                    <h5 className="icon-box-title mt-15 mb-10 text-uppercase">
                      {t("Education")}
                    </h5>
                    <p className="text-gray">2000.000.000 SDG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Parteners />
    </div>
  );
}
export default About;
