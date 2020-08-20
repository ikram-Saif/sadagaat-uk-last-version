import React from "react";
import Header from "../sub_page_header";
import Parteners from "../parteners";
import About_ from "../about/";
// import donate from "../images/donate.jpg";
import i18n from 'i18next'


/*** translation backage */
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const pullStyle = i18n.dir() === 'rtl'? 'pull-right':'pull-left'
  const marginStyle = i18n.dir() === 'rtl'? 'mr-120':'ml-120'
  return (
    <React.Fragment>
      <Header name={t("About Sadagaat")} coverImage ={'about-bg-img'} />
      <About_ />
      <div>
        <section
          className="about-bg-img divider parallax layer-overlay overlay-theme-colored-8"
          // data-bg-img="images/slide-2.jpg"
        >
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4">
                <h2 className="text-white">{t("Our Vision")}</h2>
                <p className="text-white">{t("vision_message_1")}</p>
              </div>
              <div className="col-md-4">
                <h2 className="text-white">{t("Our Mission")}</h2>
                <p className="text-white">{t("mission_message_1")}</p>
              </div>
              <div className="col-md-4">
                <h2 className="text-white">{t("Our Values")}</h2>
                <p className="text-white">{t("our_values_description")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Parteners />
    </React.Fragment>
  );
}
export default About;
