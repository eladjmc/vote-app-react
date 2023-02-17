import React from "react";
import PartyCard from "../components/PartyCard.component";



const Vote = ({setVotes, votes}) => {
  return (
    <main className="vote-page">
      <h1>Vote Page</h1>
      <div className="vote-card-container">
        {votes.map((party)=>
        <PartyCard party={party} allVotes={votes} setVote={setVotes} />
        )}
      </div>
    </main>
  );
};

export default Vote;
