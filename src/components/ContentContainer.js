import React, { Component } from 'react';
import CharacterCard from "./CharacterCard";
import characters from "./../assets/characters.js"
import Header from "./Header"


class ContentContainer extends Component {
  state = { characters,
            highScore: 0,
            currentScore: 0,
            guesses: [],
            message: "Click a Character to Start!" }
  
    onGuess = (id) => {
        console.log([...this.state.guesses])
        if([...this.state.guesses].includes(id)){
            this.setState({
                currentScore: 0,
                guesses: [],
                message: "You lose!"
            })
        } else {
            this.setState(prevState => ({
                currentScore: prevState.currentScore + 1,
                guesses: [...prevState.guesses, id],
                message: "Good Job!",
                highScore: (prevState.currentScore >= prevState.highScore) ? prevState.highScore + 1 : prevState.highScore
            }))
            
        }
        console.log(this.state.currentScore, this.state.highScore, this.state.message)
      this.shuffle()
  }

  shuffle = () => {
      this.setState(prevState => ({
        characters: prevState.characters.sort((a,b) => {
            return 0.5 - Math.random()
      })  
  }))
}
  
  render() {
    return (
        <div>
            <Header
            message={this.state.message}
            highScore={this.state.highScore}
            currentScore={this.state.currentScore}
            />

            <div className="container">
        <div className="row  justify-content-center">    
        {
          this.state.characters.map(character => (
            
            <CharacterCard
            key={character.id}
            {...character}
            onGuess={this.onGuess}
            />
          ))
        }
            </div>
        </div>
      </div>
    ) 
  }
}

export default ContentContainer;