import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";

import styles from "./blog.module.css";

import Navigation from "../components/navigation";
import MobileNavigation from "../components/mobile-navigation";

import Layout from "../components/layout";
import MainLeft from "../components/main-left";
import ContentRight from "../components/content-right";
import Hero from "../components/hero";
import Copyright from "../components/copyright";
import PostPreview from "../components/post-preview";

import isMobile from '../util/isMobile';

class BlogIndex extends React.Component {

  state = {
    isMobile: false
  }

  componentDidMount() {
    this.setState({
      isMobile: isMobile(window)
    })
  }

  render() {
    // const fakePosts = [
    //   {
    //     id: "1",
    //     title: "Blogartikel 1",
    //     timestamp: '25. März 2020 13:45',
    //     description:
    //       " Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn."
    //   },
    //   {
    //     id: "2",
    //     title: "Blogartikel 2",
    //     timestamp: '25. März 2020 13:45',
    //     description:
    //       " Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn."
    //   },
    //   {
    //     id: "3",
    //     title: "Blogartikel 3",
    //     timestamp: '25. März 2020 13:45',
    //     description:
    //       " Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn."
    //   },
    //   {
    //     id: "3",
    //     title: "Blogartikel 4",
    //     timestamp: '25. März 2020 13:45',
    //     description:
    //       " Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn."
    //   }
    // ];

    const posts = get(this, "props.data.allContentfulBlogPost.edges");

    const [author] = get(this, "props.data.allContentfulPerson.edges");

    const {
      isMobile
    } = this.state;

    return (
      <Layout location={this.props.location} dimen="0.3fr 1fr">
        {!isMobile && (
          <MainLeft bgColor="#FBFCD0">
            <div className={styles.blog}>
              <Hero data={author.node}></Hero>
              <p className={styles.hello}>blog</p>

              <ul className={styles.blogNavigation}>
                {posts.map((post, index) => (
                  <li key={"post-" + index}>
                    <a href={`/blog/${post.node.slug}/`}>
                      <i>{post.node.short}: </i>
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
              <p className={styles.hello}>blog</p>

              <div className={styles.postsPreviews}>
                {posts.map((post, index) => (
                  <PostPreview key={"post-" + index} post={post.node} />
                ))}
              </div>

              <Copyright style={{bottom: 0}} />
            </div>
          )}

          {!isMobile && (
            <div className={styles.postsPreviews}>
              {posts.map((post, index) => (
                <PostPreview key={"post-" + index} post={post.node} />
              ))}
              <Copyright style={{bottom: 0}} />
            </div>
          )}
        </ContentRight>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "DD MMMM YYYY hh:mm", locale: "de")
          short: publishDate(formatString: "DD MMMM YYYY", locale: "de")
          heroImage: heroImage {
            file {
              url
              fileName
              contentType
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
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
