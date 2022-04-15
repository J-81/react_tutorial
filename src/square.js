import React, { useState, useContext } from 'react';
import BoardContext from './board';

function Square(props) {
  // const [value, setValue] = useState(props.value);
  // const board = useContext(BoardContext)
  // if ( props.value ) {setValue(props.value)};

  return (
    <button 
      className="square" 
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
  
export default Square;