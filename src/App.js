import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./configs/routes";
import Router from "./providers/router";
import Menu from "./components/menu";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Menu />
          <Router routes={Routes} />
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
