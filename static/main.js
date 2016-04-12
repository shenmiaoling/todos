import React from 'react'
import ReactDOM from 'react-dom'
const Todos = React.createClass({
  getInitialState(){
    return {
      todos: [],
      title:''
    }
  },
  handleSubmit(event){
    event.preventDefault()
    const todo = {
      title:this.state.title,
      done:false,
      id:+new Date()
    }
    localStorage.setItem('id:'+todo.id, JSON.stringify(todo))
    this.setState({
      todos:this.state.todos.concat([todo])
    })
  },
  handleChange(event){
    this.setState({
      title:event.target.value
    })
  },
  render(){
    return (<div>
      {this.state.todos.map((item,index) => {
        return(<h1 key={index}>{item.title}</h1>)
      })}
    <form onSubmit={this.handleSubmit}>
      <input type = 'text' value={this.state.title} onChange={this.handleChange}/>
    </form>

    </div>)
  }
})

ReactDOM.render(<Todos />,document.getElementById('app'))
