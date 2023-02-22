import React, { useState } from "react";

const withTeamDetails = (WrappedComponent, teams) => {
  const WithTeamDetails = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);

    const handleTeamClick = (team) => {
      setSelectedTeam(team);
    };

    return (
      <div>
        <div>
          {teams.map((team) => (
            <button key={team.name} onClick={() => handleTeamClick(team)}>
              {team.name}
            </button>
          ))}
        </div>
        {selectedTeam && <WrappedComponent {...selectedTeam} />}
      </div>
    );
  };

  return WithTeamDetails;
};

export default withTeamDetails;