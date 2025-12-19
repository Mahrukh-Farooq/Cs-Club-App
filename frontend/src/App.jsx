import React, { useState, useEffect } from "react";
import EventsTable from "./components/EventsTable";
import EventsForm from "./components/EventsForm";
import Resources from "./components/Resources";

function App() {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState("events");

  // Fetch events 
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  }, []);

  
  function addEvent(newEvent) {
    // Send to backend
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((savedEvent) => {
        // Add the event returned by backend (with id) to state
        setEvents((prevEvents) => [...prevEvents, savedEvent]);
      })
      .catch((err) => {
        console.error("Error creating event:", err);
      });
  }

  return (
    <div>
      <h1>CS Club Dashboard</h1>

      <button onClick={() => setView("events")}>Events</button>
      <button onClick={() => setView("resources")}>Resources</button>

      {view === "events" && (
        <>
          <EventsForm addEvent={addEvent} />
          <EventsTable events={events} />
        </>
      )}

      {view === "resources" && <Resources />}
    </div>
  );
}

export default App;
