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

  /*componentWillMount: function(){
   	var oldThis = this;
   	this.timer = setInterval(function(){
   	var oldValue = oldThis.state.value;
   	var newValue = oldValue === 'X' ? 'O': 'X';
   	oldThis.setState({
   	value: newValue
   	});
   	}, 300);
 	},
 	componentWillUnmount: function(){
 	  clearInterval(this.timer);
 	},*/

  handleClick : function(){
    var oldValue = oldThis.state.value;
   	var newValue = oldValue === 'X' ? 'O': 'X';
    this.setState({value = newValue});
  }

  'render': function onRender () {
    return (
      <button onClick={this.handleClick} style={btnStyle}>{this.state.value}</button>
    );
  }
});
React.render(<Box initialValue='X'/>, document.body);
