import React from "react";
import LanguageSelector from "../../i18next/LanguageSelector";

import { Link } from "react-router-dom";
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
                  <Link
                    className="nav-link"
                    activeclassName="active"
                    exact
                    to="/"
                  >
                    {t("Home")}
                  </Link>
                </li>

                <li>
                  <a>{t("Hubs")}</a>
                  <ul className="dropdown">
                    <li>
                      <Link to="/water">{t("Water Hub")}</Link>
                    </li>
                    <li>
                      <Link to="/education">{t("Education Hub")}</Link>
                    </li>
                    <li>
                      <Link to="/health">{t("Health Hub")}</Link>
                    </li>
                    <li>
                      <Link to="/feeding">{t("Feeding Hub")}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/sub_hubs">{t("Sub Hubs")}</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/projects">{t("Projects")}</Link>
                </li>
                <li>
                  <a href="#">{t("Media Center")}</a>
                  <ul className="dropdown">
                    <li>
                      <Link to="/film">{t("Film Library")}</Link>
                    </li>
                    <li>
                      <Link to="pictures">{t("Pictures Library")}</Link>
                    </li>
                    <li>
                      <Link to="/news">{t("News")}</Link>
                    </li>
                    <li>
                      <Link to="/calendar">{t("Event Calendar")}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">{t("About Us")}</Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeclassName="active"
                    to="/contact"
                  >
                    {t("Contact")}
                  </Link>
                </li>
                <li>
                  {" "}
                  <LanguageSelector />{" "}
                </li>
                <li>
                  <Link
                    className="btn btn-colored btn-flat btn-theme-green"
                    to="/donate"
                  >
                    {t("Donate")}
                  </Link>
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
