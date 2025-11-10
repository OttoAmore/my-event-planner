import React, { useState } from "react";

function AddEvent({ addEvent }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !time) {
      alert("Event name, date, and time are required!");
      return;
    }
    addEvent({ name, date, time, description });
    setName(""); setDate(""); setTime(""); setDescription("");
  };

  const inputStyle = { display: "block", margin: "5px 0", padding: "5px", width: "100%" };
  const buttonStyle = { padding: "5px 10px", marginTop: "10px", cursor: "pointer" };

  return (
    <div style={{ maxWidth: "400px" }}>
      <h3>Add Event</h3>
      <form onSubmit={handleSubmit}>
        <input style={inputStyle} placeholder="Event Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input style={inputStyle} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input style={inputStyle} type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <textarea style={inputStyle} placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button style={buttonStyle} type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;

