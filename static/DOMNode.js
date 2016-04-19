import React from 'react'
import ReactDOM from 'react-dom'
var MyForm = React.createClass({
  getInitialState(){
    return {
      given_name:"",
      family_name:""
    };
  },
  submitHandler(){
    event.preventDefault();
    var words = [
      'Hi',this.state.given_name,this.state.family_name
    ];
    alert(words.join(" "));
  },
  render(){
    return(
      <form onSubmit={this.submitHandler}>
        <label htmlFor="given_name">Given Name:</label>
        <br />
        <input
          type="text"
          name="given_name"
          valueLink={this.linkState('given_name')} />
          <br />
          <label htmlFor="family_name">Family Name:</label>
          <br/>
          <input
            type="text"
            name="family_name"
            valueLink={this.linkState('family_name')} />
            <br />
            <button type="submit">Speak</button>
      </form>
      )
  }
});
ReactDOM.render(<MyForm/>,document.getElementById('app'))
