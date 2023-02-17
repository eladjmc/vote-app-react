import { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

import Wrapper from "../styles/styled/Navbar.styled";

import PAGES from "../constants";

const ADMIN_USER = "admin";

const [vote, login, admin] = PAGES;

const Navbar = ({ user, setUser, setCurrentPage }) => {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setUser({ name: "", type: "", email: "" });
    setCurrentPage(login);
  };

  const isAdmin = () => user.type === ADMIN_USER;
  const adminsBtn = () => (isAdmin() ? "" : "not-admin-btn");

  return (
    <Wrapper>
      <div className="nav-center">
        <div>logo-small</div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={handleLogout}
            >
              logout
            </button>

            <button
              type="button"
              className={"dropdown-btn " + adminsBtn()}
              onClick={handleLogout}
            >
              vote
            </button>

            <button
              type="button"
              className={"dropdown-btn " + adminsBtn()}
              onClick={handleLogout}
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
