import React, { Component } from 'react';
import './App.css';
//import StateInAction from './StateInAction';
//import EventAndState from './EventAndState';
//import StatePractice from './StatePractice';
import CardSet from './CardSet';
import cards from './cards';
import StatePractice from './StatePractice'

  console.log(cards);

class App extends Component{

  render(){
    return (
      <div className="container">
        <div className="row">
        <StatePractice/>
        <CardSet cards={cards} />

        </div>
      </div>
    );
  }

}

export default App;
