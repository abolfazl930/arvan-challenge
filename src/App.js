import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./configs/routes";
import Router from "./providers/router";
import Header from "./components/header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header routes={Routes} />
          <Router routes={Routes} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
