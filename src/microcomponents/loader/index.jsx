import React, { Component } from "react";
import imgLoader from "../../assets/images/loader.gif";
import "./styles.css";

class Loader extends Component {
  render() {
    const { className } = this.props;
    return (
      <div
        className={[
          "loader-container d-flex justify-content-center align-items-center",
          className
        ].join(" ")}
      >
        <img src={imgLoader} className="Loader-container__img" />
      </div>
    );
  }
}

export default Loader;
