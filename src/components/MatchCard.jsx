import illustrations_role from "../assets/illustrations_role.svg";
import avatar_global from "../assets/avatar_global.svg";
import chevron_up from "../assets/chevron-up.svg";

const MatchCard = ({ match, toggleMatch, expandedMatches }) => {
  return (
    <li onClick={() => toggleMatch(match.time)} className="match-card">
      <div className="match-header">
        <div className="team-container">
          <div className="team-section">
            <img src={illustrations_role} alt="illustrations_role" />
            <span className="team-name">{match.homeTeam.name}</span>
          </div>
          <div>
            <div className="team-score-div">
              <span className="team-score">{match.homeScore}</span>
              <span> : </span>
              <span className="team-score">{match.awayScore}</span>
            </div>
            <div className="match-status">
              <span
                className={`status ${
                  match.status === "Ongoing"
                    ? "live"
                    : match.status === "Scheduled"
                    ? "preparing"
                    : "finished"
                }`}
              >
                {match.status === "Ongoing"
                  ? "Live"
                  : match.status === "Scheduled"
                  ? "Match preparing"
                  : "Finished"}
              </span>
            </div>
          </div>
          <div className="team-section">
            <img src={illustrations_role} alt="illustrations_role" />
            <span className="team-name">{match.awayTeam.name}</span>
            <img
            className="pointer"
              alt="chevron-up"
              src={chevron_up}
              style={{
                transform: `rotate(${
                  expandedMatches.includes(match.time) ? "0deg" : "180deg"
                })`,
              }}
            />
          </div>
        </div>
      </div>
      {expandedMatches.includes(match.time) && (
        <div className="match-details">
          <div className="players">
            <div className="player-list">
              <ul>
                {match.homeTeam.players.map((player, index) => (
                  <li key={index}>
                    <p className="player-name">
                      <img src={avatar_global} alt="avatar_global" />
                      <span>{player.username}</span>
                    </p>
                    <p className="player-kills">
                      <span>Убийств:</span> <span>{player.kills}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <div className="team-block">
                <p>
                  <span>Points:</span> <span>+{match.homeTeam.points}</span>
                </p>
                <p>
                  <span>Place:</span> <span>{match.homeTeam.place}</span>
                </p>
                <p>
                  <span>Total Kills:</span>
                  <span>{match.homeTeam.total_kills}</span>
                </p>
              </div>
            </div>
            <div className="player-list">
              <ul>
                {match.awayTeam.players.map((player, index) => (
                  <li key={index}>
                    <p className="player-name">
                      <img src={avatar_global} alt="avatar_global" />
                      <span>{player.username}</span>
                    </p>
                    <p className="player-kills">
                      <span>Убийств:</span> <span>{player.kills}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <div className="team-block">
                <p>
                  <span>Points:</span> <span>+{match.homeTeam.points}</span>
                </p>
                <p>
                  <span>Place:</span> <span>{match.homeTeam.place}</span>
                </p>
                <p>
                  <span>Total Kills:</span>
                  <span>{match.homeTeam.total_kills}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default MatchCard;
