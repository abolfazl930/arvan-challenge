import React, { Component } from "react";
import { Link } from "react-router-dom";
import routes, { visibleRoutes } from "../../configs/routes";
import Button from "../../microcomponents/button";
import Container from "react-strap-grid/container";
import imgLogo from "../../assets/images/logo.png";
import "./styles.css";
class Menu extends Component {
  render() {
    // const { routes } = this.props;
    return (
      <Container>
        <nav className="header__nav d-flex justify-content-between align-items-center">
          <figure className="header__nav__logo">
            <img src={imgLogo} />
          </figure>
          <div className="d-flex align-items-center">
            <ul className="header__nav__menu">
              {visibleRoutes({ visibleIn: ["header"] }).map((route, index) => (
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
      </Container>
    );
  }
}

export default Menu;
