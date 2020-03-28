import React from "react";
import { Link } from "gatsby";

import ReactGA from "react-ga";

import "./base.css";

import Container from "./container";

const __PREFIX_PATHS__ = process.env.__PREFIX_PATHS__;

class Layout extends React.Component {

  componentDidMount() {

    // initialize Google Analytics on every page
    ReactGA.initialize("UA-162105268-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { children, dimen } = this.props;

    return <Container dimen={dimen}>{children}</Container>;
  }
}

export default Layout;
