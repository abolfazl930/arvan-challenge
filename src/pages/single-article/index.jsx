import React, { Component } from "react";

import Container from "react-strap-grid/container";
import Row from "react-strap-grid/row";
import Col from "react-strap-grid/col";

import admin from "../../services/admin";

import { formatDate } from "../../utils/convert-date-format";
import Loader from "../../microcomponents/loader";
import Articles from "../../components/blog-articles";
import SearchBox from "../../components/blog-search-box";
import Category from "../../components/blog-categry";
import LatestArticles from "../../components/latest-articles";
import News from "../../components/news";

import "./styles.css";

class SingleArticle extends Component {
  state = {
    articleContent: null,
    articles: [],
    page: 1,
    pageSize: 6
  };

  componentDidMount() {
    this.loadSingleArticleByslug();
    this.loadArticles();
  }

  loadSingleArticleByslug = async () => {
    const { match } = this.props;
    const slug = match.params.slug;
    let response = null;
    let articleContent = null;
    response = await admin.article.getBySlug({ slug });
    articleContent = (await response.json()).data.value.result;
    this.setState(
      {
        articleContent
      },
      () => console.log("setState in didmount:", this.state.articleContent)
    );
  };

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
    // console.log("render");
    const { articleContent, articles } = this.state;
    return (
      <section className="single-blog-section">
        <Container>
          <Row>
            <Col md="7">
              <div className="single-article-container">
                {articleContent === null ? (
                  <Loader />
                ) : (
                  <>
                    <h1 className="single-article-container__title">
                      {articleContent.title}
                    </h1>
                    <p className="single-article-container__date">
                      Date: {formatDate(Number(articleContent.createdAt))}
                    </p>
                    <figure className="single-article-container__img">
                      <img src={articleContent.image} />
                    </figure>
                    <div
                      className="single-article-container__content"
                      dangerouslySetInnerHTML={{ __html: articleContent.body }}
                    />
                    <div className="single-article-container__tag-list d-flex">
                      <p className="single-article-container__tag-list__title">
                        Tags:
                      </p>
                      {articleContent.tags.map((item, index) => (
                        <span className="single-article-container__tag-list__item">
                          {item.title}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
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
      </section>
    );
  }
}

export default SingleArticle;
