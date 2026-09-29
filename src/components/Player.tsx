import { useState } from "react";

interface IProps {
    initialName: string;
    symbol: string;
    isActive: boolean;
}

function Player({initialName, symbol, isActive} : IProps) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);


    function handleEditClick () {
        setIsEditing((prev) => !prev);
    }

    let editTablePlayerName = <span className="player-name">{playerName}</span>

    if(isEditing) {
        editTablePlayerName = <input type="text" required value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
    }

  return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editTablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>

        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}

export default Player