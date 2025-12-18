import React from "react";

function EventsTable({ events }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Location</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td>{event.title}</td>
            <td>{event.date}</td>
            <td>{event.location}</td>
            <td>{event.description}</td>
            <td>
  <button onClick={() => onDelete(event.id)}>Delete</button>
</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EventsTable;
