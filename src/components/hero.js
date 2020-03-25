import React from "react";

import styles from "./hero.module.css";

export default ({ data }) => (
  <div className={styles.hero}>
    <p className={styles.heroTitle}>{data.name}</p>
  </div>
);
