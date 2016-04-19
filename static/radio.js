import React from 'react'
import ReactDOM from 'react-dom'
var Radio = React.createClass({
  propType(){
    onChange:React.propTypes.func
  },
  getInitialState(){
    return{
      value:this.props.defaultValue
    };
  },
  handleChange(event){
    if(this.props.onChange){
      this.props.onChange(event);
    }
    this.setState({
      value:event.target.value
    });
  },
  render(){
    var children ={};
    var value = this.props.value||this.state.value;
    React.Children.forEach(this.props.children,function(child,i){
      var label = (
        <label>
          <input
            type='radio'
            name={this.props.value}
            value={child.props.value}
            checked={child.props.value==value}
            onChange={this.handleChange}/>
            {child.props.children}
            <br/>
        </label>
          );
      children['label'+i]=label;
    }.bind(this));
    return (<span>{children}</span>);
  }
});
ReactDOM.render(<Radio/>,document.getElementById('app'))
export default Radio
