import { useState } from 'react'

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

function GameBoard({onClickSquare, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleClickSquare(rowIndex, colIndex) {
        setGameBoard((prevGamBoard) => {
            const updatedBoard = [...prevGamBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });
        onClickSquare()
    }


    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((PlayerSymbol, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={() => handleClickSquare(rowIndex, colIndex)}>{PlayerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard