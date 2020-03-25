import React from "react";

import { Link } from "gatsby";

import styles from "./hero.module.css";

export default ({ data }) => (
  <div className={styles.hero}>
    <Link to="/">
      <p className={styles.heroTitle}>{data.name}</p>
    </Link>
  </div>
);
