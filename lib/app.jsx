'use strict';

var React = require('react');

var btnStyle = {
  height:'100px',
  width:'100px'
};

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  getInitialState: function() {
    return {value : this.props.initialValue};
  },
  'render': function onRender () {
    return (
      <button style={btnStyle}>{this.state.value}</button>
    );
  }
});
React.render(<Box initialValue='X'/>, document.body);
