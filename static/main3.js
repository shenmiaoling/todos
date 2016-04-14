import React from "react"
import ReactDOM from "react-dom"
const TweetBox = React.createClass({
  getInitialState:function(){
    return{
      text: '',
      photoAdded:false
    }
  },
  togglePhoto: function(event){
    this.setState({photoAdded: !this.state.photoAdded})
  },
  handleChange:function(event){
    this.setState({
      text:event.target.value})
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
      return 140 -23-this.state.text.length;
    }
    else{
      return 140 -this.state.text.length;
    }
  },
  render: function(){
    return(
      <div>
      {this.overflowAlert()}
        <textarea onChange={this.handleChange}></textarea>
        <br/>
        <button disabled={this.remainingCharaters() === 140}>Tweet</button>
        <span>{this.remainingCharaters()}</span>
        <button onClick={this.togglePhoto}>{this.state.photoAdded ? '👍 Photo Added':'Add Photo'}</button>
      </div>
      )
  }
});
ReactDOM.render(<TweetBox />,document.getElementById('app'))
