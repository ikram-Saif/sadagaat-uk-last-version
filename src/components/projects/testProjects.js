import React, { useState, useEffect } from 'react';
//import axios from 'axios'
import address from '../utils/address';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"; 
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';


function DemoProject(){
    return(
    <React.Fragment>
        <section id="causes" class="bg-silver-light">
        <div class="container">
          <div class="section-title text-center">
            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                <h2 class="text-uppercase line-bottom-center mt-0">Our <span
                    class="text-theme-colored font-weight-600">Projects</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati! <br/>ipsum
                  dolor sit Rem autem voluptatem obcaecati</p>
              </div>
            </div>
          </div>
          <div class="row multi-row-clearfix">
            <div class="owl-carousel-3col">
              <div class="item">
                <div class="causes bg-white maxwidth500 mb-30">
                  <div class="thumb">
                    <img src="http://placehold.it/320x240" alt="" class="img-fullwidth"/>
                  </div>
                  <div class="donation-progress">
                    
                  </div>
                  <div class="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                    <ul class="list-inline font-20 font-weight-600 clearfix mb-5">
                      <li class="pull-left font-weight-400 text-black-333 pr-0">Raised: <span
                          class="text-theme-colored font-weight-700">2860 SDG</span></li>
                      <li class="pull-right font-weight-400 text-black-333 pr-0">Goal: <span
                          class="text-theme-colored font-weight-700">5000 SDG</span></li>
                    </ul>
                    <h4 class="text-uppercase"><a href="#">Donation for helpless child</a></h4>
                    <div class="progress-item mt-0">
                      <div class="progress mb-0">
                        <div data-percent="84" class="progress-bar"><span class="percent">0</span></div>
                      </div>
                    </div>
                    <p class="mt-20">Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.Lorem ipsum
                      dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
                    <a href="#" class="btn btn-default btn-theme-colored btn-xs font-16 mt-10">Donate</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>

    )
    
}
export default DemoProject;