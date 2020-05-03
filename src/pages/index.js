import React from "react";
import { graphql, Link } from "gatsby";
import get from "lodash/get";

import styles from "./index.module.css";

import Navigation from "../components/navigation";
import MobileNavigation from "../components/mobile-navigation";

import Layout from "../components/layout";
import Copyright from "../components/copyright";
import MainLeft from "../components/main-left";
import ContentRight from "../components/content-right";
import Hero from "../components/hero";

import isMobile from '../util/isMobile';

class RootIndex extends React.Component {

  state = {
    isMobile: false
  }

  componentDidMount() {
    this.setState({
      isMobile: isMobile(window)
    })
  }

  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const [author] = get(this, "props.data.allContentfulPerson.edges");

    const {
      isMobile
    } = this.state;

    return (
      <Layout location={this.props.location} dimen="1fr 1fr">
        <MainLeft bgColor={isMobile ? "#EFC8A5" : null}>
          {isMobile && <MobileNavigation />}
          <div className={styles.home}>
            <Hero data={author.node}></Hero>
            <p className={styles.hello}>hallo.</p>
            <div className={styles.introduction}>
                Ich bin <span>Corinna.</span><br/>
                Mein Herz schlägt für <span className={styles.blue}><br/>
                UX/Usability</span>, <span className={styles.green}>Zeichnen</span>, <br/>
                <span className={styles.yellow}>Musik</span>, <span className={styles.orange}>Schreiben</span> &amp;<br/>
                meinen &nbsp;<span className={styles.pink}><Link to="/contact">Kater Momo</Link></span>.
            </div>
            <div className={styles.btnContainer}>
              <Link to="/blog/">
                <button>woran ich gerade arbeite</button>
              </Link>
            </div>
            {isMobile && <Copyright />}
          </div>
        </MainLeft>
        {!isMobile && (
          <ContentRight>
            <Navigation />
            <div className={styles.profileImage}>
              <img src={author.node.heroImage.file.url}></img>
            </div>
            <Copyright />
          </ContentRight>
        )}
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
          title
          heroImage: image {
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
