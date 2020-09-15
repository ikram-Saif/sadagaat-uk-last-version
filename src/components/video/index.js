import React from "react";
import { useTranslation } from "react-i18next";

const Video = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section
        className="divider parallax layer-overlay overlay-dark-9 bg-img"
        data-parallax-ratio="0.7"
      >
        <div className="display-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <a
                    href="https://www.youtube.com/watch?v=JI-1UEwo-tg"
                    target="blank"
                  >
                    <i className="fa fa-play-circle text-theme-colored font-72" />
                  </a>
                  <p className="font-20 text-white">
                    {t("video text")}
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Video;
