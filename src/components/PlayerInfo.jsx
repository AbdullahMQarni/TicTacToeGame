import { useState } from "react";


function PlayerInfo({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName)

    function handleChange(event){
        setPlayerName(event.target.value)
    }

    // state to change the player neme on click
    const [isEditing, setIsEditing] = useState(false);
    function handleIsEditing () {
        // just to convert the is editing state to true or false
        setIsEditing(wasEditing => !isEditing)

        if (isEditing){
            onChangeName(symbol, playerName)
        }
        
        
    }

    // if function to convert between display and text box input
    let EditableName = <span className='player-name'>{playerName}</span>

    if (isEditing) {
        EditableName = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {EditableName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            {/* to change word "Edit" to "save" */}
            <button onClick={handleIsEditing}>{(isEditing == true ?  "Save": "Edit")}</button>
        </li>
    )
}

export default PlayerInfo