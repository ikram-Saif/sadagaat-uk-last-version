import React, { useState, useEffect } from "react";
/**transaltion package */
import i18n from "i18next";
import { useTranslation } from "react-i18next";

function Header(props) {
  const { t } = useTranslation();
  const coverImage = props.coverImage !== undefined ? props.coverImage :'bg-img'
  console.log(coverImage)

  return (
    <section className={`inner-header divider parallax layer-overlay overlay-dark-6`}
    style = {{backgroundImage:`url(${props.coverImage})`}}
    >
      <div className="container pt-60 pb-60">
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="font-28 text-white">{props.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
