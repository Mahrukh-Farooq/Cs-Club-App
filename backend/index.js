const express = require('express');
const cors = require('cors');
const db = require('./queries');

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

// EVENTS ROUTEs 
app.get('/events', db.getEvents);
app.post('/events', db.createEvent);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
