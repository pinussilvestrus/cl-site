import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";

import styles from "./blog.module.css";

import Navigation from "../components/navigation";
import Layout from "../components/layout";
import MainLeft from "../components/main-left";
import ContentRight from "../components/content-right";
import Hero from "../components/hero";
import PostPreview from "../components/post-preview";


class BlogIndex extends React.Component {
  render() {
    const posts = [
      {
        id: "1",
        title: "Blogartikel 1",
        timestamp: '25. März 2020 13:45', 
        description:
          " Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn."
      },
      {
        id: "2",
        title: "Blogartikel 2",
        timestamp: '25. März 2020 13:45', 
        description:
          " Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn."
      },
      {
        id: "3",
        title: "Blogartikel 3",
        timestamp: '25. März 2020 13:45', 
        description:
          " Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn."
      },
      {
        id: "3",
        title: "Blogartikel 4",
        timestamp: '25. März 2020 13:45', 
        description:
          " Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn."
      }
    ];

    const [author] = get(this, "props.data.allContentfulPerson.edges");

    return (
      <Layout location={this.props.location} dimen="0.3fr 1fr">
        <MainLeft bgColor="#FBFCD0">
          <div className={styles.blog}>
            <Hero data={author.node}></Hero>
            <p className={styles.hello}>blog</p>

            <ul className={styles.blogNavigation}>
              {posts.map((post, index) => (
                <li key={"post-" + index}><a href="#">{post.title}</a></li>
              ))}
            </ul>
          </div>
        </MainLeft>
        <ContentRight bgColor="#FBFCD0">
          <Navigation />
          <div className={styles.postsPreviews}>
            {posts.map((post, index) => (
              <PostPreview key={"post-" + index} post={post} />
            ))}
          </div>
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
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
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
