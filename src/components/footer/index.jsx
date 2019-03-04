import React, { Component } from "react";
import routes, { visibleRoutes } from "../../configs/routes";
import Container from "react-strap-grid/container";
import { Link } from "react-router-dom";

import "./styles.css";

class Footer extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <footer className="footer d-flex justify-content-between align-items-center">
        <Container className="d-flex justify-content-between align-items-center">
          <p className="footer-copyright">
            Powered By <b>❤</b> Abolfazl Ahmadi
          </p>
          <ul className="footer-menu d-flex">
            {visibleRoutes({ visibleIn: ["footer"] }).map((route, index) => (
              <li key={index}>
                <Link
                  className="footer-menu__item"
                  exact={route.exact}
                  to={route.path}
                >
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </footer>
    );
  }
}

export default Footer;
