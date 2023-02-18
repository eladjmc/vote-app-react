import React, { useState } from "react";
const ADD_VOTE = 1;

const PartyCard = ({
  party,
  allVotes,
  setVote,
  voter,
  setIsAbleToVote,
  isAbleToVote,
  removeVote,
}) => {
  const [isCurrentlyVoting, setIsCurrentlyVoting] = useState(false);

  const handleAddVote = () => {
    setIsCurrentlyVoting(false);

    const allParties = allVotes.map((candidate) => {
      if (candidate.name === party.name) {
        candidate.votes += ADD_VOTE;
        candidate.voters.push(voter.id);
        setIsAbleToVote(false);
      }
      return candidate;
    });
    setVote(allParties);
  };

  const handleClickVote = () => {
    setIsCurrentlyVoting(true);
  };

  const handleClickCancel = () => {
    setIsCurrentlyVoting(false);
  };

  return (
    <div className="card">
      <h4>votes: {party.votes}</h4>
      <img src={party.img} alt={party.name} />
      <h3>{party.name}</h3>
      {!isCurrentlyVoting && isAbleToVote && (
        <button onClick={handleClickVote} className="btn">
          Vote
        </button>
      )}
      {isCurrentlyVoting && (
        <div className="currently-vote-container">
          <button onClick={handleAddVote} className="btn">
            I'm Sure
          </button>
          <button onClick={handleClickCancel} className="btn">
            Cancel
          </button>
        </div>
      )}
      {!isAbleToVote && (
        <button onClick={() => removeVote()} className="btn">
          Change my Vote!
        </button>
      )}
    </div>
  );
};

export default PartyCard;
