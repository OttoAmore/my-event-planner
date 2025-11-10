import { AppProvider } from "./context/AppContext";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import EventForm from "./components/EventForm";
import Help from "./components/Help";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch(currentPage){
      case "dashboard": return <Dashboard />;
      case "addEvent": return <EventForm />;
      case "help": return <Help />;
      default: return <Dashboard />;
    }
  }

  return (
    <AppProvider>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    </AppProvider>
  );
}

export default App;

