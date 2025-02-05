const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database (correct path to database file)
const db = new sqlite3.Database('./BD4_Assignment2/database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Game, Player, and Tournament data to insert into tables
const games = [
  { id: 1, title: 'Valorant', genre: 'FPS', platform: 'PC', rating: 4.5 },
  {
    id: 2,
    title: 'FIFA 22',
    genre: 'Sports',
    platform: 'Console',
    rating: 4.2,
  },
  { id: 3, title: 'Among Us', genre: 'Party', platform: 'Mobile', rating: 4.0 },
];
const players = [
  {
    id: 1,
    name: 'Akash Gupta',
    username: 'AkashGamer',
    platform: 'PC',
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Rohit Kumar',
    username: 'RohitPlayz',
    platform: 'Console',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Sneha Singh',
    username: 'SnehaWins',
    platform: 'Mobile',
    rating: 4.6,
  },
];
const tournaments = [
  {
    id: 1,
    gameId: 1,
    name: 'Valorant Championship',
    date: '2022-12-01',
    prizePool: 5000,
  },
  {
    id: 2,
    gameId: 2,
    name: 'FIFA World Cup',
    date: '2022-11-15',
    prizePool: 3000,
  },
  {
    id: 3,
    gameId: 3,
    name: 'Among Us Showdown',
    date: '2022-10-20',
    prizePool: 2000,
  },
];

db.serialize(() => {
  // Create Games Table
  db.run(
    `CREATE TABLE IF NOT EXISTS games (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      genre TEXT,
      platform TEXT,
      rating REAL
    )`,
    (err) => {
      if (err) {
        console.error('Error creating games table:', err.message);
      } else {
        console.log('Games table created or already exists.');
      }
    }
  );

  // Create Players Table
  db.run(
    `CREATE TABLE IF NOT EXISTS players (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      username TEXT,
      platform TEXT,
      rating REAL
    )`,
    (err) => {
      if (err) {
        console.error('Error creating players table:', err.message);
      } else {
        console.log('Players table created or already exists.');
      }
    }
  );

  // Create Tournaments Table
  db.run(
    `CREATE TABLE IF NOT EXISTS tournaments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      gameId INTEGER,
      name TEXT,
      date TEXT,
      prizePool INTEGER
    )`,
    (err) => {
      if (err) {
        console.error('Error creating tournaments table:', err.message);
      } else {
        console.log('Tournaments table created or already exists.');
      }
    }
  );

  // Insert games into the games table
  const stmt = db.prepare(
    'INSERT INTO games (title, genre, platform, rating) VALUES (?, ?, ?, ?)'
  );
  games.forEach((game) => {
    stmt.run(game.title, game.genre, game.platform, game.rating, (err) => {
      if (err) {
        console.error('Error inserting game:', err.message);
      }
    });
  });
  stmt.finalize();

  // Insert players into the players table
  const stmt2 = db.prepare(
    'INSERT INTO players (name, username, platform, rating) VALUES (?, ?, ?, ?)'
  );
  players.forEach((player) => {
    stmt2.run(
      player.name,
      player.username,
      player.platform,
      player.rating,
      (err) => {
        if (err) {
          console.error('Error inserting player:', err.message);
        }
      }
    );
  });
  stmt2.finalize();

  // Insert tournaments into the tournaments table
  const stmt3 = db.prepare(
    'INSERT INTO tournaments (gameId, name, date, prizePool) VALUES (?, ?, ?, ?)'
  );
  tournaments.forEach((tournament) => {
    stmt3.run(
      tournament.gameId,
      tournament.name,
      tournament.date,
      tournament.prizePool,
      (err) => {
        if (err) {
          console.error('Error inserting tournament:', err.message);
        }
      }
    );
  });
  stmt3.finalize();

  console.log('Inserted 3 games into the database.');
  console.log('Inserted 3 players into the database.');
  console.log('Inserted 3 tournaments into the database.');

  // Close the database connection
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed.');
    }
  });
});
