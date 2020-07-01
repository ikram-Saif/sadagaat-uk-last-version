import React, { useState, useEffect, useRef } from "react";
import Header from "../sub_page_header";
import address from "./../utils/address";
import Pagination from "./../pagination";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import SocialMedia from "../social media/social-media";

function News() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const { t } = useTranslation();
  const style = i18n.dir() === "rtl" ? "pull-right ml-20" : "pull-left mr-20";

  useEffect(() => {
    fetchData();
  }, [i18n.language]);

  async function fetchData() {
    const fetcher = await window.fetch(`${address()}news`,{
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

        <div className="container mt-30 mb-30 pt-30 pb-30">
          {currentPosts.map((news) => (
            <div class="row mb-15" key = {news.id}>
              <div class="col-md-10 col-md-offset-1">
                <div class="blog-posts single-post">
                  <article class="post clearfix mb-0">
                    <div
                      class="entry-header"
                      style={{
                        position: "absolute",
                        left: "39px",
                        top: "69px",
                      }}
                    >
                      <div class="post-thumb thumb">
                        <img
                          src={`${address()}news/${news.id}/image`}
                          className="img-responsive"
                          width="250"
                          height="250"
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

                      <SocialMedia />
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
    </div>
  );
}

export default News;
