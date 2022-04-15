import React from 'react';
import Square from './square';
import calculateWinner from './utils.ts';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
        }
        handleClick(i) {
            const history = this.state.history;
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (calculateWinner(squares) || squares[i]) {
              return;
            }
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
              history: history.concat([{
                squares: squares,
              }]),
              xIsNext: !this.state.xIsNext,
            });
          }
        renderSquare(i) {
        return (
            <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
            />
        );
        }
    
        render() {
            return (
              <div>
                <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
    }
      

export default Board;