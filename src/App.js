import React,{useEffect} from 'react';

import Preload from './components/preload';
import TopBar from './components/top_bar';
import MenuBar from './components/menu_bar';
import Footer from './components/footer'
import Become from './components/become_a_volunteer/index'


import { useTranslation} from 'react-i18next';



function App() {
  const { i18n } = useTranslation()
  document.getElementById("direction").dir = i18n.dir()


  useEffect(() => {
  if (i18n.dir() === 'rtl') {
    document.getElementById('bootstrp-file').href = './css/bootstrap-rtl.min.css'
    document.getElementById('main-rtl').href = './css/style-main-rtl.css'
    document.getElementById('main-rtl-extra').href = './css/style-main-rtl-extra.css'
    
  } 
  if (i18n.dir() === 'ltr') {
    document.getElementById('bootstrp-file').href = ''
    document.getElementById('main-rtl').href = ''
    document.getElementById('main-rtl-extra').href = ''
    
  } 
})

   return (

     <div className="main-content">

     <Preload/>
     <TopBar/>
     <MenuBar/>
     <Become/> 
     <Footer/>
     
     </div>
     
);
}

export default App;
