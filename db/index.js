

const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('db');

module.exports = {
  db:db
}
