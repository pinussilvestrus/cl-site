import React from 'react'

class Container extends React.Component {

  render() {
    const { children, dimen } = this.props;

    const styles = {
      gridAutoColumns: dimen
    };
    
    return (
      <div className="container" style={styles}>{children}</div>
    )
  }
}

export default Container
