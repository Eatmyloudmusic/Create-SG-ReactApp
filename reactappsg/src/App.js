import React from 'react';

// import Clock from "./components/clock/Clock";
import Game from "./components/game/Game";
// import Scoreboard from '../scoreboard/Scoreboard';
// import Team from "./components/team/Team";
import racoonPic from './components/images/raccoon.png'
import squirPic from './components/images/squirrel.png'
import bunPic from './components/images/bunny.png'
import houndsPic from './components/images/hound.png'
import './App.css';

// logoSrc: racoonPic

function App() {

  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: racoonPic
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirPic
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunPic
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: houndsPic
  }


  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Welcome name="Grande Hey" /> */}
      {/* <Clock />
      <Scoreboard /> */}

      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />

    </div>
  );
}

export default App;
