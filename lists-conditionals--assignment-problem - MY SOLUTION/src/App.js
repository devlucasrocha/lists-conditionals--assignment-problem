import React, { Component } from 'react';
import './App.css';
import InputComponent from './InputComponent/InputComponent'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
import Instructions from './Instructions'

class App extends Component {

  state = { word: 'Any Value', len: null, msg: "Waiting..."}

  switchValueHandler = (event) => {
    this.setState({
      word: event.target.value, 
      len: event.target.value.length
    })
  }

  showRating = () => {
    if (this.state.len > 5) {
      return "Text long enough"
    } else {
      return "Text too short"
    }
  }

  showLetterSplitted = (style) => {
    style = {
      display: "inline-block", 
      padding: "16px", 
      textAlign: "center", 
      margin: "16px", 
      border: "1px solid black",
    }
    
    let a = ""
    let arrayOfElements = []
    for (var i = 0; i < this.state.len; i++) {
      a = this.state.word.charAt(i)
      arrayOfElements.push(React.createElement('div', {style: style, id: i}, 
      React.createElement('div', {}, a)))
      console.log(a, " => ", i)
    }
    return (arrayOfElements)
  }
  
  func = _ => {
    let word = this.state.word
    let a = []
    for (var i = 0; i < this.state.len; i++) {
      a.push(this.state.word.charAt(i))
    }
    let b = ""

      // a.pop()
    let found = (a.indexOf('g')) > -1
    console.log(found)
    if (found) {
      a.splice(a.indexOf('g'), 1 );
    }
    for (let c in a) {
      b += a[c]
    }
    console.log("Found: ", b)
    word = b
    


    return word
  }

  deleteLetterHandler = () => {
    this.setState({word: this.func(), len: this.func().length})
  }

  render() {
    const style = {
      display: "inline-block", 
      padding: "16px", 
      textAlign: "center", 
      margin: "16px", 
      border: "1px solid black"
    }
    return (
      <div className="App">
        <Instructions />
        <InputComponent 
        word={this.state.word} 
        changed={this.switchValueHandler} 
        len={this.state.len} />
        <ValidationComponent msg={this.showRating()}/>
        <CharComponent  style={style} 
                        split={this.showLetterSplitted} 
                        len={this.state.len} 
                        clicked={this.deleteLetterHandler}/>
      </div>
    );
  }
}

export default App;
