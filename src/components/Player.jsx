/* eslint-disable no-unused-vars */
import { useState } from "react"
// eslint-disable-next-line react/prop-types
export default function Player({ name, symbol, isActive,onChange }) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

    const handleEditing = () => {
        setIsEditing((editing) => !editing)
        isEditing && onChange(symbol, playerName)
    }

    const handlePlayerName = (e) => {
        setPlayerName(e.target.value)
        
    }
    return <li className={isActive ? 'active' : undefined}>
        <span className='player'>

            {isEditing && <input className='player-name' value={playerName} required onChange={handlePlayerName} />}
            {!isEditing && <span className='player-name' >{playerName}</span>}

            <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
}