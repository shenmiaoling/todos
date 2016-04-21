import React from 'react'
import ReactDOM from 'react-dom'
var SignUp = React.createClass({
  handleClick(event) {
    event.preventDefault();
    alert('注册成功')
    },
  render() {
    return(
      <form className='center'>
        <h1>注册账号</h1>
        <label>用户名：</label>
        <input type='text'
        placeholder="不能包含特殊字符"/>
        <br/><br/>
        <label>邮箱：</label>
        <input type='email'
          placeholder="使用正确邮箱格式"
          />
        <br/><br/>
        <label>密码：</label>
        <input type='password'
          placeholder="6位数字密码"/>
        <br/><br/>
        <label>再次确认密码：</label>
        <input type='password'/><br/><br/>
        <button
          type='submit'
          onClick={this.handleClick}>提交</button>
        </form>
      )
  }
});
ReactDOM.render(<SignUp/>,document.getElementById('app'))
