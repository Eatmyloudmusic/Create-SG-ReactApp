import React from 'react';
// import { render } from '@testing-library/react';

function ScoreBoard(props) {
  return (
    <div className='ScoreBoard'>
      <div className='teamStats'>
        <h4>HOME TEAM</h4>
        <h4>{props.homeTeamStats.score}</h4>
      </div>
      <h2> SCOREBOARD</h2>
      <div className='teamStats'>
        <h4>VISITING TEAM</h4>
        <h4>{props.visitingTeamStats.score}</h4>
      </div>
    </div>
  )
}

export default ScoreBoard;
