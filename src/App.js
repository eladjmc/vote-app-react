import { Login } from "./pages";
import "./styles/App.css";
import Data from "./Data/Data";
import { useState, useEffect } from "react";
import PAGES from "./constants/index";
import Navbar from "./components/Navbar.component";
import Vote from "./pages/Vote.page";
import VoteData from "./Data/PartyData";
import Admin from "./pages/Admin.page";

const EMPTY_USER = {
  id: "",
  name: "",
  email: "",
  type: "user",
};

const userInfo = JSON.parse(localStorage.getItem("loggedUser")) || EMPTY_USER;

const [vote, login, admin] = PAGES;

const votesLocalData = JSON.parse(localStorage.getItem("voteData")) || VoteData;

function App() {
  const [loggedUser, setLoggedUser] = useState(userInfo);
  const [currentPage, setCurrentPage] = useState(
    userInfo.id === "" ? login : vote
  );
  const [votes, setVotes] = useState(votesLocalData);

  useEffect(() => {
    localStorage.setItem("voteData", JSON.stringify(votes));
  }, [votes]);

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    if (loggedUser.id === "") {
      setCurrentPage(login);
    } else {
      setCurrentPage(vote);
    }
  }, [loggedUser]);

  const database = Data;

  const isCurrentPage = (page) => page === currentPage;

  return (
    <div className="App">
      {isCurrentPage(login) && (
        <Login
          usersData={database}
          setLoggedUser={setLoggedUser}
          setCurrentPage={setCurrentPage}
        />
      )}

      {!isCurrentPage(login) && (
        <Navbar
          setCurrentPage={setCurrentPage}
          user={loggedUser}
          setUser={setLoggedUser}
        />
      )}

      {isCurrentPage(vote) && (
        <Vote voter={loggedUser} votes={votes} setVotes={setVotes} />
      )}

      {isCurrentPage(admin) && <Admin users={database} candidatesList={votes} />}
    </div>
  );
}

export default App;
