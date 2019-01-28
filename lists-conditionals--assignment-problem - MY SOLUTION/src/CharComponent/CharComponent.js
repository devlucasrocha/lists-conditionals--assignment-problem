import React from 'react'

const CharComponent = (props) => {
  return (
    <div>
      <strong onClick={props.clicked}>{props.split()}</strong>
    </div>
  )
}

export default CharComponent