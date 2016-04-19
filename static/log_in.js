import React from 'react'
import ReactDOM from 'react-dom'
var ContactView = React.createClass({
  getInitialState(){
    return{
      user_name:''
      }

  },
  handleChange(name,event){
    var newState = {};
    newState[name] = event.target.value;
    this.setState(newState);
  },
  submitHandler(event){
    event.preventDefault()
    alert('Hi',user_name)
  },
  render() {
    return(
      <form
        className='loginform'
        align='center'
        onSubmit={this.submitHandler}>
        <h1>登录账号</h1>
        <label>邮箱：
          <input
          type='text'
          value={this.state.user_name}
          onChange={this.handleChange}/>
        </label>
        <br/><br/>
        <label>密码：
          <input type='password'/>
        </label>
        <br/>

        <button className='login_button'type='submit'>登陆</button>
        <br/>
        <label>忘记密码?立即<a href='/sign_up'>注册</a></label>
      </form>
   )

  }
});
ReactDOM.render(<ContactView/>,
    document.getElementById("app")
);
