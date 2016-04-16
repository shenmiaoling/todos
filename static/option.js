import React from 'react'
import ReactDOM from 'react-dom'
var MyForm = React.createClass({
  getInitialState(){
    return {
      options:{a:[],b:[],c:[]}
    };
  },
  handleChange(event){
    const options=this.state.options
    options[event.target.name]=[event.target.value,event.target.checked]
    this.setState({
      options:options
    });
  },
  submitHandler(event){
    event.preventDefault();
    const options=[]
    Object.keys(this.state.options).map((key,index)=>{
      if(this.state.options[key][1]){
        options[index]=this.state.options[key][0]
      }

    })
    alert(options.join(' ').trim());
  },
  render(){
    return(
      <form onSubmit={this.submitHandler}>
        <input type='checkbox' name='a'value='A' checked={this.state.options.a[1]}onChange={this.handleChange}/>A
        <input type='checkbox' name='b'value='B' checked={this.state.options.b[1]}onChange={this.handleChange}/>B
        <input type='checkbox' name='c'value='C' checked={this.state.options.c[1]}onChange={this.handleChange}/>C
        <br/>
        <button type='submit'>Speak</button>
      </form>
      );
  }
});
ReactDOM.render(<MyForm/>,document.getElementById('app'))
