import React from "react"
import ReactDOM from "react-dom"
const TweetBox = React.createClass({
  getInitialState:function(){
    return{
      tweets:[],
      text: '',
      photoAdded:false
    }
  },
  componentDidMount(){
    const tweetsKey = Object.keys(localStorage)
    const tweets = []
    for(let key of tweetsKey){
      const tweet = JSON.parse(localStorage.getItem(key))
      tweets.push(tweet)
    }
    this.setState({
      tweets:tweets
    })
  },
  togglePhoto: function(event){
    this.setState({photoAdded: !this.state.photoAdded})
  },
  handleChange:function(event){
    this.setState({
      text:event.target.value})
  },
  handleSubmit(event){
    event.preventDefault()
    const tweet = {
      text:this.state.text,
      done:false,
      id:+new Date()
    }
    localStorage.setItem('id:'+tweet.id, JSON.stringify(tweet))
    this.setState({
      tweets:this.state.tweets.concat([tweet])
    })
  },
  overflowAlert:function(){
    if (this.remainingCharaters() <0){
      var beforeOverflowText = this.state.text.substring(140 - 10,140)
      var overflowText = this.state.text.substring(140);
      return (
        <div>
          <strong>Oops! Too Long:</strong>
          &nbsp;...{beforeOverflowText}
          <strong>{overflowText}</strong>
        </div>
        );
    } else{
      return "";
    }
  },
  remainingCharaters:function(){
    if(this.state.photoAdded){
      return 140 -135-this.state.text.length;
    }
    else{
      return 140 -this.state.text.length;
    }
  },
  handleClick:function(){
    localStorage.clear()
    this.setState({
      tweets:[],
      text:''
    })
  },
  render: function(){
    return(
      <div>
        <div>
          {this.overflowAlert()}
          {this.state.tweets.map((item,index) => {
            return(
              <h1 key={index}>{item.text}</h1>
              )
          })}
        </div>
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange}></textarea>
        <br/>
        <button id ='push' disabled={this.remainingCharaters() === 140}>发布</button>
        </form>
        <span>剩余字数：{this.remainingCharaters()}</span>
        <button id ='Addphoto'onClick={this.togglePhoto}>{this.state.photoAdded ? '👍 Photo Added':'Add Photo'}</button>
        <button id = 'clear'onClick={this.handleClick}>清空</button>
      </div>
      )
  }
});
ReactDOM.render(<TweetBox />,document.getElementById('app'))
