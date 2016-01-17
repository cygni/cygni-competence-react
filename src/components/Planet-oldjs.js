var React = require('react');

var Planet = React.createClass({
  render: function() {
    return (
      <div className="planet">
        <span className="planet__data planet__data--name">{this.props.name}</span>
        <span className="planet__data planet__data--temp">{this.props.temperature}K</span>
      </div>
    );
  }
});

module.exports = Planet;
