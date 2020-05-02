import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName={styles.navigationItemActive}>
          hallo.
        </Link>
      </li>
      {/* <li className={`${styles.navigationItem} ${styles.itemProjects}`}>
        <Link to="/projects/" activeClassName={styles.navigationItemActive}>
          projekte
        </Link>
      </li> */}
      <li className={`${styles.navigationItem} ${styles.itemBlog}`}>
        <Link
          to="/blog/"
          partiallyActive={true}
          activeClassName={styles.navigationItemActive}
        >
          blog
        </Link>
      </li>
      <li className={`${styles.navigationItem} ${styles.itemContact}`}>
        <Link to="/contact/" activeClassName={styles.navigationItemActive}>
          kontakt
        </Link>
      </li>
    </ul>
  </nav>
);
