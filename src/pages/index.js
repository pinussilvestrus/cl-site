import React from "react";
import { graphql, Link } from "gatsby";
import get from "lodash/get";

import styles from "./index.module.css";

import Navigation from "../components/navigation";
import Layout from "../components/layout";
import MainLeft from "../components/main-left";
import ContentRight from "../components/content-right";
import Hero from "../components/hero";

import isMobile from '../util/isMobile';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const [author] = get(this, "props.data.allContentfulPerson.edges");

    return (
      <Layout location={this.props.location} dimen="1fr 1fr">
        <MainLeft bgColor={isMobile() ? '#EFC8A5' : null}>
          <div className={styles.home}>
            <Hero data={author.node}></Hero>
            <p className={styles.hello}>hallo.</p>
            <p className={styles.introduction}>
              Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken
              kann. Es war nicht leicht zu verstehen, was es bedeutet, ein
              blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen
              Sinn.
            </p>
            <div className={styles.btnContainer}>
              <Link to="/projects/">
                <button>Check out my work</button>
              </Link>
            </div>
          </div>
        </MainLeft>
        {!isMobile() &&
          <ContentRight>
            <Navigation />
          </ContentRight>
        }
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
