import React from 'react'
import { Link } from 'gatsby'

import './base.css'


import Container from './container'
import Navigation from './navigation'

const __PREFIX_PATHS__ = process.env.__PREFIX_PATHS__;

class Template extends React.Component {
  render() {
    const { children, dimen } = this.props

    return (
      <Container dimen={dimen}>
        {children}
      </Container>
    )
  }
}

export default Template
