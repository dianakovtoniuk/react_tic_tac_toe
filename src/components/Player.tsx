import { useState, ChangeEvent } from "react";

interface IProps {
  initialName: string;
  symbol: "X" | "O";
  isActive: boolean;
  onChangeName: (symbol: "X" | "O", newName: string) => void;
}

function Player({ initialName, symbol, isActive, onChangeName }: IProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => {
      // Якщо стан змінюється з Editing (true) на Save (false) — повідомляємо App
      if (editing) {
        onChangeName(symbol, playerName);
      }
      return !editing;
    });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}

export default Player;