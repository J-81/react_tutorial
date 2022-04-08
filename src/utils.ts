// @ts-check

/**
 * Determines if a player has won
 * A winner is defined as a player who places a line of that same characters
 * @param squares 
 * @returns 
 */
function calculateWinner(squares: Array<string>): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // iterate through all lines
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // check if the first position is populated
      // And the first position and second position are the same char
      // Then if the first and third position are the same char
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default calculateWinner;