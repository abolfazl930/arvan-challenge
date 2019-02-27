import React, { Component } from "react";
import Row from "react-strap-grid/row";
import Col from "react-strap-grid/col";
import Card from "../../microcomponents/card";
import admin from "../../services/admin";

import "./blog-articles.css";

class Articles extends Component {
  state = {
    articles: [],
    page: 1,
    pageSize: 10
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
    return (
      <div className="articles-wrapper">
        <Row>
          <Col md="6">
            <Card title="title" content="description" />
          </Col>
          <Col md="6">
            <Card title="title" content="description" />
          </Col>
          <Col md="6">
            <Card title="title" content="description" />
          </Col>
          <Col md="6">
            <Card title="title" content="description" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Articles;
