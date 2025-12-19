/*const dotenv = require('dotenv');
dotenv.config();

const { Pool } = require('pg');


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });*/
  const { Pool } = require('pg');


const pool = new Pool({
  user: 'postgres',      
  host: 'localhost',
  database: 'csclub',    
  password: 'password',   
  port: 5432,
});

  

const getEvents = (req, res) => {
  pool.query('SELECT * FROM events ORDER BY id ASC', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(200).json(results.rows);
  });
};

const createEvent = (req, res) => {
  const { title, date, location, description } = req.body;

  pool.query(
    'INSERT INTO events (title, date, location, description) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, date, location, description],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      res.status(201).json(results.rows[0]);
    }
  );
};

module.exports = {
  getEvents,
  createEvent,
};
