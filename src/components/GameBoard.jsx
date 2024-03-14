const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

function GameBoard({onClickSquare, turns}) {
    const gameBoard = initialGameBoard;

    for (const turn of turns) {
        const {square, player}= turn; // Correct the property name here to 'square'
        const {row, col} = square; // Correct the property name here to 'square'

        gameBoard[row][col] = player;
    }


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
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) =>
                    <li key={colIndex}>
                        <button onClick={() => onClickSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard