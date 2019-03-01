import React, { Component } from "react";
import Container from "react-strap-grid/container";
import Row from "react-strap-grid/row";
import Col from "react-strap-grid/col";
import admin from "../../services/admin";
import Articles from "./blog-articles";
import SearchBox from "./blog-search-box";
import Category from "./blog-Category";
import LatestArticles from "./latest-articles";
import "./styles.css";
class Blog extends Component {
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
      () => console.log("Articles:", this.state.articles)
    );
  };
  render() {
    const { articles } = this.state;
    return (
      <section className="blog-section">
        <Container>
          <Row>
            <Col md="7">
              <Articles articles={articles} />
            </Col>
            <Col md="3">
              <Row>
                <Col>
                  <SearchBox />
                  <Category />
                  <LatestArticles articles={articles} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Blog;
