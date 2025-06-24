export default function GameBorad({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbolPlayer, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={symbolPlayer ? true : false}
                >
                  {symbolPlayer}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
