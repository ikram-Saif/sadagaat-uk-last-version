import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useTranslation } from "react-i18next";
import sama from "../images/sama.png";
import soba from "../images/soba.png";
import sadagaat from "../images/sadagaat.png";

function Parteners() {
  const { t } = useTranslation();
  return (
    <section className="clients bg-light">
      <div className="container pt-0 pb-0">
        <div className="section-title text-center">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <h2 className="text-uppercase line-bottom-center mt-0">
                {t("Our")}{" "}
                <span className="text-theme-colored font-weight-600">
                  {t("Parteners")}
                </span>
              </h2>
              {/* <div class="title-icon">
                <i class="flaticon-charity-hand-holding-a-heart"></i>
              </div> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Carousel
              slidesPerPage={3}
              slidesPerScroll={1}
              autoPlay={3000}
              animationSpeed={1000}
              infinite
              rtl
              clickToChange
              centered
              breakpoints={{
                1000: {
                  // these props will be applied when screen width is less than 1000px
                  slidesPerPage: 2,
                  clickToChange: false,
                  centered: false,
                  arrows: false,
                  infinite: true,
                },
                500: {
                  slidesPerPage: 1,
                  slidesPerScroll: 1,
                  clickToChange: false,
                  centered: false,
                  animationSpeed: 2000,
                  infinite: true,
                },
              }}
            >
              <div className="item">
                <a href="https://sama-sd.org/" target="blank">
                  <img
                    src={sama}
                    height="100vh"
                    alt="Sudanese American Medical Association"
                  />
                </a>
              </div>
              <div className="item">
                <img
                  src={soba}
                  alt="Soba Uneviersity Hospital"
                  height="100vh"
                />
              </div>
              <div className="item">
                <a href="https://www.sadagaat-usa.org/" target="blank">
                  <img src={sadagaat} alt="Sadagaat USA" height="100vh" />
                </a>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parteners;
