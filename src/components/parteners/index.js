import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useTranslation } from "react-i18next";
import partener1 from "../images/partener1.png";
import partener2 from "../images/partener2.png";
import partener3 from "../images/partener3.png";
import partener4 from "../images/partener4.png";
import partener5 from "../images/partener5.png";
import partener6 from "../images/partener6.png";
import partener7 from "../images/partener7.png";
import partener9 from "../images/partener9.png";
import partener10 from "../images/partener10.png";
import partener11 from "../images/partener11.png";
import partener12 from "../images/partener12.png";
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
                  <img
                    src={partener1}
                    height="100vh" width = '150px'
                    alt="Sudanese American Medical Association"
                  />
   
              </div>
              <div className="item">
                <img
                  src={partener2}
                  alt="Soba Uneviersity Hospital"
                  height="100vh" width = '150px'
                />
              </div>
              <div className="item">
                  <img src={partener3} alt="Sadagaat USA" height="100vh" width = '150px' />
              </div>
              <div className="item">
                  <img src={partener4} alt="Sadagaat USA" height="100vh" width = '150px' />
              </div>
              <div className="item">
                  <img src={partener5} alt="Sadagaat USA" height="100vh" width = '150px' />
              </div>
              <div className="item">
                  <img src={partener6} alt="Sadagaat USA" height="100vh" width = '150px' />
              </div>
              <div className="item">
                  <img src={partener7} alt="Sadagaat USA" height="100vh" width = '150px' />
              </div>
              <div className="item">
                  <img src={partener9} alt="Sadagaat USA" height="100vh" width = '150px' />
                
              </div>
              <div className="item">
                  <img src={partener10} alt="Sadagaat USA" height="100vh" width = '150px' />
              </div>
              <div className="item">
                  <img src={partener11} alt="Sadagaat USA" height="100vh" width = '150px' />
              </div>
              <div className="item">
                  <img src={partener12} alt="Sadagaat USA" height="100vh" width = '150px' />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parteners;
