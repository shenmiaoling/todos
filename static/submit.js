import React from 'react'
import ReactDOM from 'react-dom'
const MyForm = React.createClass({
  getInitialState(){
    return {
      helloTo:"Hello World!"
    }
  },
  handleChange(event){
    this.setState({
      helloTo:event.target.value
    });
  },
  submitHandler(event){
    event.preventDefault();
    alert(this.state.helloTo.toUpperCase());
  },

  render(){
    return(
      <form onSubmit={this.submitHandler}>
        <input type='text' value={this.state.helloTo}
        onChange={this.handleChange}/>
        <br/>
        <span>{140 - this.state.helloTo.length}</span>
        <button type='submit'>Speak</button>
      </form>
      );
  }
});
ReactDOM.render(<MyForm/>,document.getElementById('app'));
