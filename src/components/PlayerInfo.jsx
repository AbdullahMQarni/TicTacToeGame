import { useState } from "react";


function PlayerInfo({name, symbol}) {

    // state to change the player neme on click
    const [isEditing, setIsEditing] = useState(false);
    function handleIsEditing () {
        // just to convert the is editing state to true or false
        setIsEditing(wasEditing => !isEditing)
    }

    // if function to convert between display and text box input
    let PlayerName = <span className='player-name'>{name}</span>

    if (isEditing) {
        PlayerName = <input type="text" required value={name} placeholder="Enter Ur Name"/>
    }

    return (
        <li>
            <span className='player'>
                {PlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            {/* to change word "Edit" to "save" */}
            <button onClick={handleIsEditing}>{(isEditing == true ?  "Save": "Edit")}</button>
        </li>
    )
}

export default PlayerInfo