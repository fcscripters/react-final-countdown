var React = require('react');

var Countdown = React.createClass({

  displayNone: function(e){
    document.getElementById('PopUp').style.display = "none";
    this.props.afterTimeOut();
  },

  getInitialState: function(){
    return {time: this.props.min*60}
  },

  update: function(){
    var newTime = this.state.time - 1;
    this.setState({time:newTime});
    if(this.state.time ===0){
      clearInterval(this.decr);
      this.props.afterUnmount
    }
  },

  render: function(){
  var moreThanMin = {
    "text-align":"center",
    "font-size": 10,
    "text-shadow": "1px 1px 2px #000000",
    padding: 10,
    color: "white",
    position:"fixed",
    top:16,
    right: 16,
    height:"auto",
    width:80,
    "background-color": "rgba(0,0,3,0.3)",
    "font-family": "Courier New"
  };

  var lessThanMin = {
    "text-align":"center",
    "font-size": 10,
    padding: 10,
    color: "rgba(195,0,0,1)",
    "text-shadow": "1px 1px 2px #000000",
    position:"fixed",
    top:16,
    right: 16,
    height:"auto",
    width: 80,
    "background-color": "rgba(0,0,3,0.3)",
    "font-family": "Courier New"
  };

  var promptStyle = {
    "text-align":"center",
    "font-size": 10,
    "text-shadow": "1px 1px 2px #000000",
    padding: 10,
    color: "white",
    position:"fixed",
    top:"30%",
    right: "25%",
    height:"30%",
    width:"50%",
    "background-color": "rgba(0,0,3,0.8)",
    "font-family": "Courier New",
    "justify-content":"center",
    "align-items":"center",
    display:"flex"
  };

  var btn = {
   "background-color":"#44c767",
   "-moz-border-radius":"28px",
   "-webkit-border-radius":"28px",
   "border-radius":"24px",
  "border":"1px solid #18ab29",
   "display":"inline-block",
   "cursor":"pointer",
   "color":"#ffffff",
   "font-family": "Courier New",
   "font-size":"16px",
   padding:14,
   margin:10,
   "text-decoration":"none",
   "text-shadow":"0px 1px 0px #2f6627"
  };

  var m = Math.floor(this.state.time /60);
  var s = this.state.time %60;

  if(this.state.time>59){
    return(
      <div style = {moreThanMin}>
        <h1>{m,"m ",s,"s"}</h1>
      </div>
    )
  }else if(this.state.time>0){
    return(
      <div style = {lessThanMin}>
        <h1>{s,"s"}</h1>
      </div>
    )
  }else{
    return(
      <div style = {promptStyle} id = "PopUp">
        <h1>{this.props.msg}</h1>
        <button style = {btn} onClick={this.displayNone} >OK</button>
      </div>
      )
    }
  },
  componentDidMount: function(){
    this.decr = setInterval(this.update,1000)
  }
})

module.exports = Countdown
