import React from 'react'
import ReactDOM from 'react-dom'
import TimerMixin from 'react-timer-mixin'
var Timer = React.createClass({
  mixins:[TimerMixin],
  getInitialState(){
    return {secondsElapsed:0};
  },
  tick(){
    this.setState({
      secondsElapsed:this.state.secondsElapsed+1
      });
  },
  componentDidMount() {
    this.setInterval(
      this.tick,1

      000
      );
  },
  render (){
    return(
      <div>Seconds Elapsed:{this.state.secondsElapsed}</div>
      );
  }
});
ReactDOM.render(<Timer/>,document.getElementById("app"))
