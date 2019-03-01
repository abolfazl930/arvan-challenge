import React, { Component } from "react";
import Row from "react-strap-grid/row";
import Col from "react-strap-grid/col";
import Card from "../../microcomponents/card";
import Loader from "../../microcomponents/loader";
import { trimString } from "../../utils/trime-string";
import { formatDate } from "../../utils/convert-date-format";
import { Link } from "react-router-dom";

import "./styles.css";

class Articles extends Component {
  render() {
    const { articles } = this.props;
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
