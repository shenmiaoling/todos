import React from 'react'
import ReactDOM from 'react-dom'
var ContactView = React.createClass({
  submitHandler(event){
    event.preventDefault()
    alert('Hi')
  },
  render() {
    return(
      <form
        className='loginform'>
        <h1>登录账号</h1>
        <label>邮箱：
          <input
          type='text'/>
        </label>
        <br/><br/>
        <label>密码：
          <input type='password'/>
        </label>
        <br/>

        <button className='login_button'type='submit'
        onClick={this.submitHandler}>登陆</button>
        <br/>
        <label>没有注册账号?立即<a href='/sign_up'>注册</a></label>
      </form>
   )

  }
});
ReactDOM.render(<ContactView/>,
    document.getElementById("app")
);
