const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('db.db');
const db1 = new sqlite.Database('db1.db')
module.exports= {
  db: db,
  db1: db1
}