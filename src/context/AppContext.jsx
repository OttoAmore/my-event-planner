import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);       // Stores logged-in user
  const [events, setEvents] = useState([]);     // Stores user events

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  const addEvent = (event) => setEvents([...events, event]);
  const updateEvent = (id, updatedEvent) => {
    setEvents(events.map(ev => ev.id === id ? updatedEvent : ev));
  };
  const deleteEvent = (id) => {
    setEvents(events.filter(ev => ev.id !== id));
  };

  return (
    <AppContext.Provider value={{ user, login, logout, events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </AppContext.Provider>
  );
};
