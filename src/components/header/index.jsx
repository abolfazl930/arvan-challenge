import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../microcomponents/button";
import Container from "react-strap-grid/container";
import "./styles.css";
class Header extends Component {
  render() {
    const { routes } = this.props;
    return (
      <header className="header d-flex">
        <Container>
          <nav className="header__nav d-flex justify-content-between align-items-center">
            <figure className="header__nav__logo">logo</figure>
            <div className="d-flex align-items-center">
              <ul className="header__nav__menu">
                {routes.map((route, index) => (
                  <li key={index}>
                    <Link
                      className="header__nav__menu__menu-item"
                      exact={route.exact}
                      to={route.path}
                    >
                      {route.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button
                type="button"
                color="suceess"
                className="header__account-btn"
              >
                Create Account
              </Button>
            </div>
          </nav>
          <div className="header__title d-flex flex-column align-items-center justify-content-center">
            <h1>Our Blog</h1>
            <p>home - blog</p>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
