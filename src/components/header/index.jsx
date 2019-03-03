import React, { Component } from "react";
import "./styles.css";
class Header extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <header className="header d-flex justify-content-center align-items-center">
        <div className="header__title d-flex flex-column align-items-center justify-content-center">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </header>
    );
  }
}

export default Header;
