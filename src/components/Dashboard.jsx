import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { events, deleteEvent } = useContext(AppContext);

  return (
    <div style={{ marginTop: "80px" }}>
      <h2>Upcoming Events</h2>
      {events.length === 0 ? <p>No events scheduled.</p> : 
        <ul>
          {events.map(ev => (
            <li key={ev.id}>
              <strong>{ev.name}</strong> ({ev.date} {ev.time}) - {ev.location}
              <button onClick={() => deleteEvent(ev.id)}>Delete</button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Dashboard;
