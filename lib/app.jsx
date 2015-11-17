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
    return {this.props.initialValue};
  },
  'render': function onRender () {
    return (
      <button style={btnStyle}>{getInitialState}</button>
    );
  }
});
React.render(<Box initialValue='X'/>, document.body);
