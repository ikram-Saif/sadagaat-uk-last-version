import React from 'react';
import { useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom'

function ButtonMore(){
  const {t ,i18n} = useTranslation()
  const classParameter = i18n.dir() ==='rtl'?'pr-0':'pl-0'
  const buttonClass = i18n.dir() ==='rtl'?'mr-5':'ml-5'
     
return(
    <Link 
    to="/about" 
    className={`btn btn-flat btn-colored btn-theme-colored mt-15 ${buttonClass}`}>
    {t('Read More')}
    </Link>

    )
}

export default About;