import React from 'react'
import './InputComponent.css'
const input = props => {
  return (
    <div>
      <input className="Input" placeholder="Type anything" onChange={props.changed} value={props.word}/>
      <p>Current text: {props.word}</p>
      <p>Length: {props.len}</p>
    </div>
  )
}

export default input;