
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,HashRouter,
  Route,
  Link,NavLink
} from 'react-router-dom'

import { logout, get_volunteer_profile } from '../../repository';
import { useTranslation } from 'react-i18next'



function Auth_user_menu()
{
  const userName = localStorage.getItem('x-access-token')
  const {t} = useTranslation()


  const handleClick = ()=>{
      logout();
     
  }
  const handleProfile =(e)=>{
    e.preventDefault()
    get_volunteer_profile()
    .then(token => window.location = 'local/volunteerForm')
    //.then(token =>console.log(token))
    
    //.catch(err =>alert(err));
    window.location='/volunteerForm'
    
    
  
  }
  
    return(
        <div className="col-md-4">
              <div className="widget no-border m-0">
                <ul className="list-inline pull-right flip sm-pull-none sm-text-center mt-5">
                  <li className="mt-sm-10 mb-sm-10">
                    <a className="p-5 font-14 pl-10 pr-10 text-white dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                      href="#">{userName}<i className="fa fa-angle-down text-white"></i></a>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><Link  onClick ={handleProfile}>{t('Volunteer Form')}</Link></li>
                        <li> <Link  onClick ={handleClick}>{t('Logout')}</Link></li>
                      </ul>
                  </li>
                </ul>
              </div>
            </div>
    )

}
export default Auth_user_menu