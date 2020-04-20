
import React  from 'react'
import image1 from "../../components/images/image1.jpg";
import image2 from "../../components/images/image2.jpg";
import image3 from "../../components/images/image3.jpg";
import { Slide } from 'react-slideshow-image';

class Slider2 extends React.Component{
    render(){



const slideImages = [
  'images/slider-1.jpg',
  'images/slide-11.jpg',
  'images/x.jpg',
  'images/slide-3.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
     const style1 =  {ZIndex: '7', whiteSpace: 'nowrap', fontWeight:'700 px'}
     const style2 = {ZIndex: '7', whiteSpace: 'nowrap', fontWeight:'600 px'}
     const style3 = {ZIndex: '5' , whiteSpace: 'nowrap', letterSpacing:'0px' ,fontWeight:400}
     const style4 = {ZIndex: '5' ,whiteSpace: 'nowrap' ,letterSpacing:'1px'}
     const style5 = {ZIndex: '7', whiteSpace: 'nowrap' ,fontWeight:400, borderRadius: '30px'}
     const style6  ={ZIndex: '7', whiteSpace: 'nowrap' ,fontWeight:700 ,borderRadius: '30px'}
     const style7  ={ZIndex: '5', whiteSpace: 'nowrap' ,letterSpacing:'0px' ,fontWeight:'400'}
     const style8  ={ZIndex: '5' ,whiteSpace: 'nowrap' ,letterSpacing:'1px'}

        return(

            <div id="wrapper" class="clearfix">
    
    
            <div className="main-content">
              <section id="home" >
                <div className="container-fluid p-0">
        
                  <div className="rev_slider_wrapper">
                    <div className="rev_slider rev_slider_default" data-version="5.0">
                    <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
          </div>
        </div>
      </Slide>
                      <ul>
        
                        <li data-index="rs-1" data-transition="slidingoverlayhorizontal" data-slotamount="default"
                          data-easein="default" data-easeout="default" data-masterspeed="default"
                          data-thumb ='./images/slide-1.jpg' data-rotate="0" data-saveperformance="off" data-title="Slide 2"
                          data-description="**************************************">

                          <img src='./images/slide-1.jpg' alt="" data-bgposition="center 70%" data-bgfit="cover"
                            data-bgrepeat="no-repeat" className="rev-slidebg" data-bgparallax="10" data-no-retina />
                      
        
                          <div className="tp-caption tp-resizeme text-uppercase text-white font-raleway" id="rs-1-layer-1"
                            data-x="['left']" data-hoffset="['30']" data-y="['middle']" data-voffset="['-110']"
                            data-fontsize="['110']" data-lineheight="['120']" data-width="none" data-height="none"
                            data-whitespace="nowrap" data-transform_idle="o:1s:500"
                            data-transform_in="y:100scaleX:1scaleY:1opacity:0"
                            data-transform_out="x:left(R)s:1000e:Power3.easeIns:1000e:Power3.easeIn"
                            data-mask_in="x:0pxy:0pxs:inherite:inherit"
                            data-mask_out="x:inherity:inherits:inherite:inherit" data-start="1000" data-splitin="none"
                            data-splitout="none" data-responsive_offset="on"
                            style={style1}>Donate
                          </div>
        
                          <div
                            className="tp-caption tp-resizeme text-uppercase text-white font-raleway bg-theme-colored-transparent pl-20 pr-20"
                            id="rs-1-layer-2" data-x="['left']" data-hoffset="['35']" data-y="['middle']" data-voffset="['-25']"
                            data-fontsize="['35']" data-lineheight="['54']" data-width="none" data-height="none"
                            data-whitespace="nowrap" data-transform_idle="o:1s:500"
                            data-transform_in="y:100scaleX:1scaleY:1opacity:0"
                            data-transform_out="x:left(R)s:1000e:Power3.easeIns:1000e:Power3.easeIn"
                            data-mask_in="x:0pxy:0pxs:inherite:inherit"
                            data-mask_out="x:inherity:inherits:inherite:inherit" data-start="1000" data-splitin="none"
                            data-splitout="none" data-responsive_offset="on"
                            style={style2}>For the poor children
                          </div>
        
                          <div className="tp-caption tp-resizeme text-white" id="rs-1-layer-3" data-x="['left']"
                            data-hoffset="['35']" data-y="['middle']" data-voffset="['35','35','40']"
                            data-fontsize="['16','18',24']" data-lineheight="['28']" data-width="none" data-height="none"
                            data-whitespace="nowrap" data-transform_idle="o:1s:500"
                            data-transform_in="y:100scaleX:1scaleY:1opacity:0"
                            data-transform_out="x:left(R)s:1000e:Power3.easeIns:1000e:Power3.easeIn"
                            data-mask_in="x:0pxy:0pxs:inherite:inherit"
                            data-mask_out="x:inherity:inherits:inherite:inherit" data-start="1400" data-splitin="none"
                            data-splitout="none" data-responsive_offset="on"
                            style={style3}>Every day we bring
                            hope to millions of children in the world's<br /> hardest places as a sign of God's unconditional
                            love.
                          </div>
        
                          <div className="tp-caption tp-resizeme" id="rs-1-layer-4" data-x="['left']" data-hoffset="['35']"
                            data-y="['middle']" data-voffset="['95','105','110']" data-width="none" data-height="none"
                            data-whitespace="nowrap" data-transform_idle="o:1"
                            data-transform_in="y:[100%]z:0rX:0degrY:0rZ:0sX:1sY:1skX:0skY:0opacity:0s:2000e:Power4.easeInOut"
                            data-transform_out="y:[100%]s:1000e:Power2.easeInOuts:1000e:Power2.easeInOut"
                            data-mask_in="x:0pxy:[100%]s:inherite:inherit"
                            data-mask_out="x:inherity:inherits:inherite:inherit" data-start="1400" data-splitin="none"
                            data-splitout="none" data-responsive_offset="on"
                            style={style4}><a
                              className="btn btn-colored btn-lg btn-theme-colored pl-20 pr-20" href="#">Donate Now</a>
                          </div>
                        </li>
        
                        <li data-index="rs-2" data-transition="slidingoverlayhorizontal" data-slotamount="default"
                          data-easein="default" data-easeout="default" data-masterspeed="default"
                          data-thumb="images/slide-2.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide 1"
                          data-description="">
                          <img src="images/slide-2.jpg" alt="" data-bgposition="center center" data-bgfit="cover"
                            data-bgrepeat="no-repeat" className="rev-slidebg" data-bgparallax="10" data-no-retina />
        
                          <div
                            className="tp-caption tp-resizeme text-uppercase  bg-dark-transparent text-white font-raleway pl-30 pr-30"
                            id="rs-2-layer-1" data-x="['center']" data-hoffset="['0']" data-y="['middle']"
                            data-voffset="['-90']" data-fontsize="['28']" data-lineheight="['54']" data-width="none"
                            data-height="none" data-whitespace="nowrap" data-transform_idle="o:1s:500"
                            data-transform_in="y:100scaleX:1scaleY:1opacity:0"
                            data-transform_out="x:left(R)s:1000e:Power3.easeIns:1000e:Power3.easeIn"
                            data-mask_in="x:0pxy:0pxs:inherite:inherit"
                            data-mask_out="x:inherity:inherits:inherite:inherit" data-start="1000" data-splitin="none"
                            data-splitout="none" data-responsive_offset="on"
                            style={style5}>For the poor children
                          </div>
        
                          <div
                            className="tp-caption tp-resizeme text-uppercase bg-theme-colored-transparent text-white font-raleway pl-30 pr-30"
                            id="rs-2-layer-2" data-x="['center']" data-hoffset="['0']" data-y="['middle']"
                            data-voffset="['-20']" data-fontsize="['48']" data-lineheight="['70']" data-width="none"
                            data-height="none" data-whitespace="nowrap" data-transform_idle="o:1s:500"
                            data-transform_in="y:100scaleX:1scaleY:1opacity:0"
                            data-transform_out="x:left(R)s:1000e:Power3.easeIns:1000e:Power3.easeIn"
                            data-mask_in="x:0pxy:0pxs:inherite:inherit"
                            data-mask_out="x:inherity:inherits:inherite:inherit" data-start="1000" data-splitin="none"
                            data-splitout="none" data-responsive_offset="on"
                            style={style6}>raise your helping
                            hand
                          </div>
        
                          <div className="tp-caption tp-resizeme text-white text-center" id="rs-2-layer-3" data-x="['center']"
                            data-hoffset="['0']" data-y="['middle']" data-voffset="['50']" data-fontsize="['16','18',24']"
                            data-lineheight="['28']" data-width="none" data-height="none" data-whitespace="nowrap"
                            data-transform_idle="o:1s:500" data-transform_in="y:100scaleX:1scaleY:1opacity:0"
                            data-transform_out="x:left(R)s:1000e:Power3.easeIns:1000e:Power3.easeIn"
                            data-mask_in="x:0pxy:0pxs:inherite:inherit"
                            data-mask_out="x:inherity:inherits:inherite:inherit" data-start="1400" data-splitin="none"
                            data-splitout="none" data-responsive_offset="on"
                            style={style7}>Every day we bring
                            hope to millions of children in the world's<br /> hardest places as a sign of God's unconditional
                            love.
                          </div>
        
                          <div className="tp-caption tp-resizeme" id="rs-2-layer-4" data-x="['center']" data-hoffset="['0']"
                            data-y="['middle']" data-voffset="['115']" data-width="none" data-height="none"
                            data-whitespace="nowrap" data-transform_idle="o:1"
                            data-transform_in="y:[100%]z:0rX:0degrY:0rZ:0sX:1sY:1skX:0skY:0opacity:0s:2000e:Power4.easeInOut"
                            data-transform_out="y:[100%]s:1000e:Power2.easeInOuts:1000e:Power2.easeInOut"
                            data-mask_in="x:0pxy:[100%]s:inherite:inherit"
                            data-mask_out="x:inherity:inherits:inherite:inherit" data-start="1400" data-splitin="none"
                            data-splitout="none" data-responsive_offset="on"
                            style={style8}><a
                              className="btn btn-default btn-circled btn-theme-colored pl-20 pr-20" href="#">Donate Now</a>
                          </div>
                        </li>
        
        
        
                      </ul>
                    </div>
                  </div>

                </div>
              </section>
        
              
             
             
                </div>
            </div>
        )
    }
}export default Slider2