
function GameBoard({onClickSquare, board}) {



/*     const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleClickSquare(rowIndex, colIndex) {
        setGameBoard((prevGamBoard) => {
            const updatedBoard = [...prevGamBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });
        onClickSquare()
    } */


    return (
        <ol id='game-board'>
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) =>
                    <li key={colIndex}>
                        <button onClick={() => onClickSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                            {playerSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard