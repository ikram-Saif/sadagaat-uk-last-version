import React from "react";
import LanguageSelector from "../../i18next/LanguageSelector";

import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MenuBar() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="header-nav">
        <div className="header-nav-wrapper navbar-scrolltofixed bg-silver-light">
          <div className="container">
            <nav id="menuzord-right" className="menuzord default no-bg">
              <a className="menuzord-brand pull-left flip" href="/">
                <img
                  src={require("../images/Logo.png")}
                  className="menuzord-logo"
                  alt="Sadagaat Logo"
                />
              </a>
              <ul className="menuzord-menu">
                <li>
                  <NavLink
                    className="nav-link"
                    activeclassName="active"
                    exact
                    to="/"
                  >
                    {t("Home")}
                  </NavLink>
                </li>

                <li>
                  <a>
                    {t("About Us")} <span class="indicator"></span>
                  </a>
                  <ul className="dropdown">
                    <li>
                      <NavLink className="nav-link" to="/about">
                        {t("About Us")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="nav-link"
                        activeclassName="active"
                        to="/contact"
                      >
                        {t("Contact")}
                      </NavLink>
                    </li>
                    {/* <li><NavLink className="nav-link" activeclassName="active"  to="/volunteers">
                        {t("Volunteers")}
                      </NavLink>
                    </li> */}
                  </ul>
                </li>

                <li>
                  <a>
                    {t("Sectors")}
                    <span class="indicator"></span>{" "}
                  </a>
                  <ul className="dropdown">
                    <li>
                      <NavLink className="nav-link" to="/water">
                        {t("Water Sector")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/education">
                        {t("Education Sector")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/health">
                        {t("Health Sector")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/feeding">
                        {t("Feeding Sector")}
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* <li>
                   <NavLink className="nav-link" to="/sub_hubs">{t("Sub Hubs")}</NavLink>
                </li> */}
                <li>
                  {" "}
                  <NavLink className="nav-link" to="/projects">
                    {t("Ongoing Projects")}
                  </NavLink>
                </li>
                {/* <li> */}
                {/* <a>{t("Media Center")} <span class="indicator"></span></a>
                  <ul className="dropdown"> */}

                <li>
                  <NavLink className="nav-link" to="/news">
                    {t("News")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/calendar">
                    {t("Events")}
                  </NavLink>
                </li>
                {/* </ul> */}
                {/* </li> */}

                <li>
                  <NavLink
                    className="nav-link"
                    activeclassName="active"
                    to="/volunteers"
                  >
                    {t("Volunteers")}
                  </NavLink>
                </li>
                <li className="nav-link">
                  {" "}
                  <LanguageSelector />{" "}
                </li>
                <li>
                  <NavLink
                    className="nav-link btn btn-colored  btn-bg btn-flat btn-theme-green bg-theme-colored-darker4"
                    to="/donate"
                    style={{ width: "auto" }}
                  >
                    {t("Donate")}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MenuBar;
