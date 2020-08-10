import React from 'react'

function Team(props) {
  let shotSpot = ''
  if (props.stats.shots) {
    const shotPercentage = Math.round((props.stats.score / props.stats.shots) * 100)
    shotSpot = (
              <div>
                  Shooting % <span>{shotPercentage}</span>
              </div>
          );
  }
      return (
          <div className="Team">
              <div id="teamSpot">
                  <img src={props.logo} height="300px" width="300px" alt={props.name}/>
                  <h3>{props.name}</h3>
                  <div className="scoreArea">
                      <p>
                          Attacks: <span>{props.stats.shots}</span>
                      </p>
                      <p>
                          Kills: <span>{props.stats.score}</span>
          </p>
                      <button onClick={props.handleShoot}>Take a shot</button>
                  </div>
                  {shotSpot}
              </div>
          </div>
      );
  }


export default Team






