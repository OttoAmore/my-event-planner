import React, { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create a provider component
export function AppProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [events, setEvents] = useState([]);

  // Toggle login/logout
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  // Add a new event
  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  // Delete an event by index
  const deleteEvent = (index) => {
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        toggleLogin,
        events,
        addEvent,
        deleteEvent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
