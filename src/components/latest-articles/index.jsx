import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/convert-date-format";

import "./styles.css";

class SearchBox extends React.Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="la-articles-container">
        <h4 className="la-articles-container__title">Latest Posts</h4>
        <div className="la-articles-container__list">
          {articles.map(article => (
            <div className="la-articles-container__list__item d-flex">
              <img
                src={article.image}
                class="la-articles-container__list__item__img"
              />
              <div className="la-articles-container__list__item__content d-flex flex-column justify-content-between">
                <h4 className="la-articles-container__list__item__content__title">
                  <Link to="#">{article.title}</Link>
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

export default SearchBox;
