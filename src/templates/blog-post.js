import React from "react";
import { graphql, Link } from "gatsby";
import get from "lodash/get";

import Navigation from "../components/navigation";
import MobileNavigation from "../components/mobile-navigation";

import Layout from "../components/layout";
import MainLeft from "../components/main-left";
import ContentRight from "../components/content-right";
import Copyright from "../components/copyright";
import Hero from "../components/hero";

import isMobile from '../util/isMobile';

import styles from "./blog-post.module.css";

class BlogPostTemplate extends React.Component {

  state = {
    isMobile: false
  }

  componentDidMount() {
    this.setState({
      isMobile: isMobile(window)
    })
  }

  render() {
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const [author] = get(this, "props.data.allContentfulPerson.edges");

    const post = get(this.props, "data.contentfulBlogPost");

    const {
      isMobile
    } = this.state;

    return (
      <Layout location={this.props.location} dimen="0.3fr 1fr">
        {!isMobile && (
          <MainLeft bgColor="#FBFCD0">
            <div className={styles.blog}>
              <Hero data={author.node}></Hero>
              <Link to="/blog/" className={styles.hello}>
                <p>blog</p>
              </Link>

              <ul className={styles.blogNavigation}>
                {posts.map((post, index) => (
                  <li key={"post-" + index}>
                    <a href={`/blog/${post.node.slug}/`}>
                      <i>{post.node.publishDate}: </i>
                      <b>{post.node.title}</b>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </MainLeft>
        )}
        <ContentRight bgColor="#FBFCD0">
          {isMobile && <MobileNavigation />}
          <Navigation />

          {isMobile && (
            <div className={styles.blog}>
              <Hero data={author.node}></Hero>
            </div>
          )}

          <Link to="/blog/" className={styles.back}>
            Zurück zur Blog-Übersicht
          </Link>
          <div className={styles.blogPostContent}>
            <p className={styles.publishDate}>{post.publishDate}</p>
            <br />
            <h1 className={styles.postTitle}>{post.title}</h1>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: post.description.childMarkdownRemark.html,
              }}
            />
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
            <br />
          </div>
          <Copyright style={{bottom: 0}} />
        </ContentRight>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "DD MMMM YYYY hh:mm", locale: "de")
      description {
        childMarkdownRemark {
          html
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "DD MMMM YYYY", locale: "de")
        }
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