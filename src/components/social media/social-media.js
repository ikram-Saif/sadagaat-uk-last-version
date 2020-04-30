import React, { useState, useEffect, useRef } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
function SocialMedia() {

    const style = i18n.dir() === "rtl" ? "pull-right ml-20" : "pull-left mr-20"
    const { t } = useTranslation();


    return(
        <div class="mt-30 mb-0">
                <h5 class={`${style} mt-10 text-theme-colored`}>
                    {t("Share")}:
                </h5>
                <ul class="styled-icons icon-circled m-0">
                    <li>
                        <a href="https://web.facebook.com/Sadagaat/?_rdc=1&_rdr"
                            style={{ backgroundColor: "#3A5795" }}
                            target ='blank'
                         >
                        <i class="fa fa-facebook text-white"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/sadagaat"
                         style={{ backgroundColor: "#55ACEE" }}
                         target ='blank'
                         >
                        <i class="fa fa-linkedin text-white"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/user/Sadagaat" 
                        style={{ backgroundColor: "#A11312" }}
                        target = 'blank'
                        >
                        <i class="fa fa-youtube text-white"></i>

                        </a>
                    </li>
                </ul>
      </div>
    )
}
    export default SocialMedia
        
        
       