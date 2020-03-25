import React from "react";

import css from "./main-left.module.css";

class Mainleft extends React.Component {
  render() {
    const { children, bgColor } = this.props;

    const styles = {
      background: bgColor
    };

    return (
      <div className={css.mainLeft} style={styles}>
        {children}
      </div>
    );
  }
}

export default Mainleft;
