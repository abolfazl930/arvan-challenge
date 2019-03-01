import React, { Component } from "react";
import Description from "../../microcomponents/description-holder";
import Input from "../../microcomponents/input";
import Button from "../../microcomponents/button";
import Container from "react-strap-grid/container";
import Row from "react-strap-grid/row";
import Col from "react-strap-grid/col";
import "./styles.css";
class Card extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <section className="news-section d-flex align-items-center">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <Description title={title} content={content} />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <div className="input-email-container">
                <Button className="input-email-container__btn">
                  Subscribe >
                </Button>
                <Input
                  type="search"
                  placeholder="Enter Email Address"
                  className="input-email-container__input"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Card;
