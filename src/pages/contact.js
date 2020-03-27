import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";

import styles from "./contact.module.css";

import Navigation from "../components/navigation";
import Layout from "../components/layout";
import MainLeft from "../components/main-left";
import ContentRight from "../components/content-right";
import Hero from "../components/hero";

class ContactIndex extends React.Component {
  render() {
    const [author] = get(this, "props.data.allContentfulPerson.edges");

    return (
      <Layout location={this.props.location} dimen="1fr 1fr">
        <MainLeft bgColor="#EFC8A5">
          <div className={styles.contact}>
            <Hero data={author.node}></Hero>
            <p className={styles.hello}>kontakt</p>
            <p className={styles.introduction}>
              Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken
              kann. Es war nicht leicht zu verstehen, was es bedeutet, ein
              blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen
              Sinn.
            </p>
          </div>
        </MainLeft>
        <ContentRight bgColor="#FDFBF5">
          <Navigation />
        </ContentRight>
      </Layout>
    );
  }
}

export default ContactIndex;

export const pageQuery = graphql`
  query ContactIndexQuery {
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
        }
      }
    }
  }
`;
