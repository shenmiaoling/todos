import React from 'react'
import ReactDOM from 'react-dom'
var SignUp = React.createClass({
  render() {
    return(
      <form className='center'>
        <h1>注册账号</h1>
        <label>用户名：</label>
        <input type='text'/>
        <br/><br/>
        <label>邮箱：</label>
        <input type='text'/>
        <br/><br/>
        <label>密码：</label>
        <input type='password'/>
        <br/><br/>
        <label>再次确认密码：</label>
        <input type='password'/>
        </form>
      )
  }
});
ReactDOM.render(<SignUp/>,document.getElementById('app'))
