import React from "react";
//import Icon from 'react-fa'
import Icon from "react-icons";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useTranslation } from "react-i18next";

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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                autem voluptatem obcaecati! <br />
                ipsum dolor sit Rem autem voluptatem obcaecati
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* <Carousel>
        <img src={"http://placehold.it/200x120"} />
        <img src={"http://placehold.it/200x120"} />
        <img src={"http://placehold.it/200x120"} />
      </Carousel> 
    */}

            <Carousel
              slidesPerPage={5}
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
                  arrows: true,
                  infinite: false,
                },
                500: {
                  slidesPerPage: 1,
                  slidesPerScroll: 1,
                  clickToChange: false,
                  centered: false,
                  animationSpeed: 2000,
                  infinite: false,
                },
              }}
            >
              <div className="item">
                {" "}
                <a href="#">
                  {" "}
                  <img src='./images/partener/1.png' />
                </a>
              </div>
              <div className="item">
                {" "}
                <a href="#">
                  {" "}
                  <img src='./images/partener/3.png'  />
                </a>
              </div>
              <div className="item">
                {" "}
                <a href="#">
                  <img src='./images/partener/2.png'  alt />
                </a>
              </div>
              <div className="item">
                {" "}
                <a href="#">
                  <img src='./images/partener/4.png'  alt />
                </a>
              </div>
              <div className="item">
                {" "}
                <a href="#">
                  <img src= './images/partener/1.png'  alt />
                </a>
              </div>
              <div className="item">
                {" "}
                <a href="#">
                  <img src='./images/partener/2.png'  alt />
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
