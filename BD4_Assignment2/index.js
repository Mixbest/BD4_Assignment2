const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Database connection
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to SQLite database');
});

// Exercise 1: Get All Games
app.get('/games', (req, res) => {
  db.all('SELECT * FROM games', [], (err, games) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ games });
  });
});

// Exercise 2: Get Game by ID
app.get('/games/details/:id', (req, res) => {
  db.get('SELECT * FROM games WHERE id = ?', [req.params.id], (err, game) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ game });
  });
});

// Exercise 3: Get Games by Genre
app.get('/games/genre/:genre', (req, res) => {
  db.all('SELECT * FROM games WHERE genre = ?', [req.params.genre], (err, games) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ games });
  });
});

// Exercise 4: Get Games by Platform
app.get('/games/platform/:platform', (req, res) => {
  db.all('SELECT * FROM games WHERE platform = ?', [req.params.platform], (err, games) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ games });
  });
});

// Exercise 5: Get Games Sorted by Rating
app.get('/games/sort-by-rating', (req, res) => {
  db.all('SELECT * FROM games ORDER BY rating DESC', [], (err, games) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ games });
  });
});

// Exercise 6: Get All Players
app.get('/players', (req, res) => {
  db.all('SELECT * FROM players', [], (err, players) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ players });
  });
});

// Exercise 7: Get Player by ID
app.get('/players/details/:id', (req, res) => {
  db.get('SELECT * FROM players WHERE id = ?', [req.params.id], (err, player) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ player });
  });
});

// Exercise 8: Get Players by Platform
app.get('/players/platform/:platform', (req, res) => {
  db.all('SELECT * FROM players WHERE platform = ?', [req.params.platform], (err, players) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ players });
  });
});

// Exercise 9: Get Players Sorted by Rating
app.get('/players/sort-by-rating', (req, res) => {
  db.all('SELECT * FROM players ORDER BY rating DESC', [], (err, players) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ players });
  });
});

// Exercise 10: Get All Tournaments
app.get('/tournaments', (req, res) => {
  db.all('SELECT * FROM tournaments', [], (err, tournaments) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ tournaments });
  });
});

// Exercise 11: Get Tournament by ID
app.get('/tournaments/details/:id', (req, res) => {
  db.get('SELECT * FROM tournaments WHERE id = ?', [req.params.id], (err, tournament) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ tournament });
  });
});

// Exercise 12: Get Tournaments by Game ID
app.get('/tournaments/game/:id', (req, res) => {
  db.all('SELECT * FROM tournaments WHERE gameId = ?', [req.params.id], (err, tournaments) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ tournaments });
  });
});

// Exercise 13: Get Tournaments Sorted by Prize Pool
app.get('/tournaments/sort-by-prize-pool', (req, res) => {
  db.all('SELECT * FROM tournaments ORDER BY prizePool DESC', [], (err, tournaments) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ tournaments });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});