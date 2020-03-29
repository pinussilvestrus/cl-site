import React from "react";
import { Link } from "gatsby";

import styles from "./project-preview.module.css";

class ProjectPreview extends React.Component {
  state = {
    displayMore: false
  };

  handleMouseover = () => {
    this.setState({
      displayMore: true
    });
  };

  handleMouseleave = () => {
    this.setState({
      displayMore: false
    });
  };

  render() {
    const {
      project: { node: project }
    } = this.props;

    const { displayMore } = this.state;

    const moreStyle = {
      display: displayMore ? "block" : "none"
    };

    const previewImageStyle = {
      backgroundImage: `url(${project.image.file.url})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover"
    };

    return (
      <div className={styles.preview}>
        <Link to="#">
          <div
            className={styles.previewImage}
            onMouseOver={this.handleMouseover}
            onMouseLeave={this.handleMouseleave}
            style={previewImageStyle}
          >
            <div className={styles.hover}>
              <div className={styles.more} style={moreStyle}>
                mehr erfahren
              </div>
            </div>
          </div>
        </Link>
        <div className={styles.previewContent}>
          <span className={styles.projectTitle}>{project.title}</span>
          <p
            dangerouslySetInnerHTML={{
              __html: project.description.childMarkdownRemark.html
            }}
          ></p>
        </div>
      </div>
    );
  }
}

export default ProjectPreview;
