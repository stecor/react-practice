import React, { Component } from 'react';
import Card from './Card';

class CardSet extends Component {
  constructor() {
    super();

    this.state = {
      chosenCards: []
    }
  }

  saveCourse = (index)=>{
      console.log(index);
      const copyOfCards = [...this.state.chosenCards];
      copyOfCards.push(this.props.cards[index])
      this.setState({
        chosenCards: copyOfCards
      })
  }

  render(){
    console.log(this.state.chosenCards);

    const savedCards = this.state.chosenCards.map((card,i)=>{
      return(
        <Card key={i} card={card} />
      )
    })

    const cardList = this.props.cards.map((card,i)=>{
      return(
        <div className="col s4 card" key={i}>
            <Card card={card}/>
            <button className="btn waves-light waves-effect" onClick={()=>{this.saveCourse(i)}}>Save</button>
        </div>
      )
    })
    return(

     <div>
        {cardList}
        {savedCards}
     </div>


    )
  }

}

export default CardSet;
