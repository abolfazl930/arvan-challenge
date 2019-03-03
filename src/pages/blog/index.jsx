import React, { Component } from "react";

import Container from "react-strap-grid/container";
import Row from "react-strap-grid/row";
import Col from "react-strap-grid/col";

import admin from "../../services/admin";
import Header from "../../components/header";
import SearchBox from "../../components/blog-search-box";
import Category from "../../components/blog-categry";
import LatestArticles from "../../components/latest-articles";
import News from "../../components/news";
import Card from "../../microcomponents/card";
import Loader from "../../microcomponents/loader";
import { trimString } from "../../utils/trime-string";
import { formatDate } from "../../utils/convert-date-format";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

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
  handlePageClick = data => {
    let selected = data.selected + 1;
    console.log("selected", selected);
    this.setState(
      {
        page: selected
      },
      () => {
        console.log("state:", this.state.page);
      }
    );
  };
  render() {
    const { articles } = this.state;
    return (
      <section className="blog-section">
        <Header title="Our Blog" content="home - blog" />
        <main>
          <Container>
            <Row>
              <Col md="7">
                <div className="articles-wrapper">
                  <Row>
                    {articles.length === 0 ? (
                      <Loader />
                    ) : (
                      articles.map((article, index) => (
                        <Col md="6" key={index}>
                          <Card
                            img={article.image}
                            title={
                              <Link to={`/blog/${article.slug}`}>
                                {article.title}
                              </Link>
                            }
                            date={formatDate(Number(article.createdAt))}
                            content={trimString(article.summary, 80)}
                          />
                        </Col>
                      ))
                    )}
                  </Row>
                </div>
                <Col>
                  <Row className="d-flex justify-content-center">
                    <ReactPaginate
                      previousLabel={"< previous"}
                      nextLabel={"next >"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={30}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={3}
                      onPageChange={this.handlePageClick}
                      containerClassName={"pagination d-flex"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}
                    />
                  </Row>
                </Col>
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
          <News
            title="Subscribe Our Newsletter"
            content="Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio tincidunt maximus. Pellentesque tempus gravida viverra."
          />
        </main>
      </section>
    );
  }
}

export default Blog;
