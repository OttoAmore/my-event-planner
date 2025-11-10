import React, { useContext, useState } from "react";
import Header from "./components/Header";
import AddEvent from "./components/AddEvent";
import Dashboard from "./components/Dashboard";
import Help from "./components/Help";
import { AppContext } from "./context/AppContext";

function App() {
  const { isLoggedIn, events, toggleLogin, addEvent, deleteEvent } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState("dashboard"); // track page

  return (
    <div>
      <Header
        isLoggedIn={isLoggedIn}
        toggleLogin={toggleLogin}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main style={{ padding: "20px" }}>
        {isLoggedIn ? (
          <>
            {currentPage === "dashboard" && <Dashboard events={events} deleteEvent={deleteEvent} />}
            {currentPage === "addEvent" && <AddEvent addEvent={addEvent} />}
            {currentPage === "help" && <Help />}
          </>
        ) : (
          <h3>Please log in to manage your events.</h3>
        )}
      </main>
    </div>
  );
}

export default App;
