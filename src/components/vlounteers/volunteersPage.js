import React, { useState, useEffect } from 'react';
import Header from '../sub_page_header';
import address from './../utils/address';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import Preload from '../preload'



function Volunteers(){
  const [volunteers, setVolunteers] = useState([])
  const parse = require('html-react-parser');


  const {t} = useTranslation()
  const [loading , setLoading] = useState(true)


  
  useEffect(() => {
    
         async function fetchData() {
           const fetcher = await window.fetch(`${address()}voulenter-page`,{headers: {'accept-language': `${i18n.language}`}})
           const response = await fetcher.json()
           setVolunteers(response)
           console.log(response)
           setLoading(false)

           
         }
         fetchData()
        }, [i18n.language])


return(
  <React.Fragment>
<section>
<Header name={t('Volunteers')} coverImage = {'volunteer-bg-img'}/>

    <div className="container">  
    {loading && 
    <Preload  loading = {loading}/>
     }  
      {i18n.language === 'ar'?(
      <FroalaEditorView
         model={volunteers.htmlPageAr}
        />
      ):
      (<FroalaEditorView

         model={volunteers.htmlPageEn}
        />)
      }
    </div>     
</section>
</React.Fragment>

)

}

export default Volunteers;