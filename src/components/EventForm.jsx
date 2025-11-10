import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const EventForm = () => {
  const { addEvent } = useContext(AppContext);
  const [eventData, setEventData] = useState({ name:"", date:"", time:"", description:"", location:"" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!eventData.name || !eventData.date) return alert("Name and Date are required!");
    addEvent({ ...eventData, id: Date.now() });
    setEventData({ name:"", date:"", time:"", description:"", location:"" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "80px" }}>
      <input placeholder="Event Name" value={eventData.name} onChange={e => setEventData({...eventData, name:e.target.value})} />
      <input type="date" value={eventData.date} onChange={e => setEventData({...eventData, date:e.target.value})} />
      <input type="time" value={eventData.time} onChange={e => setEventData({...eventData, time:e.target.value})} />
      <input placeholder="Description" value={eventData.description} onChange={e => setEventData({...eventData, description:e.target.value})} />
      <input placeholder="Location" value={eventData.location} onChange={e => setEventData({...eventData, location:e.target.value})} />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
