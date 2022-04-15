import React, { useState } from 'react';
import Square from './square';
import calculateWinner from './utils.ts';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState('Next player: ' + (xIsNext ? '🍔' : '🌮'));

  const renderSquare = (i) => {
    return <Square 
      value={squares[i]}
      onClick={() => handleClick(i)}
      />;
  }

  const handleClick = (i) => {
    const squaresNext = squares.slice();
    squaresNext[i] = xIsNext ? '🍔' : '🌮';
    setSquares(squaresNext);
    setXIsNext(!xIsNext);
  }


  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
/*
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={0} />
          <Square value={1} />
          <Square value={2} />
        </div>
        <div className="board-row">
          <Square value={3} />
          <Square value={4} />
          <Square value={5} />
        </div>
        <div className="board-row">
          <Square value={6} />
          <Square value={7} />
          <Square value={8} />
        </div>
      </div>
    );
  }
}
export default Board;
*/