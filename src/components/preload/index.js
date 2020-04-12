import React from 'react';

function Preload(){
    return(
<div id="wrapper" className="clearfix">
  <div id="preloader">
    <div id="spinner">
      <div className="preloader-dot-loading">
        <div className="cssload-loading"><i /><i /><i /><i /></div>
      </div>
    </div>
    <div id="disable-preloader" className="btn btn-default btn-sm">Disable Preloader</div>
  </div>
</div>

    )
    
}
export default Preload;
    