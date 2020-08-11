import React from 'react'
//import i18n from './i18n';
import './i18n';
import { useTranslation  } from 'react-i18next';
//import { withNamespaces, WithNamespaces } from 'react-i18next';

function LanguageSelector () {
  
  const {i18n,t} = useTranslation()
   //selectedLanguage = i18n.language == "ar"?"English":"العربية"

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // window.location.reload()
    //window.render() 
    //  if (i18n.dir() === "rtl") 
    // {
    //   document.getElementById("bootstrp-file").href =
    //   "/css/bootstrap-rtl.min.css";

    //   document.getElementById("main-rtl").href = "/css/style-main-rtl.css";
      
    //   document.getElementById("main-rtl-extra").href =
    //     "/css/style-main-rtl-extra.css";
    // }
    // else if (i18n.dir() === "ltr") {
    //   document.getElementById("bootstrp-file").href = "";
    //   document.getElementById("main-rtl").href = "";
    //   document.getElementById("main-rtl-extra").href = "";
    // }
  }

 
  return (
        <div>
          <button
           className={`lang-switch bg-transparent btn btn-light ${i18n.language === "ar" ? "d-none" : ""}`} 
           
           onClick={(event) => changeLanguage("ar")}>العربية</button>

          <button className={`lang-switch bg-transparent btn btn-light ${i18n.language === "en" ? "d-none" : ""}`} 
          
          onClick={(event) => (
            
            changeLanguage("en")
   
            
            )}>English</button>
          {/* <div class="btn-group">
            <li  class="dropdown-toggle nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {t('language')}
            </li>
            <div class="dropdown-menu">
                <li class="dropdown-item nav-link" value = "ar" onClick={(event) => changeLanguage("ar")}>العربية</li>
                <div class="dropdown-divider"></div>
                  <li class="dropdown-item nav-link " value = "en" onClick={(event) => changeLanguage("en")}>English</li>
                    
                </div>
              
            </div> */}
        </div>
  )
}

export default LanguageSelector