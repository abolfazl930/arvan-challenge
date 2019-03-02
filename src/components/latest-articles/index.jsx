import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/convert-date-format";

import "./styles.css";

class LatestArticle extends React.Component {
  articles = null;

  componentDidMount() {
    console.log("...", this.props.articles);
  }

  filterData = () => {
    this.articles = this.props.articles.slice(
      Math.max(this.props.articles.length - 5, 1)
    );
  };

  render() {
    this.filterData();
    return (
      <div className="la-articles-container">
        <h4 className="la-articles-container__title">Latest Posts</h4>
        <div className="la-articles-container__list">
          {this.articles.map((article, index) => (
            <div
              className="la-articles-container__list__item d-flex"
              key={index}
            >
              <img
                src={article.image}
                class="la-articles-container__list__item__img"
              />
              <div className="la-articles-container__list__item__content d-flex flex-column justify-content-between">
                <h4 className="la-articles-container__list__item__content__title">
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h4>
                <p className="la-articles-container__list__item__content__date">
                  post {formatDate(Number(article.createdAt))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LatestArticle;
