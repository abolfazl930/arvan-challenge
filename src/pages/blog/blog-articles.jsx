import React, { Component } from "react";
import Row from "react-strap-grid/row";
import Col from "react-strap-grid/col";
import Card from "../../microcomponents/card";
import Loader from "../../microcomponents/loader";
import admin from "../../services/admin";
import { trimString } from "../../utils/trime-string";
import { formatDate } from "../../utils/convert-date-format";
import { Link } from "react-router-dom";

import "./blog-articles.css";

class Articles extends Component {
  state = {
    articles: [],
    page: 1,
    pageSize: 6
  };
  componentDidMount() {
    this.loadArticles();
  }
  loadArticles = async () => {
    const { page, pageSize } = this.state;
    let response = null;
    response = await admin.article.list({ page, pageSize });
    response = await response.json();
    const articles = response.data.value.result;
    this.setState(
      {
        articles
      },
      () => console.log("res:", this.state.articles)
    );
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="articles-wrapper">
        <Row>
          {articles.length === 0 ? (
            <Loader />
          ) : (
            articles.map((article, index) => (
              <Col md="6" key={index}>
                <Card
                  img={article.image}
                  title={<Link to="test">{article.title}</Link>}
                  date={formatDate(Number(article.createdAt))}
                  content={trimString(article.summary, 80)}
                />
              </Col>
            ))
          )}
        </Row>
      </div>
    );
  }
}

export default Articles;
