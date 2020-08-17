import React from "react";
import { useTranslation } from "react-i18next";
import { Link , withRouter } from "react-router-dom";
import about1 from "../images/work.jpg";
import about2 from "../images/dates.jpg";
import about3 from "../images/tree.jpg";

function About(props){
  const {t ,i18n} = useTranslation()
  const classParameter = i18n.dir() ==='rtl'?'pr-0':'pl-0'
  const buttonClass = i18n.dir() ==='rtl'?'mr-5':'ml-5'
  const show = props.history.location.pathname === '/about' ? 'none' : ''
  //console.log(window.location.pathname)
     
return(
  <React.Fragment>
    <section id="about">
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 mt-20">
              <div className="row">
                <div className={`col-md-6 col-sm-12 ${classParameter}`}>
                  <div className="img-hover-border mt-sm-40">
                    <img
                      className="img-responsive"
                      src={require('../images/about 275 330.jpg')}
                      alt=""
                      style= {{width:'275px', height:'330px'}}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 pl-0 pr-0">
                  <div className="img-hover-border mt-sm-30">
                    <img
                      className="img-responsive"
                      src = {require('../images/about 325-177.jpg')} 
                      alt=""
                      style= {{width:'250px', height:'156px'}}

                    />
                  </div>
                  <div className="img-hover-border mt-15 mt-sm-30">
                    <img
                      className="img-responsive"
                      src={require('../images/x.jpg')}
                      alt=""
                      style= {{width:'250px', height:'156px'}}

                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="about-details">
                <h2 className="font-28 text-uppercase mt-1">
                  {t("About")}{" "}
                  <span>{t("Sadagaat")}</span>
                </h2>
                <p>{t("about_message_1")} <br/>{t("about_message_2")}</p>
               

                <Link
                  to="/about"
                  className={`btn btn-flat btn-colored btn-theme-colored mt-15 ${buttonClass}`}
                  style={{ display: show }}
                >
                  {t("Read More")}
                </Link>

                <Link
                  to="/donate"
                  className={`btn btn-flat btn-colored btn-default btn-theme-colored mt-15 ${buttonClass}`}
                >
                  {t("Donate")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  );
}

export default withRouter(About);
