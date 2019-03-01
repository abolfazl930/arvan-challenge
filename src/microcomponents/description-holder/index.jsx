import React, { Component } from "react";
import "./styles.css";
class Description extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <div className="description-container">
        <h2 className="description-container__title">{title}</h2>
        <p className="description-container__content">{content}</p>
      </div>
    );
  }
}

export default Description;
