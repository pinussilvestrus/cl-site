import React from "react";
import { Link } from "gatsby";

import styles from "./post-preview.module.css";

class PostPreview extends React.Component {
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
    const { post } = this.props;

    const { displayMore } = this.state;

    const moreStyle = {
      display: displayMore ? "block" : "none"
    };

    const previewImageStyle = {
      backgroundImage: `url(${post.heroImage.file.url})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover"
    };

    return (
      <div className={styles.preview}>
        <Link to={`/blog/${post.slug}/`}>
          <div
            className={styles.previewImage}
            style={previewImageStyle}
            onMouseOver={this.handleMouseover}
            onMouseLeave={this.handleMouseleave}
          >
            <div className={styles.hover}>
              <div className={styles.more} style={moreStyle}>
                mehr erfahren
              </div>
            </div>
          </div>
        </Link>
        <div className={styles.previewContent}>
          <p className={styles.postTimestamp}>{post.publishDate}</p>
          <br />
          <Link to={`/blog/${post.slug}/`}>
            <p className={styles.postTitle}>{post.title}</p>
          </Link>
          <p
            dangerouslySetInnerHTML={{
              __html: post.description.childMarkdownRemark.html
            }}
          ></p>
          <br />
          <a className={styles.moreContent} href={`/blog/${post.slug}/`}>
            Weiterlesen
          </a>
        </div>
      </div>
    );
  }
}

export default PostPreview;
