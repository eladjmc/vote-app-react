import { Login } from "./pages";
import "./styles/App.css";
import Data from "./Data/Data";
import { useState } from "react";
import PAGES from "./constants/index";
import Navbar from "./components/Navbar.component";

const userInfo = {
  name: "",
  email: "",
  type: "user",
};

const [vote, login, admin] = PAGES;

function App() {
  const [loggedUser, setLoggedUser] = useState(userInfo);
  const [currentPage, setCurrentPage] = useState(login);
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

      {!isCurrentPage(login) && <Navbar setCurrentPage={setCurrentPage} user={loggedUser} setUser={setLoggedUser}/>}

      {isCurrentPage(vote) && <div>vote</div>}

    </div>
  );
}

export default App;
