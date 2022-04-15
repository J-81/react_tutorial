import React, { useState, useEffect } from 'react';
import Board from './board';
import calculateWinner from './utils.ts';

function Game () {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }

export default Game;