import React from 'react';
import Header from '../sub_page_header'
import Parteners from '../parteners'
import About_ from '../about/'


/*** translation backage */
import { useTranslation } from 'react-i18next';

function About() {
  const {t} = useTranslation()
return (
        <div>
            <Header name={t("About Sadagaat")}/>
            <About_/>
            <div>
              <section className="divider parallax layer-overlay overlay-theme-colored-8" data-bg-img="images/slide-2.jpg">
                <div className="container">
                  <div className="row text-justify">
                    <div className="col-md-6">
                      <h2 className="text-white">{t('Our Vision')}</h2>
                      <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus facere perferendis eveniet ipsam reiciendis cumque aspernatur natus! Voluptatem laudantium totam, quia reiciendis quibusdam voluptate architecto impedit id iste rem mollitia enim reprehenderit fugit exercitationem ab placeat debitis vel excepturi molestiae laboriosam aut. Possimus expedita sint neque voluptatibus, odio, architecto, excepturi corrupti magnam sunt ipsa voluptatem consequuntur iusto quo, molestiae dolorem repudiandae. Consectetur dolorem placeat ratione eum quasi delectus, corrupti.</p>
                    </div>
                    <div className="col-md-6">
                      <h2 className="text-white">{t('Our Mission')}</h2>
                      <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus facere perferendis eveniet ipsam reiciendis cumque aspernatur natus! Voluptatem laudantium totam, quia reiciendis quibusdam voluptate architecto impedit id iste rem mollitia enim reprehenderit fugit exercitationem ab placeat debitis vel excepturi molestiae laboriosam aut. Possimus expedita sint neque voluptatibus, odio, architecto, excepturi corrupti magnam sunt ipsa voluptatem consequuntur iusto quo, molestiae dolorem repudiandae. Consectetur dolorem placeat ratione eum quasi delectus, corrupti.</p>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="container">
                  <div className="section-content">
                    <div className="row">
                      <div className="col-md-9">
                        <h3 className="text-uppercase font-28 letter-space-3">{t('Our')} <span className="text-theme-colored">{t('Objectives')}</span></h3>
                        <div className="row">
                          <div className="col-md-12">
                            <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut mole stie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermen. </p>
                            <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut mole stie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermen. </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="thumb">
                          <img  src='./images/about 350-300.jpg' className="img-fullwidth" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="facts bg-silver-light">
                <div className="container pt-0 pb-0">
                  <div className="section-title text-center">
                    <div className="row">
                      <div className="col-md-10 col-md-offset-1">
                        <h2 className="text-uppercase line-bottom-center mt-0">{t('Facts')} <span className="text-theme-colored font-weight-600">{t('and')} </span>{t('Figuers')}</h2>
                        {/* <div class="title-icon">
                      <i class="flaticon-charity-hand-holding-a-heart"></i>
                    </div> */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati! <br />ipsum
                          dolor sit Rem autem voluptatem obcaecati</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-40">
                    <div className="col-md-3">
                      <div className="icon-box p-0">
                        <a className="icon-border-effect effect-circled  icon icon-circled mb-0 mr-0 pull-left icon-lg" href="#">
                          <i className="flaticon-charity-responsible-use-of-water  text-theme-colored font-54" />
                        </a>
                        <div className="ml-120">
                          <h5 className="icon-box-title mt-15 mb-10 text-uppercase">{t('Water')}</h5>
                          <p className="text-gray">2000.000.000 SDG</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="icon-box p-0">
                        <a className="icon-border-effect effect-circled  icon icon-circled mb-0 mr-0 pull-left icon-lg" href="#">
                          <i className="flaticon-charity-food-donation text-theme-colored font-54" />
                        </a>
                        <div className="ml-120">
                          <h5 className="icon-box-title mt-15 mb-10 text-uppercase">{t('Feeding')}</h5>
                          <p className="text-gray">2000.000.000 SDG</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="icon-box p-0">
                        <a className="icon-border-effect effect-circled  icon icon-circled mb-0 mr-0 pull-left icon-lg" href="#">
                          <i className="flaticon-charity-person-inside-a-heart text-theme-colored font-54" />
                        </a>
                        <div className="ml-120">
                          <h5 className="icon-box-title mt-15 mb-10 text-uppercase">{t('Health')}</h5>
                          <p className="text-gray">2000.000.000 SDG</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="icon-box p-0">
                        <a className="icon-border-effect effect-circled  icon icon-circled mb-0 mr-0 pull-left icon-lg" href="#">
                          <i className="flaticon-charity-shelter text-theme-colored font-54" />
                        </a>
                        <div className="ml-120">
                          <h5 className="icon-box-title mt-15 mb-10 text-uppercase">{t('Education')}</h5>
                          <p className="text-gray">2000.000.000 SDG</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <Parteners/>

                  </div>
      )
    
    }
    export default About;
