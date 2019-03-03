import React, { Component } from "react";
import imgHomeBg from "../../assets/images/home-background-bg.svg";
import "./styles.css";

class Home extends Component {
  render() {
    return (
      <section className="hero-section">
        <header className="hero-section__header">
          <figure className="header-bg">
            <img src={imgHomeBg} alt="home" />
          </figure>
        </header>
      </section>
    );
  }
}

export default Home;
