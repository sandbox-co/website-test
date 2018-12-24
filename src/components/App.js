import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import "./App.scss";

import SideBar from "./SideBar";
import Intro from "./Intro";
import About from "./About";
import Learn from "./Learn";
import Events from "./Events";
import Partners from "./Partners";
import People from "./People";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Intro />
        <SideBar />
        <About />
        <Learn />
        <Events />
        <Partners />
        <People />
      </ParallaxProvider>
    );
  }
}

export default App;