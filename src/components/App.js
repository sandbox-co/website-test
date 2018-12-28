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
import Footer from "./Footer";
import ScrollIcon from "./ScrollIcon";

class App extends Component {
  state = {
    screen: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    this.setState({
      screen: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  render() {
    const { width, height } = this.state.screen;
    return (
      <ParallaxProvider>
        <Intro />
        <ScrollIcon />
        <SideBar />
        <About width={width} height={height} />
        <Learn />
        <Events width={width} height={height} />
        <Partners />
        <People />
        <Footer width={width} height={height} />
      </ParallaxProvider>
    );
  }
}

export default App;
