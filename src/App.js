import "./App.css";
import { useState } from "react";
import Player from "./Player/Player";

function App() {
  const [activePlayer, setActivePayer] = useState(1);
  const [score, setScore] = useState([0, 0]);
  const [current, serCurrent] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const [diceNumber, setDiceNumber] = useState(0);

  return (
    <main>
      <Player
        name="Player 1"
        score={score[0]}
        current={activePlayer === 1 && current}
        isActive={activePlayer === 1}
      />
      <Player
        name="Player 2"
        score={score[1]}
        current={activePlayer === 2 && current}
        isActive={activePlayer === 2}
      />

      {diceNumber && (
        <img src={`./img/dice-${diceNumber}.png`} alt="Playing dice" className="dice" />
      )}
      <button className="btn btn--new">🔄 New game</button>
      <button className="btn btn--roll">🎲 Roll dice</button>
      <button className="btn btn--hold">📥 Hold</button>
    </main>
  );
}

export default App;
