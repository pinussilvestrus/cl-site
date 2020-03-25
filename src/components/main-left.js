import React from 'react'

import styles from "./main-left.module.css"

export default ({ children }) => (
  <div className={styles.mainLeft}>
    {children}
  </div>
)
