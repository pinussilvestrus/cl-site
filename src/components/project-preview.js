import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './project-preview.module.css'

// todo(pinussilvestrus): add project preview images
export default ({ project }) => (
  <div className={styles.preview}>
    <div className={styles.previewImage}>

    </div>
    <div className={styles.previewContent}>
      <span className={styles.projectTitle}>{project.title}.</span>{project.description}
    </div>
  </div>
)
