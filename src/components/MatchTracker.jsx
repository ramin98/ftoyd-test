import Refresh from "../assets/Refresh.svg";
import alert_triangle from "../assets/alert-triangle.svg";
import headerText from "../assets/Match Tracker.svg";
import MatchCard from "./MatchCard";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchMatches = async () => {
  const response = await fetch(
    "https://app.ftoyd.com/fronttemp-service/fronttemp"
  );
  if (!response.ok) throw new Error("Ошибка: не удалось загрузить информацию");
  const result = await response.json();
  return result.data.matches;
};

function MatchTracker() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["matches"],
    queryFn: fetchMatches,
    refetchOnWindowFocus: false,
  });

  const [expandedMatches, setExpandedMatches] = useState([]);

  const toggleMatch = (matchId) => {
    setExpandedMatches((prev) =>
      prev.includes(matchId)
        ? prev.filter((id) => id !== matchId)
        : [...prev, matchId]
    );
  };

  return (
    <>
      <div className="header">
        <img src={headerText} alt="headerText" />
        <div className="header-left">
          {error && (
            <div className="alert">
              <img src={alert_triangle} alt="alert_triangle" />
              <span>Ошибка: не удалось загрузить информацию</span>
            </div>
          )}
          <button className="refresh-button" onClick={() => refetch()}>
            <span>Обновить</span>
            <img src={Refresh} alt="Refresh" />
          </button>
        </div>
      </div>
      {data && (
        <ul className="matches">
          {data.map((match) => (
            <MatchCard
              key={match.time}
              match={match}
              toggleMatch={toggleMatch}
              expandedMatches={expandedMatches}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default MatchTracker;
