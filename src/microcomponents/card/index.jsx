import React, { Component } from "react";
import "./styles.css";
class Card extends Component {
  render() {
    const { img, title, content } = this.props;
    return (
      <div className="card">
        <figure className="card__header">
          <img src={img} />
        </figure>
        <div class="card__body">
          <h4 className="card__body__title">{title}</h4>
          <p className="card__body__content">{content}</p>
        </div>
      </div>
    );
  }
}

export default Card;
