import React from "react";

function Help() {
  return (
    <div>
      <h3>Help</h3>
      <p>Welcome to My Event Planner! Here’s how to use the app:</p>
      <ul>
        <li><strong>Dashboard:</strong> View all your upcoming events.</li>
        <li><strong>Add Event:</strong> Fill in the form to create a new event.</li>
        <li><strong>Delete:</strong> Remove any event directly from the Dashboard.</li>
        <li><strong>Login/Logout:</strong> Use the button in the header to switch between login states.</li>
      </ul>
      <p>Tip: Always fill in the event name, date, and time when adding a new event.</p>
    </div>
  );
}

export default Help;

