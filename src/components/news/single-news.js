import React, { Component } from "react";
import address from "../utils/address";
import axios from "axios";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Header from "../sub_page_header";
import SocialMedia from '../social media/social-media'

class SinglNews extends Component {
 
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  async componentDidMount(){
    let id = this.props.match.params.news_id;

    try {
      const { data: news } = await axios.get(`${address()}news/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      this.setState({ news });
    } catch (error) {
      console.log("can not load project for the home page slider");
    }
  }
  async componentWillReceiveProps(){
    let id = this.props.match.params.news_id;

    try {
      const { data: news } = await axios.get(`${address()}news/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      this.setState({ news });
    } catch (error) {
      console.log("can not load project for the home page slider");
    }
 }

  render() {
    const { t } = this.props;
    const { news } = this.state;
    
    return (
        <div>
        <Header name={t("News")} />
  
        <section>
          <div className="container mt-30 mb-30 pt-30 pb-30">
          <div class="row">              
                <div class="col-md-10 col-md-offset-1">
                  <div class="blog-posts single-post">
                    <article class="post clearfix mb-0">
                      <div class="entry-header">
                        <div class="post-thumb thumb" style = {{mxaHeight:"500px"}}>
                          <img
                            src={news.imageUrl}
                            className="img-fullwidth img-responsive"
                            
                            alt=""
                          />
                        </div>
                      </div>
  
                      <div class="entry-content">
                        <div class="entry-meta media no-bg no-border mt-15 pb-20">
                          <div class="media-body pl-15">
                            <div class="event-content pull-left flip">
                              <h2 class="line-bottom mt-0">{news.name}</h2>
  
                              <h4 className="mt-0 mb-0 text-theme-colored">
                                {news.startDate}
                              </h4>
                            </div>
                          </div>
                        </div>
  
                        <p className="mb-15">{news.description}.</p>
  
                        < SocialMedia />
                 
                      </div>
                    </article>
                  </div>
                </div>

           </div>
  
          </div>
        </section>
      </div>
    )
  }
}
export default withTranslation()(SinglNews);
