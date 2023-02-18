import React, { useState } from "react";
import PartyCard from "../components/PartyCard.component";

const REMOVE_VOTE = -1;

const isVotedBefore = (voter,votes) => {
  let isVoted = false;
  votes.forEach((candidate) => {
    if (candidate.voters.includes(voter.id)) {
      isVoted = true;
    }
  });
  return isVoted;
};

const Vote = ({ setVotes, votes, voter }) => {
  
  const [isAbleToVote, setIsAbleToVote] = useState(!isVotedBefore(voter,votes));
  const [isCurrentlyVoting, setIsCurrentlyVoting] = useState(false);

  const removeVote = () => {

    votes.forEach((candidate) => {
      if (candidate.voters.includes(voter.id)) {
        const index = candidate.voters.indexOf(voter.id);
        if (index > -1) {
          candidate.voters.splice(index, 1);
          candidate.votes += REMOVE_VOTE;
          setIsAbleToVote(true);
          setVotes([...votes]);
          
        }
      }
    });
  };

  return (
    <main className="vote-page">
      <h1>Vote Page</h1>
      <div className="vote-card-container">
        {votes.map((party) => (
          <PartyCard
            key={party.id}
            voter={voter}
            party={party}
            allVotes={votes}
            setVote={setVotes}
            isAbleToVote={isAbleToVote}
            setIsAbleToVote={setIsAbleToVote}
            removeVote={removeVote}
            isCurrentlyVoting={isCurrentlyVoting}
            setIsCurrentlyVoting={setIsCurrentlyVoting}
          />
        ))}
      </div>
    </main>
  );
};

export default Vote;
