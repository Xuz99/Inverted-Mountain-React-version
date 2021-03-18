import React, { Component, Fragment } from "react";
import "./styles/app.css";
import "./styles/custom.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Play from "./components/Play";
import Newsletter from "./components/Newsletter";
import Listen from "./components/Listen";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Navbar />
        <LandingPage />
        <Play />
        <Newsletter />
        <Listen />
        <Connect />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
