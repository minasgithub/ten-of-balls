import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Players from './components/Players';
import SpinTheBall from './components/SpinTheBall';
import Teams from './components/Teams';
import cube from './images/cube.png';
import game from './images/game.jpg';
import { getPlayers, getTeams } from './balldontlieApi';

function App() {
  const [displayFilter, setDisplayFilter] = useState("home");
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [spinKey, setSpinKey] = useState(0);

  useEffect(() => {
    if (players.length === 0) {
      getPlayers().then((output) => setPlayers(output));
    }
    if (teams.length === 0) {
      getTeams().then((output) => setTeams(output));
    }
  }, []);

  const handleSpinButtonClick = () => {
    setSpinKey(spinKey + 1);
  }

  return (
    <div className="App">
      <Navbar handleSpinButtonClick={handleSpinButtonClick} logo={cube} setDisplayFilter={setDisplayFilter} />
      {displayFilter === "home" && <div>
          <img src={game} alt="game" className="game-img" />
        </div>}
      {displayFilter === "players" && <Players players={players} />}
      {displayFilter === "teams" && <Teams teams={teams} />}
      {displayFilter === "spin" && 
        <SpinTheBall key={spinKey} players={players} teams={teams} 
      />}
    </div>
  );
}

export default App;
