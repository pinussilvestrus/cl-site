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

    return (
      <Container dimen={dimen}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Corinna Laabs Website</title>
          <link rel="canonical" href="https://corinnalaabs.de" />
          <meta name="description" content="Corinna Laabs Website"></meta>
          <meta
            name="keywords"
            content="Corinna Laabs, Berlin, Website, UX Professional"
          ></meta>
          <meta name="author" content="Corinna Laabs"></meta>
          <meta
            name="google-site-verification"
            content="g9p0puu6FcsJ4jgeF-mMRCaFRyihrlLc9jSQNkeCpJs"
          />
        </Helmet>

        {children}
      </Container>
    );
  }
}

export default Layout;
