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
              <a className="menuzord-brand pull-left flip" to="/">
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
                  <a>{t("Hubs")}</a>
                  <ul className="dropdown">
                    <li>
                      <NavLink to="/water">{t("Water Hub")}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/education">{t("Education Hub")}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/health">{t("Health Hub")}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/feeding">{t("Feeding Hub")}</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/sub_hubs">{t("Sub Hubs")}</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/projects">{t("Projects")}</NavLink>
                </li>
                <li>
                  <a href="#">{t("Media Center")}</a>
                  <ul className="dropdown">
                    <li>
                      <NavLink to="/film">{t("Film Library")}</NavLink>
                    </li>
                    <li>
                      <NavLink to="pictures">{t("Pictures Library")}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/news">{t("News")}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/calendar">{t("Event Calendar")}</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/about">{t("About Us")}</NavLink>
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
                    className="btn btn-colored btn-flat btn-theme-green"
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
