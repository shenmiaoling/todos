import React from "react"
import ReactDOM from "react-dom"
const Todos = React.createClass({
  getInitialState(){
    return {
      todos: [],
      title:''
    }
  },
  componentDidMount(){
    const todosKeys = Object.keys(localStorage)
    const todos = []
    for (let key of todosKeys){
      const todo = JSON.parse(localStorage.getItem(key))
      todos.push(todo)
    }
    this.setState({
      todos:todos
    })
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
  handleClick(event){
    localStorage.clear()
    this.setState({todos:[],title:''})
  },
  handleDelete(id,event){
    localStorage.removeItem('id:'+id)
    const todos = this.state.todos.filter((item)=>{
      return item.id != id
    })
    this.setState({todos:todos})
  },
  render(){
    return (<div>
      {this.state.todos.map((item,index) => {
        return(<div key={index}>
          <span>{item.title}</span>
          <button onClick={this.handleDelete.bind(this,item.id)}>X</button>
          </div>)
      })}
      <form onSubmit={this.handleSubmit}>
        <input type = 'text' value = {this.state.title} onChange = {this.handleChange} />
      </form>
      <input type = 'button' value = '清空' onClick={this.handleClick} />
      </div>)
  }
});
ReactDOM.render(<Todos />,document.getElementById('app'))
