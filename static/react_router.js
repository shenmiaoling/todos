import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,IndexRoute,browserHistory} from 'react-router'
const App = React.createClass({
  render(){
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
      )
  }
})
const Dashboard = React.createClass({
  render(){
    return(
    <div>Welcome to the app!
      <a href='/inbox' target='_blank'>ok</a>
    </div>)
  }
})
const About = React.createClass({
  render(){
    return <h3>About</h3>
  }
})
const Inbox = React.createClass({
  render(){
    return (
      <div>
        <h2>Inbox</h2>
         {this.props.children||"Welcome to your Inbox"}
      </div>
      )
  }
})
const Message = React.createClass({
  render(){
      return <h3>Message{this.props.params.id}</h3>
    }

})
const NotFound = React.createClass({
  render(){
    return <h1>oh no~</h1>
  }
})
const Inboxx = React.createClass({
  render(){
    return <Inbox><h1>haha</h1></Inbox>
  }
})
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
    </Route>

      <Route path="about" component={About}/>
      <Route path="inbox" component={Inboxx}>
        <Route path="messages/:id" component={Message}/>
      </Route>
      <Route path='*' component={NotFound}></Route>
  </Router>),document.getElementById('app'))
