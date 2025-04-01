import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);


    function handleEditClick() {
        // setIsEditing(!isEditing);

        // use this function approach to set/update the state. so react will ensure you will get latest value always
        setIsEditing((editing) =>
            !editing
        )
    }

    function handlePlayerNameChanged(event) {
        //
        console.log(event);
        setPlayerName(event.target.value);
        
    }

    let playerNameEditable = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        playerNameEditable = <input type="text" required value={playerName} onChange={handlePlayerNameChanged} />;
    }

    return (
        <li className={ isActive ? 'active': undefined}>
            <span className="player">
                <span className="player-name">{playerNameEditable}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}
