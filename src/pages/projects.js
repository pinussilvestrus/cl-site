import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";

import styles from "./projects.module.css";

import Navigation from "../components/navigation";
import Layout from "../components/layout";
import MainLeft from "../components/main-left";
import ContentRight from "../components/content-right";
import Hero from "../components/hero";
import ProjectPreview from "../components/project-preview";

class ProjectsIndex extends React.Component {
  render() {
    // todo(pinussilvestrus): get from contentful API
    const projects = [
      {
        id: "1",
        title: "Projektitel 1",
        description:
          " Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn."
      },
      {
        id: "2",
        title: "Projektitel 2",
        description:
          " Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn."
      },
      {
        id: "3",
        title: "Projektitel 3",
        description:
          " Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn."
      },
      {
        id: "3",
        title: "Projektitel 4",
        description:
          " Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn."
      }
    ];

    const [author] = get(this, "props.data.allContentfulPerson.edges");

    return (
      <Layout location={this.props.location} dimen="0.3fr 1fr">
        <MainLeft bgColor="#BAE4E5">
          <div className={styles.projects}>
            <Hero data={author.node}></Hero>
            <p className={styles.hello}>projekte</p>
            
            <ul className={styles.projectNavigation}>
              {projects.map((project, index) => (
                <li key={"project-" + index}><a href="#">{project.title}</a></li>
              ))}
            </ul>
          </div>
        </MainLeft>
        <ContentRight bgColor="#BAE4E5">
          <Navigation />
          <div className={styles.projectPreviews}>
            {projects.map((project, index) => (
              <ProjectPreview key={"project-" + index} project={project} />
            ))}
          </div>
        </ContentRight>
      </Layout>
    );
  }
}

export default ProjectsIndex;

export const pageQuery = graphql`
  query ProjectsIndexQuery {
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
