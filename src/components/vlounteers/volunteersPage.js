import React, { useState, useEffect } from 'react';
import Header from '../sub_page_header';
import address from './../utils/address';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';



function Volunteers(){
  const [volunteers, setVolunteers] = useState([])
  const parse = require('html-react-parser');


  const {t} = useTranslation()

  
  useEffect(() => {
    
         async function fetchData() {
           const fetcher = await window.fetch(`${address()}voulenter-page`,{headers: {'accept-language': `${i18n.language}`}})
           const response = await fetcher.json()
           setVolunteers(response)
           
         }
         fetchData()
        }, [i18n.language])


return(
<section>
<Header name={t('Volunteers')}/>

    <div className="container">    

      <FroalaEditorView
         model={volunteers.htmlPage}
        />
    </div>     
</section>

)

}

export default Volunteers;