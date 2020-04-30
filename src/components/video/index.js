import React from "react";
import { useTranslation } from "react-i18next";

  const Video = ()=> {
  const { t } = useTranslation();

  return (
    <section
      className="bg-img divider parallax layer-overlay overlay-dark-9"
      data-bg-img="images/slide-1.jpg"
      data-parallax-ratio="0.7"
    >
      <div className="display-table">
        <div className="display-table-cell">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <a
                  href="https://www.youtube.com/watch?v=JI-1UEwo-tg"
                  // data-lightbox-gallery="youtube-video"
                  target="blank"
                >
                  <i className="fa fa-play-circle text-theme-colored font-72" />
                </a>
                <h2 className="text-white text-uppercase font-48 font-weight-700 mb-0">
                  {t("Let's have a")}{" "}
                  <span className="text-theme-colored">{t("video")}</span>{" "}
                  {t("Tour")}
                </h2>
                <p className="font-16 text-white">
                  {t(
                    "We provides always our best industrial solution for our clientsand always try to"
                  )}
                  <br /> {t("achieve our client  trust and satisfaction")}.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
