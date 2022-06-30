import React, { Component } from 'react';

class StatePractice extends Component {

  constructor() {
      super();
      this.state = {
        inputText : "",
        imageWidth : ""
      }
  }

 EventHandler=()=>{

    //console.log ("teste")
    this.setState({
      inputText: "The user  agree to the site terms of service by filling out the form"
    })
 }

 eventHover=()=>{
   this.setState({
     inputText: ""
   })
 }

 imageHandler=(event)=>{
   console.dir(event.target);
   (event.target.width > 100) ? console.log('Your image is big! Size - ' + event.target.width + "px")  : console.log("ok")
   // this.setState({
   //   imageWidth : (inputText =< 100)? "ok" : "Your image is big!"
   // })
 }

  render(){

    return(
      <div>
        <h3>{this.state.inputText}</h3>
        <input type="text" onFocus={this.EventHandler} onMouseEnter={this.eventHover} />
        <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt="" onLoad={this.imageHandler}/>
      </div>
    )
  }

}

export default StatePractice;
