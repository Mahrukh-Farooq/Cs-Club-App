import { useState } from "react";

function AddEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newEvent = {
      id: Date.now(), 
      title,
      date,
      location,
      description,
    };

    addEvent(newEvent); 

    // clear form
    setTitle("");
    setDate("");
    setLocation("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Event</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
       
      />

      <button type="submit">Add Event</button>
    </form>
  );
}

export default AddEventForm;
