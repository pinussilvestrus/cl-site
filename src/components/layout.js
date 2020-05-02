import React from "react";

import { Helmet } from "react-helmet"

import ReactGA from "react-ga";

import "./base.css";

import Container from "./container";

class Layout extends React.Component {

  componentDidMount() {

    // initialize Google Analytics on every page
    ReactGA.initialize("UA-162105268-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { children, dimen } = this.props;

    return <Container dimen={dimen}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Corinna Laabs Portfolio</title>
        <link rel="canonical" href="https://corinnalaabs.de" />
        <meta name="description" content="Corinna Laabs Portfolio"></meta>
        <meta name="keywords" content="Corinna Laabs, Berlin, Portfolio, UX Professional"></meta>
        <meta name="author" content="Corinna Laabs"></meta>
      </Helmet>

      {children}
    </Container>;
  }
}

export default Layout;
