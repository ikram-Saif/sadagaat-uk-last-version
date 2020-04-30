import React from "react";
import LanguageSelector from "../../i18next/LanguageSelector";

import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from '../images/Logo.png'

function MenuBar() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="header-nav">
        <div className="header-nav-wrapper navbar-scrolltofixed bg-silver-light">
          <div className="container">
            <nav id="menuzord-right" className="menuzord default no-bg">
              <a className="menuzord-brand pull-left flip">
                <img src={logo} alt="" />
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
                  <a>{t("Sectors")}</a>
                  <ul className="dropdown">
                    <li>
                      <NavLink className="nav-link" to="/water">{t("Water Sector")}</NavLink>
                    </li>
                    <li>
                       <NavLink className="nav-link" to="/education">{t("Education Sector")}</NavLink>
                    </li>
                    <li>
                       <NavLink className="nav-link" to="/health">{t("Health Sector")}</NavLink>
                    </li>
                    <li>
                       <NavLink className="nav-link" to="/feeding">{t("Feeding Sector")}</NavLink>
                    </li>
                  </ul>
                </li>
                {/* <li>
                   <NavLink className="nav-link" to="/sub_hubs">{t("Sub Hubs")}</NavLink>
                </li> */}
                <li>
                  {" "}
                   <NavLink className="nav-link" to="/projects">{t("Ongoing Projects")}</NavLink>
                </li>
                <li>
                  <a>{t("Media Center")}</a>
                  <ul className="dropdown">
                    <li>
                       <NavLink className="nav-link" to="/film">{t("Film Library")}</NavLink>
                    </li>
                    <li>
                       <NavLink className="nav-link" to="pictures">{t("Pictures Library")}</NavLink>
                    </li>
                    <li>
                       <NavLink className="nav-link" to="/news">{t("News")}</NavLink>
                    </li>
                    <li>
                       <NavLink className="nav-link" to="/calendar">{t("Event Calendar")}</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                   <NavLink className="nav-link" to="/about">{t("About Us")}</NavLink>
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
                <li>
                  {" "}
                  <LanguageSelector />{" "}
                </li>
                <li>
                  <NavLink
                    className="nav-link btn btn-colored btn-flat btn-theme-green"
                    to="/donate"
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
