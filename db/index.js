
const sqlite = require('sqlite3').verbose();
const path = require('path')
const dbPath = path.resolve(__dirname, 'db.db')
const db = new sqlite.Database(dbPath);

module.exports= {
  db: db,
}