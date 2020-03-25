import React from 'react'

import styles from "./content-right.module.css"

export default ({ children }) => (
  <div className={styles.contentRight}>
    {children}
  </div>
)
