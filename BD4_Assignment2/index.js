const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Initialize SQLite database
const db = new sqlite3.Database('./BD4_Assignment2/database.sqlite');

// Middleware to parse JSON
app.use(express.json());

// Exercise 1: Get All Games
app.get('/games', (req, res) => {
  const query = 'SELECT * FROM games';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ games: rows });
  });
});

// Exercise 2: Get Game by ID
app.get('/games/details/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM games WHERE id = ?';
  db.get(query, [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: 'Game not found' });
      return;
    }
    res.json({ game: row });
  });
});

// Exercise 3: Get Games by Genre
app.get('/games/genre/:genre', (req, res) => {
  const { genre } = req.params;
  const query = 'SELECT * FROM games WHERE genre = ?';
  db.all(query, [genre], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ games: rows });
  });
});

// Exercise 4: Get Games by Platform
app.get('/games/platform/:platform', (req, res) => {
  const { platform } = req.params;
  const query = 'SELECT * FROM games WHERE platform = ?';
  db.all(query, [platform], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ games: rows });
  });
});

// Exercise 5: Get Games Sorted by Rating
app.get('/games/sort-by-rating', (req, res) => {
  const query = 'SELECT * FROM games ORDER BY rating DESC';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ games: rows });
  });
});

// Exercise 6: Get All Players
app.get('/players', (req, res) => {
  const query = 'SELECT * FROM players';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ players: rows });
  });
});

// Exercise 7: Get Player by ID
app.get('/players/details/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM players WHERE id = ?';
  db.get(query, [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: 'Player not found' });
      return;
    }
    res.json({ player: row });
  });
});

// Exercise 8: Get Players by Platform
app.get('/players/platform/:platform', (req, res) => {
  const { platform } = req.params;
  const query = 'SELECT * FROM players WHERE platform = ?';
  db.all(query, [platform], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ players: rows });
  });
});

// Exercise 9: Get Players Sorted by Rating
app.get('/players/sort-by-rating', (req, res) => {
  const query = 'SELECT * FROM players ORDER BY rating DESC';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ players: rows });
  });
});

// Exercise 10: Get All Tournaments
app.get('/tournaments', (req, res) => {
  const query = 'SELECT * FROM tournaments';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ tournaments: rows });
  });
});

// Exercise 11: Get Tournament by ID
app.get('/tournaments/details/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM tournaments WHERE id = ?';
  db.get(query, [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: 'Tournament not found' });
      return;
    }
    res.json({ tournament: row });
  });
});

// Exercise 12: Get Tournaments by Game ID
app.get('/tournaments/game/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM tournaments WHERE gameId = ?';
  db.all(query, [id], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ tournaments: rows });
  });
});

// Exercise 13: Get Tournaments Sorted by Prize Pool
app.get('/tournaments/sort-by-prize-pool', (req, res) => {
  const query = 'SELECT * FROM tournaments ORDER BY prizePool DESC';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ tournaments: rows });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
