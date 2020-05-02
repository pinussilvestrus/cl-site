import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";

import styles from "./contact.module.css";

import Navigation from "../components/navigation";
import MobileNavigation from "../components/mobile-navigation";

import Layout from "../components/layout";
import MainLeft from "../components/main-left";
import ContentRight from "../components/content-right";
import Hero from "../components/hero";

import MailSvg from "../resources/mail.svg";
import LinkedInSvg from "../resources/linkedin.svg";
import TwitterSvg from "../resources/twitter.svg";

import isMobile from '../util/isMobile';

class ContactIndex extends React.Component {

  state = {
    isMobile: false
  }

  componentDidMount() {
    this.setState({
      isMobile: isMobile(window)
    })
  }

  render() {
    const [author] = get(this, "props.data.author.edges");
    const [meow] = get(this, "props.data.meow.edges");

    const {
      isMobile
    } = this.state;

    return (
      <Layout location={this.props.location} dimen="1fr 1fr">
        <MainLeft bgColor="#EFC8A5">
          {isMobile && <MobileNavigation />}
          <div className={styles.contact}>
            <Hero data={author.node}></Hero>
            <p className={styles.hello}>kontakt</p>

            <div className={styles.meowImage}>
              <img src={meow.node.image.file.url}/>
            </div>

            {isMobile && <ContactInfo author={author} />}
          </div>
        </MainLeft>
        {!isMobile && (
          <ContentRight bgColor="#FDFBF5">
            <Navigation />
            <ContactInfo author={author} />
          </ContentRight>
        )}
      </Layout>
    );
  }
}

export default ContactIndex;

function ContactInfo({author}) {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.image}></div>
      <div className={styles.infoBoxes}>
        <div className={styles.infoBox}>
          <MailSvg className={styles.icon} />
          <div>
            <p>mail:</p>
            <a href={`mailto:${author.node.email}`}>
              <p>{author.node.email}</p>
            </a>
          </div>
        </div>

        <div className={styles.infoBox}>
          <LinkedInSvg className={styles.icon} />
          <div>
            <p>linkedin:</p>
            <a
              href={`https://www.linkedin.com/in/${author.node.linkedIn}/`}
              target="_blank"
            >
              https://www.linkedin.com/in/{author.node.linkedIn}/
            </a>
          </div>
        </div>

        <div className={styles.infoBox}>
          <TwitterSvg className={styles.icon} />
          <div>
            <p>twitter:</p>
            <a
              href={`https://twitter.com/${author.node.twitter}/`}
              target="_blank"
            >
              <p>@{author.node.twitter}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ContactIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    author: allContentfulPerson(
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
    meow: allContentfulPerson(
      filter: { contentful_id: { eq: "71jnlrei5kJWaPnYTbFVEG" } }
    ) {
      edges {
        node {
          image: image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`;