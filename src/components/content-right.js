import React from "react";

import css from "./content-right.module.css";

class ContentRight extends React.Component {
  render() {
    const { children, bgColor } = this.props;

    const styles = {
      background: bgColor
    };

    return (
      <div className={css.contentRight} style={styles}>
        {children}
      </div>
    );
  }
}

export default ContentRight;
