import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = ({ setCurrentPage }) => {
  const { user, logout } = useContext(AppContext);

  return (
    <header style={{ padding: "10px", background: "#282c34", color: "white", position: "fixed", width: "100%", top: 0 }}>
      <nav>
        <button onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
        <button onClick={() => setCurrentPage("addEvent")}>Add Event</button>
        <button onClick={() => setCurrentPage("help")}>Help</button>
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
};

export default Header;
