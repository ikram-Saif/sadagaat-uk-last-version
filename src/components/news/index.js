import React, { useState, useEffect, useRef } from "react";
import Header from "../sub_page_header";
import address from "./../utils/address";
import Pagination from "./../pagination";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import SocialMedia from "../social media/social-media";
import { Link } from "react-router-dom";

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
    const fetcher = await window.fetch(`${address()}news`, {
      headers: { "accept-language": `${i18n.language}` },
    });
    const response = await fetcher.json();
    setData(response);
  }

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = data.slice(firstPost, lastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header name={t("News")} />

      <div className="container mt-30 mb-30 pt-30 pb-30">
        <div class="row">
          {currentPosts.map((news) => (
            <div class="col-md-4 mb-30" key={news.id}>
              <Link to={"/news/" + news.id}>
                <div class="blog-posts single-post">
                  <article class="post clearfix mb-0">
                    <div class="entry-header">
                      <div
                        class="post-thumb thumb"
                        style={{ maxHeight: "260px" }}
                      >
                        <img
                          src={`${address()}news/${news.id}/image`}
                          className="img-fullwidth img-responsive"
                          // height="200"
                          style={{ height: "260px", width: "390px" }}
                          alt=""
                        />
                      </div>
                    </div>

                    <div class="entry-content">
                      <div class="entry-meta media no-bg no-border mt-15">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h2 class="line-bottom mt-0">{news.name}</h2>

                            <h4 className="mt-0 mb-0 text-theme-colored">
                              {news.startDate}
                            </h4>
                          </div>
                        </div>
                      </div>

                      <p
                        className="mb-15 project-discription"
                        style={{ height: "100px" }}
                      >
                        {news.description}.
                      </p>

                      {/* < SocialMedia /> */}
                    </div>
                  </article>
                </div>
              </Link>
            </div>
          ))}

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

export default News;
