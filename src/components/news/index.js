import React, { useState, useEffect, useRef } from "react";
import Header from "../sub_page_header";
import address from "./../utils/address";
import Pagination from "./../pagination";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import SocialMedia from '../social media/social-media'

function News() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const { t } = useTranslation();
  const style = i18n.dir() === "rtl" ? "pull-right ml-20" : "pull-left mr-20";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const fetcher = await window.fetch(`${address()}news`, {
      headers: { "accept-language": `${i18n.language}` },
    });
    const response = await fetcher.json();
    setData(response);
    console.log(response);
  }


  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = data.slice(firstPost, lastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header name={t("News")} />

      <section>
        <div className="container mt-30 mb-30 pt-30 pb-30">
          {currentPosts.map((news) => (
            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                <div class="blog-posts single-post">
                  <article class="post clearfix mb-0">
                    <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img
                          src={news.imageUrl}
                          className="img-responsive img-fullwidth"
                          width="600"
                          height="300"
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
                      {/* <div class="mt-30 mb-0">
                        <h5 class={`${style} mt-10 text-theme-colored`}>
                          {t("Share")}:
                        </h5>
                        <ul class="styled-icons icon-circled m-0">
                          <li>
                            <a href="#" style={{ backgroundColor: "#3A5795" }}>
                              <i class="fa fa-facebook text-white"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" style={{ backgroundColor: "#55ACEE" }}>
                              <i class="fa fa-twitter text-white"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" style={{ backgroundColor: "#A11312" }}>
                              <i class="fa fa-google-plus text-white"></i>
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          ))}

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </div>
      </section>
    </div>
  );
}

export default News;
