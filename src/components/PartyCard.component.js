import React from 'react'
const ADD_VOTE = 1;
const REMOVE_VOTE = -1;
const PartyCard = ({party, allVotes, setVote}) => {

    const handleAddVote = () => {
        setVote(party.name, ADD_VOTE);
    }


  return (
    <div className="card">
    <h4>votes: {party.votes}</h4>
    <img src={party.img} alt={party.name} />
    <h3>{party.name}</h3>
    <button onClick={handleAddVote} className="btn">Vote</button>
  </div>
  )
}

export default PartyCard