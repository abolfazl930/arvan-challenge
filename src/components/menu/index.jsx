import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <header className="header d-flex justify-content-between">
        <figure className="header__logo">
          <p>logo</p>
        </figure>
        <nav className="header__nav d-flex flex-row-reverse justify-content-center align-items-center">
          <button>test</button>
          <ul className="header__nav__menu d-flex">
            <li>home</li>
            <li>blog</li>
            <li>test</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
