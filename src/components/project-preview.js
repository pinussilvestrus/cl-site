import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './project-preview.module.css'

// todo(pinussilvestrus): add project preview images
class ProjectPreview extends React.Component {

  state = {
    displayMore: false
  }

  handleMouseover = () => {
    this.setState({
      displayMore: true
    })
  }

  handleMouseleave = () => {
    this.setState({
      displayMore: false
    })
  }

  render() {
    const { project } = this.props;
    
    const { displayMore } = this.state;

    const moreStyle = {
      display: displayMore ? 'block' : 'none'
    };

    return (
      <div className={styles.preview}>
        <div 
          className={styles.previewImage}
          onMouseOver={this.handleMouseover}
          onMouseLeave={this.handleMouseleave} >
            <div className={styles.more} style={moreStyle}><a>mehr erfahren</a></div>
        </div>
        <div className={styles.previewContent}>
          <span className={styles.projectTitle}>{project.title}.</span>{project.description}
        </div>
      </div>
    )
  }
}

export default ProjectPreview;
