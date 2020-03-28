import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './post-preview.module.css'

// todo(pinussilvestrus): add post preview images
class PostPreview extends React.Component {

  render() {
    const { post } = this.props;

    return (
      <div className={styles.preview}>
        <div 
          className={styles.previewImage}>
        </div>
        <div className={styles.previewContent}>
          <p className={styles.postTitle}>{post.title}</p>
          {post.description}
        </div>
      </div>
    )
  }
}

export default PostPreview;
