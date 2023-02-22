import React from "react";
import TeamDetails from "./TeamDetails";
import withTeamDetails from "./withTeamDetails";

const teams = [
  {
    name: "Team A",
    city: "City A",
    coach: "Coach A",
  },
  {
    name: "Team B",
    city: "City B",
    coach: "Coach B",
  },
  {
    name: "Team C",
    city: "City C",
    coach: "Coach C",
  },
];

const TeamDetailsWithHOC = withTeamDetails(TeamDetails, teams);

const App = () => {
  return (
    <div>
      <h1>Team Details</h1>
      <TeamDetailsWithHOC />
    </div>
  );
};

export default App;