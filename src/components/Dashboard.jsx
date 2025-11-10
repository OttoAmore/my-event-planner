import React from "react";

function Dashboard({ events, deleteEvent }) {
  const containerStyle = { maxWidth: "500px" };
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px"
  };
  const buttonStyle = { padding: "3px 8px", cursor: "pointer", marginTop: "5px" };

  if (events.length === 0) return <p>No events yet. Add one!</p>;

  return (
    <div style={containerStyle}>
      <h3>Upcoming Events</h3>
      {events.map((event, index) => (
        <div key={index} style={cardStyle}>
          <strong>{event.name}</strong> <br />
          {event.date} at {event.time} <br />
          {event.description && <em>{event.description}</em>} <br />
          <button style={buttonStyle} onClick={() => deleteEvent(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;

