import React from 'react';
import {
  BrowserRouter as Router,
  Switch,HashRouter,
  Route,
  Link,NavLink, Redirect
} from 'react-router-dom'
import { useTranslation } from 'react-i18next'



function UnAuth_user_menu(){
  const {t} = useTranslation()

    const handleClick =(e)=>{
      e.preventDefault()
        window.location = '/login'

    
      }
  
    return(

            <div className="col-md-4">
            <div className="widget no-border m-0">
            <ul className="list-inline pull-right flip sm-pull-none sm-text-center mt-5">

                <li className="mt-sm-10 mb-sm-10">
                <button className="btn btn-default btn-flat btn-xs bg-light p-5 font-11 pl-10 pr-10 no-border" 
                onClick ={handleClick}>{t('Login/Register')}</button>
                </li>
            </ul>
            </div>
            </div> 
    )
}export default UnAuth_user_menu