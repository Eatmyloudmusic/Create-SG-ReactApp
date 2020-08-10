import React from 'react';
// import React, { Component } from "react";
import Team from '../team/Team'
import ScoreBoard from "../scoreboard/Scoreboard";
import Scoresound from '../audio/smb_1-up.wav'
import Shotsound from '../audio/smb_fireball.wav'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resetCount: 0,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      }
    }
    this.shotSound = new Audio(Shotsound)
    this.shotScore = new Audio(Scoresound)
  }
  handleShoot = (team) => {
    const teamStatsKey = `${team}TeamStats`
    let random = Math.floor(Math.random() * 10)
    this.shotScore.play()
    let score = this.state[teamStatsKey].score
    if (random >= 5) {
      score += 1
      setTimeout(() =>{
        this.shotScore.play()
      }, 1000)
    }
    
    this.setState((state, props) => ({
      [teamStatsKey]: {
        shots: state[teamStatsKey].shots + 1,
        score,
      }
      }))
    
    console.log(random)
  };
  resetGame = (event) => {
    this.setState((state, props) => ({
      resetCount: state.resetCount += 1,
      homeTeamStats: {
        shots: 0,
        score: 0,
        wins: 0,
        stocks: 20
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
        wins: 0,
        stocks: 20
        }
    }))
  }
  render() {
    return (
      <div className="Game">
        <ScoreBoard
          homeTeamStats={this.state.homeTeamStats}
          visitingTeamStats={this.state.visitingTeamStats}
        />
                <h2>Hosted at: {this.props.venue}</h2>
                <div id="Content">
                    <Team
                        name={this.props.homeTeam.name}
                        logo={this.props.homeTeam.logo}
                        stats={this.state.homeTeamStats}
                        handleShoot={() => this.handleShoot("home")}
                    />
                    <div className="Versus">
                        <h1>VS</h1>
                        <div>
                            <strong>Resets</strong> {this.state.resetCount}
              <br />
              <br />
                            <button onClick={this.resetGame}>Reset Game?</button>
                        </div>
                    </div>
                    <Team
                        name={this.props.visitingTeam.name}
                        logo={this.props.visitingTeam.logo}
                        stats={this.state.visitingTeamStats}
                        handleShoot={() => this.handleShoot("visiting")}
                    />
                </div>
            </div>
        );
  }
} 



export default Game;
