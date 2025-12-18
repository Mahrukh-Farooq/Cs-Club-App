import React, { useState } from "react";
import EventsTable from "./components/EventsTable";
import EventsForm from "./components/EventsForm";

function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Resume Workshop with IBM",
      date: "09-11-2025",
      location: "Room 101",
      description: "Learn how to improve your tech resume.",
    },
    {
      id: 2,
      title: "LeetCode Practice Night",
      date: "10-22-2025",
      location: "CS Lab",
      description: "Solve problems together & eat pizza",
    },
    {
      id: 3,
      title: "Teach Talk",
      date: "12-11-2025",
      location: "CS Lab",
      description: "Ask questions and get guidance from Speakers",
    },
  ]);
  function addEvent(newEvent) {
    setEvents([...events, newEvent]);
  }
  
  return (
    <div>
      <h1>CS Club Dashboard</h1>
      <h2>Events</h2>
      
      <EventsForm addEvent={addEvent} />
      <EventsTable events={events} />
    </div>
  );
}

export default App;
