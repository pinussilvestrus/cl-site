import React from "react";
import { Link } from "gatsby";

import styles from "./post-preview.module.css";

// todo(pinussilvestrus): add post preview images
class PostPreview extends React.Component {
  render() {
    const { post } = this.props;

    console.log(post);

    const previewImageStyle = {
      backgroundImage: `url(${post.heroImage.file.url})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover"
    };

    return (
      <div className={styles.preview}>
         <Link to="#">
            <div
              className={styles.previewImage}
              style={previewImageStyle}
            >
              <div className={styles.hover} />
            </div>
        </Link>
        <div className={styles.previewContent}>
          <p className={styles.postTimestamp}>{post.publishDate}</p>
          <br />
          <p className={styles.postTitle}>{post.title}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: post.description.childMarkdownRemark.html
            }}
          ></p>
          <br />
          <a className={styles.more} href="#">
            Weiterlesen
          </a>
        </div>
      </div>
    );
  }
}

export default PostPreview;
