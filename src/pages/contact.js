import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";

import styles from "./contact.module.css";

import Navigation from "../components/navigation";
import Layout from "../components/layout";
import MainLeft from "../components/main-left";
import ContentRight from "../components/content-right";
import Hero from "../components/hero";

import MailSvg from "../resources/mail.svg";
import LinkedInSvg from "../resources/linkedin.svg";
import TwitterSvg from "../resources/twitter.svg";

class ContactIndex extends React.Component {
  render() {
    const [author] = get(this, "props.data.allContentfulPerson.edges");

    console.log(author);

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
          <div className={styles.contactInfo}>
            <div className={styles.image}></div>
            <div className={styles.infoBoxes}>
              <div className={styles.infoBox}>
                <MailSvg className={styles.icon} />
                <div>
                  <p>mail:</p>
                  <p>{author.node.email}</p>
                </div>
              </div>

              <div className={styles.infoBox}>
                <LinkedInSvg className={styles.icon} />
                <div>
                  <p>linkedin:</p>
                  <a href={`https://www.linkedin.com/in/${author.node.linkedIn}/`} target="_blank">https://www.linkedin.com/in/{author.node.linkedIn}/</a>
                </div>
              </div>

              <div className={styles.infoBox}>
                <TwitterSvg className={styles.icon} />
                <div>
                  <p>twitter:</p>
                  <p>@{author.node.twitter}</p>
                </div>
              </div>
            </div>
          </div>
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
          twitter
          title
          linkedIn
          email
        }
      }
    }
  }
`;
