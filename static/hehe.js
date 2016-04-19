import React from 'react'
import ReactDOM from 'react-dom'
import Radio from './radio'
var MyForm =React.createClass({
  getInitialState(){
    return{
      my_radio:"B"
    };
  },
  handleChange(event){
    this.setState({
      my_radio:event.target.value
    })
  },
  submitHandler(event){
    event.preventDefault();
    alert(this.state.my_radio);
  },
  render(){
    return(
      <form onSubmit={this.submitHandler}>
        <Radio name="my_radio"
          value={this.state.my_radio}
          onChange={this.handleChange}>
            <option value="A">First Option</option>
            <option value="B">Second Option</option>
            <option value="C">Third Option</option>
        </Radio>
        <button type="submit">Speak</button>
      </form>
    );
  }
});
ReactDOM.render(<MyForm />,document.getElementById('app'))
