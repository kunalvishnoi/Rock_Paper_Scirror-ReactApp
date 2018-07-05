import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PlayerCard = ({color, symbol})=> {
  const style = {
    backgroundColor: color ,
    backgroundImage: "url(./img/" + symbol + ".png)"
  }
  return(
    <div style = {style} className="player-card">
      {symbol}
    </div>
  )
}

class App extends Component { 
  constructor(props) {
  super(props); {
    this.symbols= ['rock' , 'paper' , 'scissors']
    this.state = {}
  }
}
DecideWinner = () => {
  let {playerRed , playerBlue} = this.state
  if(playerRed===playerBlue) {
    return("No one Win")
  }
  if(
    (playerRed==="rock"&&playerBlue==="scissors") || (playerRed==="scissors" && playerBlue==="paper") || (playerRed=="paper"&& playerBlue=="rock")
    )
    {
      return("Player Red Wins")
    }
    else{
      return("Player blue Wins")
    }
}
runGame = () => {
  let counter = 0
  let myInterval = setInterval(() => {
    counter++
  this.setState({
    playerRed: this.symbols[Math.floor(Math.random()*3)] ,
    playerBlue: this.symbols[Math.floor(Math.random()*3)]
  })
  if(counter>20) {
    clearInterval(myInterval)
    this.setState({
      winner: this.DecideWinner()
    })
  }
}, 100)
}
  render() {
    return (
      <div className="App">
        <PlayerCard
          color="red"
          symbol={this.state.playerRed}   />
        <PlayerCard
          color="blue"
          symbol={this.state.playerBlue}   />
          <p>{this.DecideWinner()}</p>
          <button onClick={this.runGame}> Start Game </button>
      </div>
    );
  }
}

export default App;
