import React, { Component } from "react";
import Container from "react-strap-grid/container";
import Row from "react-strap-grid/row";
import Col from "react-strap-grid/col";

class Blog extends Component {
  render() {
    return (
      <section className="about-section">
        <Container>
          <Row>
            <Col md="8">a</Col>
            <Col md="4">b</Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Blog;
