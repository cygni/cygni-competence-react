import React, { PropTypes } from 'react';

const FatBorderWrapper = React.createClass({
  displayName: 'FatBorderWrapper',
  propTypes: {
    children: PropTypes.node
  },
  render() {
    return (
      <div className="fat-border-wrapper">
        {this.props.children}
      </div>
    );
  }
});

export default FatBorderWrapper;
